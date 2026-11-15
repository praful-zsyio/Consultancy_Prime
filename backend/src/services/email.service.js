const { Resend } = require('resend');

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

/**
 * Send inquiry notification email via Resend
 */
async function sendInquiryNotification({ name, email, company, phone, service, message }) {
  if (!resend) {
    console.warn('[Resend] RESEND_API_KEY is not set. Email notification skipped.');
    return { success: false, reason: 'API_KEY_NOT_CONFIGURED' };
  }

  const toEmail = process.env.NOTIFICATION_EMAIL || 'info@primestaffingservice.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0b0b0d; color: #ffffff; border: 1px solid #27272a; border-radius: 12px;">
      <div style="border-bottom: 2px solid #ec2029; padding-bottom: 15px; margin-bottom: 20px;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Client Inquiry Received</h2>
        <p style="color: #ec2029; margin: 5px 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Prime Staffing Services Private Limited</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; width: 140px; font-weight: bold;">Full Name:</td>
          <td style="padding: 8px 0; color: #ffffff;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #ec2029; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0; color: #ffffff;">${phone ? `<a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-weight: bold;">Company:</td>
          <td style="padding: 8px 0; color: #ffffff;">${company || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a1a1aa; font-weight: bold;">Service Required:</td>
          <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${service || 'General Inquiry'}</td>
        </tr>
      </table>

      <div style="background-color: #18181b; padding: 16px; border-radius: 8px; border-left: 4px solid #ec2029; margin-bottom: 20px;">
        <p style="margin: 0 0 6px; color: #a1a1aa; font-size: 12px; font-weight: bold; text-transform: uppercase;">Requirement Details:</p>
        <p style="margin: 0; color: #f4f4f5; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${message}</p>
      </div>

      <div style="font-size: 11px; color: #71717a; border-top: 1px solid #27272a; padding-top: 15px; text-align: center;">
        Sent automatically from Prime Staffing Services Portal · Rau, Indore (M.P.)
      </div>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: `Prime Staffing Inquiry <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Inquiry: ${name} - ${service || 'General Staffing'}`,
      html: htmlContent
    });
    console.log('[Resend] Email sent successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('[Resend] Error sending email:', err);
    return { success: false, error: err.message };
  }
}

module.exports = { sendInquiryNotification };
