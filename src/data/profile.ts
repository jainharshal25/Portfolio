// Everything about you lives here. Replace the placeholder copy with your own;
// the sections read these arrays, so no component edits are needed.
export type Proof = { value: string; label: string };
export type Role = { role: string; org: string; period: string; place: string; summary: string; bullets: string[] };
// `logo` is optional: without one, the school's initials are shown instead.
export type School = { school: string; credential: string; period: string; logo?: string };

export const proof: Proof[] = [
  { value: '1+', label: 'Year of professional web development experience' },
  { value: '4', label: 'Frontend, backend, CMS, and database areas' },
  { value: 'B.Tech', label: 'Computer Science - Artificial Intelligence' },
  { value: 'Full Stack', label: 'Web and application development' },
];

export const experience: Role[] = [
  {
    role: 'Web Developer',
    org: 'Infinity Online Solutions',
    period: 'January 2025 - February 2026',
    place: 'Remote',
    summary: 'Worked on website development, WordPress customization, backend functionality, integrations, and ongoing website maintenance.',
    bullets: [
      'Developed and customized WordPress websites, themes, templates, and plugins using PHP, MySQL, Elementor, and WooCommerce.',
      'Integrated APIs, forms, and website functionality while troubleshooting technical issues and conducting regular website testing and maintenance.',
      'Worked on website performance optimization, responsive design, SEO enhancements, hosting and cPanel tasks, and basic Python automation where applicable.',
    ],
  },
  {
    role: 'Full Stack Development Intern',
    org: 'IBM / All Soft - Internship Program',
    period: 'February 2024 - May 2024',
    place: 'India',
    summary: 'Gained practical full-stack development experience while contributing to a pharmacy management website as part of a collaborative development team.',
    bullets: [
      'Contributed to developing website features and application functionality for a pharmacy management project.',
      'Led a team of four during project activities, coordinating task completion and collaborating on implementation.',
      'Applied programming, debugging, teamwork, and problem-solving skills while developing the project.',
    ],
  },
  {
    role: 'Academic and Personal Project Developer',
    org: 'Independent / Academic Projects',
    period: '2020 - Present',
    place: 'Indore, Madhya Pradesh, India',
    summary: 'Developed academic and practice projects to strengthen skills in web development, backend programming, databases, and application design.',
    bullets: [
      'Practiced Java, Spring Boot, Python, PHP, SQL, and web development through application-based projects.',
      'Built and explored database-driven applications involving CRUD operations, API integration, and server-side logic.',
      'Used development and AI-assisted coding tools to troubleshoot problems, improve implementation, and learn new technologies.',
    ],
  },
];

export const education: School[] = [
  { school: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore', credential: 'Bachelor of Technology (B.Tech) in Computer Science Engineering - Artificial Intelligence, with IBM', period: '2020 - 2024' },
];

export const certifications: string[] = [];
export const languages: string[] = ['English', 'Hindi'];
