export const projectsData = [
  {
    id: 'abhyas',
    title: 'Abhyas – AI-Powered Exam Platform',
    category: 'SaaS Platform',
    year: '2026',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'OpenAI API'],
    description: 'A comprehensive AI-powered assessment platform featuring automatic grading and a multi-tenant architecture.',
    image: '/ai_mock_exam.png',
    github: 'https://github.com/karan2opp/Abhyas',
    live: 'https://abhyas.karanop.in',
    color: '#47a1ff',
    bullets: [
      'Architected and developed a full-stack assessment platform from scratch, successfully onboarding and actively serving 20+ real users.',
      'Integrated the OpenAI API to build an intelligent evaluation engine capable of automatically grading subjective and coding answers, handling partial marking, and interpreting image-based questions.',
      'Engineered a secure multi-tenant authorization system using JWT and Bcrypt with dedicated protected portals for Superadmins, Admins, Teachers, and Students.',
      'Developed an optimized batch-processing pipeline in Node.js/Express to handle concurrent AI grading requests, ensuring fast and reliable feedback for bulk student submissions.',
      'Built a highly responsive frontend with Next.js, Tailwind CSS, Shadcn UI, and Framer Motion; implemented Zustand for state management and Zod for strict client-side data validation.'
    ]
  },
  {
    id: 'ginnie-ai',
    title: 'Ginnie AI – AI Workflow Automation SaaS',
    category: 'AI Assistant',
    year: '2026',
    tags: ['Next.js', 'Node.js', 'OpenAI', 'Corsair SDK', 'PostgreSQL', 'Razorpay'],
    description: 'An AI workspace that acts as an autonomous assistant for email drafting and calendar scheduling natively.',
    image: '/ginnie_ai.png',
    github: 'https://github.com/karan2opp/Ginnie',
    live: 'https://ginnieai.karanop.in',
    color: '#ffb847',
    bullets: [
      'Built a unified AI workspace acting as an autonomous assistant, leveraging the Corsair SDK to fetch, categorize, and draft responses to emails and schedule meetings natively.',
      'Developed an AI tool-calling pipeline using OpenAI and Corsair\'s agentic tools to securely execute cross-platform tasks from a single chat interface, eliminating context-switching friction.',
      'Created comprehensive interactive API documentation using Scalar OpenAPI, improving maintainability and developer onboarding for the platform\'s backend services.',
      'Configured robust server-side security via middleware-protected routes and handled payment verifications securely through Razorpay webhooks.'
    ]
  },
  {
    id: 'alhnkar',
    title: 'Alhnkar – Full-Stack E-Commerce Platform',
    category: 'E-Commerce',
    year: '2025',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Zustand', 'Razorpay', 'Cloudinary', 'Resend'],
    description: 'A modern full-stack e-commerce application with secure checkout, automated emails, and review management.',
    image: '/Alhnkar.png',
    github: 'https://github.com/karan2opp/Alhnkar',
    live: 'https://alhnkar.karanop.in',
    color: '#e8ff47',
    bullets: [
      'Architected and deployed a full-stack e-commerce application with a React.js frontend and Node.js/Express backend, ensuring a responsive user experience and scalable API design.',
      'Integrated Razorpay to process secure checkout transactions, implementing server-side cryptographic signature verification to prevent fraudulent orders.',
      'Built robust JWT/bcrypt authentication, Cloudinary-based image storage, and automated transactional emails via the Resend API.',
      'Developed comprehensive backend modules to manage carts, orders, user reviews, and shipment tracking.'
    ]
  },
  {
    id: 'local-pro',
    title: 'Local Pro',
    category: 'Service Marketplace',
    year: '2025',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: 'A platform where users can discover and book nearby services. Includes bookings, authentication, and provider dashboards.',
    image: '/localpro.png',
    github: 'https://github.com/karan2opp/Local-Services-Booking-platform',
    live: 'https://local-services-booking-platform-1.onrender.com/',
    color: '#ff6b6b',
    bullets: [
      'A platform where users can discover and book nearby services.',
      'Includes bookings, authentication, and provider dashboards.'
    ]
  }
];
