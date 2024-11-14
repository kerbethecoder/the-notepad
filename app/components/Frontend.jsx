import { viga, inter } from '@/ui/fonts';

export default function Frontend() {
  return (
    <section>
      <div>
        <h2 className={`${viga.className} text-xl`}>Gatsby Quick-Start:</h2>
        <p className="font-bold text-blck/60">
          Personally, creating a Gatsby app using the cli is the ideal way of
          starting. There are other methods in the internet if you&apos;re
          curious.
        </p>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>
            1. Install{' '}
            <span className={`${inter.className} font-bold`}>gatsby-cli</span>:
          </p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ npm i -g gatsby-cli</code>
          </pre>
          <p>2. Check version to see if it&apos;s installed:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ gatsby -v</code>
          </pre>
          <p>
            3. Install the starter site (follow instructions from{' '}
            <a
              href="https://www.gatsbyjs.com/docs/starters/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rd hover:text-rd/70"
            >
              official docs↗
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
          <p>4. Run the final command:</p>
          <pre className="w-1/2 whitespace-pre-wrap rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ gatsby develop</code>
          </pre>
        </div>
      </div>
      <hr className="my-10 w-3/4 border border-blck/10" />
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
            App Router↗
          </a>{' '}
          and it is up to you for the other technologies.
        </p>
      </div>
      <hr className="my-10 w-3/4 border border-blck/10" />
      <div>
        <h2 className={`${viga.className} text-xl`}>Vite Frontend Tooling:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p className="mb-2">
            Start your first Vite project using this command:
          </p>
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
              github docs↗
            </a>{' '}
            for more template information.
          </p>
        </div>
        <p className="font-bold text-blck/60">
          You can also use the &quot;.&quot; for the directory name to scaffold
          in the current directory.
        </p>
      </div>
    </section>
  );
}
