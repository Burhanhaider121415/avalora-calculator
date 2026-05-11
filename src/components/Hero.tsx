import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.png"
          alt="Luxury med spa reception"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 py-24 flex flex-col items-center text-center max-w-4xl">
        <span className="inline-block py-1 px-3 rounded-full bg-surface shadow-sm border border-accent/20 text-text-muted text-sm font-medium tracking-wide mb-6">
          For Miami med spas with 1–2 locations, busy phones, and a front desk under pressure
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-6">
          See how much appointment revenue may be sitting in missed calls.
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Answer five simple questions and estimate the appointment revenue your med spa may have at risk from missed calls, after-hours inquiries, slow response, and campaign spikes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="#calculator" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
          >
            Calculate My Revenue Leak
          </Link>
          <Link 
            href="#demo" 
            className="w-full sm:w-auto px-8 py-4 bg-surface text-primary border border-primary/10 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            Hear the AI Voice Live
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-text-muted/80 flex items-center gap-2">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Private estimate. No guaranteed revenue claim. Takes under 60 seconds.
        </p>
      </div>
    </section>
  );
}
