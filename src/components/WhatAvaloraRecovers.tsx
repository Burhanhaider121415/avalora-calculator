const categories = [
  ['Missed + overflow calls', 'Catch callers when staff are already occupied.'],
  ['After-hours inquiries', 'Capture intent instead of relying only on voicemail.'],
  ['Ad, form + selected digital inquiries', 'Respond while patient interest is still active.'],
  ['Booking + staff handoffs', 'Turn the conversation into a clear next action for the clinic.'],
];
export default function WhatAvaloraRecovers() {
  return <section className="section recover-section" aria-labelledby="recover-heading"><div className="wrap recover-layout"><div><p className="eyebrow">What Avalora helps recover</p><h2 id="recover-heading">Avalora catches the moments your team cannot reach in time.</h2><p>Missed calls. After-hours inquiries. Slow ad or form follow-up. Booking requests that stall. Avalora captures the intent, gives the patient a next step, and routes the handoff back to your team or existing workflow.</p><p className="reassurance">Built to support your front desk — not replace it.</p></div><div className="recover-list">{categories.map(([title, text], i) => <article key={title}><span aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
}
