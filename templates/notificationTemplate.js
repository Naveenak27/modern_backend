/**
 * notificationTemplate.js
 * ─────────────────────────────────────────────
 * Notification email sent to YOU (the owner) when someone submits the form.
 * Usage: import { notificationTemplate } from './templates/notificationTemplate.js'
 *        const { subject, html } = notificationTemplate({ name, email, message })
 */

export function notificationTemplate({ name, email, message }) {
  const subject = `📬 New inquiry from ${name.trim()} — Portfolio Contact`;

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #08090a; font-family: 'DM Sans', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
  </style>
</head>
<body>
  <div style="background: #08090a; padding: 40px 16px; min-height: 100vh;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
      style="max-width: 580px; margin: 0 auto;">
      <tr>
        <td>

          <!-- Header -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom: 20px;">
            <tr>
              <td>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="
                      background: #c8f04a; color: #08090a;
                      font-family: 'DM Sans', Arial, sans-serif;
                      font-size: 12px; font-weight: 700;
                      letter-spacing: 0.05em; padding: 5px 10px; line-height: 1;
                    ">NK</td>
                    <td style="padding-left: 12px; vertical-align: middle;">
                      <span style="font-size: 12px; color: #3a3a3a; font-family: 'DM Sans', Arial, sans-serif;">
                        Portfolio &nbsp;/&nbsp; New Contact Submission
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Card -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
            style="background: #111214; border: 1px solid #1e2023; border-radius: 10px; overflow: hidden; margin-bottom: 16px;">
            <tr>
              <td style="height: 3px; background: linear-gradient(90deg, #c8f04a, #7effa0 60%, transparent);"></td>
            </tr>
            <tr>
              <td style="padding: 32px 36px 28px;">

                <!-- Alert label -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                  style="margin-bottom: 24px;">
                  <tr>
                    <td style="
                      background: rgba(200, 240, 74, 0.08);
                      border: 1px solid rgba(200, 240, 74, 0.2);
                      border-radius: 4px;
                      padding: 6px 14px;
                    ">
                      <span style="
                        font-size: 11px; font-weight: 600;
                        color: #c8f04a; letter-spacing: 0.12em;
                        text-transform: uppercase;
                        font-family: 'DM Sans', Arial, sans-serif;
                      ">● &nbsp;New Inquiry Received</span>
                    </td>
                  </tr>
                </table>

                <!-- Sender details -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="background: #0d0e10; border: 1px solid #1e2023; border-radius: 8px; margin-bottom: 24px; overflow:hidden;">
                  ${[
                    ['Name',      name.trim(),  null],
                    ['Email',     email.trim(), `mailto:${email.trim()}`],
                    ['Received',  submittedAt,  null],
                  ].map(([label, value, href], i, arr) => `
                  <tr>
                    <td style="
                      padding: 14px 20px;
                      border-bottom: ${i < arr.length - 1 ? '1px solid #1a1c1f' : 'none'};
                      width: 90px; vertical-align: top;
                    ">
                      <span style="
                        font-family: 'DM Sans', Arial, sans-serif;
                        font-size: 10px; font-weight: 600;
                        color: #3a3a3a; letter-spacing: 0.14em;
                        text-transform: uppercase;
                      ">${label}</span>
                    </td>
                    <td style="
                      padding: 14px 20px;
                      border-bottom: ${i < arr.length - 1 ? '1px solid #1a1c1f' : 'none'};
                      border-left: 1px solid #1a1c1f;
                    ">
                      ${href
                        ? `<a href="${href}" style="font-family:'DM Sans',Arial,sans-serif; font-size:13.5px; color:#c8f04a; font-weight:500;">${value}</a>`
                        : `<span style="font-family:'DM Sans',Arial,sans-serif; font-size:13.5px; color:#c0c0c0; font-weight:500;">${value}</span>`
                      }
                    </td>
                  </tr>`).join('')}
                </table>

                <!-- Message -->
                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 10px; font-weight: 600; color: #3a3a3a;
                  letter-spacing: 0.14em; text-transform: uppercase;
                  margin-bottom: 12px;
                ">Message</p>

                <div style="
                  background: #0d0e10;
                  border: 1px solid #1e2023;
                  border-left: 3px solid #c8f04a;
                  border-radius: 0 8px 8px 0;
                  padding: 18px 20px;
                  margin-bottom: 28px;
                ">
                  <p style="
                    font-family: 'DM Sans', Arial, sans-serif;
                    font-size: 14px; color: #777;
                    line-height: 1.8; font-style: italic;
                  ">${message.trim().replace(/\n/g, '<br />')}</p>
                </div>

                <!-- Reply CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right: 10px;">
                      <a href="mailto:${email.trim()}?subject=Re: Your inquiry — Naveen Karnan&body=Hi ${name.trim().split(' ')[0]},"
                        style="
                          display: inline-block;
                          background: #c8f04a; color: #08090a;
                          font-family: 'DM Sans', Arial, sans-serif;
                          font-size: 13px; font-weight: 700;
                          padding: 11px 22px; border-radius: 6px;
                          letter-spacing: 0.03em;
                        ">Reply Now →</a>
                    </td>
                    <td>
                      <a href="mailto:${email.trim()}"
                        style="
                          display: inline-block;
                          background: transparent; color: #555;
                          font-family: 'DM Sans', Arial, sans-serif;
                          font-size: 13px; font-weight: 500;
                          padding: 10px 22px; border-radius: 6px;
                          border: 1px solid #2a2a2a;
                        ">${email.trim()}</a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="text-align: center; padding: 8px 0 0;">
                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 11px; color: #252525;
                  letter-spacing: 0.06em; line-height: 1.8;
                ">
                  Sent via your Portfolio Contact System &nbsp;·&nbsp; ${new Date().getFullYear()}
                </p>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;

  return { subject, html };
}