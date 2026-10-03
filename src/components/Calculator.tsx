'use client';
import { useRef, useState } from 'react';
import { presets, calculate, type ClinicInputs, type Scenario } from '@/lib/calculation';
import { trackEvent } from '@/utils/tracking';

const scenarios: { key: Scenario; label: string }[] = [{ key: 'conservative', label: 'Conservative' }, { key: 'realistic', label: 'Working estimate' }, { key: 'high', label: 'Upper range' }];
const currency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
type Values = Record<keyof ClinicInputs, string>;
const initial: Values = { dailyCalls: '', apptValue: '', daysOpen: '', missedRate: '30', bookingRate: '20' };

export default function Calculator() {
  const [values, setValues] = useState<Values>(initial);
  const [scenario, setScenario] = useState<Scenario | 'custom'>('realistic');
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [submitted, setSubmitted] = useState(false);
  const started = useRef(false);
  const advanced = useRef<HTMLDetailsElement>(null);
  const resultPanel = useRef<HTMLDivElement>(null);
  const valid = Object.entries(values).every(([key, value]) => {
    const n = Number(value);
    if (!value.trim() || !Number.isFinite(n)) return false;
    if (key === 'daysOpen') return n >= 1 && n <= 7 && Number.isInteger(n);
    if (key === 'missedRate' || key === 'bookingRate') return n >= 0 && n <= 100;
    return n > 0 && n <= 1000000000;
  });
  const inputs = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, Number(value)])) as ClinicInputs;
  const result = submitted && valid ? calculate(inputs) : null;
  const update = (key: keyof Values, value: string) => {
    setValues(old => ({ ...old, [key]: value }));
    setErrors(old => ({ ...old, [key]: undefined }));
    if (key === 'missedRate' || key === 'bookingRate') { setScenario('custom'); trackEvent('assumptions_adjusted', { field: key }); }
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const invalid: Partial<Values> = {};
    for (const key of Object.keys(values) as (keyof Values)[]) {
      const n = Number(values[key]);
      if (values[key].trim() === '' || !Number.isFinite(n)) invalid[key] = 'Enter a number to continue.';
      else if (key === 'daysOpen' && (n < 1 || n > 7 || !Number.isInteger(n))) invalid[key] = 'Use a whole number from 1 to 7.';
      else if ((key === 'missedRate' || key === 'bookingRate') && (n < 0 || n > 100)) invalid[key] = 'Use a percentage from 0 to 100.';
      else if (n < 0 || ((key === 'dailyCalls' || key === 'apptValue') && n === 0)) invalid[key] = 'Enter a number greater than zero.';
      else if (n > 1000000000) invalid[key] = 'Check this number; use a value below 1 billion.';
    }
    setErrors(invalid);
    const first = Object.keys(invalid)[0];
    if (first) {
      if ((first === 'missedRate' || first === 'bookingRate') && advanced.current) advanced.current.open = true;
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitted(true);
    trackEvent('leak_check_completed', { scenario });
    resultPanel.current?.focus({ preventScroll: true });
    resultPanel.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
  };
  const field = (key: keyof Values, label: string, helper: string, min: number, max?: number, step = 'any') => <div className="field" key={key}>
    <label htmlFor={key}>{label}</label><p id={`${key}-help`}>{helper}</p>
    <input id={key} name={key} type="number" inputMode="decimal" value={values[key]} min={min} max={max} step={step} onChange={e => update(key, e.target.value)} aria-describedby={`${key}-help${errors[key] ? ` ${key}-error` : ''}`} aria-invalid={!!errors[key]} />
    {errors[key] && <p className="field-error" id={`${key}-error`}>{errors[key]}</p>}
  </div>;
  return <section id="calculator" className="section calculator-section" aria-labelledby="calculator-heading"><div className="wrap">
    <div className="section-heading"><p className="eyebrow">Avalora Leak Check</p><h2 id="calculator-heading">A clearer view of your booking opportunity.</h2></div>
    <div className="calculator-grid"><form className="input-panel" onSubmit={submit} onFocus={() => { if (!started.current) { trackEvent('leak_check_started'); started.current = true; } }} noValidate>
      <h3>Your clinic numbers</h3><p className="panel-intro">Use a typical week. You can refine the numbers as you go.</p>
      {field('dailyCalls', 'Calls your clinic receives in a typical day', 'A rough average is fine. If available, check your recent phone report.', 0)}
      {field('apptValue', 'Average appointment value ($)', 'Use your average Botox, filler, laser, facial, IV, or consult value.', 0)}
      {field('daysOpen', 'Days open per week', 'How many days your clinic handles calls.', 1, 7, '1')}
      <div className="assumptions-intro"><h4>Assumptions</h4><p>Using {scenario === 'custom' ? 'your clinic’s assumptions' : scenario === 'realistic' ? 'industry working assumptions' : scenario === 'conservative' ? 'Conservative scenario bounds' : 'Upper Range scenario bounds'}: {values.missedRate || '—'}% missed/overflow and {values.bookingRate || '—'}% booking opportunity. Adjust if you know your clinic’s actual numbers.</p>
</div>
      <details ref={advanced} className="advanced"><summary>Adjust assumptions</summary><div className="details-body">
        {field('missedRate', 'Missed / overflow rate (%)', 'Include unanswered calls while staff are busy or the clinic is closed.', 0, 100)}
        {field('bookingRate', 'Booking opportunity rate (%)', 'Estimated share of missed calls that may have resulted in a booking if reached. We use 20% when your actual rate is unknown.', 0, 100)}
        <p>Your rates are used directly. Selecting a scenario loads that scenario’s two rates.</p>
      </div></details>
      {Object.values(errors).some(Boolean) && <p className="field-error" role="alert">Check the highlighted fields before calculating.</p>}
      <button className="button primary full" type="submit">Run the Leak Check <span aria-hidden="true">→</span></button>
    </form>
    <div className="result-panel" id="results-card" ref={resultPanel} tabIndex={-1} aria-label="Leak Check result">
      <p className="result-eyebrow">Your monthly view</p><div className="scenario-selector" role="group" aria-label="Estimate scenario">{scenarios.map(s => <button key={s.key} type="button" aria-pressed={scenario === s.key} onClick={() => { setScenario(s.key); setValues(old => ({ ...old, missedRate: String(presets[s.key].missedRate), bookingRate: String(presets[s.key].bookingRate) })); setErrors(old => ({ ...old, missedRate: undefined, bookingRate: undefined })); trackEvent('assumptions_adjusted', { scenario: s.key }); }}>{s.label}</button>)}</div>
      {scenario === 'custom' && <p className="custom-note">Custom assumptions selected</p>}
      <div aria-live="polite" aria-atomic="true">{result ? <><h3>Estimated monthly booking value exposed</h3><p className="estimate-value">{currency(result.monthlyOpportunityAtRisk)}<span> / month</span></p><p className="result-explanation">This is an estimate of potential booking value exposed to missed or delayed communication—not guaranteed lost revenue.</p>
        <dl className="result-metrics"><div><dt>Missed calls / week</dt><dd>{new Intl.NumberFormat('en-US').format(result.missedPerWeek)}</dd></div><div><dt>Potential bookings exposed / month</dt><dd>{new Intl.NumberFormat('en-US').format(result.lostBookingsPerMonth)}</dd></div></dl>
      </> : <div className="empty-result"><span className="recovery-mark" aria-hidden="true" /><h3>{submitted ? 'Check your clinic numbers' : 'Your estimate will appear here'}</h3><p>{submitted ? 'Enter valid numbers in each field to update your estimate.' : 'Enter your clinic numbers to see the booking opportunity that may be exposed each month.'}</p></div>}</div>
      <details className="result-assumptions"><summary>View assumptions</summary><div className="details-body"><p>Each scenario changes only the missed/overflow and booking opportunity rates.</p><ul><li>Conservative: 20% missed/overflow · 15% booking opportunity.</li><li>Working estimate: 30% missed/overflow · 20% booking opportunity.</li><li>Upper range: 35% missed/overflow · 30% booking opportunity.</li></ul>
      <p>Current rates: {values.missedRate || '—'}% missed/overflow · {values.bookingRate || '—'}% booking opportunity. Custom rates are used immediately.</p>
      <p>The booking opportunity rate is the estimated share of missed inbound calls that could plausibly become bookings if handled. It is not a qualified-lead conversion rate.</p><p>Conservative and Upper Range are planning bounds, not claims about every med spa. The Working Estimate applies industry context to your call volume; it does not establish your clinic’s actual performance.</p><p className="assumption-sources">Source context: <a href="https://www.zenoti.com/ai-workforce/ai-receptionist">Zenoti med-spa call data</a> and <a href="https://www.invoca.com/reports/the-invoca-healthcare-lead-conversion-benchmarks-report-2026">Invoca healthcare call benchmarks</a>. The 20% rate is a working approximation for missed calls, derived from answered-call data.</p></div></details>
    </div></div></div></section>;
}
