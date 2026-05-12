"use client";

import { useState, useMemo } from "react";
import { Info } from "lucide-react";
import { clsx } from "clsx";

export default function Calculator() {
  const [dailyCalls, setDailyCalls] = useState<number | "">(30);
  const [missedRate, setMissedRate] = useState<number | "">(25);
  const [apptValue, setApptValue] = useState<number | "">(600);
  const [daysOpen, setDaysOpen] = useState<number | "">(5);
  const [bookingRate, setBookingRate] = useState<number | "">(30);
  
  const [scenario, setScenario] = useState<"conservative" | "realistic" | "high">("realistic");

  const results = useMemo(() => {
    const calls = Number(dailyCalls) || 0;
    const missed = Number(missedRate) || 0;
    const value = Number(apptValue) || 0;
    const days = Number(daysOpen) || 0;
    const conversion = Number(bookingRate) || 0;

    let adjustedMissedRate = missed;
    let adjustedConversion = conversion;

    if (scenario === "conservative") {
      adjustedMissedRate = Math.max(5, missed - 10);
      adjustedConversion = Math.max(5, conversion - 10);
    } else if (scenario === "high") {
      adjustedMissedRate = Math.min(100, missed + 15);
      adjustedConversion = Math.min(100, conversion + 10);
    }

    const missedPerDay = calls * (adjustedMissedRate / 100);
    const missedPerWeek = missedPerDay * days;
    const lostBookingsPerWeek = missedPerWeek * (adjustedConversion / 100);
    const weeklyRevenueAtRisk = lostBookingsPerWeek * value;
    const monthlyRevenueAtRisk = weeklyRevenueAtRisk * 4.33;
    const annualRevenueAtRisk = weeklyRevenueAtRisk * 52;
    
    const starterFee = 699;
    const breakEvenBookings = value > 0 ? (starterFee / value) : 0;

    return {
      missedPerWeek: Math.round(missedPerWeek * 10) / 10,
      lostBookingsPerWeek: Math.round(lostBookingsPerWeek * 10) / 10,
      monthlyRevenueAtRisk: Math.round(monthlyRevenueAtRisk),
      annualRevenueAtRisk: Math.round(annualRevenueAtRisk),
      breakEvenBookings: Math.round(breakEvenBookings * 10) / 10,
    };
  }, [dailyCalls, missedRate, apptValue, daysOpen, bookingRate, scenario]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="w-full py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            Run your missed-call estimate
          </h2>
          <div className="text-lg text-text-muted max-w-2xl mx-auto space-y-4">
            <p className="font-medium text-primary">Your front desk is not the problem.</p>
            <p>The problem is what happens when calls arrive while your team is checking in patients, answering treatment questions, handling payments, or managing walk-ins.</p>
            <p className="text-sm">Use your real numbers below.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Inputs Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-primary mb-2">Estimate your front-desk revenue leak</h3>
            <p className="text-sm text-text-muted mb-8">Use your best estimate. You can adjust the numbers later.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Average daily inbound calls</label>
                <p className="text-xs text-text-muted mb-2">Use a normal business day. If you are unsure, start with 30. Most calls come from booking questions, treatment interest, reschedules, or follow-ups.</p>
                <input 
                  type="number" 
                  value={dailyCalls} 
                  onChange={(e) => setDailyCalls(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Estimated missed / overflow call rate (%)</label>
                <p className="text-xs text-text-muted mb-2">Include calls missed after-hours, while lines are busy, or when a second caller comes in.</p>
                <input 
                  type="number" 
                  value={missedRate} 
                  onChange={(e) => setMissedRate(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Average appointment value ($)</label>
                <p className="text-xs text-text-muted mb-2">Use the average value of a booked appointment, not lifetime value. Use your average Botox, filler, laser, facial, IV, or consult value.</p>
                <input 
                  type="number" 
                  value={apptValue} 
                  onChange={(e) => setApptValue(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">Days open per week</label>
                  <p className="text-xs text-text-muted mb-2">How many days your team actively handles calls.</p>
                  <input 
                    type="number" 
                    value={daysOpen} 
                    onChange={(e) => setDaysOpen(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">Booking conversion rate (%)</label>
                  <p className="text-xs text-text-muted mb-2">Not every caller books. This keeps the estimate realistic.</p>
                  <input 
                    type="number" 
                    value={bookingRate} 
                    onChange={(e) => setBookingRate(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="w-full lg:w-1/2 bg-primary rounded-2xl shadow-xl text-white p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            
            <div className="relative z-10 flex-grow">
              <div className="flex bg-white/10 p-1 rounded-lg mb-8 text-sm font-medium w-full overflow-hidden">
                <button 
                  onClick={() => {
                    import('@/utils/tracking').then(m => m.trackEvent('Calculate button click', { scenario: 'conservative' }));
                    setScenario("conservative");
                  }}
                  className={clsx("flex-1 py-2 px-3 rounded-md transition-colors", scenario === "conservative" ? "bg-white text-primary shadow-sm" : "hover:bg-white/5 text-white/80")}
                  title="Lower leakage assumptions."
                >
                  Conservative
                </button>
                <button 
                  onClick={() => {
                    import('@/utils/tracking').then(m => m.trackEvent('Calculate button click', { scenario: 'realistic' }));
                    setScenario("realistic");
                  }}
                  className={clsx("flex-1 py-2 px-3 rounded-md transition-colors", scenario === "realistic" ? "bg-white text-primary shadow-sm" : "hover:bg-white/5 text-white/80")}
                  title="A practical middle estimate."
                >
                  Realistic
                </button>
                <button 
                  onClick={() => {
                    import('@/utils/tracking').then(m => m.trackEvent('Calculate button click', { scenario: 'high' }));
                    setScenario("high");
                  }}
                  className={clsx("flex-1 py-2 px-3 rounded-md transition-colors", scenario === "high" ? "bg-white text-primary shadow-sm" : "hover:bg-white/5 text-white/80")}
                  title="Useful during ad campaigns, peak hours, and seasonal demand."
                >
                  High leakage
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-white/80 text-lg font-medium mb-2">Estimated annual revenue at risk</h3>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  {formatCurrency(results.annualRevenueAtRisk)}
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white/80 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p>
                      Based on your inputs, this estimates the value of appointment opportunities that may not convert when calls are missed, delayed, sent to voicemail, or handled after the patient has already contacted another clinic.
                      <span className="block mt-2 font-semibold text-white">This is not guaranteed lost revenue.</span>
                      It is a diagnostic estimate to help you understand the possible cost of call leakage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-light/50 p-4 rounded-lg border border-white/5">
                  <p className="text-2xl font-semibold mb-1">{results.missedPerWeek}</p>
                  <p className="text-sm font-medium text-accent">Missed calls per week</p>
                  <p className="text-xs text-white/60 mt-1">Potential call opportunities not answered live.</p>
                </div>
                <div className="bg-primary-light/50 p-4 rounded-lg border border-white/5">
                  <p className="text-2xl font-semibold mb-1">{results.lostBookingsPerWeek * 4.33 > 1000 ? Math.round(results.lostBookingsPerWeek * 4.33) : (Math.round(results.lostBookingsPerWeek * 4.33 * 10) / 10)}</p>
                  <p className="text-sm font-medium text-accent">Potential bookings at risk /mo</p>
                  <p className="text-xs text-white/60 mt-1">Estimated missed calls multiplied by your conversion rate.</p>
                </div>
                <div className="bg-primary-light/50 p-4 rounded-lg border border-white/5">
                  <p className="text-2xl font-semibold mb-1">{formatCurrency(results.monthlyRevenueAtRisk)}</p>
                  <p className="text-sm font-medium text-accent">Monthly revenue at risk</p>
                  <p className="text-xs text-white/60 mt-1">A monthly view of the same estimate.</p>
                </div>
                <div className="bg-primary-light/50 p-4 rounded-lg border border-white/5">
                  <p className="text-2xl font-semibold mb-1">{results.breakEvenBookings}</p>
                  <p className="text-sm font-medium text-accent">Recovered bookings needed to break even</p>
                  <p className="text-xs text-white/60 mt-1">How many additional booked appointments may cover Avalora's monthly fee.</p>
                </div>
              </div>
              
              <p className="text-xs text-white/50 text-center px-4">
                For many med spas, the question is not whether every missed call would have booked. The question is whether recovering even a small number of high-intent calls each month changes the math.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
