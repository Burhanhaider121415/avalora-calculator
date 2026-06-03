import { CheckCircle2 } from "lucide-react";

export default function WhatAvaloraRecovers() {
  const items = [
    "Missed calls from high-intent patients",
    "After-hours booking inquiries",
    "Slow callback opportunities",
    "Instagram DM and form inquiries where configured",
    "English/Spanish intake gaps",
    "Reschedule and follow-up requests",
    "Clean staff handoffs for booking review",
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
          What Avalora helps recover
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-text-main leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
