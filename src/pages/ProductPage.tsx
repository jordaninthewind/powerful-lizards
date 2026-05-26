import { useState, Fragment } from 'react';
import { useParams, Link } from 'react-router';
import { LIZARDS } from '../data';
import type { Lizard } from '../types';
import { LizardPortrait } from '../components/LizardPortrait';
import { Star4, Droplet, Moon } from '../components/Glyphs';

type CheckoutStep = 'product' | 'shipping' | 'payment' | 'confirmed';

interface FormState {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const liz = LIZARDS.find(l => l.num === productId);
  const [photo, setPhoto] = useState(0);
  const [step, setStep] = useState<CheckoutStep>('product');
  const [form, setForm] = useState<FormState>({ name: '', email: '', address: '', city: '', country: '' });

  if (!liz) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--s-5)', padding: 'var(--s-6)' }}>
        <div className="t-hand" style={{ fontSize: 48 }}>no lizard here.</div>
        <p className="t-body" style={{ color: 'var(--ink-2)', textAlign: 'center', maxWidth: '32ch' }}>
          No lizard with number <strong>№{productId}</strong> was found. They may have gone home already.
        </p>
        <Link to="/" className="btn btn-primary">← Back to the coven</Link>
      </div>
    );
  }

  const swatches = [
    { bgTop: liz.swatch.bgTop, bgBottom: liz.swatch.bgBottom },
    { bgTop: '#FBE3A1', bgBottom: '#F4B82A' },
    { bgTop: '#BCE3E8', bgBottom: '#4FB5C7' },
    { bgTop: '#FAD2DD', bgBottom: '#F0A6BB' },
  ];

  const canPurchase = liz.status === 'available' || liz.status === 'new';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bone)' }}>
        <div className="container" style={{ padding: 'var(--s-3) var(--s-6)', display: 'flex', gap: 'var(--s-3)', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'var(--ink-3)', textDecoration: 'none', fontSize: 14 }}>The coven</Link>
          <span style={{ color: 'var(--ink-3)' }}>·</span>
          <span style={{ fontWeight: 700, fontSize: 14 }}>{liz.name} №{liz.num}</span>
          {step !== 'product' && (
            <>
              <span style={{ color: 'var(--ink-3)' }}>·</span>
              <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>
                {step === 'shipping' && 'Shipping'}
                {step === 'payment' && 'Payment'}
                {step === 'confirmed' && 'Confirmed'}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--s-7) var(--s-6)' }}>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0 }}>

            {/* Left: image stays fixed through all checkout steps */}
            <div style={{ padding: 'var(--s-6)', background: 'var(--paper)', borderRight: '1px solid var(--border)' }}>
              <div style={{
                aspectRatio: '1/1',
                background: `linear-gradient(180deg, ${swatches[photo].bgTop} 0%, ${swatches[photo].bgBottom} 100%)`,
                borderRadius: 'var(--r-md)', overflow: 'hidden', position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)',
              }}>
                <div className={`motif-${liz.motif}`} style={{ position: 'absolute', inset: 0, color: liz.swatch.motif, opacity: 0.4 }} />
                <LizardPortrait hat={liz.hat} accent={liz.accent} robe={liz.robe} pattern={liz.robePattern} />
                <div style={{ position: 'absolute', top: 18, left: 18 }}>
                  <span className={`badge badge-${liz.status}`}>
                    {liz.status === 'available' && 'Available'}
                    {liz.status === 'new' && 'New drop'}
                    {liz.status === 'reserved' && 'On hold'}
                    {liz.status === 'sold' && '✦ adopted'}
                  </span>
                </div>
                <div style={{
                  position: 'absolute', bottom: 18, right: 18,
                  background: 'rgba(255,248,232,0.85)', backdropFilter: 'blur(8px)',
                  padding: '6px 12px', borderRadius: 'var(--r-pill)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Star4 size={14} style={{ color: 'var(--primary)' }} />
                  <span className="t-small" style={{ color: 'var(--ink)', fontWeight: 600 }}>1 of 1</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--s-2)', marginTop: 'var(--s-3)' }}>
                {swatches.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setPhoto(i)}
                    style={{
                      aspectRatio: '1/1', border: 0, cursor: 'pointer',
                      background: `linear-gradient(180deg, ${s.bgTop} 0%, ${s.bgBottom} 100%)`,
                      borderRadius: 'var(--r-sm)',
                      boxShadow: photo === i ? '0 0 0 2.5px var(--ink)' : '0 0 0 1px var(--border)',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: step-based content */}
            <div style={{ padding: 'var(--s-6)' }}>
              {step === 'product' && (
                <ProductInfo liz={liz} canPurchase={canPurchase} onCheckout={() => setStep('shipping')} />
              )}
              {step === 'shipping' && (
                <ShippingStep liz={liz} form={form} setForm={setForm} onBack={() => setStep('product')} onContinue={() => setStep('payment')} />
              )}
              {step === 'payment' && (
                <PaymentStep liz={liz} onBack={() => setStep('shipping')} onConfirm={() => setStep('confirmed')} />
              )}
              {step === 'confirmed' && (
                <ConfirmedStep liz={liz} form={form} />
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step: product detail ──────────────────────────────────────────────────────

function ProductInfo({ liz, canPurchase, onCheckout }: { liz: Lizard; canPurchase: boolean; onCheckout: () => void }) {
  return (
    <>
      <div className="t-mono" style={{ color: 'var(--ink-3)' }}>№{liz.num} · the may coven</div>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)',
        lineHeight: 0.95, margin: 'var(--s-2) 0 var(--s-4) 0',
        letterSpacing: '-0.02em', fontWeight: 700,
      }}>
        {liz.name}
      </h1>
      {liz.hand && (
        <div className="t-hand" style={{ color: 'var(--ink-2)', marginBottom: 'var(--s-4)' }}>
          "{liz.hand}."
        </div>
      )}
      <p className="t-body-lg" style={{ margin: '0 0 var(--s-5) 0', color: 'var(--ink-2)' }}>
        {liz.traits}. Hand-pinched and one of a kind — when they find their home, they're gone for good.
      </p>

      <dl style={{ margin: '0 0 var(--s-5) 0', display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '6px 24px' }}>
        {([
          ['Height', '6–7 cm'],
          ['Weight', '70–85 g'],
          ['Body', 'red earthenware'],
          ['Fired', 'cone 06, oxidation'],
          ['Edition', '1 of 1'],
          ['Born', 'May 2026'],
        ] as [string, string][]).map(([k, v]) => (
          <Fragment key={k}>
            <dt className="t-small" style={{ color: 'var(--ink-3)', fontWeight: 600 }}>{k}</dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>{v}</dd>
          </Fragment>
        ))}
      </dl>

      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        gap: 'var(--s-3)', marginBottom: 'var(--s-4)',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 700, letterSpacing: '-0.02em' }}>€{liz.price}</div>
        <div className="t-small" style={{ textAlign: 'right', color: 'var(--ink-2)' }}>
          Free shipping over €80 ·<br />ships in 5–7 days, wrapped in newsprint
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--s-3)' }}>
        {canPurchase ? (
          <button className="btn btn-primary btn-lg" style={{ flex: 1, justifyContent: 'center' }} onClick={onCheckout}>
            Take {liz.name} home →
          </button>
        ) : (
          <button className="btn btn-soft btn-lg" style={{ flex: 1, justifyContent: 'center' }} disabled>
            {liz.status === 'sold' ? '✦ gone home' : 'On hold — join the waitlist'}
          </button>
        )}
        <button className="btn btn-ghost btn-icon" aria-label="save">
          <Droplet size={22} />
        </button>
      </div>

      <div style={{
        marginTop: 'var(--s-5)', padding: 'var(--s-4)',
        background: 'var(--rose-soft)', borderRadius: 'var(--r-md)',
        display: 'flex', gap: 'var(--s-3)', alignItems: 'flex-start',
      }}>
        <Moon size={22} style={{ color: '#7B2C49', flexShrink: 0, marginTop: 2 }} />
        <div className="t-small" style={{ color: '#7B2C49' }}>
          <b>Care:</b> wipe with a soft, damp cloth. Don't bathe them. They're wizards, not teacups.
        </div>
      </div>
    </>
  );
}

