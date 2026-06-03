"use client";

export default function DemoForm() {
  return (
    <section id="demo" className="w-full py-24 bg-surface border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            Want to see where Avalora fits your call flow?
          </h2>
          <p className="text-lg text-text-muted">
            After your Leak Check, book a private fit call to review where patient inquiries may be slipping and how Avalora could support your front desk.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          data-url="https://calendly.com/burhanwithavalora?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />

        <p className="text-xs text-text-muted text-center mt-6 px-4">
          We use this information to prepare a relevant call flow review. No spam. No guaranteed revenue claims.
        </p>
      </div>
    </section>
  );
}
