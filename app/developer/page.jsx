import Image from 'next/image';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { viga, inter } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Developer() {
  const newProjects = {
    projectOne: {
      num: '#1',
      color: 'text-rd',
      title: 'ROCK, PAPER, SCISSORS',
      githubUrl: 'https://github.com/kerbethecoder/rock-paper-scissors',
      siteUrl: 'https://game-rps.vercel.app/',
      description:
        'Simple game to play with friends vs computer. Project showcasing skills with html, css, and vanilla JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },

    projectTwo: {
      num: '#2',
      color: 'text-blgrn',
      title: 'NETFLIX MOCK LANDING PAGE',
      githubUrl: 'https://github.com/kerbethecoder/netflix-react',
      siteUrl: 'https://mock-netflix-react.vercel.app/',
      description:
        'Mock landing page of the streaming platform Netflix to practice my front-end web development skills using React.',
      technologies: ['React', 'Tailwind CSS'],
    },
  };

  const oldProjects = {
    projectOne: {
      title: 'SNAKE GAME',
      color: 'text-rd',
      bg: 'bg-rd',
      githubUrl: 'https://github.com/kerbethecoder/snake-js',
      siteUrl: 'https://kerbethecoder.github.io/snake-js/',
      description:
        'Another personal project to hone my skills in web development. A nostalgic throwback to the old-school entertainment, where players control a snake moving around the screen, eating food, and growing longer with each meal.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },

    projectTwo: {
      title: 'RECIPE SITE',
      color: 'text-yllw',
      bg: 'bg-yllw',
      githubUrl: 'https://github.com/kerbethecoder/recipes',
      siteUrl: 'https://kerbethecoder.github.io/recipes/',
      description:
        "A FreeCodeCamp.org course project from 2022 that will allow me to demonstrate and hone my HTML/CSS abilities. I am to create a 'Tribute Page' for someone or something.",
      technologies: ['HTML', 'CSS'],
    },

    projectThree: {
      title: 'FAN PAGE',
      color: 'text-blgrn',
      bg: 'bg-blgrn',
      githubUrl: 'https://github.com/kerbethecoder/theweekndfanpage',
      siteUrl: 'https://kerbethecoder.github.io/theweekndfanpage/',
      description:
        "A FreeCodeCamp.org course project from 2022 that will allow me to demonstrate and hone my HTML/CSS abilities. I am to create a 'Tribute Page' for someone or something.",
      technologies: ['HTML', 'CSS'],
    },

    projectFour: {
      title: 'DOCUMENTATION PAGE',
      color: 'text-cyn',
      bg: 'bg-cyn',
      githubUrl: 'https://github.com/kerbethecoder/techdocumentationpage',
      siteUrl: 'https://kerbethecoder.github.io/techdocumentationpage/',
      description:
        'A FreeCodeCamp.org course project from 2022 that will allow me to demonstrate and hone my HTML/CSS skills. This page of documentation for JavaScript includes many details regarding the language.',
      technologies: ['HTML', 'CSS'],
    },

    projectFive: {
      title: 'WHEELS TRADE CENTER',
      color: 'text-rd',
      bg: 'bg-rd',
      githubUrl: 'https://github.com/kerbethecoder/wheels-trade-center',
      siteUrl: 'https://kerbethecoder.github.io/wheels-trade-center/',
      description:
        'As part of TheOdinProject course, this is a sample landing page for a car company that will further enhance my front-end web development skills.',
      technologies: ['HTML', 'CSS'],
    },

    projectSix: {
      title: 'LANDING PAGE',
      color: 'text-yllw',
      bg: 'bg-yllw',
      githubUrl: 'https://github.com/kerbethecoder/landingpage',
      siteUrl: 'https://kerbethecoder.github.io/landingpage/',
      description:
        "A FreeCodeCamp.org course project from 2022 that will allow me to demonstrate and hone my HTML/CSS skills. I'm testing and honing my creative skills on this page as I learn the basics of web programming.",
      technologies: ['HTML', 'CSS'],
    },
  };

  return (
    <main className="my-28">
      <div id="dev-section" className={`${styles.flexCenter} gap-5`}>
        <div className="w-2/12">
          <Image
            src="/dev-img.png"
            alt="dev-avatart"
            width={200}
            height={100}
          />
        </div>
        <div className="w-4/12 pl-10">
          <h1 className={`${viga.className} text-4xl`}>Meet the Developer!</h1>
          <p>
            <strong>@kerbethecoder</strong>, the man behind this small website.
            The idea started when the developer finds it hassle to check from
            time to time in his notes or in the internet regarding different
            matters such as searching for color palettes or font pairings, or
            even for quick-starts whenever he decides to start on a new project.
          </p>
          <p className="mt-10 text-sm font-bold">
            To know more about him, check the links in the footer. ^^
          </p>
          <p className="text-sm font-bold">
            or through my email:{' '}
            <a
              href="mailto:krbycnts@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rd"
            >
              krby.cnts@gmail.com
            </a>
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
        <p className="w-4/12 py-10 text-center">
          This section is dedicated to the developer&#39;s sample projects as
          well as the websites he worked on throughout his web developer
          journey. Hope you like it!
        </p>

        <div className={`flex w-6/12 flex-wrap justify-evenly gap-5 px-20`}>
          {Object.keys(newProjects).map((proj, i) => (
            <div
              className={`flex h-56 w-5/12 flex-col justify-between ${styles.projectCard}`}
              key={i}
            >
              <div id="links" className={`${styles.flexBetween} h-1/6`}>
                <span
                  className={`${viga.className} ${newProjects[proj].color} strk-outline text-3xl`}
                >
                  {newProjects[proj].num}
                </span>
                <div className="flex gap-3">
                  <a
                    href={newProjects[proj].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out hover:scale-125"
                  >
                    <FaGithub size="1.7em" />
                  </a>
                  <a
                    href={newProjects[proj].siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out hover:scale-125"
                  >
                    <FaArrowUpRightFromSquare size="1.7em" />
                  </a>
                </div>
              </div>

              <div id="details" className="h-3/6">
                <h3 className={`${inter.className} font-bold`}>
                  {newProjects[proj].title}
                </h3>
                <p className="text-sm">{newProjects[proj].description}</p>
              </div>

              <div id="technologies" className="flex h-1/6 items-end gap-1">
                {newProjects[proj].technologies.map((tech, i) => (
                  <span
                    className={`${inter.className} h-fit rounded bg-blck px-2 py-1 text-xs font-bold text-whte`}
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.flexCenter} my-16`}>
          <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
        </div>

        <p className={`${inter.className} mb-5 text-xl font-bold`}>
          Old Projects{' '}
          <span className="text-sm">(it&apos;s not pretty XD)</span>
        </p>

        <div className={`flex w-7/12 flex-wrap justify-evenly gap-5 px-20`}>
          {Object.keys(oldProjects).map((proj, i) => (
            <div
              className={`flex h-56 w-5/12 flex-col justify-between rounded-md bg-[#323232] p-5 transition duration-300 ease-in-out hover:scale-105`}
              key={i}
            >
              <div id="links" className={`${styles.flexBetween} h-1/6`}>
                <h3
                  className={`${inter.className} ${oldProjects[proj].color} font-bold`}
                >
                  {oldProjects[proj].title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={oldProjects[proj].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out hover:scale-125"
                  >
                    <FaGithub size="1.7em" color="white" />
                  </a>
                  <a
                    href={oldProjects[proj].siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out hover:scale-125"
                  >
                    <FaArrowUpRightFromSquare size="1.7em" color="white" />
                  </a>
                </div>
              </div>

              <div id="details" className="h-3/6">
                <p className="text-sm text-whte">
                  {oldProjects[proj].description}
                </p>
              </div>

              <div id="technologies" className="flex h-1/6 items-end gap-1">
                {oldProjects[proj].technologies.map((tech, i) => (
                  <span
                    className={`${inter.className} px-2 py-1 text-xs font-bold ${oldProjects[proj].bg} h-fit rounded`}
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
