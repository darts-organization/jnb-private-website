import nodemailer from "nodemailer";

// const RECIPIENT = "concierge@jnbprivate.com";
const RECIPIENT = "studio.lucapizzarelli@gmail.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"JNB Private Website" <${process.env.SMTP_FROM}>`,
      replyTo: `"${name}" <${email}>`,
      to: RECIPIENT,
      subject: `New Contact Form — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:'DM Sans',system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e8dcc8">
          <!-- Header -->
          <div style="background:#19281a;padding:32px 40px;text-align:center">
            <h1 style="font-family:'Playfair Display',Georgia,serif;color:#f5eddf;margin:0;font-size:22px;font-weight:500;letter-spacing:0.5px">JNB Private</h1>
            <p style="color:#929b97;margin:8px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:2px">Contact Form</p>
          </div>

          <!-- Body -->
          <div style="padding:32px 40px">
            <p style="color:#19281a;font-size:15px;margin:0 0 24px;line-height:1.6">A new message has been received through the website contact form.</p>

            <!-- Info Card -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr>
                <td style="padding:12px 16px;background:#f5eddf;border-radius:6px 6px 0 0;border-bottom:1px solid #e8dcc8">
                  <span style="color:#929b97;font-size:11px;text-transform:uppercase;letter-spacing:1px">Name</span><br/>
                  <span style="color:#19281a;font-size:15px;font-weight:500">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#f5eddf;border-radius:0 0 6px 6px">
                  <span style="color:#929b97;font-size:11px;text-transform:uppercase;letter-spacing:1px">Email</span><br/>
                  <a href="mailto:${email}" style="color:#123a5b;font-size:15px;text-decoration:none">${email}</a>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="border-left:3px solid #d1ba6f;padding:16px 20px;background:#faf8f4;border-radius:0 6px 6px 0">
              <p style="color:#929b97;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Message</p>
              <p style="color:#19281a;font-size:14px;line-height:1.7;margin:0">${message.replace(/\n/g, "<br/>")}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding:20px 40px;background:#f5eddf;text-align:center;border-top:1px solid #e8dcc8">
            <p style="color:#929b97;font-size:11px;margin:0">This email was sent automatically from <strong style="color:#19281a">jnbprivate.com</strong></p>
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
