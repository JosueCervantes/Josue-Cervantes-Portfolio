import { useFormStatus } from 'react-dom';
import { Send, Loader } from 'lucide-react';
import styles from './Contact.module.css';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.submitBtn} disabled={pending}>
      {pending ? (
        <>
          <Loader size={18} className={styles.spinner} />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send size={18} />
        </>
      )}
    </button>
  );
}
