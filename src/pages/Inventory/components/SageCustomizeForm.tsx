import { useState, type FormEvent } from 'react';
import { Button } from '../../../components/Button';

const SPECIES_OPTIONS = ['Newt', 'Bearded Dragon', 'Lizard'] as const;

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const attachment = data.get('reference');

    const payload = {
      name: data.get('name'),
      email: data.get('email') || undefined,
      species: data.get('species'),
      notes: data.get('notes'),
      reference:
        attachment instanceof File && attachment.size > 0
          ? { name: attachment.name, size: attachment.size, type: attachment.type }
          : undefined,
    };

    console.log('Sage customization request:', payload);
    if (attachment instanceof File && attachment.size > 0) {
      const withFile = new FormData(form);
      console.log('Sage customization FormData (includes reference file):', [...withFile.entries()]);
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="inv-form" role="status">
        <p className="inv-form-success">
          Thanks — I&apos;ve got your notes! I&apos;ll get back to you within 24 hours with a
          mockup.
        </p>
      </div>
    );
  }

  return (
    <form className="inv-form" onSubmit={handleSubmit} encType="multipart/form-data">
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
              className="input"
              type="text"
              name="name"
              placeholder="Who should I address?"
              required
              autoComplete="name"
            />
          </div>

          <div className="inv-form-field">
            <label htmlFor="sage-email" style={labelStyle}>
              Email <span className="inv-form-optional">(optional)</span>
            </label>
            <input
              id="sage-email"
              className="input"
              type="email"
              name="email"
              placeholder="you@your-cave.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="inv-form-field">
          <label htmlFor="sage-species" style={labelStyle}>
            Protector type <span className="inv-form-required">(required)</span>
          </label>
          <select id="sage-species" className="input inv-form-select" name="species" required defaultValue="">
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
          />
          <p className="inv-form-hint">
            Annotated sketch or screenshot from the species images above — PNG or JPG works great.
          </p>
        </div>

        <div className="inv-form-actions">
          <Button type="submit">Send request</Button>
        </div>
      </fieldset>
    </form>
  );
}
