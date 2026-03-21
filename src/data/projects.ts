export type ProjectSlug = 'sge' | 'portfolio' | 'commitlog' | 'entrelinhas';

export type Project = {
  slug: ProjectSlug;
  coverSrc: string;
  tech: string[];
  links: {
    demo: string;
    repo: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'sge',
    coverSrc: '/images/sge-preview.webp',
    tech: ['PHP 8.2', 'MySQL', 'Docker', 'Bootstrap', 'MVC', 'PHPMailer', 'JavaScript', 'PDO', 'HTML5', 'CSS3', 'AJAX', 'Fetch API'],
    links: {
      demo: 'https://github.com/bryancalvarenga/unifio-sga-app',
      repo: 'https://github.com/bryancalvarenga/unifio-sga-app',
    },
  },
  {
    slug: 'portfolio',
    coverSrc: '/images/portfolio-preview.webp',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Formspree'],
    links: {
      demo: 'https://www.bryanalvarenga.com.br',
      repo: 'https://github.com/bryancalvarenga/portfolio',
    },
  },
  {
    slug: 'commitlog',
    coverSrc: '/images/commitlog-preview.webp',
    tech: ['Next.js', 'React', 'TypeScript', 'MDX', 'Tailwind CSS', 'Giscus'],
    links: {
      demo: 'https://commitlog.com.br',
      repo: 'https://github.com/bryancalvarenga/commit-log',
    },
  },
  {
    slug: 'entrelinhas',
    coverSrc: '/images/entrelinhas-preview.webp',
    tech: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'JWT', 'Claude Code', 'AI Agents', 'Monorepo'],
    links: {
      demo: 'https://entrelinhas-chi.vercel.app',
      repo: 'https://github.com/bryancalvarenga/entrelinhas',
    },
  },
];
