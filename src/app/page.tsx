import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import WhatYourResultMeans from "@/components/WhatYourResultMeans";
import Methodology from "@/components/Methodology";
import WhatWeDoNotClaim from "@/components/WhatWeDoNotClaim";
import Explanation from "@/components/Explanation";
import WhatAvaloraRecovers from "@/components/WhatAvaloraRecovers";
import Solution from "@/components/Solution";
import QuickAnswers from "@/components/QuickAnswers";
import Objections from "@/components/Objections";
import DemoForm from "@/components/DemoForm";

export default function Home() {
  // FAQ data for schema markup - matches visible FAQ section exactly
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a booking leak for a med spa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A booking leak is a point where patient interest fails to become a captured booking opportunity. Common leaks include missed calls, slow callbacks, after-hours voicemail, buried DMs, delayed form follow-up, and unclear handoffs to the front desk."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Avalora Leak Check work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Leak Check uses your call volume, missed or overflow rate, days open per week, booking conversion rate, and average appointment value to estimate appointment opportunity that may be at risk."
        }
      },
      {
        "@type": "Question",
        "name": "Is the estimate guaranteed lost revenue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The estimate is not guaranteed lost revenue. It is a directional planning number to help identify where missed calls, slow callbacks, and unfinished booking requests may be creating leakage."
        }
      },
      {
        "@type": "Question",
        "name": "Why do Miami med spas lose booking opportunities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miami med spas often lose booking opportunities when the front desk is helping patients, phones are busy, Spanish-speaking inquiries create friction, DMs wait too long, or after-hours patients keep searching."
        }
      },
      {
        "@type": "Question",
        "name": "Does Avalora replace my receptionist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Avalora supports your front desk by catching missed, overflow, and after-hours inquiries. Your team stays in control."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after I run the Leak Check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can hear the demo, review the handoff, and book a private fit call to see whether Avalora fits your clinic's workflow."
        }
      },
      {
        "@type": "Question",
        "name": "Can Avalora help with Spanish-speaking inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, where configured. Avalora can support English/Spanish intake, collect booking details, and route a bilingual handoff summary to your team."
        }
      },
      {
        "@type": "Question",
        "name": "Does Avalora give medical advice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Avalora does not diagnose, recommend treatments, determine treatment eligibility, or replace clinical judgment. It follows clinic-approved FAQs and escalates sensitive or clinical questions to the clinic team."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Miami Med Spa Booking Leak Check | Avalora",
    "description": "Estimate how much appointment opportunity may be slipping through missed calls, slow callbacks, after-hours inquiries, and unfinished booking requests at your Miami med spa.",
    "url": "https://theavalora.com/leak-check"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Avalora",
        "item": "https://theavalora.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Leak Check",
        "item": "https://theavalora.com/leak-check"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Avalora",
    "url": "https://theavalora.com",
    "email": "burhan@theavalora.com"
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Schema Markup — matches visible page content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <Calculator />
      <WhatYourResultMeans />
      <Methodology />
      <WhatWeDoNotClaim />
      <Explanation />
      <WhatAvaloraRecovers />
      <Solution />
      {/* Report section hidden — report link is not live (§9) */}
      <QuickAnswers />
      <Objections />
      <DemoForm />
      
      {/* Legal Footer — §16 */}
      <footer className="w-full py-12 bg-primary text-white/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            {/* Brand */}
            <div className="space-y-3">
              <a href="https://theavalora.com" className="text-xl font-semibold tracking-wider text-white hover:text-accent transition-colors">
                AVALORA
              </a>
              <p className="text-sm text-white/60 max-w-xs">
                Miami med spa booking support. Catching the leads your team cannot reach fast enough.
              </p>
              <p className="text-sm text-white/60">
                <a href="mailto:burhan@theavalora.com" className="hover:text-accent transition-colors">burhan@theavalora.com</a>
              </p>
            </div>

            {/* Page Links */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white mb-3">Quick Links</p>
              <a href="#calculator" className="block text-sm hover:text-accent transition-colors">Run the Leak Check</a>
              <a href="#demo" className="block text-sm hover:text-accent transition-colors">Book a Private Fit Call</a>
              <a href="https://theavalora.com" className="block text-sm hover:text-accent transition-colors">Avalora Homepage</a>
            </div>

            {/* Legal Links */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white mb-3">Legal</p>
              <a href="/privacy-policy" className="block text-sm hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="block text-sm hover:text-accent transition-colors">Terms of Service</a>
              <a href="/hipaa-security" className="block text-sm hover:text-accent transition-colors">HIPAA &amp; Security</a>
              <a href="/business-associate-agreement" className="block text-sm hover:text-accent transition-colors">BAA</a>
              <a href="/communication-consent" className="block text-sm hover:text-accent transition-colors">Communication Consent</a>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-white/40 leading-relaxed mb-4 max-w-4xl">
              Avalora does not provide medical advice, diagnose patients, recommend treatments, determine treatment eligibility, or replace clinical judgment. Patient communication workflows are configured around clinic-approved FAQs, escalation rules, consent requirements, and handoff preferences.
            </p>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Avalora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
