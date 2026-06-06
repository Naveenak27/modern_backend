import express from 'express';
import cors from 'cors';
import * as Brevo from '@getbrevo/brevo';
import dotenv from 'dotenv';
import { thankYouTemplate }     from './templates/thankYouTemplate.js';
import { notificationTemplate } from './templates/notificationTemplate.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
}));

/* ── Brevo API client ── */
const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

/* ── POST /api/contact ── */
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const sender = {
      name:  process.env.SENDER_NAME  || 'Naveen Karnan',
      email: process.env.SENDER_EMAIL,
    };

    /* ── 1. Thank-you → USER ── */
    const { subject: tySubject, html: tyHtml } = thankYouTemplate({ name, message });
    const thankYouEmail = new Brevo.SendSmtpEmail();
    thankYouEmail.sender      = sender;
    thankYouEmail.to          = [{ email: email.trim(), name: name.trim() }];
    thankYouEmail.subject     = tySubject;
    thankYouEmail.htmlContent = tyHtml;
    await apiInstance.sendTransacEmail(thankYouEmail);
    console.log(`[Mail] ✅ Thank-you sent → ${email}`);

    /* ── 2. Notification → YOU ── */
    const { subject: notifSubject, html: notifHtml } = notificationTemplate({ name, email, message });
    const notifyEmail = new Brevo.SendSmtpEmail();
    notifyEmail.sender      = sender;
    notifyEmail.to          = [{ email: process.env.OWNER_EMAIL, name: 'Naveen' }];
    notifyEmail.subject     = notifSubject;
    notifyEmail.htmlContent = notifHtml;
    await apiInstance.sendTransacEmail(notifyEmail);
    console.log(`[Mail] ✅ Notification sent → ${process.env.OWNER_EMAIL}`);

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[Mail] ❌ Brevo error:', err?.response?.body || err.message);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

/* ── Health check ── */
app.get('/health', (_, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`[Server] 🚀 Running on port ${PORT}`));