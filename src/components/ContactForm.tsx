import { useState } from 'react';
import { Button } from './Button';

interface ContactFormProps {
  darkTheme?: boolean;
}

export function ContactForm({ darkTheme = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const inputStyle = darkTheme
    ? {
      background: 'rgba(255,248,232,0.07)',
      color: 'var(--bone)',
      borderColor: 'rgba(255,248,232,0.15)',
    }
    : {};

  const labelStyle = darkTheme
    ? { color: 'rgba(255,248,232,0.55)', fontSize: 12, fontFamily: 'var(--font-sans)', letterSpacing: '0.06em', textTransform: 'uppercase' as const, display: 'block', marginBottom: 6 }
    : { fontSize: 12, fontFamily: 'var(--font-sans)', letterSpacing: '0.06em', textTransform: 'uppercase' as const, display: 'block', marginBottom: 6 };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ color: 'var(--marigold)', fontFamily: 'var(--font-sans)', fontSize: 14 }}>
        We got it — talk soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-3)' }}>
        <div>
          <label htmlFor="cf-name" style={labelStyle}>Name</label>
          <input
            id="cf-name"
            className="input"
            type="text"
            placeholder="Your name"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>Email</label>
          <input
            id="cf-email"
            className="input"
            type="email"
            placeholder="you@your-cave.com"
            required
            style={inputStyle}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" style={labelStyle}>Message <span style={{ opacity: 0.5 }}>(optional)</span></label>
        <textarea
          id="cf-message"
          className="input"
          placeholder="Say hello, ask about a piece, or just tell us what you're hunting for…"
          rows={4}
          style={{ ...inputStyle, width: '100%', resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: 14 }}
        />
      </div>
      <div>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
