import * as simpleIcons from 'simple-icons';

const technologies = [
  { name: 'Typescript', description: 'Language', iconSlug: 'typescript' },
  { name: 'Next.js', description: 'Full-stack Framework', iconSlug: 'nextdotjs' },
  { name: 'React.js', description: 'Frontend library', iconSlug: 'react' },
  { name: 'Docker + Swarm', description: 'Containers', iconSlug: 'docker' },
  { name: 'TRPC', description: 'API', iconSlug: 'trpc' },
  { name: 'React Query', description: 'API', iconSlug: 'reactquery' },
  { name: 'MySQL', description: 'Database', iconSlug: 'mysql' },
  { name: 'PostgreSQL', description: 'Database', iconSlug: 'postgresql' },
  { name: 'Node.js', description: 'Backend runtime', iconSlug: 'nodedotjs' },
  { name: 'Github Actions', description: 'CI / CD', iconSlug: 'githubactions' },
  { name: 'Gorse', description: 'Recommendation system', iconSlug: 'go' },
  { name: 'Signals', description: 'State management', iconSlug: 'angular' },
  { name: 'Zustand', description: 'State management', iconSlug: 'react' },
  { name: 'Cypress', description: 'Testing', iconSlug: 'cypress' },
  { name: 'PHP', description: 'Language', iconSlug: 'php' },
];

const getIcon = (slug: string) => {
  const iconKey = `si${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = (simpleIcons as any)[iconKey] as { path: string; title: string; hex: string } | undefined;
  return icon || null;
};

export const Skills = () => {
  return (
    <section id="skills" className="mt-8 scroll-mt-24">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="border border-gray-200 p-8 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech) => {
            const icon = getIcon(tech.iconSlug);
            
            return (
              <div
                key={tech.name}
                className="border border-gray-200 p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden p-2">
                    {icon ? (
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
                      <span className="text-gray-400 text-xs">{tech.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
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

