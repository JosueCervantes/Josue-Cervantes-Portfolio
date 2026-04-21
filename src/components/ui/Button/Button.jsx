import clsx from 'clsx';
import styles from './Button.module.css';

export default function Button({ variant = 'primary', as: Tag = 'button', children, ...props }) {
  return (
    <Tag className={clsx(styles.btn, styles[variant])} {...props}>
      {children}
    </Tag>
  );
}
