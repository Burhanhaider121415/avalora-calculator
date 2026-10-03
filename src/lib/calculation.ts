export type Scenario = 'conservative' | 'realistic' | 'high';
export type ClinicInputs = { dailyCalls: number; missedRate: number; apptValue: number; daysOpen: number; bookingRate: number };

// Owner-approved scenario bounds (2026-10-03), not universal clinic benchmarks.
export const presets: Record<Scenario, { missedRate: number; bookingRate: number }> = {
  conservative: { missedRate: 20, bookingRate: 15 },
  realistic: { missedRate: 30, bookingRate: 20 },
  high: { missedRate: 35, bookingRate: 30 },
};
export function calculate(inputs: ClinicInputs) {
  const missedPerWeek = inputs.dailyCalls * (inputs.missedRate / 100) * inputs.daysOpen;
  const bookingsPerWeek = missedPerWeek * (inputs.bookingRate / 100);
  return {
    missedPerWeek: Math.round(missedPerWeek * 10) / 10,
    lostBookingsPerMonth: Math.round(bookingsPerWeek * 4.33 * 10) / 10,
    monthlyOpportunityAtRisk: Math.round(bookingsPerWeek * inputs.apptValue * 4.33),
  };
}
