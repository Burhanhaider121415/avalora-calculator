export default function Objections() {
  const faqs = [
    {
      q: "Will this replace my receptionist?",
      a: "No. Avalora works beside your front desk — not instead of it. It catches the leads and patient requests your team cannot reach fast enough when they are already with a patient, on another call, or off the clock."
    },
    {
      q: "Doesn't my CRM already handle this?",
      a: "Your CRM manages the patients already in your system. Avalora catches the ones who never make it in: missed calls, website forms with no fast follow-up, Instagram DMs that get buried, and after-hours inquiries that hit voicemail. If a lead never gets a reply, it never reaches your CRM."
    },
    {
      q: "Will it sound robotic?",
      a: "You hear the voice before moving forward. The demo is built around a realistic med spa scenario so you can judge whether it feels appropriate for your patients before committing to anything."
    },
    {
      q: "Will it disrupt my current system?",
      a: "The goal is no disruption. Avalora either integrates into your existing workflow or creates a clean process around it. It is designed to add capacity, not complexity."
    },
    {
      q: "Is the calculator number guaranteed?",
      a: "No. It is an estimate based on your inputs — not a revenue guarantee. It does not include lifetime value, memberships, or referrals unless you model those separately. It is a starting point for understanding the scale of what may be slipping through."
    },
    {
      q: "What if we already have reminders or online booking?",
      a: "Reminders help with patients already booked. Online booking helps patients who find it on their own. Avalora handles the gap in between: the calls that go unanswered, the forms that wait too long, the DMs that get buried, and the after-hours leads that reach voicemail and move on."
    }
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
          Built for med spas that care about revenue and reputation.
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
