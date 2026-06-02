import { useState } from 'react';

import { Button } from '../../../components/Button';
import { supabase } from '../../../supabase/supabase';

type Species = typeof SPECIES_OPTIONS[number];

const SPECIES_OPTIONS = ['Newt', 'Bearded Dragon', 'Lizard'];

const labelStyle = {
  fontSize: 12,
  fontFamily: 'var(--font-sans)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: 6,
  color: 'var(--ink-2)',
};

export function SageCustomizeForm() {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [type, setType] = useState<Species>('');
  const [notes, setNotes] = useState<string>('');
  const [reference, setReference] = useState<File | null>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let referenceUrl: string | null = null;

    if (reference instanceof File && reference.size > 0) {
      const info = await supabase.storage.from('lizard-images').upload(reference.name, reference);
      referenceUrl = info.data?.fullPath ?? null;
    }

    const payload = {
      name,
      email,
      type,
      notes,
      url: referenceUrl,
    };

    await supabase.from('lizard-requests').insert(payload);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="inv-form" role="status">
        <p className="inv-form-success">
          Thanks — I&apos;ve got your notes! I&apos;ll get back to you within 24 hours with confirmation of your order.
        </p>
      </div>
    );
  }

  return (
    <form className="inv-form" encType="multipart/form-data">
      <fieldset className="inv-form-fieldset">
        <legend className="inv-form-legend">Build your protector!</legend>

        <div className="inv-form-instructions">
          <p className="inv-form-instructions-lead">Here&apos;s how we&apos;ll shape your protector:</p>
          <ol className="inv-form-instructions-list">
            <li>
              Choose your protector type: <strong>newt</strong>, <strong>bearded dragon</strong>, or{' '}
              <strong>lizard</strong>.
            </li>
            <li>
              Describe in detail — <strong>cape colors</strong>, <strong>designs</strong> you want,
              and anything else that helps me picture your piece.
            </li>
            <li>
              <strong>I&apos;ll get back to you within 24 hours with a mockup!</strong>
            </li>
            <li>
              Prefer email? Reach me directly at{' '}
              <a href="mailto:anna@tulsiandfriends.com">anna@tulsiandfriends.com</a>.
            </li>
            <li>
              You can <strong>download one of the images below</strong>, add your notes to it, take
              a screenshot, and <strong>attach it to this form</strong>.
            </li>
          </ol>
        </div>

        <div className="inv-form-grid">
          <div className="inv-form-field">
            <label htmlFor="sage-name" style={labelStyle}>
              Your name <span className="inv-form-required">(required)</span>
            </label>
            <input
              id="sage-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              type="text"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>

          <div className="inv-form-field">
            <label htmlFor="sage-email" style={labelStyle}>
              Email
            </label>
            <input
              id="sage-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
              name="email"
              placeholder="you@wizardsandfriends.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="inv-form-field">
          <label htmlFor="sage-species" style={labelStyle}>
            Protector type <span className="inv-form-required">(required)</span>
          </label>
          <select id="sage-species" className="input inv-form-select" name="species" required defaultValue={type} onChange={(e) => setType(e.target.value)}>
            <option value="" disabled>
              Choose newt, bearded dragon, or lizard…
            </option>
            {SPECIES_OPTIONS.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>

        <div className="inv-form-field">
          <label htmlFor="sage-notes" style={labelStyle}>
            Cape, designs &amp; details <span className="inv-form-required">(required)</span>
          </label>
          <textarea
            id="sage-notes"
            className="input inv-form-textarea"
            name="notes"
            rows={6}
            required
            placeholder="Cape colors, patterns or symbols you want, hat or props, glaze ideas, size notes — and anything else that helps me picture your piece!"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="inv-form-field">
          <label htmlFor="sage-reference" style={labelStyle}>
            Reference screenshot <span className="inv-form-optional">(optional)</span>
          </label>
          <input
            id="sage-reference"
            className="inv-form-file"
            type="file"
            name="reference"
            accept="image/*"
            onChange={(e) => setReference(e.target.files?.[0] ?? null)}
          />
          <p className="inv-form-hint">
            Annotated sketch or screenshot from the species images above — PNG or JPG works great.
          </p>
        </div>

        <div className="inv-form-actions">
          <Button type="submit" disabled={!name || !email || !type} onClick={handleSubmit}>Send request</Button>
        </div>
      </fieldset>
    </form>
  );
}
