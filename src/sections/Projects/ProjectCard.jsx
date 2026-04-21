import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import Tag from '../../components/ui/Tag/Tag';
import { useTilt } from '../../hooks/useTilt';
import styles from './Projects.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectCard({ title, description, tags, gradient, links }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      variants={cardVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.cardImg} style={{ background: gradient }} aria-hidden="true" />

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>

          {links && (
            <div className={styles.cardLinks}>
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`View ${title} on GitHub`}
                >
                  <Code2 size={18} />
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`View ${title} live demo`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <p className={styles.cardDesc}>{description}</p>

        <div className={styles.cardTags}>
          {tags.map(tag => (
            <Tag key={tag.label} variant={tag.variant}>
              {tag.label}
            </Tag>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
