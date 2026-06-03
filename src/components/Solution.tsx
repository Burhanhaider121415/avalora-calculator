"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  const benefits = [
    "Missed-call recovery",
    "After-hours capture",
    "English/Spanish intake",
    "Booking request handoff",
    "Human escalation",
    "Clinic-approved FAQs",
    "CRM-light handoff where configured"
  ];

  return (
    <section className="w-full py-24 bg-background border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
          Catch the leads your team cannot reach fast enough.
        </h2>
        
        <p className="text-lg text-text-muted mb-6 max-w-3xl mx-auto">
          Avalora supports your front desk by capturing missed calls, after-hours inquiries, English/Spanish patient requests, and booking intent — then routing clean details back to your team.
        </p>
        
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-12 inline-block text-left">
          <p className="font-medium text-primary mb-2 text-center">It is not built to replace your receptionist.</p>
          <p className="text-text-muted text-center">It is built to catch the patient inquiries your team cannot reach fast enough while they are already taking care of patients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-text-main">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#demo" 
            onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Book Fit Call click'))}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 inline-block"
          >
            Book a Private Fit Call
          </Link>
          <Link 
            href="#demo" 
            onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Hear Demo click'))}
            className="px-8 py-4 bg-surface text-primary border border-primary/10 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm inline-block"
          >
            Hear the Demo
          </Link>
        </div>
        
        <p className="text-sm text-text-muted max-w-md mx-auto mt-4">
          A private fit call reviews your call flow, front desk pressure, bilingual needs, and where booking opportunities may be slipping.
        </p>
      </div>
    </section>
  );
}
