import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { useActiveSection } from '../../../hooks/useActiveSection';
import styles from './Navbar.module.css';

const SECTION_IDS = ['hero', 'about', 'projects', 'contact'];

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇲🇽', label: 'ES' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const NAV_LINKS = [
    { label: t('nav.about'),    href: '#about',    id: 'about' },
    { label: t('nav.projects'), href: '#projects', id: 'projects' },
    { label: t('nav.skills'),   href: '#skills',   id: 'skills' },
    { label: t('nav.contact'),  href: '#contact',  id: 'contact', accent: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
  };

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#hero" className={styles.logo} aria-label="Go to top">
          josuex._
        </a>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, href, id, accent }) => (
            <li key={id}>
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

        {/* Language switcher */}
        <div className={styles.langSwitcher} role="group" aria-label="Language selector">
          {LANGUAGES.map(({ code, flag, label }) => (
            <button
              key={code}
              className={clsx(styles.langBtn, i18n.language === code && styles.langActive)}
              onClick={() => switchLang(code)}
              aria-label={`Switch to ${label}`}
              title={label}
            >
              <span className={styles.langFlag}>{flag}</span>
              <span className={styles.langCode}>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
