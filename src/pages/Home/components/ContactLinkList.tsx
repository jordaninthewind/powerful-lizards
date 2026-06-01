interface ContactLink {
  label: string;
  href: string;
}

interface ContactLinkListProps {
  links: readonly (string | ContactLink)[];
  interactive?: boolean;
}

function toLink(item: string | ContactLink): ContactLink {
  return typeof item === 'string' ? { label: item, href: '#' } : item;
}

export function ContactLinkList({ links, interactive = false }: ContactLinkListProps) {
  const linkStyle = {
    color: 'var(--bone)',
    textDecoration: 'none' as const,
    opacity: 0.8,
    fontSize: 15,
    ...(interactive ? { transition: 'opacity 180ms var(--ease)' } : {}),
  };

  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
      {links.map(item => {
        const { label, href } = toLink(item);
        return (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={linkStyle}
              onMouseEnter={
                interactive ? e => ((e.target as HTMLElement).style.opacity = '1') : undefined
              }
              onMouseLeave={
                interactive ? e => ((e.target as HTMLElement).style.opacity = '0.8') : undefined
              }
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
