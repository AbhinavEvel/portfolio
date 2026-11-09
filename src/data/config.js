// ===== Edit your details here — whole site updates automatically =====
const PUBLIC = process.env.PUBLIC_URL || '';

export const profile = {
  name: 'Abhinav Saini',
  role: 'Java Full Stack Developer',
  headline: 'I build secure, scalable web backends and apps with Java, Spring Boot & React.',
  location: 'Noida, India',
  email: 'abhinavsaini697@gmail.com',
  phone: '+91 7814980141',
  whatsapp: 'https://wa.me/917814980141',
  github: 'https://github.com/AbhinavEvel',
  // TODO: replace with your profile URL (https://www.linkedin.com/in/your-id) if you have it
  linkedin: 'https://www.linkedin.com/in/abhinav-saini-269a03202/',
  linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7519699930127495168/',
  cv: `${PUBLIC}/files/Abhinav_Saini_Resume_Java.pdf`,
};

export const services = [
  { icon: 'fa-server', title: 'Spring Boot REST APIs', text: 'Clean, documented REST APIs with DTOs, validation and centralized exception handling, tested in Postman.' },
  { icon: 'fa-laptop-code', title: 'Full Stack Web Apps', text: 'End-to-end apps with a React.js frontend and Spring Boot backend, role-based dashboards and protected routes.' },
  { icon: 'fa-lock', title: 'Authentication & Security', text: 'JWT authentication, Spring Security and role-based authorization for your APIs and admin panels.' },
  { icon: 'fa-sitemap', title: 'Microservices', text: 'Independent services with Spring Cloud Eureka discovery, communicating over HTTP/REST.' },
  { icon: 'fa-database', title: 'Database Design', text: 'Relational schemas in MySQL with Spring Data JPA / Hibernate, plus MongoDB when it fits better.' },
  { icon: 'fa-bug', title: 'Bug Fixing & API Integration', text: 'Debugging across frontend and backend, third-party API integration and code clean-up.' },
];

export const skillGroups = [
  { title: 'Java & Backend', items: ['Java', 'OOP', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Spring Cloud (Eureka)', 'Microservices', 'REST APIs', 'JWT', 'Maven', 'Multithreading'] },
  { title: 'Frontend', items: ['React.js', 'React Router', 'Redux Toolkit', 'Redux-Saga', 'Context API', 'Axios', 'Material UI', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Database', items: ['MySQL', 'MongoDB'] },
  { title: 'Tools & Fundamentals', items: ['Git & GitHub', 'Postman', 'Data Structures & Algorithms', 'OS Fundamentals', 'Debugging', 'C++'] },
  { title: 'Also worked with', items: ['Node.js', 'Express.js'] },
];

export const projects = [
  {
    title: 'RaktSetu — Blood Donation Management Platform',
    image: `${PUBLIC}/img/raktsetu.png`,
    year: '2026',
    text: 'Full-stack platform with Admin, Donor and Patient roles, each with its own dashboard, on a 9-table SQL database. I owned the Patient, Blood Request and Blood Stock modules, JWT authentication and role-based authorization.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React.js', 'Axios'],
    live: 'https://rakt-setu-production.vercel.app/',
    github: 'https://github.com/AbhinavEvel/RaktSetu',
    post: profile.linkedinPost,
    featured: true,
  },
  {
    title: 'Currency Exchange & Conversion Microservices',
    image: `${PUBLIC}/img/microservices.png`,
    year: '2026',
    text: 'Independent Exchange, Conversion and User services registered on a Eureka discovery server, secured with stateless JWT and a custom filter, persisted with Spring Data JPA.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'JWT', 'JPA', 'Maven'],
    github: 'https://github.com/AbhinavEvel/currency-exchange-microservices',
  },
  {
    title: 'E-Commerce Website (DUCAT)',
    image: `${PUBLIC}/img/webpic.png`,
    year: '',
    text: 'Users can log in, browse products, add to cart and buy. State handled with Redux Toolkit and Redux-Saga, UI built with Material UI components.',
    tech: ['React.js', 'Redux Toolkit', 'Redux-Saga', 'Material UI', 'Node.js', 'MongoDB'],
    github: 'https://github.com/vishus66/DUCAT-BACKEND',
  },
];

export const experience = [
  { title: 'Frontend Developer (React.js) — Internship', org: 'ZeroIt Solution, Mohali', date: 'Aug 2022 – Jan 2023',
    points: ['Built responsive pages with HTML, CSS and JavaScript, and dynamic React.js UI features with state management.', 'Developed landing pages, forms and interactive elements, working closely with the design team.'] },
];

export const education = [
  { title: 'PGCP in Advanced Computing (PGCP-AC)', org: 'C-DAC Noida', date: 'Feb 2026 – Aug 2026', score: '74.38%' },
  { title: 'B.Tech, Computer Science & Engineering', org: 'Guru Nanak Dev Engineering College, Ludhiana', date: '2019 – 2023', score: 'CGPA 7.4' },
  { title: 'Intermediate (PCM)', org: 'Kendriya Vidyalaya No.1 R.C.F, Hussainpur', date: '2018 – 2019', score: '64%' },
];
