import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useActiveSection } from '../../../hooks/useActiveSection';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#about', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact', accent: true },
];

const SECTION_IDS = ['hero', 'about', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#hero" className={styles.logo} aria-label="Go to top">
          JC
        </a>
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, href, id, accent }) => (
            <li key={label}>
              <a
                href={href}
                className={clsx(
                  styles.link,
                  accent && styles.accent,
                  activeSection === id && styles.active
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
