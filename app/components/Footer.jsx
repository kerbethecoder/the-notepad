import {
  FaArrowUpRightFromSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa6';

import { inter } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Footer() {
  return (
    <footer id="footer" className={`${inter.className} bg-blck px-16`}>
      <div className={`${styles.flexBetween} py-20`}>
        <div>
          <h2 className="text-whte text-5xl font-bold pl-1">@kerbethecoder</h2>
          <p className="text-drkgry font-bold pl-14">
            Average UI / UX Designer, Computer Engineer, and Web Developer.
          </p>
          <div className={`${styles.flexCenter} gap-3 mt-10`}>
            <a
              href="https://kerbethecoder.com"
              target="_blank"
              rel="noopener noreferrer">
              <button
                className={`${styles.flexCenter} gap-2 bg-whte text-lg font-bold w-60 h-14 rounded-lg transition duration-300 ease-in-out hover:scale-105`}>
                <span>Check Portfolio </span>
                <FaArrowUpRightFromSquare />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/krbycnts/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:scale-125">
              <FaLinkedin color="white" size="2em" />
            </a>
            <a
              href="https://github.com/kerbethecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:scale-125">
              <FaGithub color="white" size="2em" />
            </a>
            <a
              href="https://www.facebook.com/kerbe.cantos"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:scale-125">
              <FaInstagram color="white" size="2em" />
            </a>
            <a
              href="https://www.instagram.com/krby.cnts/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:scale-125">
              <FaFacebook color="white" size="2em" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-whte mb-4">
            “This website is created to aid the developer or other viewers
            throughout
            <br />
            their journey on web development. Feel free to use the website as
            your
            <br />
            guide. If you want to know more about the developer, check out his
            <br />
            socials and portfolio. Happy Coding!”
          </p>
          <p className="text-gry text-xs font-bold">© 2023. Kerby Cantos</p>
        </div>
      </div>
      <p className="text-gry text-xs text-center pb-10">
        Designed in{' '}
        <a
          href="https://www.figma.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-bold underline underline-offset-2 hover:text-yllw">
          Figma
        </a>
        , built with{' '}
        <a
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-bold underline underline-offset-2 hover:text-blgrn">
          NextJS
        </a>
        , and designed with{' '}
        <a
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-bold underline underline-offset-2 hover:text-rd">
          Tailwind CSS
        </a>
        . This is still on Desktop/Laptop Version ^^.
      </p>
    </footer>
  );
}
