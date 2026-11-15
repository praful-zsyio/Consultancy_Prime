// ─── Brand Constants for Prime Staffing Services Private Limited ───────────────────────────
import imgManpower from '../assets/services/manpower_staffing.jpeg';
import imgRecruitment from '../assets/services/office_recruitment.jpeg';
import imgIndustrial from '../assets/services/industrial_technical.jpeg';
import imgSkills from '../assets/services/electrical_engineering.jpeg';
import imgIT from '../assets/services/manufacturing_precision.jpeg';

export const BRAND = {
  name:          'Prime Staffing Services Private Limited',
  tagline:       'Skills · Talent · Staff',
  short:         'Prime Staffing',
  abbr:          'PSS',
  url:           'https://primestaffing.in',
  email:         'contact@primestaffing.in',
  phone:         '9926572625',
  contactPerson: 'Vijay masani',
  estYear:       '2021',
  address:  `S/O: Shivnarayan Mandle
1170, Station Road, Rau, Indore
Rangwasa
Rangwasa
Indore, Madhya Pradesh – 453331`,
};

export const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Services',     path: '/services' },
  { label: 'Skills',       path: '/skills' },
  { label: 'Industries',   path: '/industries' },
  { label: 'About Us',     path: '/about' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact',      path: '/contact' },
];

export const SERVICES = [
  {
    id: 1,
    icon: '👥',
    title: 'General Staffing',
    badge: 'Core Service',
    desc: 'Structured, reliable commercial and industrial workforce deployment. From warehouse, logistics, and frontline personnel to administrative support, we ensure steady, scalable workforce operations.',
    image: imgManpower,
    features: [
      'Rapid large-scale workforce deployment',
      'Full regulatory and payroll compliance',
      'Attendance and productivity management'
    ]
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Recruitment Solutions',
    badge: 'Popular',
    desc: 'Strategic talent acquisition across technical, executive, and domain-specialist roles. We map industry talent, pre-screen candidates rigorously, and deliver high-retention permanent placements.',
    image: imgRecruitment,
    features: [
      'Customized candidate sourcing & vetting',
      'Accelerated 72-hour shortlist turnaround',
      'Replacement warranty on permanent placements'
    ]
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Flexi Manpower',
    badge: 'On-Demand',
    desc: 'Agile on-demand temporary and contract workforce tailored for seasonal peaks, specialized manufacturing runs, and agile production schedules without long-term overhead liabilities.',
    image: imgIndustrial,
    features: [
      'Flexible ramp-up and ramp-down capability',
      'Minimized statutory and idle workforce liability',
      'Managed contract renewals and site supervision'
    ]
  },
  {
    id: 4,
    icon: '💻',
    title: 'IT Staffing',
    badge: 'Specialized',
    desc: 'Contract and permanent staffing solutions for IT infrastructure, systems engineering, technical helpdesk, database administration, and enterprise technology support.',
    image: imgIT,
    features: [
      'Pre-evaluated technical and system engineers',
      'Rapid deployment for project-based tech contracts',
      'Dedicated IT support and infrastructure talent'
    ]
  },
  {
    id: 5,
    icon: '🎓',
    title: 'Skill Development',
    badge: 'Government Aligned',
    desc: 'Industry-tailored practical skill enhancement, technical upskilling, and apprenticeship programs (including NAPS & NATS frameworks) bridging the employability gap for emerging talent.',
    image: imgSkills,
    features: [
      'Curriculum tailored to real shopfloor & tech demands',
      'Hands-on vocational & technical capability training',
      'Government certified apprentice and skill pipelines'
    ]
  },
];

