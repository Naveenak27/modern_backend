

// export function thankYouTemplate({ name, message }) {
//   const subject = `Got your message, ${name.trim().split(' ')[0]}! I'll be in touch soon.`;

//   const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>${subject}</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
//     * { margin: 0; padding: 0; box-sizing: border-box; }
//     body {
//       background-color: #0f0f0f;
//       font-family: 'DM Sans', Arial, sans-serif;
//       -webkit-font-smoothing: antialiased;
//     }
//     a { text-decoration: none; }
//   </style>
// </head>
// <body>
//   <div style="background: #0f0f0f; padding: 40px 16px;">

//     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//       style="max-width: 560px; margin: 0 auto;">
//       <tr>
//         <td>

//           <!-- ── CARD ── -->
//           <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//             style="background: #161718; border: 1px solid #242628; border-radius: 10px; overflow: hidden;">

//             <!-- Accent top bar -->
//             <tr>
//               <td style="height: 3px; background: linear-gradient(90deg, #c8f04a 0%, #7effa0 55%, transparent 100%);"></td>
//             </tr>

//             <!-- Card body -->
//             <tr>
//               <td style="padding: 36px 36px 36px;">

//                 <!-- Greeting -->
//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 24px; font-weight: 700;
//                   color: #f0f0f0; letter-spacing: -0.03em;
//                   line-height: 1.2; margin-bottom: 6px;
//                 ">Hey ${name.trim().split(' ')[0]},</p>

//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 10px; font-weight: 600;
//                   color: #3a3a3a; letter-spacing: 0.14em;
//                   text-transform: uppercase; margin-bottom: 24px;
//                 ">Message Received &nbsp;✦&nbsp; ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).toUpperCase()}</p>

//                 <!-- Body text -->
//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 14px; font-weight: 400;
//                   color: #7a7a7a; line-height: 1.8;
//                   margin-bottom: 24px;
//                 ">
//                   Thank you for reaching out — your message has landed safely in my inbox.
//                   I personally review every inquiry and will get back to you within
//                   <strong style="color: #c8f04a; font-weight: 600;">24 hours</strong>.
//                   <br /><br />
//                   If it's urgent, feel free to reach me directly at
//                   <a href="mailto:naveenkarnan5@gmail.com" style="color: #c8f04a; font-weight: 500;">naveenkarnan5@gmail.com</a>
//                   or drop a message on
//                   <a href="https://api.whatsapp.com/send?phone=7548865624" style="color: #c8f04a; font-weight: 500;">WhatsApp</a>.
//                 </p>

//                 <!-- Message Echo -->
//                 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//                   style="background: #0d0e10; border: 1px solid #222426; border-radius: 7px; margin-bottom: 28px; overflow: hidden;">
//                   <tr>
//                     <td style="padding: 18px 20px;">
//                       <p style="
//                         font-family: 'DM Sans', Arial, sans-serif;
//                         font-size: 9px; font-weight: 700;
//                         color: #c8f04a; letter-spacing: 0.18em;
//                         text-transform: uppercase; margin-bottom: 12px;
//                       ">Your Message</p>
//                       <p style="
//                         font-family: 'DM Sans', Arial, sans-serif;
//                         font-size: 13.5px; font-weight: 400;
//                         color: #606060; line-height: 1.75;
//                         border-left: 2px solid #2a2a2a;
//                         padding-left: 14px; font-style: italic;
//                       ">${message.trim().replace(/\n/g, '<br />')}</p>
//                     </td>
//                   </tr>
//                 </table>

//                 <!-- Divider -->
//                 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//                   style="margin-bottom: 24px;">
//                   <tr><td style="border-top: 1px solid #1e2023;"></td></tr>
//                 </table>

//                 <!-- What happens next -->
//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 9px; font-weight: 700; color: #333;
//                   letter-spacing: 0.18em; text-transform: uppercase;
//                   margin-bottom: 16px;
//                 ">What Happens Next</p>

//                 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//                   style="margin-bottom: 28px;">
//                   ${[
//                     ['01', 'Review',  'I read every message carefully and note down the key details of your project or inquiry.'],
//                     ['02', 'Respond', "You'll hear back from me within 24 hours with thoughts, questions, or next steps."],
//                     ['03', 'Connect', "If it's a good fit, we'll schedule a quick call to discuss scope, timeline, and goals."],
//                   ].map(([num, title, desc]) => `
//                   <tr>
//                     <td style="padding-bottom: 16px; vertical-align: top; width: 28px;">
//                       <span style="font-size: 11px; font-weight: 700; color: #c8f04a; font-family: 'DM Sans', Arial, sans-serif;">${num}</span>
//                     </td>
//                     <td style="padding-bottom: 16px; padding-left: 10px; vertical-align: top;">
//                       <p style="font-size: 13px; font-weight: 600; color: #c8c8c8; margin-bottom: 2px; font-family: 'DM Sans', Arial, sans-serif;">${title}</p>
//                       <p style="font-size: 12.5px; font-weight: 400; color: #4e4e4e; line-height: 1.6; font-family: 'DM Sans', Arial, sans-serif;">${desc}</p>
//                     </td>
//                   </tr>`).join('')}
//                 </table>