// ── Step: shipping details ────────────────────────────────────────────────────

function ShippingStep({ liz, form, setForm, onBack, onContinue }: {
  liz: Lizard;
  form: FormState;
  setForm: (f: FormState) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const valid = form.name && form.email && form.address && form.city && form.country;

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-5)' }}>
        <button onClick={onBack} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, color: 'var(--ink-3)', fontSize: 14 }}>
          ← back
        </button>
        <CheckoutProgress step={1} />
      </div>

      <h2 className="t-h3" style={{ margin: '0 0 var(--s-5) 0' }}>Where shall we send {liz.name}?</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-3)' }}>
          <Field label="Your name" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Wilhelmina Fern" />
          <Field label="Email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} placeholder="you@wherever.com" />
        </div>
        <Field label="Street address" value={form.address} onChange={v => setForm({ ...form, address: v })} placeholder="14 Cobblestone Way" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-3)' }}>
          <Field label="City" value={form.city} onChange={v => setForm({ ...form, city: v })} placeholder="Amsterdam" />
          <Field label="Country" value={form.country} onChange={v => setForm({ ...form, country: v })} placeholder="Netherlands" />
        </div>
      </div>

      <div style={{ marginTop: 'var(--s-5)', padding: 'var(--s-4)', background: 'var(--paper)', borderRadius: 'var(--r-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700 }}>{liz.name} №{liz.num}</div>
          <div className="t-small">1 of 1 · wrapped in newsprint</div>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700 }}>€{liz.price}</div>
      </div>

      <button
        className="btn btn-primary btn-lg"
        style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--s-4)' }}
        disabled={!valid}
        onClick={onContinue}
      >
        Continue to payment →
      </button>
    </>
  );
}

