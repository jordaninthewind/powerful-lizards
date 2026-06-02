interface AboutArtistContentProps {
  animated?: boolean;
}

export function AboutArtistContent({ animated = false }: AboutArtistContentProps) {
  return (
    <>
      <div className={`hp-about-img-col${animated ? ' hp-anim hp-anim--from-left hp-d2' : ''}`}>
        <div className="hp-studio-frame">
          <img
            src="/assets/about-artist.jpeg"
            alt="Ceramicist holding lizard figurines outdoors"
          />
          <div className="hp-studio-overlay" />
        </div>
      </div>

      <div className="hp-about-text">

        <h2
          className={`t-h1${animated ? ' hp-anim hp-d2' : ''}`}
          style={{ color: 'var(--bone)', margin: '0 0 var(--s-5) 0' }}
        >
          Ceramics by
          <br />
          Anna Brown
        </h2>

        <p
          className={`t-body-lg${animated ? ' hp-anim hp-d3' : ''}`}
          style={{ color: 'rgba(255,248,232,0.75)', marginBottom: 'var(--s-3)', maxWidth: '48ch' }}
        >
          Salamander sages, noble newts, frogs with way too many babies.
        </p>

        <p
          className={`t-body-lg${animated ? ' hp-anim hp-d3' : ''}`}
          style={{ color: 'rgba(255,248,232,0.75)', marginBottom: 'var(--s-4)', maxWidth: '48ch' }}
        >
          These are just some of the weird creatures that ceramicist Anna Brown creates, because at
          the end of the day, what the world really needs is protection in the form of wizard lizards.
        </p>

        <p
          className={`hp-get-in-touch${animated ? ' hp-anim hp-d4' : ''}`}
        >
          Get in touch!
        </p>

        <div className={`hp-about-contact${animated ? ' hp-anim hp-d5' : ''}`}>
          <a
            href="mailto:anna@tulsiandfriends.com"
            className="hp-about-contact-link"
            aria-label="Email Anna at anna@tulsiandfriends.com"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 6.48a2 2 0 0 1-2.06 0L2 7" />
            </svg>
            anna@tulsiandfriends.com
          </a>

          <a
            href="https://www.instagram.com/tulsi.and.friends"
            target="_blank"
            rel="noopener noreferrer"
            className="hp-about-contact-link"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            @tulsi.and.friends
          </a>
        </div>

      </div>
    </>
  );
}
