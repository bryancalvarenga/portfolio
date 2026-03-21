import { getTranslations } from 'next-intl/server';

type SkillGroup = {
  key: string;
  labelKey: string;
  skills: { icon: string; label: string }[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    key: 'backend',
    labelKey: 'backend',
    skills: [
      { icon: 'devicon-php-plain', label: 'PHP' },
      { icon: 'devicon-mysql-plain', label: 'MySQL' },
      { icon: 'devicon-java-plain', label: 'Java' },
      { icon: 'devicon-python-plain', label: 'Python' },
      { icon: 'devicon-spring-plain', label: 'Spring Boot' },
    ],
  },
  {
    key: 'frontend',
    labelKey: 'frontend',
    skills: [
      { icon: 'devicon-html5-plain', label: 'HTML' },
      { icon: 'devicon-css3-plain', label: 'CSS' },
      { icon: 'devicon-javascript-plain', label: 'JavaScript' },
      { icon: 'devicon-react-original', label: 'React' },
      { icon: 'devicon-tailwindcss-plain', label: 'Tailwind' },
      { icon: 'devicon-bootstrap-plain', label: 'Bootstrap' },
    ],
  },
  {
    key: 'tools',
    labelKey: 'tools',
    skills: [
      { icon: 'devicon-docker-plain', label: 'Docker' },
      { icon: 'devicon-git-plain', label: 'Git/GitHub' },
      { icon: 'devicon-linux-plain', label: 'Linux/CLI' },
      { icon: 'devicon-vscode-plain', label: 'VS Code' },
      { icon: 'devicon-figma-plain', label: 'Figma' },
      { icon: 'devicon-trello-plain', label: 'Trello' },
    ],
  },
  {
    key: 'learning',
    labelKey: 'learning',
    skills: [
      { icon: 'devicon-nextjs-plain', label: 'Next.js' },
      { icon: 'devicon-typescript-plain', label: 'TypeScript' },
      { icon: 'devicon-laravel-plain', label: 'Laravel' },
    ],
  },
];

type SoftSkill = {
  labelKey: string;
  levelKey: 'advanced' | 'intermediate' | 'basic';
  value: number;
};

const SOFT_SKILLS: SoftSkill[] = [
  { labelKey: 'communication', levelKey: 'advanced', value: 88 },
  { labelKey: 'teamwork', levelKey: 'advanced', value: 82 },
  { labelKey: 'problemSolving', levelKey: 'advanced', value: 90 },
  { labelKey: 'continuousLearning', levelKey: 'advanced', value: 86 },
  { labelKey: 'timeManagement', levelKey: 'intermediate', value: 70 },
];

export default async function Skills() {
  const t = await getTranslations('skills');

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title">{t('title')}</h2>
        <div className="w-10 h-0.5 bg-primary mb-3" />
        <p className="text-muted text-sm mb-10">{t('sub')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical skill groups */}
          {SKILL_GROUPS.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold text-title uppercase tracking-widest mb-3 opacity-60">
                {t(group.labelKey as 'backend')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.label} className="tech-chip">
                    <i className={`${skill.icon} text-base`} />
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Soft skills */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-title uppercase tracking-widest mb-4 opacity-60">
              {t('soft')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-2xl">
              {SOFT_SKILLS.map((skill) => (
                <div key={skill.labelKey}>
                  <div className="flex justify-between text-xs text-muted mb-1.5">
                    <span>{t(skill.labelKey as 'communication')}</span>
                    <span>{t(skill.levelKey)}</span>
                  </div>
                  <div className="w-full rounded-full h-1.5" style={{ background: 'var(--progress-track)' }}>
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${skill.value}%`,
                        background: 'linear-gradient(90deg, #8257e6, #b490f5)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
