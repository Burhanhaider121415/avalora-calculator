import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Explanation from '@/components/Explanation';
import Solution from '@/components/Solution';
import WhatAvaloraRecovers from '@/components/WhatAvaloraRecovers';
import Methodology from '@/components/Methodology';
import QuickAnswers from '@/components/QuickAnswers';
import DemoForm from '@/components/DemoForm';
import Brand from '@/components/Brand';
import { faqs } from '@/lib/faq';

const legal = [['Privacy Policy', 'privacy-policy'], ['Terms of Service', 'terms-of-service'], ['HIPAA & Security', 'hipaa-security'], ['BAA', 'business-associate-agreement'], ['Communication Consent', 'communication-consent']];
export default function Home() {
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', name: 'Avalora Leak Check | Booking Recovery Estimate for Miami Med Spas', url: 'https://leakcheck.theavalora.com' },
      { '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Avalora', item: 'https://theavalora.com' }, { '@type': 'ListItem', position: 2, name: 'Leak Check', item: 'https://leakcheck.theavalora.com' }] },
    ],
  };
  return <><header className="site-header"><div className="wrap header-inner"><Brand /><a className="back-link" href="https://theavalora.com">Back to Avalora <span aria-hidden="true">↗</span></a></div></header>
    <main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><Hero /><Calculator /><Explanation /><Solution /><WhatAvaloraRecovers /><Methodology /><QuickAnswers /><DemoForm /></main>
    <footer className="site-footer"><div className="wrap"><div className="footer-top"><div><Brand /><p>Booking recovery and patient communication<br />for Miami med spas.</p><a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></div><nav aria-label="Footer"><a href="https://theavalora.com">Main Avalora site</a><a href="https://theavalora.com/contact">Contact</a>{legal.map(([label, path]) => <a key={path} href={`https://theavalora.com/${path}`}>{label}</a>)}</nav></div><div className="footer-bottom"><p>Avalora does not provide medical advice, diagnose patients, recommend treatments, or replace clinical judgment. Communication workflows follow clinic-approved information, escalation rules and consent requirements.</p><p>© {new Date().getFullYear()} Avalora. All rights reserved.</p></div></div></footer></>;
}
