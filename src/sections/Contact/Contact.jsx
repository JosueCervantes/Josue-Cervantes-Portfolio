import { useActionState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Code2, Briefcase, MessageCircle, Mail } from 'lucide-react';
import SectionLabel from '../../components/ui/SectionLabel/SectionLabel';
import SubmitButton from './SubmitButton';
import { socialLinks } from '../../data/social';
import styles from './Contact.module.css';

const ICON_MAP = { github: Code2, linkedin: Briefcase, twitter: MessageCircle, mail: Mail };

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewport = { once: true, margin: '-80px' };

async function sendMessageAction(_prevState, formData) {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return { ok: false, errorKey: 'contact.error_fields' };
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { from_name: name, from_email: email, message, reply_to: email },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
    );
    return { ok: true };
  } catch {
    return { ok: false, errorKey: 'contact.error_send' };
  }
}

export default function Contact() {
  const { t } = useTranslation();
  const [state, formAction] = useActionState(sendMessageAction, null);

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionLabel>{t('contact.label')}</SectionLabel>
        </motion.div>

        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          className={styles.desc}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t('contact.desc')}
        </motion.p>

        <motion.div
          className={styles.row}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Contact form — uses React 19 form Actions */}
          <form action={formAction} className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>{t('contact.name')}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t('contact.name_placeholder')}
                className={styles.input}
                required
                autoComplete="name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>{t('contact.email')}</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className={styles.input}
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t('contact.message_placeholder')}
                className={styles.textarea}
                required
                rows={5}
              />
            </div>

            {state?.ok && (
              <p className={styles.successMsg} role="status">
                {t('contact.success')}
              </p>
            )}
            {state?.errorKey && (
              <p className={styles.errorMsg} role="alert">
                {t(state.errorKey)}
              </p>
            )}

            <SubmitButton />
          </form>

          {/* Social links */}
          <div className={styles.social}>
            <h3 className={styles.socialTitle}>{t('contact.social_title')}</h3>
            <ul className={styles.socialList} role="list">
              {socialLinks.map(({ label, icon, href, text }) => {
                const Icon = ICON_MAP[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      className={styles.socialLink}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                    >
                      {Icon && <Icon size={22} aria-hidden="true" />}
                      <span>{text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
