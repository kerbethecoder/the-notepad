import { viga } from '@/ui/fonts';
import { NavigationTabs } from '@/components/index';

export default function DevBlueprints() {
  const templates = {
    react: {
      title: 'React + Tailwind CSS',
      url: 'https://github.com/kerbethecoder/react',
      description:
        'React + Tailwind CSS w/ Vite to deploy to GitHub Pages guide to start with.',
      technologies: ['vite', 'gh-pages'],
      color: 'bg-yllw',
    },
    svelte: {
      title: 'Svelte + Tailwind CSS',
      url: 'https://github.com/kerbethecoder/svelte',
      description:
        'Svelte + Tailwind CSS w/ Vite to deploy to GitHub Pages guide to start with.',
      technologies: ['vite', 'gh-pages'],
      color: 'bg-rd',
    },
    vue: {
      title: 'Vue + Tailwind CSS',
      url: 'https://github.com/kerbethecoder/vue',
      description:
        'Vue + Tailwind CSS w/ Vite to deploy to GitHub Pages guide to start with.',
      technologies: ['vite', 'gh-pages'],
      color: 'bg-blgrn',
    },
    next: {
      title: 'Next + Tailwind CSS',
      url: 'https://github.com/kerbethecoder/next',
      description:
        'Next + Tailwind CSS to deploy to GitHub Pages guide to start with.',
      technologies: ['gh-pages'],
      color: 'bg-cyn',
    },
    sveltekit: {
      title: 'SvelteKit + Tailwind CSS',
      url: 'https://github.com/kerbethecoder/sveltekit',
      description:
        'SvelteKit + Tailwind CSS w/ Vite to deploy to GitHub Pages guide to start with.',
      technologies: ['vite', 'gh-pages'],
      color: 'bg-bge',
    },
    gatsby: {
      title: 'Gatsby + Tailwind CSS',
      url: 'https://github.com/kerbethecoder/gatsby',
      description:
        'Gatsby + Tailwind CSS to deploy to GitHub Pages guide to start with.',
      technologies: ['gh-pages'],
      color: 'bg-yllw',
    },
  };

  return (
    <main className="mx-80 my-40">
      <h1 className={`${viga.className} text-3xl`}>Quick Description</h1>
      <p className="font-bold text-blck/60">
        A growing collection of personalized guides on various topics, offering
        practical insights for developers.
      </p>
      <div className="custom-scrollbar my-6 flex flex-row gap-4 overflow-x-auto py-4">
        {/* TODO: put this on a separate page */}
        {Object.keys(templates).map((template, index) => (
          <div
            key={index}
            className="flex min-w-[350px] flex-col justify-between rounded border border-blck/40 p-6 shadow-md transition duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="mb-2 space-x-2">
                {templates[template].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-blck/70 px-3 py-1 text-xs font-bold text-whte"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className={`text-xl ${viga.className}`}>
                {templates[template].title}
              </h3>

              <p>{templates[template].description}</p>
            </div>
            <a
              href={templates[template].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`mt-8 rounded border border-blck/60 px-6 py-1 text-sm font-bold shadow transition duration-300 ${templates[template].color} hover:bg-opacity-50 hover:text-blck`}
              >
                View
              </button>
            </a>
          </div>
        ))}
      </div>
      <hr className="my-14 border border-blck/10" />
      <NavigationTabs />
    </main>
  );
}
