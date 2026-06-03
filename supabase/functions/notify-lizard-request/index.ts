import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "anna@tulsiandfriends.com";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "onboarding@resend.dev";
const STORAGE_BUCKET = "lizard-images";

type LizardRequestRecord = {
  name?: string | null;
  email?: string | null;
  type?: string | null;
  notes?: string | null;
  url?: string | null;
};

type DatabaseWebhookPayload = {
  type?: string;
  table?: string;
  record?: LizardRequestRecord;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function parseStorageLocation(url: string): { bucket: string; path: string } | null {
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return null;
  }

  if (trimmed.startsWith(`${STORAGE_BUCKET}/`)) {
    return { bucket: STORAGE_BUCKET, path: trimmed.slice(STORAGE_BUCKET.length + 1) };
  }

  if (trimmed.includes("/")) {
    const [bucket, ...rest] = trimmed.split("/");
    if (bucket && rest.length > 0) {
      return { bucket, path: rest.join("/") };
    }
  }

  return { bucket: STORAGE_BUCKET, path: trimmed };
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

async function downloadAttachment(
  supabase: ReturnType<typeof createClient>,
  url: string | null | undefined,
): Promise<{ filename: string; content: string } | null> {
  if (!url) {
    return null;
  }

  const location = parseStorageLocation(url);
  if (!location) {
    console.warn("Skipping attachment: url is not a storage path", url);
    return null;
  }

  const { data, error } = await supabase.storage.from(location.bucket).download(location.path);
  if (error || !data) {
    console.warn("Failed to download reference image:", error?.message ?? "unknown error");
    return null;
  }

  const filename = location.path.split("/").pop() ?? "reference-image";
  const content = arrayBufferToBase64(await data.arrayBuffer());

  return { filename, content };
}

function buildEmailHtml(record: LizardRequestRecord): string {
  const name = escapeHtml(record.name?.trim() || "Unknown");
  const email = escapeHtml(record.email?.trim() || "Not provided");
  const type = escapeHtml(record.type?.trim() || "Not specified");
  const notes = escapeHtml(record.notes?.trim() || "No notes provided");
  const referenceUrl = record.url?.trim();

  const referenceBlock = referenceUrl
    ? `<p><strong>Reference image:</strong> <a href="${escapeHtml(referenceUrl)}">${escapeHtml(referenceUrl)}</a></p>`
    : "<p><strong>Reference image:</strong> None attached</p>";

  return `
    <h2>New custom protector request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Protector type:</strong> ${type}</p>
    <p><strong>Cape, designs &amp; details:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${notes}</pre>
    ${referenceBlock}
  `.trim();
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error("Missing required environment variables");
    return new Response("Server misconfigured", { status: 500 });
  }

  let payload: DatabaseWebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON payload", { status: 400 });
  }

  const record = payload.record;
  if (!record) {
    return new Response("Missing record in webhook payload", { status: 400 });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const attachment = await downloadAttachment(supabase, record.url);

  const subjectName = record.name?.trim() || "Someone";
  const emailBody: Record<string, unknown> = {
    from: FROM_EMAIL,
    to: [NOTIFY_EMAIL],
    subject: `Custom protector request from ${subjectName}`,
    html: buildEmailHtml(record),
  };

  if (attachment) {
    emailBody.attachments = [attachment];
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailBody),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("Resend API error:", resendResponse.status, errorText);
    return new Response("Failed to send notification email", { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true, attachmentIncluded: Boolean(attachment) }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
