import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../../components/ui/SectionLabel/SectionLabel';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewport = { once: true, margin: '-80px' };

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.section} aria-label="Featured projects">
      <div className={styles.container}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionLabel>{t('projects.label')}</SectionLabel>
        </motion.div>

        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.p
          className={styles.desc}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t('projects.desc')}
        </motion.p>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
              description={t(`projects.items.${project.descKey}`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
