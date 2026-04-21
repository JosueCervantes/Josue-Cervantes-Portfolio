import { useActionState } from 'react';
import { motion } from 'framer-motion';
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
    return { ok: false, error: 'Please fill in all fields.' };
  }

  // TODO: replace with your actual API / EmailJS / Resend call
  await new Promise(resolve => setTimeout(resolve, 900));

  return { ok: true };
}

export default function Contact() {
  const [state, formAction] = useActionState(sendMessageAction, null);

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionLabel>Get In Touch</SectionLabel>
        </motion.div>

        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          className={styles.desc}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Have a project in mind? I&apos;d love to hear about it.
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
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={styles.input}
                required
                autoComplete="name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
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
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                className={styles.textarea}
                required
                rows={5}
              />
            </div>

            {state?.ok && (
              <p className={styles.successMsg} role="status">
                ✓ Message sent successfully!
              </p>
            )}
            {state?.error && (
              <p className={styles.errorMsg} role="alert">
                {state.error}
              </p>
            )}

            <SubmitButton />
          </form>

          {/* Social links */}
          <div className={styles.social}>
            <h3 className={styles.socialTitle}>Or connect with me</h3>
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
