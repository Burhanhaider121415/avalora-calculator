"use client";

import Image from "next/image";
import Link from "next/link";

export default function Report() {
  const topics = [
    "Why after-hours callers are often high-intent",
    "Why voicemail is not the same as lead capture",
    "Why one receptionist cannot absorb every peak-hour call",
    "Why bilingual response matters in Miami",
    "Why human-first during business hours + AI overflow after-hours is the better model",
    "How to compare the calculator number against your current front-desk capacity"
  ];

  return (
    <section className="w-full py-24 bg-surface border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/report_mockup.png"
                alt="Miami Med Spa After-Hours Revenue Report Mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              Miami Med Spa After-Hours Revenue Report
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Why high-intent aesthetic leads disappear after 6 PM, during peak hours, and after ad campaigns — and what clinics can do about it.
            </p>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
              <p className="font-medium text-primary mb-4">
                Miami med spas do not lose bookings only because demand is low.
              </p>
              <p className="text-text-muted mb-6">
                They lose bookings when demand arrives at the wrong time: after work, during lunch-hour spikes, while the front desk is busy, or right after a campaign creates more calls than the team can answer live.
              </p>
              
              <h4 className="font-semibold text-primary mb-3">What the report covers:</h4>
              <ul className="space-y-2 mb-6">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="text-accent mt-0.5">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#demo" 
                onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Report button click'))}
                className="px-6 py-3 bg-surface text-primary border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Read the Miami After-Hours Report
              </Link>
              <Link 
                href="#calculator" 
                onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Calculate button click'))}
                className="px-6 py-3 bg-primary/5 text-primary border border-primary/10 rounded-lg font-medium hover:bg-primary/10 transition-colors text-center"
              >
                Run My Number First
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
