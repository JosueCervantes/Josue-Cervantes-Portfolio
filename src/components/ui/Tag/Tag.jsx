import clsx from 'clsx';
import styles from './Tag.module.css';

export default function Tag({ children, variant = 'outline' }) {
  return (
    <span className={clsx(styles.tag, styles[variant])}>
      {children}
    </span>
  );
}
