import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  workEmail?: string;
  projectType?: string;
  budget?: string;
  details?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Accepts and validates project enquiries. No email/CRM provider is wired up
 * yet (open decision — see report), so submissions are only logged
 * server-side for now rather than actually delivered anywhere.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The request body could not be read." },
      { status: 400 },
    );
  }

  const { name, workEmail, details } = payload;

  if (!name?.trim() || !workEmail?.trim() || !details?.trim()) {
    return NextResponse.json(
      { ok: false, message: "Name, work email, and project details are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(workEmail.trim())) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid work email address." },
      { status: 400 },
    );
  }

  // Placeholder until a real email/CRM integration is wired up.
  console.log("[contact] new enquiry received", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
