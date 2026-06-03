export default function Methodology() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-background border border-gray-100 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            How this estimate is calculated
          </h2>

          <p className="text-lg text-text-muted leading-relaxed mb-8">
            This estimate uses your average daily inbound calls, estimated missed
            or overflow rate, days open per week, booking conversion rate, and
            average appointment value to estimate appointment opportunity that may
            be at risk when inquiries are not captured quickly.
          </p>

          <div className="w-12 h-px bg-gray-200 mb-6" />

          <p className="text-sm text-text-muted/70 leading-relaxed">
            Actual results depend on call quality, patient intent, response speed,
            booking process, staff capacity, and clinic workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
