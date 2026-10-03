'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { trackEvent } from '@/utils/tracking';
type CalendlyWindow = Window & { Calendly?: { initInlineWidget: (options: { url: string; parentElement: HTMLElement; resize: boolean }) => void } };
const scheduler = 'https://calendly.com/burhanwithavalora/30min';
export default function DemoForm() {
  const calendar = useRef<HTMLDivElement>(null);
  const init = () => {
    const element = calendar.current;
    const calendly = (window as CalendlyWindow).Calendly;
    if (!element || !calendly || element.querySelector('iframe')) return;
    calendly.initInlineWidget({ url: `${scheduler}?hide_gdpr_banner=1&hide_event_type_details=1&background_color=faf7ee&text_color=252e32&primary_color=124145`, parentElement: element, resize: true });
  };
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://calendly.com' || event.source !== calendar.current?.querySelector('iframe')?.contentWindow) return;
      if (event.data?.event === 'calendly.event_scheduled') trackEvent('fit_call_booked');
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);
  return <section id="demo" className="section booking-section" aria-labelledby="booking-heading"><div className="wrap booking-layout"><div className="booking-copy"><p className="eyebrow">A conversation, not a commitment</p><h2 id="booking-heading">Want to see where Avalora would fit?</h2><p>We’ll review your current phone, follow-up and booking flow and identify whether there is a recovery gap worth fixing. If there isn’t, we’ll tell you.</p><div className="founder"><Image src="/images/burhan-haider.jpeg" alt="Burhan Haider, founder of Avalora" width={100} height={100} /><div><strong>Burhan Haider</strong><span>Founder, Avalora</span></div></div><a className="button primary" href={scheduler} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('fit_call_clicked')}>Book a Private Fit Call <span aria-hidden="true">↗</span></a><div className="booking-trust"><p>Security &amp; privacy information available before implementation.</p><div><a href="https://theavalora.com/hipaa-security">HIPAA &amp; Security</a><a href="https://theavalora.com/business-associate-agreement">BAA</a><a href="https://theavalora.com/communication-consent">Communication Consent</a></div></div></div><div className="calendar-panel"><div ref={calendar} className="calendar-embed" /><Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" onReady={init} /><p className="calendar-note">Times appear in your timezone. <a href={scheduler} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('fit_call_clicked')}>Open the scheduler separately ↗</a></p></div></div></section>;
}
