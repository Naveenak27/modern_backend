
// export function notificationTemplate({ name, email, message }) {
//   const subject = `📬 New inquiry from ${name.trim()} — Portfolio Contact`;

//   const submittedAt = new Date().toLocaleString('en-IN', {
//     timeZone: 'Asia/Kolkata',
//     weekday: 'short',
//     day: 'numeric',
//     month: 'short',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   });

//   const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>${subject}</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&display=swap');
//     * { margin: 0; padding: 0; box-sizing: border-box; }
//     body { background: #08090a; font-family: 'DM Sans', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
//   </style>
// </head>
// <body>
//   <div style="background: #08090a; padding: 40px 16px; min-height: 100vh;">
//     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//       style="max-width: 580px; margin: 0 auto;">
//       <tr>
//         <td>

//           <!-- Header -->
//           <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//             style="margin-bottom: 20px;">
//             <tr>
//               <td>
//                 <table role="presentation" cellpadding="0" cellspacing="0" border="0">
//                   <tr>
//                     <td style="
//                       background: #c8f04a; color: #08090a;
//                       font-family: 'DM Sans', Arial, sans-serif;
//                       font-size: 12px; font-weight: 700;
//                       letter-spacing: 0.05em; padding: 5px 10px; line-height: 1;
//                     ">NK</td>
//                     <td style="padding-left: 12px; vertical-align: middle;">
//                       <span style="font-size: 12px; color: #3a3a3a; font-family: 'DM Sans', Arial, sans-serif;">
//                         Portfolio &nbsp;/&nbsp; New Contact Submission
//                       </span>
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>

//           <!-- Card -->
//           <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//             style="background: #111214; border: 1px solid #1e2023; border-radius: 10px; overflow: hidden; margin-bottom: 16px;">
//             <tr>
//               <td style="height: 3px; background: linear-gradient(90deg, #c8f04a, #7effa0 60%, transparent);"></td>
//             </tr>
//             <tr>
//               <td style="padding: 32px 36px 28px;">

//                 <!-- Alert label -->
//                 <table role="presentation" cellpadding="0" cellspacing="0" border="0"
//                   style="margin-bottom: 24px;">
//                   <tr>
//                     <td style="
//                       background: rgba(200, 240, 74, 0.08);
//                       border: 1px solid rgba(200, 240, 74, 0.2);
//                       border-radius: 4px;
//                       padding: 6px 14px;
//                     ">
//                       <span style="
//                         font-size: 11px; font-weight: 600;
//                         color: #c8f04a; letter-spacing: 0.12em;
//                         text-transform: uppercase;
//                         font-family: 'DM Sans', Arial, sans-serif;
//                       ">● &nbsp;New Inquiry Received</span>
//                     </td>
//                   </tr>
//                 </table>

//                 <!-- Sender details -->
//                 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
//                   style="background: #0d0e10; border: 1px solid #1e2023; border-radius: 8px; margin-bottom: 24px; overflow:hidden;">
//                   ${[
//                     ['Name',      name.trim(),  null],
//                     ['Email',     email.trim(), `mailto:${email.trim()}`],
//                     ['Received',  submittedAt,  null],
//                   ].map(([label, value, href], i, arr) => `
//                   <tr>
//                     <td style="
//                       padding: 14px 20px;
//                       border-bottom: ${i < arr.length - 1 ? '1px solid #1a1c1f' : 'none'};
//                       width: 90px; vertical-align: top;
//                     ">
//                       <span style="
//                         font-family: 'DM Sans', Arial, sans-serif;
//                         font-size: 10px; font-weight: 600;
//                         color: #3a3a3a; letter-spacing: 0.14em;
//                         text-transform: uppercase;
//                       ">${label}</span>
//                     </td>
//                     <td style="
//                       padding: 14px 20px;
//                       border-bottom: ${i < arr.length - 1 ? '1px solid #1a1c1f' : 'none'};
//                       border-left: 1px solid #1a1c1f;
//                     ">
//                       ${href
//                         ? `<a href="${href}" style="font-family:'DM Sans',Arial,sans-serif; font-size:13.5px; color:#c8f04a; font-weight:500;">${value}</a>`
//                         : `<span style="font-family:'DM Sans',Arial,sans-serif; font-size:13.5px; color:#c0c0c0; font-weight:500;">${value}</span>`
//                       }
//                     </td>
//                   </tr>`).join('')}
//                 </table>