//                 <!-- CTA Buttons -->
//                 <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
//                   <tr>
//                     <td style="padding-right: 10px;">
//                       <a href="https://github.com/Naveenak27" style="
//                         display: inline-block; background: #c8f04a; color: #08090a;
//                         font-family: 'DM Sans', Arial, sans-serif;
//                         font-size: 12.5px; font-weight: 700; letter-spacing: 0.03em;
//                         padding: 11px 22px; border-radius: 6px; white-space: nowrap;
//                       ">View My Work →</a>
//                     </td>
//                     <td>
//                       <a href="https://www.linkedin.com/in/naveen-karnan-4987811a5" style="
//                         display: inline-block; background: transparent; color: #555;
//                         font-family: 'DM Sans', Arial, sans-serif;
//                         font-size: 12.5px; font-weight: 500; letter-spacing: 0.03em;
//                         padding: 10px 22px; border-radius: 6px; border: 1px solid #272727;
//                         white-space: nowrap;
//                       ">Connect on LinkedIn</a>
//                     </td>
//                   </tr>
//                 </table>

//                 <!-- Sign-off -->
//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 14px; font-weight: 400;
//                   color: #6a6a6a; line-height: 1.7;
//                 ">
//                   Looking forward to connecting,<br />
//                   <strong style="color: #d0d0d0; font-weight: 600;">Naveen Karnan</strong><br />
//                   <span style="font-size: 12px; color: #333;">Full-Stack Developer &nbsp;·&nbsp; Chennai, India</span>
//                 </p>

//               </td>
//             </tr>
//           </table>
//           <!-- ── END CARD ── -->

//         </td>
//       </tr>
//     </table>

//   </div>
// </body>
// </html>`;

//   return { subject, html };
// }



/**
 * thankYouTemplate.js
 * ─────────────────────────────────────────────
 * Thank-you email sent to the USER after form submission.
 * Outlook-safe (Word engine), spam-filter-friendly, no buttons.
 *
 * Usage: import { thankYouTemplate } from './templates/thankYouTemplate.js'
 *        const { subject, html, text } = thankYouTemplate({ name, message })
 *        -> send all three: subject, html AND text (multipart/alternative)
 */

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const singleLine = (str = '') => String(str).replace(/[\r\n]+/g, ' ').trim();

