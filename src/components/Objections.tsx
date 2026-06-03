export default function Objections() {
  const faqs = [
    {
      q: "What is a booking leak for a med spa?",
      a: "A booking leak is a point where patient interest fails to become a captured booking opportunity. Common leaks include missed calls, slow callbacks, after-hours voicemail, buried DMs, delayed form follow-up, and unclear handoffs to the front desk."
    },
    {
      q: "How does the Avalora Leak Check work?",
      a: "The Leak Check uses your call volume, missed or overflow rate, days open per week, booking conversion rate, and average appointment value to estimate appointment opportunity that may be at risk."
    },
    {
      q: "Is the estimate guaranteed lost revenue?",
      a: "No. The estimate is not guaranteed lost revenue. It is a directional planning number to help identify where missed calls, slow callbacks, and unfinished booking requests may be creating leakage."
    },
    {
      q: "Why do Miami med spas lose booking opportunities?",
      a: "Miami med spas often lose booking opportunities when the front desk is helping patients, phones are busy, Spanish-speaking inquiries create friction, DMs wait too long, or after-hours patients keep searching."
    },
    {
      q: "Does Avalora replace my receptionist?",
      a: "No. Avalora supports your front desk by catching missed, overflow, and after-hours inquiries. Your team stays in control."
    },
    {
      q: "What happens after I run the Leak Check?",
      a: "You can hear the demo, review the handoff, and book a private fit call to see whether Avalora fits your clinic's workflow."
    },
    {
      q: "Can Avalora help with Spanish-speaking inquiries?",
      a: "Yes, where configured. Avalora can support English/Spanish intake, collect booking details, and route a bilingual handoff summary to your team."
    },
    {
      q: "Does Avalora give medical advice?",
      a: "No. Avalora does not diagnose, recommend treatments, determine treatment eligibility, or replace clinical judgment. It follows clinic-approved FAQs and escalates sensitive or clinical questions to the clinic team."
    },
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
          Built for med spas that care about booking flow, patient experience, and reputation.
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg bg-surface overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-primary">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-muted mt-3 group-open:animate-fadeIn px-6 pb-6 pt-0">
                  {faq.a}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