//                 <!-- Message -->
//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 10px; font-weight: 600; color: #3a3a3a;
//                   letter-spacing: 0.14em; text-transform: uppercase;
//                   margin-bottom: 12px;
//                 ">Message</p>

//                 <div style="
//                   background: #0d0e10;
//                   border: 1px solid #1e2023;
//                   border-left: 3px solid #c8f04a;
//                   border-radius: 0 8px 8px 0;
//                   padding: 18px 20px;
//                   margin-bottom: 28px;
//                 ">
//                   <p style="
//                     font-family: 'DM Sans', Arial, sans-serif;
//                     font-size: 14px; color: #777;
//                     line-height: 1.8; font-style: italic;
//                   ">${message.trim().replace(/\n/g, '<br />')}</p>
//                 </div>

//                 <!-- Reply CTA -->
//                 <table role="presentation" cellpadding="0" cellspacing="0" border="0">
//                   <tr>
//                     <td style="padding-right: 10px;">
//                       <a href="mailto:${email.trim()}?subject=Re: Your inquiry — Naveen Karnan&body=Hi ${name.trim().split(' ')[0]},"
//                         style="
//                           display: inline-block;
//                           background: #c8f04a; color: #08090a;
//                           font-family: 'DM Sans', Arial, sans-serif;
//                           font-size: 13px; font-weight: 700;
//                           padding: 11px 22px; border-radius: 6px;
//                           letter-spacing: 0.03em;
//                         ">Reply Now →</a>
//                     </td>
//                     <td>
//                       <a href="mailto:${email.trim()}"
//                         style="
//                           display: inline-block;
//                           background: transparent; color: #555;
//                           font-family: 'DM Sans', Arial, sans-serif;
//                           font-size: 13px; font-weight: 500;
//                           padding: 10px 22px; border-radius: 6px;
//                           border: 1px solid #2a2a2a;
//                         ">${email.trim()}</a>
//                     </td>
//                   </tr>
//                 </table>

//               </td>
//             </tr>
//           </table>

//           <!-- Footer -->
//           <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
//             <tr>
//               <td style="text-align: center; padding: 8px 0 0;">
//                 <p style="
//                   font-family: 'DM Sans', Arial, sans-serif;
//                   font-size: 11px; color: #252525;
//                   letter-spacing: 0.06em; line-height: 1.8;
//                 ">
//                   Sent via your Portfolio Contact System &nbsp;·&nbsp; ${new Date().getFullYear()}
//                 </p>
//               </td>
//             </tr>
//           </table>

//         </td>
//       </tr>
//     </table>
//   </div>
// </body>
// </html>`;

//   return { subject, html };
// }




/**
 * notificationTemplate.js
 * ─────────────────────────────────────────────
 * Notification email sent to YOU (the owner) when someone submits the form.
 * Outlook-safe (Word engine), spam-filter-friendly, no buttons.
 *
 * Usage: import { notificationTemplate } from './templates/notificationTemplate.js'
 *        const { subject, html, text } = notificationTemplate({ name, email, message })
 *        -> send all three: subject, html AND text (multipart/alternative)
 */

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Remove line breaks so nothing can be injected into the subject header
const singleLine = (str = '') => String(str).replace(/[\r\n]+/g, ' ').trim();