export function thankYouTemplate({ name, message }) {
  const cleanName = singleLine(name);
  const firstName = cleanName.split(' ')[0] || 'there';
  const cleanMessage = String(message || '').trim();

  const subject = `Thanks for your message, ${firstName} - I will reply within 24 hours`;

  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });

  const safeFirst = escapeHtml(firstName);
  const safeMessage = escapeHtml(cleanMessage).replace(/\r?\n/g, '<br />');
  const preheader = 'Your message has been received. I will get back to you within 24 hours.';

  const FONT = 'Arial, Helvetica, sans-serif';

  const steps = [
    ['01', 'Review', 'I read every message carefully and note the key details of your project or inquiry.'],
    ['02', 'Respond', 'You will hear back from me within 24 hours with thoughts, questions, or next steps.'],
    ['03', 'Connect', 'If it is a good fit, we can schedule a quick call to discuss scope, timeline, and goals.'],
  ]
    .map(
      ([num, title, desc]) => `
                      <tr>
                        <td width="36" valign="top" style="width:36px; padding:0 0 16px 0; font-family:${FONT}; font-size:12px; font-weight:bold; color:#c8f04a; line-height:20px;">
                          ${num}
                        </td>
                        <td valign="top" style="padding:0 0 16px 0; font-family:${FONT};">
                          <p style="margin:0 0 2px 0; font-size:14px; font-weight:bold; color:#e0e0e0; mso-line-height-rule:exactly; line-height:20px;">${title}</p>
                          <p style="margin:0; font-size:13px; color:#9a9fa6; mso-line-height-rule:exactly; line-height:20px;">${desc}</p>
                        </td>
                      </tr>`
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="dark light" />
  <meta name="supported-color-schemes" content="dark light" />
  <title>${escapeHtml(subject)}</title>
  <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <style>
    table, td, p, a, span { font-family: Arial, Helvetica, sans-serif !important; }
    table { border-collapse: collapse; }
  </style>
  <![endif]-->
  <style>
    body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    @media screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .px { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#0f0f0f;" bgcolor="#0f0f0f">

  <!-- Preheader (inbox preview text) -->
  <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
    ${preheader}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0f0f0f" style="background-color:#0f0f0f;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!--[if mso]><table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
        <table role="presentation" class="container" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:560px;">

          <!-- Card -->
          <tr>
            <td bgcolor="#161718" style="background-color:#161718; border:1px solid #242628;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Accent bar (solid; gradients are not supported in Outlook) -->
                <tr>
                  <td bgcolor="#c8f04a" height="3" style="height:3px; font-size:0; line-height:0; background-color:#c8f04a;">&nbsp;</td>
                </tr>

                <tr>
                  <td class="px" style="padding:36px;">

                    <!-- Greeting -->
                    <h1 style="margin:0 0 6px 0; font-family:${FONT}; font-size:24px; font-weight:bold; color:#f0f0f0; mso-line-height-rule:exactly; line-height:30px;">
                      Hello ${safeFirst},
                    </h1>

                    <p style="margin:0 0 24px 0; font-family:${FONT}; font-size:11px; font-weight:bold; color:#8a8f98; letter-spacing:1px; text-transform:uppercase; line-height:16px;">
                      Message received &nbsp;|&nbsp; ${escapeHtml(dateStr)}
                    </p>

                    <!-- Body -->
                    <p style="margin:0 0 16px 0; font-family:${FONT}; font-size:15px; color:#b8bcc2; mso-line-height-rule:exactly; line-height:24px;">
                      Thank you for reaching out. Your message has landed safely in my inbox. I personally review every inquiry and will get back to you within
                      <strong style="color:#c8f04a;">24 hours</strong>.
                    </p>

                    <p style="margin:0 0 28px 0; font-family:${FONT}; font-size:15px; color:#b8bcc2; mso-line-height-rule:exactly; line-height:24px;">
                      If it is urgent, you can email me at naveenkarnan5@gmail.com or message me on WhatsApp at +91 75488 65624.
                    </p>

                    <!-- Message echo -->
                    <p style="margin:0 0 10px 0; font-family:${FONT}; font-size:11px; font-weight:bold; color:#c8f04a; letter-spacing:1px; text-transform:uppercase; line-height:16px;">
                      Your message
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                      <tr>
                        <td width="3" bgcolor="#3a3d42" style="width:3px; background-color:#3a3d42; font-size:0; line-height:0;">&nbsp;</td>
                        <td bgcolor="#0d0e10" style="background-color:#0d0e10; padding:16px 20px; font-family:${FONT}; font-size:14px; color:#a0a4aa; mso-line-height-rule:exactly; line-height:22px;">
                          ${safeMessage}
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                      <tr><td height="1" bgcolor="#242628" style="height:1px; font-size:0; line-height:0; background-color:#242628;">&nbsp;</td></tr>
                    </table>

                    <!-- What happens next -->
                    <p style="margin:0 0 16px 0; font-family:${FONT}; font-size:11px; font-weight:bold; color:#8a8f98; letter-spacing:1px; text-transform:uppercase; line-height:16px;">
                      What happens next
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
                      ${steps}
                    </table>

                    <!-- Sign-off -->
                    <p style="margin:0; font-family:${FONT}; font-size:15px; color:#b8bcc2; mso-line-height-rule:exactly; line-height:24px;">
                      Looking forward to connecting,<br />
                      <strong style="color:#f0f0f0;">Naveen Karnan</strong><br />
                      <span style="font-size:12px; color:#8a8f98;">Full-Stack Developer &nbsp;|&nbsp; Chennai, India</span>
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:16px 0 0 0; font-family:${FONT}; font-size:11px; color:#6b7078; line-height:18px;">
              You are receiving this because you submitted the contact form on my portfolio.
            </td>
          </tr>

        </table>
        <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>`;

  const text = [
    `Hello ${firstName},`,
    '',
    'Thank you for reaching out. Your message has landed safely in my inbox.',
    'I personally review every inquiry and will get back to you within 24 hours.',
    '',
    'If it is urgent, you can email me at naveenkarnan5@gmail.com',
    'or message me on WhatsApp at +91 75488 65624.',
    '',
    'YOUR MESSAGE',
    '------------',
    cleanMessage,
    '',
    'WHAT HAPPENS NEXT',
    '1. Review  - I read every message carefully.',
    '2. Respond - You will hear back within 24 hours.',
    '3. Connect - If it is a good fit, we schedule a quick call.',
    '',
    'Looking forward to connecting,',
    'Naveen Karnan',
    'Full-Stack Developer | Chennai, India',
    '',
    '--',
    'You are receiving this because you submitted the contact form on my portfolio.',
  ].join('\n');

  return { subject, html, text };
}
