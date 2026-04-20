import ContactForm from '../ContactForm';
import { PageHeader } from '../shared';
import { T, type Lang } from '../../lib/translations';

interface ContactPageProps {
  lang: Lang;
}

export default function ContactPage({ lang }: ContactPageProps) {
  const contact = T[lang].contact;

  return (
    <div>
      <PageHeader title={contact.title} subtitle={contact.subtitle} color="#00bcd4" emoji="📬" />
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '64px 24px' }}>
        <ContactForm copy={contact} />
      </div>
    </div>
  );
}
