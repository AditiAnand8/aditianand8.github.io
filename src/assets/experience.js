// experience.js
export const experiences = [
  {
    company: 'Rivian',
    location: 'Plymouth, MI',
    position: 'Staff Software Engineer',
    duration: 'August 2026 – Present',
    type: 'Full-time',
    description: [
      'Technical Leadership: Technical lead with 3 direct reports for Rivian’s real-time replenishment platform — the system that keeps every shop and assembly line supplied across the R2 production program.',
      'Replenishment Architecture: Architected a replenishment engine that subscribes to the plant’s manufacturing event stream over NATS, computes shop- and line-level material demand for the entire factory in real time, and drives fulfillment through SAP ERP and FLP.',
      'Platform Ownership: Own architecture and roadmap for backend services on Flask, Kafka, NATS, and Aurora; define service boundaries, data contracts, and reliability targets adopted by partner engineering teams.',
      'AGV Coordination: Lead engineering for AGV (automated guided vehicle) coordination on the plant floor, using NATS for low-latency command and telemetry messaging and Kafka for durable event streaming across material-handling and bin replenishment workflows.',
      'Systems Integration: Own the integration layer across SAP, MARS, Boomi, and Bill of Material systems — authentication, permission-aware data synchronization, and freshness guarantees — replacing brittle point-to-point syncs with event-driven pipelines on Kafka and NATS.',
      'Engineering Standards: Set engineering standards for testing, observability, and safe rollout across the supply chain engineering group; lead design reviews and incident response.',
      'People Leadership: Manage and develop 3 direct reports through 1:1s, career growth planning, hiring input, and code review standards; mentor senior and mid-level engineers across the broader group.',
      'Operations Partnership: Partner directly with manufacturing and plant operations leadership to translate operational requirements into a prioritized technical roadmap.'
    ],
    logo: 'https://rivian.com/favicon.ico',
    url: 'https://rivian.com/'
  },
  {
    company: 'Rivian',
    location: 'Plymouth, MI',
    position: 'Senior Software Engineer',
    duration: 'June 2025 – August 2026',
    type: 'Full-time',
    description: [
      'Cross-Functional Leadership: Led a cross-functional team of 3 engineers, QA, and a product manager to build and maintain Rivian’s supply chain management applications, ensuring uninterrupted manufacturing operations.',
      'Backend Architecture: Architected and implemented backend services using Flask, AWS, Kafka, NATS, and Aurora DB, ensuring scalability and data integrity across supply chain integrations and AGV material-handling workflows.',
      'ERP & Inventory Sync: Partnered with SAP, MARS, Boomi, and Bill of Material systems to synchronize component inventory and automate bin replenishment workflows for multiple Rivian vehicle lines.',
      'Reliability Impact: Delivered technical strategies that reduced parts shortage incidents by 20% and improved system uptime to 99.9%.',
      'Mentorship Culture: Built a culture of continuous learning through regular code reviews, design sessions, and mentorship initiatives.'
    ],
    logo: 'https://rivian.com/favicon.ico',
    url: 'https://rivian.com/'
  },
  {
    company: 'Lumenairi (Ross MAP)',
    location: 'Ann Arbor, MI',
    position: 'MBA Multidisciplinary Action Project',
    duration: 'Spring 2026',
    type: 'Consulting',
    description: [
      'GTM Strategy: Served on a 6-person MBA team that delivered a go-to-market strategy for Lumenairi, a B2B authentic conversational video platform.',
      'Market Research: Ran primary and secondary research including 12 industry interviews and a Michigan MBA survey on trust and authenticity in online content.',
      'Vertical Prioritization: Screened 34 candidate verticals down to 2 priority paths — Knowledge Library (primary) and Value-Based Care (secondary) — with pricing, channel, and multi-year outreach recommendations.'
    ],
    logo: 'https://lh7-us.googleusercontent.com/uzC-g_HHg3WYnRQHEKrJ2Qkp4jzQfL72Di91WZiAEmWAN_Donub019AWIl4zZU4dEYkPOvi38mEFENlefh6dT3gLvA2eiazlbpk-N-FC5EJSH9kANuTAgjXxIBMxk_oj9ibumw6CIBhTIDEuypaE9gc',
    url: 'https://michiganross.umich.edu/'
  },
  {
    company: 'University of Michigan',
    location: 'Ann Arbor, MI',
    position: 'Senior Software Engineer',
    duration: 'September 2019 – June 2025',
    type: 'Full-time',
    description: [
      'Technical Leadership: Technical lead for multiple large-scale web platforms — including Problem Roulette, Atlas, and Michigan Online — serving over 150K users annually. Led design and development of complex web applications in Django and Python.',
      'Team Leadership and Mentorship: Led and mentored a team of 4 developers and 1 designer, overseeing sprint planning, code reviews, and intern performance evaluations.',
      'Hiring and Talent Development: Recruited full-time engineers and student developers, and created a structured onboarding and mentoring framework for the group.',
      'Problem Roulette: Technical lead for the university’s exam preparation tool, supporting 8,000+ active users and 1.5M questions served. Improved API performance by over 50% and onboarded 2,500 new users.',
      'Atlas Schedule Builder: Led development and optimization of a course planning platform serving 100K+ unique users, actively used by 35K graduate and undergraduate students. Directed data-driven feature enhancements that lifted engagement and retention by 15%.',
      'UI Modernization: Redesigned UI components in Vue.js for Atlas and Problem Roulette, raising user satisfaction ratings by 15%.',
      'Backend & Architecture: Reduced page load times by 40% through algorithm optimization, database tuning, and caching. Transitioned legacy systems to a microservices architecture, improving system performance by 30%.',
      'Delivery & Accessibility: Implemented automated testing, CI/CD pipelines, and monitoring that reduced deployment time by 40%; championed accessibility compliance (WCAG) university-wide.'
    ],
    logo: 'https://umich.edu/skins/um2013/media/images/umich-logo.png',
    url: 'https://umich.edu/'
  },
  {
    company: 'Vested',
    location: 'Remote',
    position: 'Technical Advisor',
    duration: 'August 2024 – March 2025',
    type: 'Consulting',
    description: [
      'Startup Advisory: Led the creation of a dating app from concept to launch, aligning technical execution with the startup’s vision and market goals.',
      'MVP Delivery: Directed MVP design and development, guiding engineers and designers to deliver a scalable, production-ready product.'
    ],
    logo: '',
    url: ''
  },
  {
    company: 'Purdue University',
    location: 'West Lafayette, Indiana',
    position: 'Full Stack Developer',
    duration: 'April 2016 – September 2019',
    type: 'Full-time',
    description: [
      'Intern Supervision: Recruited and supervised 10+ software development interns, providing mentorship, task assignments, and code reviews, resulting in a 30% increase in project efficiency and intern skill development.',
      'Accessibility Standards: Established and enforced W3C accessibility standards (WCAG) across studio applications, improving compliance by 40% and streamlining onboarding for new developers.',
      'Agile Leadership: Played key roles as Product Owner and Scrum Master, managing sprint planning, backlog prioritization, and retrospectives to ensure 100% on-time delivery of multiple high-impact projects.',
      'Stakeholder Alignment: Worked closely with project managers and stakeholders to align technical requirements with business goals, achieving a 20% improvement in project success rate.',
      'Azure Solutions: Designed, implemented, and maintained educational studio tools on Microsoft Azure, enhancing scalability and reliability by 35% through efficient use of virtual networks, virtual machines, and Azure SQL databases.'
    ],
    logo: 'https://www.purdue.edu/home/wp-content/themes/purdue-home-theme/imgs/PU-H-light.svg',
    url: 'https://www.purdue.edu/'
  },
  {
    company: 'New Century Software',
    location: 'Fort Collins, Colorado',
    position: 'Software Engineer',
    duration: 'May 2014 – March 2016',
    type: 'Full-time',
    description: [
      'Product Development: Led the development of the product maintenance portal and pipeline reporting system, improving operational efficiency by 30% and reducing processing times by 20%.',
      'Business Intelligence: Delivered 50+ interactive business intelligence dashboards and data visualization reports, enabling clients to make faster, data-driven decisions.',
      'Project Delivery: Managed 5+ concurrent projects with evolving priorities, achieving a 100% on-time delivery rate and ensuring high client satisfaction.',
      'Requirements & UX: Gathered product requirements from 10+ clients, translating them into technical solutions that improved user satisfaction scores by 25%.'
    ],
    logo: 'https://www.newcenturysoftware.com/wp-content/uploads/2019/11/NewCentury-MISTRAS-Cobranded-Logo.png',
    url: 'https://www.newcenturysoftware.com/'
  },
  {
    company: 'University of Wyoming',
    location: 'Laramie, WY',
    position: 'Graduate Teaching Assistant',
    duration: 'August 2012 – May 2014',
    type: 'Part-time',
    description: [
      'Teaching & Mentorship: Taught and mentored over 100 students in Java programming, emphasizing object-oriented programming concepts.',
      'Laboratory Support: Managed lab sessions, graded assignments, and provided individualized support for student success.'
    ],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wESwKA05bc2F2g1EZQZ7-LNKRfMBKvh7FQ&s',
    url: 'http://uwyo.edu/'
  },
  {
    company: 'University of Wyoming',
    location: 'Laramie, WY',
    position: 'Research Assistant',
    duration: 'January 2012 – August 2012',
    type: 'Part-time',
    description: [
      'VR Research: Conducted research on 50+ participants in a Virtual Reality lab, analyzing immersive experiences’ effects on human behavior.',
      'Systems Work: Optimized C++ functions for the Virtual Reality User Interface (V.R.U.I.) and contributed to a bimanual application prototype.'
    ],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wESwKA05bc2F2g1EZQZ7-LNKRfMBKvh7FQ&s',
    url: 'http://uwyo.edu/'
  }
]
