import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionLabel from '../../components/ui/SectionLabel/SectionLabel';
import { skills } from '../../data/skills';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const viewport = { once: true, margin: '-80px' };

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About me">
      <div className={styles.container}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionLabel>About Me</SectionLabel>
        </motion.div>

        <motion.div
          className={styles.row}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className={styles.photoFrame} aria-hidden="true">
            <User size={72} color="var(--color-text-muted)" strokeWidth={1.5} />
            <span className={styles.photoLabel}>Photo</span>
          </div>

          <div className={styles.bio}>
            <h2 className={styles.bioName}>Josue Cervantes</h2>
            <p className={styles.bioTitle}>React Developer</p>
            <p className={styles.bioText}>
              I&apos;m a passionate React developer building modern web applications. I specialize
              in creating performant, accessible, and beautiful user interfaces using cutting-edge
              technologies. Always learning, always shipping.
            </p>
          </div>
        </motion.div>

        <motion.h3
          className={styles.skillsTitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Tech Stack
        </motion.h3>

        <motion.div
          className={styles.skillsGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          id="skills"
        >
          {skills.map(({ name, Icon, color }) => (
            <motion.div key={name} className={styles.skillCard} variants={cardVariants}>
              <Icon size={36} color={color} strokeWidth={1.5} aria-hidden="true" />
              <span className={styles.skillName}>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
