// Site-wide identity. Edit these values first — the header, footer, contact
// card, SEO tags and JSON-LD all read from here.
export const site = {
  name: 'Harshal Jain',
  role: 'Software Developer | Web Developer',
  // Your live domain. Also set `site` in astro.config.mjs (or PUBLIC_SITE_URL) for the sitemap.
  url: 'https://example.com',
  contactEmail: 'harshaljain0325@gmail.com',
  tagline: 'Building Responsive Web Experiences and Practical Software Solutions',
  description: 'Software Developer with experience in WordPress, PHP, Python, React, SQL, and web application development.',
  // Shown under your name in the footer — availability, location, or anything short.
  status: 'Open to Full-Time Opportunities and Freelance Work · Indore, India',
  ogImage: '/assets/brand/og-image.png',
  linkedin: 'https://www.linkedin.com/in/harshal-jain-9b4683261',
  github: 'https://github.com/jainharshal25',
  gitlab: '',
  locale: 'en-US',
} as const;

// Page copy. Replace these strings with your own story; section components
// should only describe the layout and should not contain personal copy.
export const pageCopy = {
  hero: "I'm a Software Developer specializing in web development, WordPress, PHP, and backend technologies. With professional web development experience and a foundation in Python, Java, SQL, and AI/ML projects, I build responsive, maintainable, and user-focused digital solutions.",
  capabilities: {
    primary: { kicker: 'FRONTEND DEVELOPMENT', title: 'Interfaces Built for the Web', lede: 'I use HTML, CSS, JavaScript, React, Next.js, and Canva to create responsive, clear, and engaging digital experiences.' },
    secondary: { kicker: 'BACKEND & DATA', title: 'Applications Built to Work', lede: 'I work with Django, Python, PyTorch, Streamlit, TensorFlow, SQL, PostgreSQL, and MongoDB to build practical backend and data solutions.' },
  },
  projects: { kicker: 'SELECTED WORK', title: 'Projects and Practical Experience', lede: 'A selection of web development, database, and application development projects showcasing my technical skills and approach to solving practical problems.' },
  experience: { kicker: 'CAREER JOURNEY', title: 'Professional Experience' },
  contact: { kicker: "LET'S CONNECT", title: 'Have a Project or Opportunity in Mind?', lede: "I'm open to software development opportunities, web development projects, and collaborations where I can contribute my technical skills, learn new technologies, and build useful digital solutions. Feel free to connect with me." },
} as const;

// Round social buttons in the footer. Remove any you don't use; icons live in
// public/icons/social/ and take the current text colour.
export const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/harshal-jain-9b4683261', icon: '/icons/social/linkedin.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/_harshallll', icon: '/icons/social/instagram.svg' },
  { name: 'WhatsApp', href: 'https://wa.me/917987493818', icon: '/icons/social/whatsapp.svg' },
] as const;
