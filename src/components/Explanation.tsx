const moments = [
  ['Missed calls', 'One unanswered call while staff are helping a patient.'],
  ['Slow callbacks', 'An interested caller waiting for the next available moment.'],
  ['Booking friction', 'A form or request without a clear next step.'],
  ['After-hours inquiries', 'Patient interest arriving after the clinic closes.'],
  ['Unconfirmed requests', 'A conversation that never becomes a staff task.'],
];
export default function Explanation() {
  return <section className="section recognition" aria-labelledby="recognition-heading"><div className="wrap"><div className="recognition-copy"><p className="eyebrow">The everyday gaps</p><h2 id="recognition-heading">Most booking leaks do not look dramatic.</h2><p>They look like one missed call while a patient is checking out. A form lead waiting until tomorrow. An after-hours inquiry reaching voicemail. Small communication gaps compound when demand is high.</p><p className="recognition-point">Speed, availability and follow-through often determine whether an inquiry becomes a booking request—or disappears.</p></div>
  <ol className="moments">{moments.map(([title, text], i) => <li key={title}><span className="sequence-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>;
}
