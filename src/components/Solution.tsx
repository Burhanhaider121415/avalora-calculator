"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  const benefits = [
    "Recovers missed and after-hours calls before leads go cold",
    "Calls or texts new leads quickly after a missed call or form submission",
    "Captures patient details and service interest",
    "Collects preferred booking time and routes the request to staff or CRM",
    "Books, routes, or prepares the request based on your workflow",
    "Logs call notes and keeps your team informed",
    "Supports approved FAQs only — escalates questions that need a human"
  ];

  return (
    <section className="w-full py-24 bg-background border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
          Catch the leads your team cannot reach fast enough.
        </h2>
        
        <p className="text-lg text-text-muted mb-6">
          Avalora works beside your front desk to recover missed calls, after-hours inquiries, slow callbacks, and booking requests before they disappear.
        </p>
        
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-12 inline-block text-left">
          <p className="font-medium text-primary mb-2 text-center">It is not built to replace your receptionist.</p>
          <p className="text-text-muted text-center">It is built to catch the leads your team cannot reach fast enough while they are already taking care of patients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-text-main">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center">
          <Link 
            href="#demo" 
            onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Secondary CTA click'))}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 mb-4 inline-block"
          >
            Request a Private Demo
          </Link>
          <p className="text-sm text-text-muted max-w-md">
            A private demo built around a realistic med spa scenario. No pressure. No guaranteed revenue claims. Just see how Avalora would work for your clinic.
          </p>
        </div>
      </div>
    </section>
  );
}
