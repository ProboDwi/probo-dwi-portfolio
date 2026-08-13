type ContactBody = { name?: unknown; email?: unknown; subject?: unknown; message?: unknown; website?: unknown };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    if (body.website) return Response.json({ ok: true });

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || name.length > 100 || !/^\S+@\S+\.\S+$/.test(email) || email.length > 200 || !subject || subject.length > 160 || message.length < 10 || message.length > 5000) {
      return Response.json({ error: "Invalid form data." }, { status: 400 });
    }

    const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (!endpoint) return Response.json({ error: "Contact delivery is not configured." }, { status: 503 });

    const forwarded = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message, contactEmail: process.env.CONTACT_EMAIL }),
    });
    if (!forwarded.ok) throw new Error("Contact provider rejected the message");

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to send message." }, { status: 500 });
  }
}
