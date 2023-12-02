import Image from 'next/image';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { viga, inter } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Developer() {
  return (
    <main className="my-28">
      <div id="dev-section" className={`${styles.flexCenter} gap-48`}>
        <Image src="/dev-img.png" alt="dev-avatar" width={200} height={100} />
        <div>
          <h1 className={`${viga.className} text-4xl`}>Meet the Developer!</h1>
          <p>
            <strong>@kerbethecoder</strong>, the man behind this small website.
            The idea started when <br /> the developer finds it hard to check
            from time to time for his notes or in the internet <br /> regarding
            different matters such as searching for color palettes or font
            pairings, or <br /> even for quick-starts whenever he decides to
            start on a new project.
          </p>
          <p className="mt-10 text-sm font-bold">
            To know more about him, check the links in the footer. ^^
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-28`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="proj-section" className={`${styles.flexCenter} flex-col`}>
        <Image
          src="/dev-projs.png"
          alt="projects-vector-art"
          width={450}
          height={100}
        />
        <p className="py-10">
          This section is dedicated to the developer&#39;s sample projects if
          you are interested.
        </p>

        <div className={`${styles.flexCenter} gap-5`}>
          <div
            className="w-1/4 outline-drkgry outline outline-2 rounded-md p-5 flex gap-8 flex-col transition duration-300 ease-in-out hover:scale-105"
            id="proj1">
            <div className={`${styles.flexBetween}`}>
              <span
                className={`${viga.className} text-rd text-3xl strk-outline`}>
                #1
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kerbethecoder/rock-paper-scissors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out hover:scale-125">
                  <FaGithub size="1.7em" />
                </a>
                <a
                  href="https://game-rps.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out hover:scale-125">
                  <FaArrowUpRightFromSquare size="1.7em" />
                </a>
              </div>
            </div>

            <div>
              <h3 className={`${inter.className} font-bold mb-1`}>
                ROCK, PAPER, SCISSORS
              </h3>
              <p className="text-sm">
                Simple game to play with friends vs computer. Project showcasing
                skills with html, css, and vanilla JavaScript.
              </p>
            </div>
          </div>
          <div
            className="w-1/4 outline-drkgry outline outline-2 rounded-md p-5 flex gap-8 flex-col transition duration-300 ease-in-out hover:scale-105"
            id="proj2">
            <div className={`${styles.flexBetween}`}>
              <span
                className={`${viga.className} text-blgrn text-3xl strk-outline`}>
                #2
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kerbethecoder/netflix-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out hover:scale-125">
                  <FaGithub size="1.7em" />
                </a>
                <a
                  href="https://mock-netflix-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out hover:scale-125">
                  <FaArrowUpRightFromSquare size="1.7em" />
                </a>
              </div>
            </div>

            <div>
              <h3 className={`${inter.className} font-bold mb-1`}>
                NETFLIX MOCK LANDING PAGE
              </h3>
              <p className="text-sm">
                Mock landing page of the streaming platform Netflix to practice
                my front-end web development skills using React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
