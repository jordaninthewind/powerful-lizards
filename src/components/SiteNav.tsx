import { Link, NavLink } from 'react-router';

import './SiteNav.css';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  {
    to: '/build-a-powerful-lizard',
    label: 'Build a Powerful Lizard',
    shortLabel: 'Build a Lizard',
  },
] as const;

export function SiteNav() {
  return (
    <header className="site-nav">
      <nav className="site-nav__inner" aria-label="Main">
        <Link to="/" className="site-nav__brand" aria-label="Tulsi and Friends home">
          <span className="site-nav__title">Tulsi and Friends</span>
        </Link>
        <ul className="site-nav__links">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' site-nav__link--active' : ''}${'shortLabel' in link ? ' site-nav__link--build' : ''
                  }`
                }
              >
                {'shortLabel' in link ? (
                  <>
                    <span className="site-nav__link-long">{link.label}</span>
                    <span className="site-nav__link-short">{link.shortLabel}</span>
                  </>
                ) : (
                  link.label
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
