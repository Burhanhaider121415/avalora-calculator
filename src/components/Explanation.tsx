import Image from "next/image";
import { Clock, Users, Zap, MessageSquare } from "lucide-react";

export default function Explanation() {
  const cards = [
    {
      title: "After-hours demand",
      description: "Prospects research treatments after work, at night, and on weekends.",
      icon: Clock,
    },
    {
      title: "Front-desk overload",
      description: "Receptionists are handling check-in, checkout, payments, reschedules, questions, walk-ins, and provider coordination.",
      icon: Users,
    },
    {
      title: "Campaign spikes",
      description: "Ads create bursts of calls the front desk cannot always absorb.",
      icon: Zap,
    },
    {
      title: "Bilingual friction",
      description: "In Miami, English/Spanish coverage can affect how quickly high-intent callers get helped.",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              Most revenue leaks do not look dramatic.
            </h2>
            <div className="text-lg text-text-muted space-y-4 mb-8">
              <p>They look like one voicemail after 6 PM.</p>
              <p>One caller who hangs up during checkout.</p>
              <p>One Spanish-speaking patient who does not feel understood.</p>
              <p>One ad lead who waits too long and books somewhere else.</p>
              <div className="w-12 h-px bg-gray-200 my-6"></div>
              <p>
                In a Miami med spa, your receptionist is often managing check-ins, payments, reschedules, treatment questions, provider interruptions, and walk-ins at the same time.
              </p>
              <p className="font-semibold text-primary">
                When two calls arrive at once, one usually loses.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div key={i} className="bg-surface border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{card.title}</h3>
                  <p className="text-sm text-text-muted">{card.description}</p>
                </div>
              ))}
            </div>
            
            <a href="/images/operations_diagram.png" target="_blank" rel="noopener noreferrer" className="block mt-8 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative h-96 md:h-[28rem] hover:shadow-md transition-shadow cursor-zoom-in">
              <Image 
                src="/images/operations_diagram.png" 
                alt="Call routing operational flow" 
                fill 
                className="object-contain bg-surface p-4"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
