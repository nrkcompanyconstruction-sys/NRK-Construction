import { NextResponse } from 'next/server';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error('BREVO_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = phone ? escapeHtml(String(phone)) : 'Not provided';
    const safeMessage = escapeHtml(String(message)).replace(/\r?\n/g, '<br>');

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: 'NRK Website',
          email: 'nrkconstructioncompany@gmail.com',
        },
        to: [
          {
            email: 'nrkconstructioncompany@gmail.com',
            name: 'NRK Construction',
          },
        ],
        subject: `New Project Enquiry from ${name}`,
        htmlContent: `
          <!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New project enquiry</title>
            </head>
            <body style="margin:0; padding:0; background-color:#f1f3f2; font-family:Arial,Helvetica,sans-serif; color:#202522;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f3f2;">
                <tr>
                  <td align="center" style="padding:32px 16px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px; background-color:#ffffff; border:1px solid #dfe4e1;">
                      <tr>
                        <td style="padding:28px 36px; background-color:#202522; border-bottom:5px solid #e8a52a;">
                          <div style="font-size:12px; line-height:18px; letter-spacing:2px; font-weight:bold; color:#e8a52a;">NRK CONSTRUCTION</div>
                          <div style="margin-top:8px; font-size:26px; line-height:32px; font-weight:bold; color:#ffffff;">New project enquiry</div>
                          <div style="margin-top:6px; font-size:14px; line-height:22px; color:#cbd2ce;">A visitor has sent a message through your website.</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:32px 36px 12px;">
                          <div style="font-size:12px; line-height:18px; letter-spacing:1.5px; font-weight:bold; color:#7a8580; text-transform:uppercase;">Contact details</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:0 36px 22px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                            <tr>
                              <td width="50%" valign="top" style="padding:16px 12px 16px 0; border-top:1px solid #e5e9e6;">
                                <div style="font-size:11px; line-height:17px; letter-spacing:1px; color:#7a8580; text-transform:uppercase;">Name</div>
                                <div style="padding-top:5px; font-size:16px; line-height:23px; font-weight:bold; color:#202522;">${safeName}</div>
                              </td>
                              <td width="50%" valign="top" style="padding:16px 0 16px 12px; border-top:1px solid #e5e9e6;">
                                <div style="font-size:11px; line-height:17px; letter-spacing:1px; color:#7a8580; text-transform:uppercase;">Phone</div>
                                <div style="padding-top:5px; font-size:16px; line-height:23px; font-weight:bold; color:#202522;">${safePhone}</div>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding:16px 0; border-top:1px solid #e5e9e6; border-bottom:1px solid #e5e9e6;">
                                <div style="font-size:11px; line-height:17px; letter-spacing:1px; color:#7a8580; text-transform:uppercase;">Email address</div>
                                <div style="padding-top:5px; font-size:16px; line-height:23px;"><a href="mailto:${safeEmail}" style="color:#b87908; font-weight:bold; text-decoration:none;">${safeEmail}</a></div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 36px 12px;">
                          <div style="font-size:12px; line-height:18px; letter-spacing:1.5px; font-weight:bold; color:#7a8580; text-transform:uppercase;">Message</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:0 36px 36px;">
                          <div style="padding:20px; background-color:#f7f8f7; border-left:4px solid #e8a52a; font-size:16px; line-height:26px; color:#3d4540;">${safeMessage}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 36px; background-color:#f7f8f7; border-top:1px solid #e5e9e6; font-size:12px; line-height:18px; color:#7a8580;">Submitted from the NRK Construction website</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email via Brevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
