import * as simpleIcons from 'simple-icons';
import zustandIcon from '../assets/zustand.svg';
import { useTranslation } from 'react-i18next';

const technologies = [
  { name: 'MySQL', description: 'Database', iconSlug: 'mysql', years: '10+' },
  { name: 'PHP', description: 'Language', iconSlug: 'php', years: '10+' },
  { name: 'Typescript', description: 'Language', iconSlug: 'typescript', years: '5+' },
  { name: 'React.js', description: 'Frontend library', iconSlug: 'react', years: '5+' },
  { name: 'Redux', description: 'State management', iconSlug: 'redux', years: '4+' },
  { name: 'Next.js', description: 'Full-stack Framework', iconSlug: 'nextdotjs', years: '3+' },
  { name: 'Node.js', description: 'Backend runtime', iconSlug: 'nodedotjs', years: '3+' },
  { name: 'Github Actions', description: 'CI / CD', iconSlug: 'githubactions', years: '3+' },
  { name: 'Cypress', description: 'Testing', iconSlug: 'cypress', years: '3+' },
  { name: 'Docker', description: 'Containers', iconSlug: 'docker', years: '2+' },
  { name: 'TRPC', description: 'API', iconSlug: 'trpc', years: '2+' },
  { name: 'React Query', description: 'API', iconSlug: 'reactquery', years: '2+' },
  { name: 'PostgreSQL', description: 'Database', iconSlug: 'postgresql', years: '2+' },
  { name: 'Prisma', description: 'ORM', iconSlug: 'prisma', years: '2+' },
  { name: 'Signals', description: 'State management', iconSlug: 'preact', years: '2+' },
  { name: 'Zustand', description: 'State management', customIcon: zustandIcon, years: '2+' },
];

const getIcon = (slug: string) => {
  const iconKey = `si${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = (simpleIcons as any)[iconKey] as { path: string; title: string; hex: string } | undefined;
  return icon || null;
};

export const Skills = () => {
  const { t } = useTranslation();
  
  // Sort technologies by years of experience (descending)
  const sortedTechnologies = [...technologies].sort((a, b) => {
    const yearsA = parseInt(a.years);
    const yearsB = parseInt(b.years);
    return yearsB - yearsA;
  });
  
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="heading-2 ml-4">{t('skills.title')}</h2>
      <div className="container-body mt-2">
        <div className="flex flex-col gap-2">
          {sortedTechnologies.map((tech) => {
            const icon = tech.customIcon ? null : getIcon(tech.iconSlug || '');
            
            return (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden p-1.5">
                  {tech.customIcon ? (
                    <img src={tech.customIcon} alt={tech.name} className="w-full h-full object-contain" />
                  ) : icon ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                      fill={`#${icon.hex}`}
                    >
                      <title>{icon.title}</title>
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <span className="text-subtle body-extra-small font-bold">{tech.name.charAt(0)}</span>
                  )}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="body-small font-medium text-gray-800 group-hover:text-gray-900">
                    {tech.name}
                  </span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-600">
                    {tech.description}
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700 tabular-nums flex-shrink-0">
                  {tech.years}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

