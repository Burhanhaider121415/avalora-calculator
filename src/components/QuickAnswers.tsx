export default function QuickAnswers() {
  const items = [
    {
      q: "What is the Avalora Leak Check?",
      a: "The Avalora Leak Check is a diagnostic estimate for Miami med spas. It helps clinic owners see how much appointment opportunity may be at risk when calls are missed, callbacks are delayed, after-hours inquiries reach voicemail, or booking requests are not captured quickly.",
    },
    {
      q: "What does the Leak Check calculate?",
      a: "It uses average daily inbound calls, estimated missed or overflow rate, days open per week, booking conversion rate, and average appointment value to estimate potential appointment opportunity at risk.",
    },
    {
      q: "Is this guaranteed lost revenue?",
      a: "No. The Leak Check does not calculate guaranteed lost revenue. It provides a directional estimate to help identify where booking opportunities may be slipping through the clinic's call and booking flow.",
    },
    {
      q: "Who is this for?",
      a: "This is built for Miami med spa owners, owner-injectors, practice managers, and aesthetic clinic operators who want to reduce missed calls, slow callbacks, after-hours leakage, and front desk overload.",
    },
    {
      q: "What should I do after seeing the result?",
      a: "The next step is to hear how Avalora captures a real med spa inquiry and book a private fit call to see whether Avalora fits your clinic's workflow.",
    },
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
          Quick Answers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {item.q}
              </h3>
              <p className="text-text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
