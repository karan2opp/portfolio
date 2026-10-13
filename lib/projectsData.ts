export const projectsData = [
  {
    id: 'smartbin',
    title: 'SmartBin – Crowd-Mapped Public Dustbin Finder',
    category: 'Civic Tech · Hackathon',
    year: '2026',
    tags: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'AWS', 'Amazon Cognito', 'Amazon S3', 'OpenAI API', 'Zod'],
    description: 'A crowd-mapped directory of public dustbins in Indian cities, with AI-verified photo submissions and an admin dashboard. Submitted to the WeMakeDevs × AWS Environmental Hacks.',
    image: '/smartbin.svg',
    github: 'https://github.com/Dhirenderchoudhary/Smartbin',
    live: 'https://l60qdgkh8a.execute-api.ap-south-1.amazonaws.com',
    color: '#47ff9a',
    bullets: [
      'Led a team of 3 to build and submit SmartBin to the WeMakeDevs × AWS Environmental Hacks (Waste & Energy track), and owned the backend: an Express/TypeScript REST API (/v1/*) on AWS EC2 behind API Gateway, backed by PostgreSQL on Amazon RDS with Drizzle ORM and Zod request validation.',
      'Implemented authentication with Amazon Cognito (JWT verification via aws-jwt-verify) and a direct-to-S3 photo pipeline using short-lived presigned URLs, so images never pass through the API server.',
      'Designed a nine-layer anti-fake defense enforced on the API: live-camera-only uploads, file-type and byte-level image validation, photo ownership checks, a 15 m duplicate radius, monthly per-user limits, and missing-bin reports only within 20 m. Passes 15/15 automated anti-fake checks.',
      'Added an AI photo check with the OpenAI vision API that separates real public bins from fakes, with a provider switch to Amazon Bedrock. On a 20-photo hand-labelled evaluation it blocked 12/12 fakes and accepted 6/6 clear bins (95% accuracy, ~1.2 s per photo).',
      'Deployed to AWS with secrets in Systems Manager Parameter Store and an IAM role instead of access keys, plus OpenStreetMap fallbacks if Amazon Location Service is unavailable.'
    ]
  },
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
