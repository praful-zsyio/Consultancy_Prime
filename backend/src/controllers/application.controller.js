const ApplicationModel = require('../models/application.model');

class ApplicationController {
  // POST /api/applications
  static createApplication(req, res, next) {
    try {
      const { name, email, phone, experience, skills, roleApplied, resumeNote } = req.body;

      if (!name || !email || !phone) {
        return res.status(400).json({
          success: false,
          error: 'Name, email, and phone number are required.'
        });
      }

      const applicationId = ApplicationModel.create({
        name,
        email,
        phone,
        experience,
        skills,
        roleApplied,
        resumeNote
      });

      return res.status(201).json({
        success: true,
        message: 'Application recorded! Our recruitment team will review your profile.',
        applicationId
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/applications
  static getApplications(req, res, next) {
    try {
      const applications = ApplicationModel.findAll();
      return res.json(applications);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/applications/:id
  static getApplicationById(req, res, next) {
    try {
      const application = ApplicationModel.findById(req.params.id);
      if (!application) {
        return res.status(404).json({ success: false, error: 'Application not found' });
      }
      return res.json(application);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ApplicationController;

