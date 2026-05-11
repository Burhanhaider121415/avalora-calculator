export default function Objections() {
  const faqs = [
    {
      q: "Will this replace my receptionist?",
      a: "No. Avalora supports your front desk by handling overflow, after-hours calls, and campaign spikes."
    },
    {
      q: "Will it sound robotic?",
      a: "You hear the voice before moving forward. The demo should feel calm, polished, and appropriate for a med spa patient experience."
    },
    {
      q: "Will this disrupt my current system?",
      a: "The goal is no disruption. Avalora either integrates into your existing workflow or creates a clean process around it."
    },
    {
      q: "Is the calculator number guaranteed?",
      a: "No. It is an estimate based on your inputs. It does not include lifetime value, memberships, referrals, or repeat visits unless you choose to model those separately."
    },
    {
      q: "Is this too technical for my team?",
      a: "No. The point is to reduce operational pressure, not create another dashboard your staff has to manage."
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
