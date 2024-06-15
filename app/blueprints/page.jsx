import Image from 'next/image';

import { viga } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Blueprints() {
  return (
    <main className="mx-80 mt-24">
      <div className="wrapper flex justify-center gap-5">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="border border-solid border-blck border-opacity-25 rounded-md p-6 box-shdw">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
              </div>
              <div className={`${viga.className} text-lg`}>
                Gatsby Quick-Start
              </div>
            </div>
            <div className="my-5 border-blck border-t border-opacity-25" />
            <p className="text-sm text-center px-6 mb-8">
              Personally, creating a Gatsby app using the cli is the ideal way
              of starting. There are other methods in the internet if you're
              curious.
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                How to start a Gatsby app using 'gatsby cli':
              </p>
              <pre className="code-block">
                <code className="text-yllw font-bold ">
                  $ npm i -g gatsby-cli
                </code>
              </pre>
              <p>Check version to see if it's installed:</p>
              <pre className="code-block">
                <code className="text-yllw font-bold">$ gatsby -v</code>
              </pre>
              <p>
                Install the starter site (follow instructions from official
                docs):
              </p>
              <pre className="code-block">
                <code className="text-gry font-bold">
                  # gatsby new dir-name (starter site url)
                </code>
                <br />
                <code className="text-yllw font-bold">
                  $ gatsby new my-project
                  https://github.com/gatsbyjs/gatsby-starter-default
                </code>
              </pre>
              <p>Run the final command:</p>
              <pre className="code-block">
                <code className="text-yllw font-bold">$ gatsby develop</code>
              </pre>
            </div>
          </div>
          <div className="border border-solid border-blck border-opacity-25 rounded-md p-6 box-shdw">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
              </div>
              <div className={`${viga.className} text-lg`}>Tailwind CSS</div>
            </div>
            <div className="my-5 border-blck border-t border-opacity-25" />
            <p className="font-bold text-lg text-center">
              When you're going to use Tailwind CSS, check the{' '}
              <a
                href="https://tailwindcss.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="underline underline-offset-2 hover:text-gry">
                official docs
              </a>
              , it has all of the info for each technology.
            </p>
          </div>
          <div
            className={`${viga.className} text-center mt-12 mb-7 text-5xl text-blgrn strk-outline`}>
            GIT
          </div>
          <div className="border border-solid border-blck border-opacity-25 rounded-md p-6 box-shdw">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-blgrn" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-blgrn" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-blgrn" />
              </div>
              <div className={`${viga.className} text-lg`}>Git connection</div>
            </div>
            <div className="my-5 border-blck border-t border-opacity-25" />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">
                Connecting local machine to github repo:
              </p>
              <pre className="code-block">
                <code className="text-blgrn font-bold">
                  $ git remote add origin (ssh-path)
                </code>
              </pre>
              <p>Check if the remote path is added or not:</p>
              <pre className="code-block">
                <code className="text-blgrn font-bold">$ git remote -v</code>
              </pre>
              <p>
                Push the initial commit to your github repo (check first if
                branches are the same):
              </p>
              <pre className="code-block">
                <code className="text-blgrn font-bold">
                  $ git push -u origin main
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div
            className={`${viga.className} text-center mt-12 mb-7 text-5xl text-yllw strk-outline`}>
            LAUNCHPAD
          </div>
          <div className="border border-solid border-blck border-opacity-25 rounded-md p-6 box-shdw">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
              </div>
              <div className={`${viga.className} text-lg`}>NextJS</div>
            </div>
            <div className="my-5 border-blck border-t border-opacity-25" />
            <p className="font-bold mb-2">How to start Next app:</p>
            <pre className="code-block mb-7">
              <code className="text-yllw font-bold">
                $ npx create-next-app@latest
              </code>
            </pre>
            <p>
              And then follow the prompts! Make sure to use the App Router and
              it is up to you for the other technologies.
            </p>
          </div>
          <div className="border border-solid border-blck border-opacity-25 rounded-md p-6 box-shdw">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
              </div>
              <div className={`${viga.className} text-lg`}>
                React using Vite
              </div>
            </div>
            <div className="my-5 border-blck border-t border-opacity-25" />
            <p className="font-bold mb-2">How to start React app:</p>
            <pre className="code-block mb-7">
              <code className="text-yllw font-bold">
                $ npm create vite@latest
              </code>
            </pre>
            <p>
              And then follow the prompts! You can also use the "." for the
              project name to scaffold in the current directory.
            </p>
          </div>
          <div className="border border-solid border-blck border-opacity-25 rounded-md p-6 box-shdw">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
                <div className="w-6 h-6 rounded-full border border-blck border-opacity-25 bg-yllw" />
              </div>
              <div className={`${viga.className} text-lg`}>
                Vue.js using Vite
              </div>
            </div>
            <div className="my-5 border-blck border-t border-opacity-25" />
            <p className="font-bold mb-2">How to start Vue app:</p>
            <pre className="code-block mb-7">
              <code className="text-yllw font-bold">
                $ npm create vite@latest
              </code>
            </pre>
            <p>
              And then follow the prompts! You can also use the "." for the
              project name to scaffold in the current directory.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>
    </main>
  );
}