// ── Step: payment (stubbed) ───────────────────────────────────────────────────

function PaymentStep({ liz, onBack, onConfirm }: { liz: Lizard; onBack: () => void; onConfirm: () => void }) {
  const total = liz.price + 6;

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-5)' }}>
        <button onClick={onBack} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, color: 'var(--ink-3)', fontSize: 14 }}>
          ← back
        </button>
        <CheckoutProgress step={2} />
      </div>

      <h2 className="t-h3" style={{ margin: '0 0 var(--s-4) 0' }}>Payment</h2>

      <div style={{
        padding: 'var(--s-4)', marginBottom: 'var(--s-4)',
        background: 'var(--marigold-soft)', borderRadius: 'var(--r-md)',
        border: '1px solid rgba(122,90,18,0.18)',
      }}>
        <div className="t-small" style={{ color: '#7A5A12', fontWeight: 600 }}>
          ✦ Payment processor coming soon
        </div>
        <div className="t-small" style={{ color: '#7A5A12', marginTop: 4 }}>
          This is a stub — card fields below are placeholders. Connect Stripe or your preferred processor to go live.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
        <Field label="Card number" value="" onChange={() => {}} placeholder="4242 4242 4242 4242" disabled />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-3)' }}>
          <Field label="Expiry" value="" onChange={() => {}} placeholder="MM / YY" disabled />
          <Field label="CVC" value="" onChange={() => {}} placeholder="···" disabled />
        </div>
        <Field label="Name on card" value="" onChange={() => {}} placeholder="Wilhelmina Fern" disabled />
      </div>

      <div style={{
        marginTop: 'var(--s-4)', padding: 'var(--s-4)',
        background: 'var(--paper)', borderRadius: 'var(--r-md)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--s-2)' }}>
          <span className="t-small">{liz.name} №{liz.num}</span>
          <span style={{ fontWeight: 600 }}>€{liz.price}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 'var(--s-3)', borderBottom: '1px solid var(--border)', marginBottom: 'var(--s-3)' }}>
          <span className="t-small">Shipping · newsprint wrap</span>
          <span style={{ fontWeight: 600 }}>€6</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>Total</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700 }}>€{total}</span>
        </div>
      </div>

      <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--s-4)' }} onClick={onConfirm}>
        Place order · €{total} →
      </button>
      <div className="t-small" style={{ textAlign: 'center', marginTop: 'var(--s-3)', color: 'var(--ink-3)' }}>
        Secured by your future payment processor ✦
      </div>
    </>
  );
}

// ── Step: confirmed ───────────────────────────────────────────────────────────

function ConfirmedStep({ liz, form }: { liz: Lizard; form: FormState }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, textAlign: 'center', gap: 'var(--s-4)' }}>
      <div style={{ fontSize: 48 }}>✦</div>
      <h2 className="t-h2" style={{ margin: 0 }}>
        {liz.name}'s going home.
      </h2>
      <p className="t-body-lg" style={{ color: 'var(--ink-2)', maxWidth: '30ch' }}>
        {form.email ? <>A confirmation will be sent to <strong>{form.email}</strong>.</> : 'Your order is confirmed.'}
        {' '}They'll be wrapped in newsprint and on their way within 5–7 days.
      </p>
      <div style={{ padding: 'var(--s-3) var(--s-5)', background: 'var(--paper)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
        <div className="t-mono" style={{ color: 'var(--ink-3)' }}>Order · {liz.name} №{liz.num} · 1 of 1</div>
      </div>
      <Link to="/" className="btn btn-soft">← Back to the coven</Link>
    </div>
  );
}

// ── Shared: checkout progress indicator ─────────────────────────────────────

function CheckoutProgress({ step }: { step: 1 | 2 }) {
  const steps = ['Shipping', 'Payment'];
  return (
    <div style={{ display: 'flex', gap: 'var(--s-2)', alignItems: 'center' }}>
      {steps.map((label, i) => (
        <Fragment key={label}>
          <span style={{
            fontSize: 12, fontWeight: 700, color: i + 1 === step ? 'var(--ink)' : 'var(--ink-3)',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            {label}
          </span>
          {i < steps.length - 1 && <span style={{ color: 'var(--ink-3)', fontSize: 10 }}>›</span>}
        </Fragment>
      ))}
    </div>
  );
}

// ── Shared: form field ────────────────────────────────────────────────────────

function Field({ label, value, onChange, placeholder, type = 'text', disabled = false }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="t-small" style={{ fontWeight: 700, color: 'var(--ink-2)' }}>{label}</span>
      <input
        className="input"
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        style={disabled ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}
      />
    </label>
  );
}