export function notificationTemplate({ name, email, message }) {
  const cleanName = singleLine(name);
  const cleanEmail = singleLine(email);
  const cleanMessage = String(message || '').trim();

  const subject = `New inquiry from ${cleanName} - Portfolio Contact`;

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const safeName = escapeHtml(cleanName);
  const safeEmail = escapeHtml(cleanEmail);
  const safeMessage = escapeHtml(cleanMessage).replace(/\r?\n/g, '<br />');
  const preheader = escapeHtml(`${cleanName} sent a message through your portfolio contact form.`);

  const FONT = "Arial, Helvetica, sans-serif";

  const rows = [
    ['Name', safeName],
    ['Email', safeEmail],
    ['Received', escapeHtml(submittedAt)],
  ]
    .map(
      ([label, value], i, arr) => `
              <tr>
                <td width="90" valign="top" bgcolor="#0d0e10"
                  style="padding:14px 20px; width:90px; ${i < arr.length - 1 ? 'border-bottom:1px solid #1e2023;' : ''}
                  font-family:${FONT}; font-size:11px; font-weight:bold; color:#8a8f98;
                  letter-spacing:1px; text-transform:uppercase; mso-line-height-rule:exactly; line-height:18px;">
                  ${label}
                </td>
                <td valign="top" bgcolor="#0d0e10"
                  style="padding:14px 20px; border-left:1px solid #1e2023; ${i < arr.length - 1 ? 'border-bottom:1px solid #1e2023;' : ''}
                  font-family:${FONT}; font-size:14px; color:#e6e6e6; mso-line-height-rule:exactly; line-height:20px;">
                  ${value}
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
<body style="margin:0; padding:0; background-color:#08090a;" bgcolor="#08090a">

  <!-- Preheader (inbox preview text) -->
  <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
    ${preheader}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#08090a" style="background-color:#08090a;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!--[if mso]><table role="presentation" width="580" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
        <table role="presentation" class="container" width="580" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#c8f04a" style="background-color:#c8f04a; padding:6px 10px; font-family:${FONT}; font-size:12px; font-weight:bold; color:#08090a; letter-spacing:1px; line-height:12px;">
                    NK
                  </td>
                  <td style="padding-left:12px; font-family:${FONT}; font-size:12px; color:#8a8f98; line-height:16px;">
                    Portfolio &nbsp;/&nbsp; New Contact Submission
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td bgcolor="#111214" style="background-color:#111214; border:1px solid #1e2023;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Accent bar (solid color; gradients are not supported in Outlook) -->
                <tr>
                  <td bgcolor="#c8f04a" height="3" style="height:3px; font-size:0; line-height:0; background-color:#c8f04a;">&nbsp;</td>
                </tr>

                <tr>
                  <td class="px" style="padding:32px 36px 32px;">

                    <!-- Label -->
                    <p style="margin:0 0 24px 0; font-family:${FONT}; font-size:12px; font-weight:bold; color:#c8f04a; letter-spacing:2px; text-transform:uppercase; line-height:16px;">
                      New inquiry received
                    </p>

                    <!-- Sender details -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0d0e10" style="background-color:#0d0e10; border:1px solid #1e2023;">
                      ${rows}
                    </table>

                    <!-- Message heading -->
                    <p style="margin:28px 0 12px 0; font-family:${FONT}; font-size:11px; font-weight:bold; color:#8a8f98; letter-spacing:1px; text-transform:uppercase; line-height:16px;">
                      Message
                    </p>

                    <!-- Message body (accent border made with a narrow cell, Outlook-safe) -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="3" bgcolor="#c8f04a" style="width:3px; background-color:#c8f04a; font-size:0; line-height:0;">&nbsp;</td>
                        <td bgcolor="#0d0e10" style="background-color:#0d0e10; padding:18px 20px; font-family:${FONT}; font-size:15px; color:#d4d4d4; mso-line-height-rule:exactly; line-height:24px;">
                          ${safeMessage}
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:16px 0 0 0; font-family:${FONT}; font-size:11px; color:#6b7078; line-height:18px;">
              Sent from your portfolio contact form &nbsp;·&nbsp; ${new Date().getFullYear()}
            </td>
          </tr>

        </table>
        <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>`;

  // Plain-text alternative: improves spam score and accessibility
  const text = [
    'NEW INQUIRY RECEIVED',
    '--------------------',
    `Name:     ${cleanName}`,
    `Email:    ${cleanEmail}`,
    `Received: ${submittedAt}`,
    '',
    'Message:',
    cleanMessage,
    '',
    '--',
    'Sent from your portfolio contact form',
  ].join('\n');

  return { subject, html, text };
}
