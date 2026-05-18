"use client";

import Image from "next/image";
import Link from "next/link";

export default function Report() {
  const topics = [
    "Why missed calls turn into competitor bookings within minutes",
    "Why slow callbacks hurt conversion even when the lead seemed interested",
    "Why DMs and website forms get buried and leads go cold",
    "Why booking flow friction loses patients who were ready to commit",
    "Why after-hours voicemail is still a consistent lead leak",
    "How to compare your calculator results against your current front-desk capacity"
  ];

  return (
    <section className="w-full py-24 bg-surface border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/report_mockup.png"
                alt="Miami Med Spa Lead & Booking Recovery Report Mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              Miami Med Spa Lead &amp; Booking Recovery Report
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Why high-intent aesthetic leads disappear through missed calls, slow callbacks, buried DMs, and unfinished booking requests — and what clinics can do about it.
            </p>
            
            <div className="bg-background rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
              <p className="font-medium text-primary mb-4">
                Miami med spas do not lose bookings only because demand is low.
              </p>
              <p className="text-text-muted mb-6">
                They lose bookings when a missed call is not returned fast enough, when a website form sits unanswered, when an Instagram DM gets buried, or when a caller reaches voicemail and decides not to leave a message.
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
                onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Report CTA click'))}
                className="px-6 py-3 bg-surface text-primary border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Read the Lead Recovery Report
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
