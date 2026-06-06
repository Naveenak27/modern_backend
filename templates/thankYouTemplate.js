/**
 * thankYouTemplate.js
 * ─────────────────────────────────────────────
 * Thank-you email sent to the USER after form submission.
 * Usage: const { subject, html } = thankYouTemplate({ name, message })
 */

export function thankYouTemplate({ name, message }) {
  const subject = `Got your message, ${name.trim().split(' ')[0]}! I'll be in touch soon.`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: #0f0f0f;
      font-family: 'DM Sans', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    a { text-decoration: none; }
  </style>
</head>
<body>
  <div style="background: #0f0f0f; padding: 40px 16px;">

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
      style="max-width: 560px; margin: 0 auto;">
      <tr>
        <td>

          <!-- ── CARD ── -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
            style="background: #161718; border: 1px solid #242628; border-radius: 10px; overflow: hidden;">

            <!-- Accent top bar -->
            <tr>
              <td style="height: 3px; background: linear-gradient(90deg, #c8f04a 0%, #7effa0 55%, transparent 100%);"></td>
            </tr>

            <!-- Card body -->
            <tr>
              <td style="padding: 36px 36px 36px;">

                <!-- Greeting -->
                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 24px; font-weight: 700;
                  color: #f0f0f0; letter-spacing: -0.03em;
                  line-height: 1.2; margin-bottom: 6px;
                ">Hey ${name.trim().split(' ')[0]},</p>

                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 10px; font-weight: 600;
                  color: #3a3a3a; letter-spacing: 0.14em;
                  text-transform: uppercase; margin-bottom: 24px;
                ">Message Received &nbsp;✦&nbsp; ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).toUpperCase()}</p>

                <!-- Body text -->
                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 14px; font-weight: 400;
                  color: #7a7a7a; line-height: 1.8;
                  margin-bottom: 24px;
                ">
                  Thank you for reaching out — your message has landed safely in my inbox.
                  I personally review every inquiry and will get back to you within
                  <strong style="color: #c8f04a; font-weight: 600;">24 hours</strong>.
                  <br /><br />
                  If it's urgent, feel free to reach me directly at
                  <a href="mailto:naveenkarnan5@gmail.com" style="color: #c8f04a; font-weight: 500;">naveenkarnan5@gmail.com</a>
                  or drop a message on
                  <a href="https://api.whatsapp.com/send?phone=7548865624" style="color: #c8f04a; font-weight: 500;">WhatsApp</a>.
                </p>

                <!-- Message Echo -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="background: #0d0e10; border: 1px solid #222426; border-radius: 7px; margin-bottom: 28px; overflow: hidden;">
                  <tr>
                    <td style="padding: 18px 20px;">
                      <p style="
                        font-family: 'DM Sans', Arial, sans-serif;
                        font-size: 9px; font-weight: 700;
                        color: #c8f04a; letter-spacing: 0.18em;
                        text-transform: uppercase; margin-bottom: 12px;
                      ">Your Message</p>
                      <p style="
                        font-family: 'DM Sans', Arial, sans-serif;
                        font-size: 13.5px; font-weight: 400;
                        color: #606060; line-height: 1.75;
                        border-left: 2px solid #2a2a2a;
                        padding-left: 14px; font-style: italic;
                      ">${message.trim().replace(/\n/g, '<br />')}</p>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="margin-bottom: 24px;">
                  <tr><td style="border-top: 1px solid #1e2023;"></td></tr>
                </table>

                <!-- What happens next -->
                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 9px; font-weight: 700; color: #333;
                  letter-spacing: 0.18em; text-transform: uppercase;
                  margin-bottom: 16px;
                ">What Happens Next</p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="margin-bottom: 28px;">
                  ${[
                    ['01', 'Review',  'I read every message carefully and note down the key details of your project or inquiry.'],
                    ['02', 'Respond', "You'll hear back from me within 24 hours with thoughts, questions, or next steps."],
                    ['03', 'Connect', "If it's a good fit, we'll schedule a quick call to discuss scope, timeline, and goals."],
                  ].map(([num, title, desc]) => `
                  <tr>
                    <td style="padding-bottom: 16px; vertical-align: top; width: 28px;">
                      <span style="font-size: 11px; font-weight: 700; color: #c8f04a; font-family: 'DM Sans', Arial, sans-serif;">${num}</span>
                    </td>
                    <td style="padding-bottom: 16px; padding-left: 10px; vertical-align: top;">
                      <p style="font-size: 13px; font-weight: 600; color: #c8c8c8; margin-bottom: 2px; font-family: 'DM Sans', Arial, sans-serif;">${title}</p>
                      <p style="font-size: 12.5px; font-weight: 400; color: #4e4e4e; line-height: 1.6; font-family: 'DM Sans', Arial, sans-serif;">${desc}</p>
                    </td>
                  </tr>`).join('')}
                </table>

                <!-- CTA Buttons -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
                  <tr>
                    <td style="padding-right: 10px;">
                      <a href="https://github.com/Naveenak27" style="
                        display: inline-block; background: #c8f04a; color: #08090a;
                        font-family: 'DM Sans', Arial, sans-serif;
                        font-size: 12.5px; font-weight: 700; letter-spacing: 0.03em;
                        padding: 11px 22px; border-radius: 6px; white-space: nowrap;
                      ">View My Work →</a>
                    </td>
                    <td>
                      <a href="https://www.linkedin.com/in/naveen-karnan-4987811a5" style="
                        display: inline-block; background: transparent; color: #555;
                        font-family: 'DM Sans', Arial, sans-serif;
                        font-size: 12.5px; font-weight: 500; letter-spacing: 0.03em;
                        padding: 10px 22px; border-radius: 6px; border: 1px solid #272727;
                        white-space: nowrap;
                      ">Connect on LinkedIn</a>
                    </td>
                  </tr>
                </table>

                <!-- Sign-off -->
                <p style="
                  font-family: 'DM Sans', Arial, sans-serif;
                  font-size: 14px; font-weight: 400;
                  color: #6a6a6a; line-height: 1.7;
                ">
                  Looking forward to connecting,<br />
                  <strong style="color: #d0d0d0; font-weight: 600;">Naveen Karnan</strong><br />
                  <span style="font-size: 12px; color: #333;">Full-Stack Developer &nbsp;·&nbsp; Chennai, India</span>
                </p>

              </td>
            </tr>
          </table>
          <!-- ── END CARD ── -->

        </td>
      </tr>
    </table>

  </div>
</body>
</html>`;

  return { subject, html };
}