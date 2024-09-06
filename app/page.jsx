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
    <main className="mx-72 mt-40">
      <div className={styles.flexBetween} id="hero-section">
        <div>
          <h1 className={`${viga.className} text-5xl`}>The NotePad.</h1>
          <p className="my-2 pr-32 text-lg">
            This is a personal repository of tools, lessons, and other things
            that helps on the developer&#39;s transformative journey, beginning
            with the aspiration of just being a front-end web developer to
            becoming a full-stack web developer in the future.
          </p>
          <div className="ml-16 mt-10 flex gap-5">
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

      <div className={`${styles.flexCenter} my-40`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div
        className={`${styles.flexCenter} mb-60 flex-col`}
        id="color-palettes-section"
      >
        <Image
          src="/cp-img.png"
          alt="color-palettes-img"
          width={700}
          height={340}
        />
        <h3 className={`${viga.className} mt-10 text-lg`}>COLOR PALETTES</h3>
        <p className="px-52 text-center">
          Explore a developer&apos;s curated collection of recent color
          palettes, offering a visual journey through the harmonious and
          eye-catching color schemes used in their previous projects. From
          vibrant web designs to sleek mobile apps, this page showcases the
          artistry of color selection in coding, providing inspiration for your
          own creative endeavors.
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
        className={`${styles.flexBetween} mx-20 mb-60`}
        id="font-pairings-section"
      >
        <Image
          src="/fp-img.png"
          alt="font-pairings-img"
          width={450}
          height={150}
        />
        <div className="px-20">
          <h3 className={`${viga.className} text-lg`}>FONT PAIRINGS</h3>
          <p className="mb-5">
            Explore a page featuring a developer&apos;s recent font pairings
            from past projects. Discover the balance and appeal of typefaces in
            websites, apps, and print. Find design inspiration and practical
            typography insights.
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
        className={`${styles.flexBetween} mx-20 mb-60`}
        id="js-snippets-section"
      >
        <div className="flex flex-col items-end px-16">
          <h3 className={`${viga.className} mb-2.5 text-lg`}>JS SNIPPETS</h3>
          <p className="text-right">
            Got similar questions? Check out the go-to resource for essential
            JavaScript snippets—quick solutions for centering divs, array
            mapping, object keys, and more. Whether you&apos;re experienced or
            new, it&apos;s your toolbox for easier development.
          </p>
          <Link href="/js-snippets" className="mt-5">
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

      <div className={`${styles.flexCenter} my-40`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div
        className={`${styles.flexCenter} mb-40 flex-col`}
        id="color-palettes-section"
      >
        <Image
          src="/front-end-img.png"
          alt="front-end-img"
          width={800}
          height={340}
        />
        <h3 className={`${viga.className} mt-10 text-lg`}>DEV BLUEPRINTS</h3>
        <p className="px-52 text-center">
          Explore the developer&apos;s quick-start page for front-end
          development with resources for React, Gatsby, Vue.js, and more. Find
          guides, code examples, and seamless Tailwind CSS integration to
          quickly build responsive, feature-rich web apps.
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
