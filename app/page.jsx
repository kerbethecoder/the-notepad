'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRightLong } from 'react-icons/fa6';

import { Button } from '@/ui/index';
import { viga } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Home() {
  return (
    <main className="mx-72 mt-24">
      <div className={styles.flexBetween} id="hero-section">
        <div>
          <h1 className={`${viga.className} text-5xl`}>The NotePad.</h1>
          <p className="my-2 text-lg">
            The notepad is a personal repository of tools, lessons, and other
            things that <br /> helps on the developer&#39;s transformative
            journey, beginning with the aspiration <br /> of just being a
            front-end web developer to becoming a full-stack web <br />{' '}
            developer in the future.
          </p>
          <div className="flex mt-10 ml-16 gap-5">
            <Link href="/developer">
              <Button title="Who's the Developer?" hex="bgYellow" />
            </Link>
            <ScrollLink to="footer" smooth={true} duration={500} offset={-70}>
              <Button title="Explore from the bottom." hex="bgWhite" />
            </ScrollLink>
          </div>
        </div>
        <Image src="/hero-img.png" alt="hero-image" width={400} height={300} />
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div
        className={`${styles.flexCenter} flex-col mb-52`}
        id="color-palettes-section">
        <Image
          src="/cp-img.png"
          alt="color-palettes-img"
          width={700}
          height={340}
        />
        <h3 className={`${viga.className} text-lg mt-10 mb-5`}>
          COLOR PALETTES
        </h3>
        <p className="text-center">
          Explore a developer's curated collection of recent color palettes,
          offering a visual journey through the <br /> harmonious and
          eye-catching color schemes used in their previous projects. From
          vibrant web designs to <br /> sleek mobile apps, this page showcases
          the artistry of color selection in coding, providing inspiration for{' '}
          <br /> your own creative endeavors.
        </p>
        <Link href="/color-palettes" className="mt-10">
          <Button
            title="Go to Color Palettes"
            hex="bgRed"
            icon={<FaArrowRightLong />}
          />
        </Link>
      </div>

      <div
        className={`${styles.flexBetween} mx-20 mb-52`}
        id="font-pairings-section">
        <Image
          src="/fp-img.png"
          alt="font-pairings-img"
          width={450}
          height={150}
        />
        <div>
          <h3 className={`${viga.className} text-lg mb-2.5`}>FONT PAIRINGS</h3>
          <p className="mb-2.5">
            Discover a dedicated page showcasing a developer's recent font
            pairings from <br /> their previous projects. Explore the synergy of
            typefaces, their balance, and the <br /> aesthetic appeal in various
            applications, including websites, mobile apps, or <br /> print
            materials. Whether you seek design inspiration or practical
            guidance, this <br /> collection offers insights into the world of
            typography and design.
          </p>
          <Link href="/font-pairings">
            <Button
              title="Explore Font Pairings"
              hex="bgCyan"
              icon={<FaArrowRightLong />}
            />
          </Link>
        </div>
      </div>

      <div
        className={`${styles.flexBetween} mx-20 mb-52`}
        id="js-snippets-section">
        <div className="flex flex-col items-end">
          <h3 className={`${viga.className} text-lg mb-2.5`}>JS SNIPPETS</h3>
          <p className="text-right">
            Have a question like those above? Visit the developer&#39;s go-to
            resource <br /> for essential JavaScript snippets, designed to
            simplify common tasks in <br /> your projects. Find quick solutions
            for centering divs, mapping through <br /> arrays, harnessing object
            keys for efficient mapping, and more. Whether <br /> you&#39;re a
            seasoned coder or just starting, this collection is your handy{' '}
            <br /> toolbox for smoother and more productive development.
          </p>
          <Link href="/js-snippets" className="mt-2.5">
            <Button
              title="JavaScript Snippets"
              hex="bgBlueGreen"
              icon={<FaArrowRightLong />}
            />
          </Link>
        </div>
        <Image
          src="/js-img.png"
          alt="js-snippets-img"
          width={550}
          height={150}
        />
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div
        className={`${styles.flexCenter} flex-col mb-32`}
        id="color-palettes-section">
        <Image
          src="/front-end-img.png"
          alt="front-end-img"
          width={800}
          height={340}
        />
        <h3 className={`${viga.className} text-lg mt-10 mb-5`}>
          FRONT-END BLUEPRINTS
        </h3>
        <p className="text-center">
          Explore the developer&#39;s quick-start page for front-end
          development, offering a treasure trove of resources for various <br />{' '}
          technologies such as React, Gatsby, Vue.js, and more. Dive into
          step-by-step guides and code examples to kickstart your <br /> project
          swiftly. Discover seamless integrations with popular CSS frameworks
          like Tailwind CSS, providing with the tools and <br /> knowledge to
          create stunning, responsive, and feature-rich web applications with
          ease.
        </p>
        <Link href="/blueprints" className="mt-10">
          <Button
            title="Check it out"
            hex="bgBeige"
            icon={<FaArrowRightLong />}
          />
        </Link>
      </div>
    </main>
  );
}
