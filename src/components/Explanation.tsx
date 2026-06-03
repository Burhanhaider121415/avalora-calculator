import Image from "next/image";
import { PhoneMissed, Clock, AlertCircle, CalendarX, ClipboardX } from "lucide-react";

export default function Explanation() {
  const cards = [
    {
      title: "Missed calls",
      description: "One missed call during checkout can become a patient who keeps searching.",
      icon: PhoneMissed,
    },
    {
      title: "Slow callbacks",
      description: "A high-intent patient may move on before your team has time to call back.",
      icon: Clock,
    },
    {
      title: "Booking friction",
      description: "A form, DM, or booking request can stall when the next step is not clear.",
      icon: AlertCircle,
    },
    {
      title: "After-hours inquiries",
      description: "Patients who reach voicemail at night may continue looking elsewhere.",
      icon: CalendarX,
    },
    {
      title: "Unconfirmed requests",
      description: "A booking request is not protected until it becomes a clear staff task.",
      icon: ClipboardX,
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              Most booking leaks do not look dramatic.
            </h2>
            <div className="text-lg text-text-muted space-y-4 mb-8">
              <p>They usually look like small moments that happen every week: a call during checkout, a form that waits too long, a DM that gets buried, or an after-hours inquiry that reaches voicemail.</p>
              <div className="w-12 h-px bg-gray-200 my-6"></div>
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
