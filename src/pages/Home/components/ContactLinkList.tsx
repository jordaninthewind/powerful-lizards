interface ContactLinkListProps {
  links: readonly string[];
  interactive?: boolean;
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
      {links.map(label => (
        <li key={label}>
          <a
            href="#"
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
      ))}
    </ul>
  );
}
