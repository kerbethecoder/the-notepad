import Image from 'next/image';

import { viga } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function QuickStarts() {
  return (
    <main className="mx-72">
      <p className="text-center mt-12 text-sm">
        This section is limited to the “quick-starts” or starter guides for
        different
        <br />
        technologies the developer is using for front-end web development. If
        you
        <br />
        want further information, check out the official documentations of what
        you
        <br />
        are trying to pursue. There are also tons of guide out there in the
        internet, this
        <br />
        page is only to help the developer and fellow developers if the need
        arises.
      </p>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="gatsby" className="mx-40">
        <h2
          className={`${viga.className} text-yllw tracking-tight text-5xl strk-outline`}>
          GATSBY
        </h2>
        <div className="pl-24">
          <p>
            Creating a gatsby app using the cli is, for me, the best or ideal
            way of starting. I tried 2 other method which is
            <br />
            the start from scratch and an unofficial way of starting which I
            made on my own based on my experiences on coding.
          </p>
          <p className="my-5">
            The first option is to create the gatsby project by initializing
            gatsby and then building your way up without any
            <br />
            packages or plugins beside gatsby itself, it&#39;s in the{' '}
            <a
              href="https://www.gatsbyjs.com/docs/quick-start/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
              {' '}
              official documentation
            </a>{' '}
            if you want to check it out.
          </p>
          <p>
            The second option which is the unofficial one is to clone a forked
            gatsby github repo into your machine and
            <br />
            from there build your way up, however, it has too many unnecessary
            things included such as the git logs from
            <br />
            the previous contributors are present here, so, I immediately stop
            from using that kind of method.
          </p>

          <div id="gatsbycli" className="mt-10">
            <h2 className="font-bold text-lg">
              How to start a gatsby app using &#39;gatsby cli&#39;:
            </h2>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-yllw">$ npm install -g gatsby-cli</code>
            </pre>
            <p>Check version if installed (any of the two command):</p>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-yllw">$ gatsby --version</code>
              <br />
              <code className="text-gry"># or you can just type</code>
              <br />
              <code className="text-yllw">$ gatsby -v</code>
            </pre>
            <p>
              Install the starter site (it&#39;s good to follow the instructions
              from the{' '}
              <a
                href="https://www.gatsbyjs.com/docs/starters/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
                official docs
              </a>
              ):
            </p>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-gry">
                # gatsby new dir-name (starter site url)
              </code>
              <br />
              <code className="text-yllw">
                $ gastby new my-project
                https://github.com/gatsbyjs/gatsby-starter-default
              </code>
              <br />
              <br />
              <code className="text-gry">
                # or you can type . in the directory name to use the current
                directory
              </code>
              <br />
              <code className="text-yllw">
                $ gatsby new .
                https://github.com/gatsbyjs/gatsby-starter-default
              </code>
            </pre>
            <p>Run the final command:</p>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-yllw">$ gatsby develop</code>
            </pre>
          </div>

          <div id="twcss" className="mt-10">
            <h2 className="font-bold text-lg mt-5">
              Connecting local machine to github repo:
            </h2>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-yllw">
                $ git remote add origin (ssh-path)
              </code>
            </pre>
            <p>Check the remote path if added or not:</p>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-yllw">$ git remote -v</code>
            </pre>
            <p>
              Push the initial commit to your github repo (check first if
              branches are the same):
            </p>
            <pre className="code-block ml-10 my-2 mr-24">
              <code className="text-yllw">$ git push -u origin main</code>
            </pre>
          </div>

          <h2 className="font-bold text-lg mt-10">
            When you&#39;re going to use Tailwind CSS, check the{' '}
            <a
              href="https://tailwindcss.com/docs/guides/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
              official docs
            </a>{' '}
            for more info.
          </h2>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="react" className="mx-40">
        <h2
          className={`${viga.className} text-blgrn tracking-tight text-5xl strk-outline`}>
          REACT
        </h2>
        <div className="pl-24">
          <p>
            You can find other way(s) to start a react app in the internet, but
            personally, I use this method due to the advantages of{' '}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
              Vite
            </a>
            .
          </p>
          <h2 className="font-bold text-lg mt-10">
            How to start React app using Vite:
          </h2>
          <pre className="code-block ml-10 my-2 mr-24">
            <code className="text-blgrn">$ npm create vite@latest</code>
          </pre>
          <p className="ml-10">
            And then follow the prompts! You can also use the “.” for the
            project name to scaffold in the current directory.
          </p>
          <h2 className="font-bold text-lg mt-10">
            When you&#39;re going to use Tailwind CSS, check the{' '}
            <a
              href="https://tailwindcss.com/docs/guides/vite"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
              official docs
            </a>{' '}
            for more info.
          </h2>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="nextjs" className="mx-40">
        <h2
          className={`${viga.className} text-rd tracking-tight text-5xl strk-outline`}>
          NEXTJS
        </h2>
        <h2 className="font-bold text-lg pl-24">How to start Next14:</h2>
        <div className="pl-24">
          <pre className="code-block ml-10 my-2 mr-24">
            <code className="text-rd">$ npx create-next-app@latest</code>
          </pre>
        </div>
        <p className="ml-10 pl-24">
          And then follow the prompts! Make sure to use the App Router and it is
          up to you for the other technologies.
        </p>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="vuejs" className="mx-40 mb-12">
        <h2
          className={`${viga.className} text-cyn tracking-tight text-5xl strk-outline`}>
          VUE.JS
        </h2>
        <div className="pl-24">
          <p>
            You can find other way(s) to start a react app in the internet, but
            personally, I use this method due to the advantages of{' '}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
              Vite
            </a>
            .
          </p>
          <h2 className="font-bold text-lg mt-10">
            How to start Vue app using Vite:
          </h2>
          <pre className="code-block ml-10 my-2 mr-24">
            <code className="text-cyn">$ npm create vite@latest</code>
          </pre>
          <p className="ml-10">
            And then follow the prompts! You can also use the “.” for the
            project name to scaffold in the current directory.
          </p>
          <h2 className="font-bold text-lg mt-10">
            When you&#39;re going to use Tailwind CSS, check the{' '}
            <a
              href="https://tailwindcss.com/docs/guides/vite"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 decoration-2
              hover:text-gry">
              official docs
            </a>{' '}
            for more info.
          </h2>
        </div>
      </div>
    </main>
  );
}
