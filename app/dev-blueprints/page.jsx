import { viga, inter } from '@/ui/fonts';

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
      <div>
        <h2 className={`${viga.className} text-xl`}>Gatsby Quick-Start</h2>
        <p className="font-bold text-blck/60">
          Personally, creating a Gatsby app using the cli is the ideal way of
          starting. There are other methods in the internet if you&apos;re
          curious.
        </p>
        <div className="my-2 space-y-1 px-4 text-sm">
          <p>
            Install{' '}
            <span className={`${inter.className} font-bold`}>gatsby-cli</span>:
          </p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ npm i -g gatsby-cli</code>
          </pre>
          <p>Check version to see if it&apos;s installed:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ gatsby -v</code>
          </pre>
          <p>
            Install the starter site (follow instructions from{' '}
            <a
              href="https://www.gatsbyjs.com/docs/starters/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rd hover:text-rd/70"
            >
              official docs ↗
            </a>
            ):
          </p>
          <pre className="w-1/2 whitespace-pre-wrap rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-gry">
              # gatsby new dir-name (starter site url)
            </code>
            <br />
            <code className="font-bold text-yllw">
              $ gatsby new my-project
              https://github.com/gatsbyjs/gatsby-starter-default
            </code>
          </pre>
          <p>Run the final command:</p>
          <pre className="w-1/2 whitespace-pre-wrap rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ gatsby develop</code>
          </pre>
        </div>
      </div>
      <hr className="my-10 border border-blck/10" />
      <div>
        <h2 className={`${viga.className} text-xl`}>Creating a NextJS App:</h2>
        <div className="my-2 space-y-1 px-4 text-sm">
          <p className="mb-2">Start a Next app:</p>
          <pre className="w-1/2 whitespace-pre-wrap rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ npx create-next-app@latest
            </code>
          </pre>
        </div>
        <p className="font-bold text-blck/60">
          And then follow the prompts! Make sure to use the{' '}
          <a
            href="https://nextjs.org/docs/app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-rd hover:text-rd/70"
          >
            App Router ↗
          </a>{' '}
          and it is up to you for the other technologies.
        </p>
      </div>
      <hr className="my-10 border border-blck/10" />
      <div>
        <h2 className={`${viga.className} text-xl`}>Vite Frontend Tooling:</h2>
        <div className="my-2 space-y-1 px-4 text-sm">
          <p className="mb-2">Starting your first Vite project:</p>
          <pre className="w-1/2 whitespace-pre-wrap rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ npm create vite@latest
            </code>
          </pre>
          <p className="mb-2">Or directly specify the configurations:</p>
          <pre className="w-1/2 whitespace-pre-wrap rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ npm create vite@latest dir_name -- --template vue
            </code>
          </pre>
          <p>
            Check the{' '}
            <a
              href="https://github.com/vitejs/vite/tree/main/packages/create-vite"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rd hover:text-rd/70"
            >
              github docs ↗
            </a>{' '}
            for more template information.
          </p>
        </div>
        <p className="font-bold text-blck/60">
          You can also use the &quot;.&quot; for the directory name to scaffold
          in the current directory.
        </p>
      </div>
    </main>
  );
}
