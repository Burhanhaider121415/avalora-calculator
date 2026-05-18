import Image from "next/image";
import { PhoneMissed, Clock, AlertCircle, CalendarX } from "lucide-react";

export default function Explanation() {
  const cards = [
    {
      title: "Missed calls",
      description: "When your front desk is checking in a patient, the second caller does not wait. They hang up and try the next clinic on their list.",
      icon: PhoneMissed,
    },
    {
      title: "Slow callbacks",
      description: "High-intent leads cool down fast. A callback hours later often reaches someone who has already booked elsewhere.",
      icon: Clock,
    },
    {
      title: "Booking friction",
      description: "Too many steps, unclear next actions, or an unanswered form are enough to lose a patient who was ready to book.",
      icon: AlertCircle,
    },
    {
      title: "After-hours inquiries",
      description: "Callers searching for treatments at night or on weekends reach voicemail. Most do not leave a message — they move on.",
      icon: CalendarX,
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
              <p>They look like one missed call during checkout.</p>
              <p>One website form that waits too long.</p>
              <p>One Instagram DM that gets buried.</p>
              <p>One after-hours inquiry that reaches voicemail.</p>
              <p>One booking request that never gets confirmed.</p>
              <div className="w-12 h-px bg-gray-200 my-6"></div>
              <p>
                In a Miami med spa, the gap between a patient inquiring and a patient booking is often smaller than it looks — and faster to lose than most clinics expect.
              </p>
              <p className="font-semibold text-primary">
                Speed, availability, and follow-through determine who books and who moves on.
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
