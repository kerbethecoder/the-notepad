import Image from 'next/image';

import {
  viga,
  oxygen,
  interTight,
  cardo,
  oswald,
  bebasNeue,
  playfairDisplay,
  quattrocento,
  sourceSans,
  ubuntuCondensed,
} from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function FontPairings() {
  return (
    <main className="my-32">
      <div id="pair-1" className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 items-end justify-end font-bold italic text-rd`}
          >
            Oswald
          </span>
          <h2 className={`${oswald.className} w-6/12 text-5xl font-bold`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 justify-end font-bold italic text-blgrn`}
          >
            Cardo
          </span>
          <p className={`${cardo.className} w-4/12 text-lg`}>
            This is how the body would look like using{' '}
            <span className="font-bold underline">Cardo</span> font. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="pair-2" className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 items-end justify-end font-bold italic text-rd`}
          >
            Viga
          </span>
          <h2 className={`${viga.className} w-6/12 text-5xl font-bold`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 justify-end font-bold italic text-blgrn`}
          >
            Oxygen
          </span>
          <p className={`${oxygen.className} w-4/12 text-lg`}>
            This is how the body would look like using{' '}
            <span className="font-bold underline">Oxygen</span> font. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="pair-3" className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 items-end justify-end font-bold italic text-rd`}
          >
            Playfair Display
          </span>
          <h2
            className={`${playfairDisplay.className} w-6/12 text-5xl font-bold`}
          >
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 justify-end font-bold italic text-blgrn`}
          >
            Source Sans 3
          </span>
          <p className={`${sourceSans.className} w-4/12 text-lg`}>
            This is how the body would look like using{' '}
            <span className="font-bold underline">Source Sans 3</span> font.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="pair-4" className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 items-end justify-end font-bold italic text-rd`}
          >
            Oswald
          </span>
          <h2 className={`${oswald.className} w-6/12 text-5xl font-bold`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 justify-end font-bold italic text-blgrn`}
          >
            Quattrocento
          </span>
          <p className={`${quattrocento.className} w-4/12 text-lg`}>
            This is how the body would look like using{' '}
            <span className="font-bold underline">Quattrocento</span> font.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="pair-5" className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 items-end justify-end font-bold italic text-rd`}
          >
            Bebas Neue
          </span>
          <h2 className={`${bebasNeue.className} w-6/12 text-5xl font-bold`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${interTight.className} flex w-4/12 justify-end font-bold italic text-blgrn`}
          >
            Ubuntu Condensed
          </span>
          <p className={`${ubuntuCondensed.className} w-4/12 text-lg`}>
            This is how the body would look like using{' '}
            <span className="font-bold underline">Ubuntu Condensed</span> font.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} my-32`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <h2 className={`${viga.className} text-center text-xl font-bold`}>
        MORE FONT PAIRINGS TO COME. ^^
      </h2>
    </main>
  );
}
