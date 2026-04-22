import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button/Button';
import styles from './Hero.module.css';

const TECH_BADGES = [
  { label: 'R', name: 'React', color: 'var(--color-react)' },
  { label: 'F', name: 'Flask', color: 'var(--color-flask)' },
  { label: 'P', name: 'Python', color: 'var(--color-node)' },
  { label: 'JS', name: 'JavaScript', color: 'var(--color-javascript)' },
  { label: 'N', name: 'Node.js', color: 'var(--color-node)' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className={styles.section} aria-label="Introduction">
      {/* Decorative gradient blobs */}
      <div className={styles.blobLeft} aria-hidden="true" />
      <div className={styles.blobRight} aria-hidden="true" />
      <div className={styles.blobTop} aria-hidden="true" />

      {/* Floating code symbols */}
      <span className={`${styles.codeSymbol} ${styles.codeLeft}`} aria-hidden="true">
        &lt;/&gt;
      </span>
      <span className={`${styles.codeSymbol} ${styles.codeRight}`} aria-hidden="true">
        {'{ }'}
      </span>
      <span className={`${styles.codeSymbol} ${styles.codeBracket}`} aria-hidden="true">
        ( )
      </span>

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability pill */}
        <motion.div className={styles.pill} variants={itemVariants}>
          <span className={styles.pillDot} />
          <span>{t('hero.available')}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 className={styles.headline} variants={itemVariants}>
          {t('hero.headline')}
        </motion.h1>

        <motion.p className={styles.subhead} variants={itemVariants}>
          {t('hero.subhead')}
        </motion.p>

        <motion.p className={styles.description} variants={itemVariants}>
          {t('hero.description').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className={styles.btnRow} variants={itemVariants}>
          <Button variant="primary" as="a" href="#projects">
            {t('hero.cta_primary')} <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" as="a" href="#contact">
            {t('hero.cta_secondary')}
          </Button>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div className={styles.techStack} variants={itemVariants}>
          <span className={styles.techLabel}>{t('hero.tech_label')}</span>
          <div className={styles.techIcons}>
            {TECH_BADGES.map(({ label, name, color }) => (
              <div key={name} className={styles.techBadge} title={name} aria-label={name}>
                <span style={{ color }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className={styles.scrollIndicator} variants={itemVariants} aria-hidden="true">
          <span>{t('hero.scroll')}</span>
          <span className={styles.scrollArrow}>↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
