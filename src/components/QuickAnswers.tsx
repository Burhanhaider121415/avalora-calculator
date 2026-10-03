import { faqs } from '@/lib/faq';
export default function QuickAnswers() {
  return <section className="section faq-section" aria-labelledby="faq-heading"><div className="wrap narrow"><p className="eyebrow">A few practical answers</p><h2 id="faq-heading">Before your next step.</h2><div className="faq-list">{faqs.map(({ q, a }) => <details className="accordion" key={q}><summary>{q}</summary><div className="details-body"><p>{a}</p></div></details>)}</div></div></section>;
}
