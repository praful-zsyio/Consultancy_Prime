const InquiryModel = require('../models/inquiry.model');
const { sendInquiryNotification } = require('../services/email.service');

class InquiryController {
  // POST /api/inquiries
  static async createInquiry(req, res, next) {
    try {
      const { name, email, company, phone, service, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Name, email, and requirement message are required.'
        });
      }

      const inquiryId = InquiryModel.create({
        name,
        email,
        company,
        phone,
        service,
        message
      });

      // Send email asynchronously via Resend (does not block client response)
      sendInquiryNotification({ name, email, company, phone, service, message }).catch(err => {
        console.error('[InquiryController] Email send background error:', err);
      });

      return res.status(201).json({
        success: true,
        message: 'Inquiry received successfully! Our staffing team will contact you shortly.',
        inquiryId
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/inquiries
  static getInquiries(req, res, next) {
    try {
      const inquiries = InquiryModel.findAll();
      return res.json(inquiries);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/inquiries/:id
  static getInquiryById(req, res, next) {
    try {
      const inquiry = InquiryModel.findById(req.params.id);
      if (!inquiry) {
        return res.status(404).json({ success: false, error: 'Inquiry not found' });
      }
      return res.json(inquiry);
    } catch (error) {
      next(error);
    }
  }

  // DELETE /api/inquiries/:id
  static deleteInquiry(req, res, next) {
    try {
      const deleted = InquiryModel.deleteById(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Inquiry not found' });
      }
      return res.json({ success: true, message: 'Inquiry deleted successfully' });
    } catch (error) {
      next(error);
    }
  }

  // DELETE /api/inquiries (clear all)
  static deleteAllInquiries(req, res, next) {
    try {
      const count = InquiryModel.deleteAll();
      return res.json({ success: true, message: `All ${count} inquiries cleared.` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InquiryController;

