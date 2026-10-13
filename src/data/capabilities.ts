// What you do — two groups of six cards. Each card names the proof behind it.
export type Capability = { title: string; body: string; proof: string };

export const primary: Capability[] = [
  { title: 'HTML', body: 'Structuring accessible, semantic, and well-organized web pages for clear content and reliable browser behavior.', proof: 'Responsive website development and semantic page layouts.' },
  { title: 'CSS', body: 'Creating responsive layouts, visual systems, animations, and polished interfaces across screen sizes.', proof: 'Custom layouts, responsive styling, and cross-device testing.' },
  { title: 'JavaScript', body: 'Adding interactive behavior, dynamic content, and practical browser-side functionality to web experiences.', proof: 'Interactive interfaces, form integrations, and frontend features.' },
  { title: 'React', body: 'Building reusable components and maintainable interfaces for modern web applications.', proof: 'Component-based development and frontend project work.' },
  { title: 'Next.js', body: 'Developing structured React applications with modern routing, rendering, and scalable frontend patterns.', proof: 'React fundamentals and modern web application development.' },
  { title: 'Canva', body: 'Creating visual assets, presentation graphics, and design material that support digital products and communication.', proof: 'Portfolio visuals, social assets, and project presentation work.' },
];

export const secondary: Capability[] = [
  { title: 'Django', body: 'Building structured Python web applications with clear models, views, routing, and backend workflows.', proof: 'Python web development and project-based Django experience.' },
  { title: 'Python', body: 'Writing backend logic, automation scripts, data processing tasks, and application services.', proof: 'Python programming practice, automation, and application development.' },
  { title: 'PyTorch', body: 'Exploring deep-learning workflows, tensor computation, and model experimentation in Python.', proof: 'Artificial Intelligence specialization and project-based machine-learning work.' },
  { title: 'Streamlit', body: 'Turning Python data and machine-learning work into interactive applications and useful demonstrations.', proof: 'Python-based prototypes and AI/ML project presentation.' },
  { title: 'TensorFlow', body: 'Working with machine-learning concepts, model development, and AI experimentation.', proof: 'Computer Science - Artificial Intelligence background and practical projects.' },
  { title: 'SQL', body: 'Writing queries and managing relational data for reliable application features and reporting.', proof: 'CRUD operations, data retrieval, joins, and database-driven development.' },
  { title: 'PostgreSQL', body: 'Designing and working with structured relational databases for scalable backend applications.', proof: 'Database integration and backend project development.' },
  { title: 'MongoDB', body: 'Working with document-oriented data for flexible application models and backend services.', proof: 'Project-based database development and application data management.' },
];
