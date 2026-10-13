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
];
