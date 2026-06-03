# notify-lizard-request

Sends an email notification when a row is inserted into `lizard-requests`. Triggered by a Supabase **Database Webhook** on `INSERT`.

If the row's `url` field is a Supabase Storage path (e.g. `lizard-images/sketch.png`), the function downloads the file with the service role key and attaches it to the email via the Resend API.

## Required secrets

Set these in the Supabase project (Dashboard → Edge Functions → Secrets, or CLI):

| Secret | Description |
|--------|-------------|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) |
| `NOTIFY_EMAIL` | Recipient (default: `anna@tulsiandfriends.com`) |
| `FROM_EMAIL` | Verified Resend sender (default: `onboarding@resend.dev` for testing) |

**Do not set these manually** — Supabase injects them into every Edge Function automatically (names containing `SUPABASE` are reserved):

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (used to download reference images from Storage)
- `SUPABASE_ANON_KEY`

```bash
supabase secrets set RESEND_API_KEY=re_xxx
supabase secrets set NOTIFY_EMAIL=anna@tulsiandfriends.com
supabase secrets set FROM_EMAIL=notifications@yourdomain.com
```

## Deploy

```bash
supabase functions deploy notify-lizard-request
```

Function URL (after deploy):

`https://<project-ref>.supabase.co/functions/v1/notify-lizard-request`

## Database webhook (Dashboard)

Webhooks are configured in the Supabase Dashboard, not via SQL migration:

1. **Database** → **Webhooks** → **Create a new hook**
2. **Table**: `lizard-requests`
3. **Events**: `INSERT`
4. **Type**: Supabase Edge Function → `notify-lizard-request`  
   — or **HTTP Request** → POST to the function URL above with `Authorization: Bearer <anon-or-service-key>` if invoking manually

No migration is required for the webhook itself.

## Local test

```bash
supabase functions serve notify-lizard-request --env-file supabase/.env.local
```

```bash
curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/notify-lizard-request' \
  --header 'Authorization: Bearer <anon-key>' \
  --header 'Content-Type: application/json' \
  --data '{
    "type": "INSERT",
    "table": "lizard-requests",
    "record": {
      "name": "Test User",
      "email": "test@example.com",
      "type": "Newt",
      "notes": "Red cape with gold trim",
      "url": "lizard-images/test-sketch.png"
    }
  }'
```
