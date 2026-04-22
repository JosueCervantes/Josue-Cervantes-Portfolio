import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import Tag from '../../components/ui/Tag/Tag';
import { useTilt } from '../../hooks/useTilt';
import styles from './Projects.module.css';

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Diagonal placement for the 3 floating background icons
const iconPositions = [
  { left: '14%',  top: '52%', size: 80, opacity: 0.18, rotate: -14 },
  { left: '50%',  top: '36%', size: 96, opacity: 0.11, rotate:   5 },
  { left: '82%',  top: '60%', size: 70, opacity: 0.16, rotate:  20 },
];

export default function ProjectCard({ title, description, tags, gradient, links, image, coverIcons }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      variants={cardVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Visual header */}
      <div className={styles.cardImg} style={{ background: gradient }} aria-hidden="true">
        {image ? (
          <img src={image} alt={title} className={styles.cardImgPhoto} />
        ) : coverIcons ? (
          <div className={styles.cardImgIcons}>
            {coverIcons.map((Icon, i) => {
              const pos = iconPositions[i] ?? iconPositions[0];
              return (
                <Icon
                  key={i}
                  size={pos.size}
                  strokeWidth={1}
                  className={styles.coverIcon}
                  style={{
                    left:      pos.left,
                    top:       pos.top,
                    opacity:   pos.opacity,
                    transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
                  }}
                />
              );
            })}
          </div>
        ) : null}
      </div>

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