"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  const benefits = [
    "Answers calls 24/7 in English and Spanish",
    "Captures patient details and service interest",
    "Responds to treatment questions using approved clinic information",
    "Books, reschedules, or routes calls based on your workflow",
    "Calls new form and ad leads immediately",
    "Logs call notes and keeps your team informed",
    "Integrates into your current system, or gives you a clean workflow if you do not have one"
  ];

  return (
    <section className="w-full py-24 bg-background border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
          Protect the calls your team cannot safely handle.
        </h2>
        
        <p className="text-lg text-text-muted mb-6">
          Avalora works beside your front desk as a bilingual voice concierge for overflow, after-hours, and campaign-driven calls.
        </p>
        
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-12 inline-block text-left">
          <p className="font-medium text-primary mb-2 text-center">It is not built to replace your receptionist.</p>
          <p className="text-text-muted text-center">It is built to protect the revenue she cannot capture while she is already taking care of patients.</p>
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
            onClick={() => import('@/utils/tracking').then(m => m.trackEvent('Hear AI Voice Live click'))}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 mb-4 inline-block"
          >
            Hear the AI Voice Live
          </Link>
          <p className="text-sm text-text-muted max-w-md">
            A short private demo using a med spa-style call scenario. No pressure. No free trial. Just hear the experience before deciding anything.
          </p>
        </div>
      </div>
    </section>
  );
}
