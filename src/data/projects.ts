// Your featured work. Add another entry here when you are ready to expand the portfolio.
export type Project = { slug: string; index: number; name: string; status: 'LIVE' | 'IN PROGRESS';
  pitch: string; facts: [string, string, string]; role: string; href?: string; cover: string };

export const projects: Project[] = [
  {
    slug: 'food-catering-website',
    index: 1,
    name: 'Food Catering Website',
    status: 'LIVE',
    pitch: 'A responsive food catering website designed to present the catering experience, menu offering, and services in a clear, engaging interface.',
    facts: ['Web Development', 'Responsive Design', 'Food Catering'],
    role: 'Web Developer',
    href: 'https://food-catering.ios-templates.com/',
    cover: '/projects/project1.png',
  },
  {
    slug: 'Legal Lawyer-website',
    index: 2,
    name: 'Legal Lawyer Website',
    status: 'LIVE',
    pitch: 'A responsive Law legal lawyer  website designed to present the Overview of firm.',
    facts: ['Web Development', 'Responsive Design', ' Legal Lawyer'],
    role: 'Web Developer',
    href: 'https://law-forge-firm.ios-templates.com/',
    cover: '/projects/project2.png',
  },
  {
    slug: 'pottery-studio-website',
    index: 3,
    name: 'pottery Studio Website',
    status: 'LIVE',
    pitch: 'A responsive pottery studio website designed to present the Overview of pottery making and stuffs.',
    facts: ['Web Development', 'Responsive Design', ' pottery-studio'],
    role: 'Web Developer',
    href: 'https://pottery-studio.ios-templates.com/',
    cover: '/projects/project3.png',
  },
  {
    slug: 'smart-buy-website',
    index: 4,
    name: 'smart buy website',
    status: 'LIVE',
    pitch: 'A responsive smart buy website designed to present the Overview of smart buying and stuffs.',
    facts: ['Web Development', 'Responsive Design', 'smart-buy'],
    role: 'Web Developer',
    href: 'https://smart-buy-electronics.ios-templates.com/',
    cover: '/projects/project4.png',
  },
];
