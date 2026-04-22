import { useFormStatus } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Send, Loader } from 'lucide-react';
import styles from './Contact.module.css';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();

  return (
    <button type="submit" className={styles.submitBtn} disabled={pending}>
      {pending ? (
        <>
          <Loader size={18} className={styles.spinner} />
          {t('contact.sending')}
        </>
      ) : (
        <>
          {t('contact.send')}
          <Send size={18} />
        </>
      )}
    </button>
  );
}