export const SKILLS_PILLARS = [
  {
    id: 1,
    icon: '💻',
    title: 'IT & Technical Infrastructure',
    desc: 'Systems administration, network support, cloud infrastructure (AWS/Azure), database maintenance, and technical helpdesk capabilities.',
    tags: ['SysAdmin', 'Cloud & DevOps', 'SQL/DBA', 'Network Support', 'ITIL Helpdesk'],
  },
  {
    id: 2,
    icon: '🏭',
    title: 'Manufacturing & Production',
    desc: 'CNC/VMC operators, assembly line technicians, machine maintenance, quality control, and shopfloor supervisors aligned with industrial manufacturing requirements.',
    tags: ['CNC', 'VMC', 'Assembly', 'Quality', 'Maintenance'],
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Industrial & Electrical Trades',
    desc: 'Certified electricians, mechanical fitters, welders, PLC technicians, and plant operators equipped with hands-on trade training.',
    tags: ['Electrician', 'Fitter', 'Welder', 'PLC', 'Industrial'],
  },
  {
    id: 4,
    icon: '🚚',
    title: 'Logistics & Supply Chain Operations',
    desc: 'Warehouse associates, inventory handlers, dispatch coordinators, forklift operators, and distribution logistics manpower.',
    tags: ['Warehouse', 'Dispatch', 'Inventory', 'Forklift', 'Supply Chain'],
  },
  {
    id: 5,
    icon: '🩺',
    title: 'Healthcare & Technical Support',
    desc: 'Hospital assistants, pharma lab technicians, clinical support, biomedical maintenance, and administrative workforce.',
    tags: ['Clinical', 'Pharma', 'Nursing', 'Lab', 'Field Support'],
  },
];

export const INDUSTRIES = [
  { name: 'Manufacturing & Engineering', icon: '🏭' },
  { name: 'Healthcare & Pharma',         icon: '🩺' },
  { name: 'Banking & Financial Services',icon: '🏦' },
  { name: 'Retail & E-Commerce',         icon: '🛒' },
  { name: 'Oil, Gas & Energy',           icon: '⚡' },
  { name: 'Construction & Real Estate',  icon: '🏗️' },
  { name: 'Logistics & Supply Chain',    icon: '🚚' },
  { name: 'Education & Ed-Tech',         icon: '🎓' },
  { name: 'Media & Entertainment',       icon: '🎬' },
  { name: 'Hospitality & Tourism',       icon: '🏨' },
  { name: 'Automotive',                  icon: '🚗' },
];

export const STATS = [
  { value: '2021', label: 'Established',           suffix: '' },
  { value: '8000', label: 'Talents Placed',        suffix: '+' },
  { value: '450',  label: 'Partner Organizations', suffix: '+' },
  { value: '99',   label: 'Client Satisfaction',   suffix: '%' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name:   'Rajiv Nair',
    role:   'CTO, CloudNine Technologies',
    avatar: 'RN',
    rating: 5,
    quote:  'Prime Staffing filled 12 senior engineering roles within 4 weeks. The candidates weren\'t just technically brilliant — they were genuine cultural fits. Absolutely outstanding service.',
  },
  {
    id: 2,
    name:   'Dr. Meera Pillai',
    role:   'Head of HR, Apollo MedTech',
    avatar: 'MP',
    rating: 5,
    quote:  'Their specialized staffing and recruitment solutions are in a league of their own. We\'ve partnered with them and they\'ve never missed a placement deadline. Time-to-hire dropped by 45%.',
  },
  {
    id: 3,
    name:   'Vikram Khanna',
    role:   'Managing Director, InfraBuild Corp',
    avatar: 'VK',
    rating: 5,
    quote:  'Their Flexi Manpower team delivered the right workforce in record time. Truly reliable and compliant staffing services.',
  },
  {
    id: 4,
    name:   'Ananya Desai',
    role:   'VP Operations, LogiXpress India',
    avatar: 'AD',
    rating: 5,
    quote:  'General staffing with Prime Staffing transformed our logistics hiring. We scaled from 50 to 300 employees smoothly. Seamless process, consistent quality, zero drop-offs.',
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discovery Call',      desc: 'We understand your role, culture, and growth stage in depth.' },
  { step: '02', title: 'Talent Mapping',      desc: 'Our researchers identify and profile best-fit candidates from active and passive pools.' },
  { step: '03', title: 'Rigorous Screening',  desc: 'Multi-stage assessment — skills, fit, references, and background verification.' },
  { step: '04', title: 'Shortlist Delivery',  desc: 'You receive a curated shortlist within 72 hours with full candidate briefs.' },
  { step: '05', title: 'Interview Support',   desc: 'We coordinate schedules and provide structured interview frameworks.' },
  { step: '06', title: 'Offer & Onboarding',  desc: 'Offer negotiation support, joining follow-up, and 90-day success check-in.' },
];
