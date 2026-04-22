import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../../components/ui/SectionLabel/SectionLabel';
import photo from '../../assets/josuecuatro.jpeg';
import styles from './About.module.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const viewport = { once: true, margin: '-80px' };

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.section} aria-label="About me">
      <div className={styles.container}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionLabel>{t('about.label')}</SectionLabel>
        </motion.div>

        <motion.div
          className={styles.row}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Photo */}
          <div className={styles.photoRing} aria-hidden="true">
            <div className={styles.photoInner}>
              <img src={photo} alt="Josué de Cervantes" className={styles.photo} />
            </div>
          </div>

          {/* Bio */}
          <div className={styles.bio}>
            <h2 className={styles.bioName}>Josué de Cervantes</h2>
            <p className={styles.bioTitle}>{t('about.title')}</p>
            <p className={styles.bioText}>{t('about.bio')}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}