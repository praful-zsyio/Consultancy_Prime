const SubscriberModel = require('../models/subscriber.model');
const InquiryModel = require('../models/inquiry.model');
const ApplicationModel = require('../models/application.model');

class CompanyController {
  // GET /api/company
  static getCompanyInfo(req, res) {
    res.json({
      name: 'Prime Staffing Services Private Limited',
      tagline: 'Skills · Talent · Staff',
      short: 'Prime Staffing',
      established: 2021,
      contactPerson: 'Vijay masani',
      email: 'contact@primestaffing.in',
      phone: '9926572625',
      address: `S/O: Shivnarayan Mandle\n1170, Station Road, Rau, Indore\nRangwasa\nRangwasa\nIndore, Madhya Pradesh – 453331`,
      services: [
        'General Staffing',
        'Recruitment Solutions',
        'Flexi Manpower',
        'IT Staffing',
        'Skill Development'
      ],
      schemes: [
        {
          name: 'NAPS (National Apprenticeship Promotion Scheme)',
          governingBody: 'MSDE / NSDC',
          objective: 'Promote apprenticeship training by providing financial incentives to employers and stipend reimbursement up to 25% (or Rs. 1500/month).'
        },
        {
          name: 'NATS (National Apprenticeship Training Scheme)',
          governingBody: 'MHRD / BOAT',
          objective: 'Structured technical training for Diploma and Graduate engineers with 50% stipend reimbursement (or Rs. 4500/month).'
        },
        {
          name: 'Apprenticeship Act 1961 Compliance',
          applicability: 'Mandatory for establishments with 30+ employees (2.5% to 15% head count quota).'
        }
      ]
    });
  }

  // GET /api/health
  static getHealth(req, res) {
    res.json({
      status: 'ok',
      message: 'Prime Staffing Services Private Limited MVC Backend is operational',
      timestamp: new Date().toISOString()
    });
  }

  // GET /api/stats
  static getStats(req, res, next) {
    try {
      res.json({
        inquiries: InquiryModel.count(),
        applications: ApplicationModel.count(),
        subscribers: SubscriberModel.count()
      });
    } catch (error) {
      next(error);
    }
  }

  // POST /api/newsletter
  static subscribeNewsletter(req, res, next) {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required.' });
      }

      SubscriberModel.subscribe(email);
      res.json({ success: true, message: 'Subscribed to talent updates successfully!' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CompanyController;
