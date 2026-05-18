"use client";

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
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer card shadow / depth */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                {/* Browser chrome bar */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                  <div className="ml-3 flex-1 bg-white rounded border border-gray-200 px-3 py-1 text-[10px] text-gray-400 font-mono truncate">
                    avalora.ai/report
                  </div>
                </div>

                {/* Report page */}
                <div className="bg-white p-6">
                  {/* Report header */}
                  <div className="mb-5">
                    <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-1">Miami Med Spa</p>
                    <h3 className="text-sm font-bold text-[#1a2550] leading-tight mb-1">
                      Lead &amp; Booking Recovery Report
                    </h3>
                    <p className="text-[9px] text-gray-400 leading-relaxed">
                      Why high-intent aesthetic leads disappear — and what clinics can do about it.
                    </p>
                    <div className="w-8 h-px bg-[#c9a84c] mt-3" />
                  </div>

                  {/* Metric bars */}
                  <div className="space-y-2.5 mb-5">
                    {[
                      { label: "Missed Calls", pct: 88, note: "High volume gap" },
                      { label: "Slow Callbacks", pct: 72, note: "Lead cools fast" },
                      { label: "Buried DMs & Forms", pct: 58, note: "Unread inquiries" },
                      { label: "Booking Friction", pct: 64, note: "Drop-off mid-flow" },
                      { label: "After-Hours Inquiries", pct: 79, note: "Voicemail dead-end" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-[9px] font-semibold text-[#1a2550]">{item.label}</span>
                          <span className="text-[8px] text-gray-400">{item.note}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: `${item.pct}%`,
                              background: i % 2 === 0
                                ? "linear-gradient(90deg, #1a2550, #2d4080)"
                                : "linear-gradient(90deg, #c9a84c, #e0bf75)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer callout */}
                  <div className="bg-[#1a2550]/5 border border-[#1a2550]/10 rounded-lg px-3 py-2">
                    <p className="text-[8px] text-[#1a2550] font-semibold mb-0.5">Key finding</p>
                    <p className="text-[8px] text-gray-500 leading-relaxed">
                      Most missed leads do not look like lost revenue. They look like unanswered calls and unread messages.
                    </p>
                  </div>

                  {/* Bottom branding */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-[8px] font-semibold tracking-widest uppercase text-[#1a2550]">Avalora</span>
                    <span className="text-[8px] text-gray-300">For Miami Med Spas · 2025</span>
                  </div>
                </div>
              </div>

              {/* Subtle reflection / ground shadow */}
              <div className="mx-6 h-2 bg-gradient-to-b from-gray-200 to-transparent rounded-b-xl opacity-40" />
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
