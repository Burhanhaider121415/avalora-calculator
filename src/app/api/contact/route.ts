import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.clinic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // =====================================================================
    // STEP 1: SAVE LEAD TO DATABASE (Airtable / Supabase / Google Sheets)
    // =====================================================================
    // Every form submission MUST save to the database BEFORE any call action.
    // Replace the webhook URL below with your Zapier/Make webhook or Airtable API endpoint.
    console.log('Saving lead to database...', body);
    
    const WEBHOOK_URL = process.env.WEBHOOK_URL; // e.g., 'https://hooks.zapier.com/...'
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...body,
          timestamp: new Date().toISOString(),
          source: 'Avalora Calculator Landing Page'
        }),
      }).catch(e => console.error("Webhook failed:", e));
    } else {
      // Simulate API delay if no webhook is configured yet
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log('Lead saved locally (No webhook configured).');
    }

    // =====================================================================
    // STEP 2: TRIGGER AI CALL (CURRENTLY DISABLED)
    // =====================================================================
    // Do NOT trigger instant AI call automatically yet.
    // Only trigger later when Retell demo agent is ready and tested.
    // 
    // if (body.consent && process.env.RETELL_API_KEY) {
    //   await triggerRetellCall(body.phone);
    // }

    return NextResponse.json(
      { message: 'Demo request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
