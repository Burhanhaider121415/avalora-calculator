export default function WhatYourResultMeans() {
  return (
    <section className="w-full py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-l-4 border-accent pl-8 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            What your Leak Check result means
          </h2>

          <p className="text-lg text-text-muted leading-relaxed mb-6">
            A higher estimate does not mean your clinic is failing. It usually
            means patient demand is arriving faster than your current call,
            callback, and booking workflow can capture it.
          </p>

          <p className="text-lg text-text-muted leading-relaxed">
            The goal is to identify where the leakage may happen so your team can
            protect more high-intent booking opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
