import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../../components/ui/SectionLabel/SectionLabel';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 22, scale: 0.9 },
  visible:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.32, ease: 'easeOut' } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewport = { once: true, margin: '-80px' };

export default function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className={styles.section} aria-label="Tech skills">
      <div className={styles.container}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionLabel>{t('skills.label')}</SectionLabel>
        </motion.div>

        <motion.h2
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
        >
          {t('skills.title')}
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          className={styles.tabs}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.2 }}
        >
          {skillCategories.map(cat => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(cat.id)}
                style={{ '--tab-color': cat.color }}
                aria-pressed={isActive}
              >
                <cat.TabIcon size={15} aria-hidden="true" />
                <span>{t(`skills.categories.${cat.id}`)}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.grid}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
          >
            {activeCategory.skills.map(({ name, Icon, color }) => (
              <motion.div
                key={name}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.05 }}
                style={{ '--skill-color': color }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className={styles.skillName}>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}