import { XCircle } from "lucide-react";

export default function WhatWeDoNotClaim() {
  const items = [
    "It does not guarantee recovered revenue.",
    "It does not guarantee bookings.",
    "It does not replace your receptionist.",
    "It does not diagnose patients or provide medical advice.",
    "It does not assume every missed call would become a paying appointment.",
    "It does not require changing your CRM or booking system before the private fit call.",
  ];

  return (
    <section className="w-full py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border border-gray-100 rounded-2xl p-8 md:p-12 bg-surface">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10">
            What this estimate does not claim
          </h2>

          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
