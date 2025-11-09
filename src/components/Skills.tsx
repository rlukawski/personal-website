import * as simpleIcons from 'simple-icons';
import zustandIcon from '../assets/zustand.svg';
import gorseIcon from '../assets/gorse-logo.png';
import { useTranslation } from 'react-i18next';

const technologies = [
  { name: 'Typescript', description: 'Language', iconSlug: 'typescript', years: '5+' },
  { name: 'Next.js', description: 'Full-stack Framework', iconSlug: 'nextdotjs', years: '3+' },
  { name: 'React.js', description: 'Frontend library', iconSlug: 'react', years: '5+' },
  { name: 'Docker + Swarm', description: 'Containers', iconSlug: 'docker', years: '2+' },
  { name: 'TRPC', description: 'API', iconSlug: 'trpc', years: '2+' },
  { name: 'React Query', description: 'API', iconSlug: 'reactquery', years: '2+' },
  { name: 'MySQL', description: 'Database', iconSlug: 'mysql', years: '10+' },
  { name: 'PostgreSQL', description: 'Database', iconSlug: 'postgresql', years: '2+' },
  { name: 'Node.js', description: 'Backend runtime', iconSlug: 'nodedotjs', years: '3+' },
  { name: 'Github Actions', description: 'CI / CD', iconSlug: 'githubactions', years: '3+' },
  { name: 'Gorse', description: 'Recommendation system', customIcon: gorseIcon, years: '1+' },
  { name: 'Signals', description: 'State management', iconSlug: 'preact', years: '2+' },
  { name: 'Zustand', description: 'State management', customIcon: zustandIcon, years: '2+' },
  { name: 'Cypress', description: 'Testing', iconSlug: 'cypress', years: '3+' },
  { name: 'PHP', description: 'Language', iconSlug: 'php', years: '15+' },
];

const getIcon = (slug: string) => {
  const iconKey = `si${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = (simpleIcons as any)[iconKey] as { path: string; title: string; hex: string } | undefined;
  return icon || null;
};

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="mt-8 scroll-mt-24 content-container w-full">
      <h2 className="heading-2">{t('skills.title')}</h2>
      <h4 className="body-normal">{t('skills.subtitle')}</h4>
      <div className="border border-gray-200 p-6 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {technologies.map((tech) => {
            const icon = tech.customIcon ? null : getIcon(tech.iconSlug || '');
            
            return (
              <div
                key={tech.name}
                className="border border-gray-200 p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden p-2">
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
                      <span className="text-subtle body-extra-small">{tech.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="card-title">{tech.name}</h3>
                      <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                        {tech.years}
                      </span>
                    </div>
                    <p className="body-small">{tech.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

