import { ContactForm } from '../../../components/ContactForm';
import { WizardMark } from '../../../components/WizardMark';
import { ContactFooter } from './ContactFooter';
import { ContactLinkList } from './ContactLinkList';
import { NewsletterSignup } from './NewsletterSignup';
import { SectionBackground } from './SectionBackground';

const EXPLORE_LINKS = [
  'The May coven',
  'Past drops',
  'Reserved & holds',
  'Visit the kiln',
  'Wholesale',
] as const;

const FOLLOW_LINKS = [
  { label: '@tulsi.and.friends', href: 'https://www.instagram.com/tulsi.and.friends' },
  { label: 'Instagram', href: 'https://www.instagram.com/tulsi.and.friends' },
  'Field notes',
  'Studio newsletter',
] as const;

export function ContactSection() {
  return (
    <section className="hp-section hp-section--contact" aria-label="Contact and info">
      <SectionBackground tone="deep" fx="zigzag" />

      <div className="hp-section-inner hp-contact-layout">
        <div className="hp-contact-brand hp-anim hp-d1">
          <WizardMark size={44} primary="var(--marigold)" accent="var(--coral)" />
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 28,
              color: 'var(--bone)',
              letterSpacing: '-0.02em',
            }}
          >
            Powerful Lizards
          </div>
        </div>

        <div className="hp-contact-grid">
          <div className="hp-anim hp-d2">
            <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
              Find us
            </div>
            <address style={{ fontStyle: 'normal' }}>
              <p className="t-body" style={{ color: 'var(--bone)', margin: '0 0 var(--s-2) 0' }}>
                Outer Richmond<br />
                San Francisco, CA 94131<br />
                USA
              </p>
            </address>
            <a
              href="mailto:anna@tulsiandfriends.com"
              style={{
                color: 'var(--marigold)',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
              }}
            >
              anna@tulsiandfriends.com
            </a>
          </div>

          <div className="hp-anim hp-d3">
            <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
              Explore
            </div>
            <ContactLinkList links={EXPLORE_LINKS} interactive />
          </div>

          <div className="hp-anim hp-d4">
            <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
              Follow
            </div>
            <ContactLinkList links={FOLLOW_LINKS} />
          </div>

          <NewsletterSignup />
        </div>

        <div className="hp-anim hp-d6">
          <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
            Get in touch
          </div>
          <ContactForm darkTheme />
        </div>

        <ContactFooter />
      </div>
    </section>
  );
}
