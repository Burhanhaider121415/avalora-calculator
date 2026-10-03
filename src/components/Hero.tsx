'use client';
import Image from 'next/image';
import { trackEvent } from '@/utils/tracking';
export default function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-copy"><p className="eyebrow">Private 60-second estimate for Miami med spas</p>
      <h1 id="hero-heading">See where patient demand may be slipping through your front desk.</h1>
      <p className="hero-body">Use a few clinic numbers to estimate the booking opportunity exposed when calls go unanswered, follow-up is delayed, or inquiries arrive after hours.</p>
      <div className="actions"><a className="button primary" href="#calculator">Run the Leak Check <span aria-hidden="true">↗</span></a><a className="secondary-link" href="#demo" onClick={() => trackEvent('fit_call_clicked')}>Book a Private Fit Call</a></div>
      <p className="trust-note">Private estimate. No guaranteed revenue claim. Takes about 60 seconds.</p>
    </div>
    <div className="hero-photo"><Image src="/images/reception.png" alt="Warm, modern med-spa reception with a front desk and seating" fill sizes="(max-width: 767px) 100vw, 45vw" preload /><span className="photo-caption">Built around the clinic’s operating world.</span></div>
  </section>;
}
