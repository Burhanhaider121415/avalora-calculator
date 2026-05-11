"use client";

import { useState } from "react";

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit form');
        // Handle error visually if needed
      }
    } catch (error) {
      console.error('An error occurred', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="w-full py-24 bg-surface border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            Want to hear what this could sound like for your spa?
          </h2>
          <p className="text-lg text-text-muted">
            Request a private voice demo built around a realistic med spa call: treatment inquiry, pricing question, appointment request, reschedule, or after-hours lead.
          </p>
        </div>

        {submitted ? (
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Request Received</h3>
            <p className="text-text-muted">
              Thank you. We will be in touch shortly to schedule your private voice demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="name">Name</label>
                <input required id="name" name="name" type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="clinic">Clinic name</label>
                <input required id="clinic" name="clinic" type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="phone">Phone</label>
                <input required id="phone" name="phone" type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="email">Email</label>
                <input required id="email" name="email" type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="website">Website</label>
                <input id="website" name="website" type="url" placeholder="https://" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="crm">Current booking system <span className="text-text-muted font-normal">(Optional)</span></label>
                <input id="crm" name="crm" type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="volume">Average daily call volume <span className="text-text-muted font-normal">(Optional)</span></label>
                <input id="volume" name="volume" type="number" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="time">Best time to call</label>
                <input id="time" name="time" type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
              </div>
            </div>
            <div className="flex items-start gap-3 mt-6">
              <input 
                required 
                id="consent" 
                name="consent" 
                type="checkbox" 
                className="mt-1 w-4 h-4 text-primary bg-gray-50 border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="consent" className="text-sm text-text-muted">
                I agree that Avalora may call or text me about my demo request.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full mt-6 px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Call Me With a Private Voice Demo"}
            </button>
            
            <p className="text-xs text-text-muted text-center mt-4 px-4">
              We will use this information to prepare a relevant demo and follow up with you. No spam. No pressure. No guaranteed revenue claims.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
