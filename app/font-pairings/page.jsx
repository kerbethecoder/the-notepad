import Image from 'next/image';

import {
  viga,
  oxygen,
  inter_tight,
  cardo,
  oswald,
  bebas,
  playfair,
  quattro,
  sourSans,
  ubuntu,
} from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function FontPairings() {
  return (
    <main className="my-32">
      <div id="pair-1" className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span
            className={`${inter_tight.className} italic flex justify-end items-end text-rd font-bold w-4/12`}>
            Oswald
          </span>
          <h2 className={`${oswald.className} w-6/12 font-bold text-5xl`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${inter_tight.className} italic flex justify-end text-blgrn font-bold w-4/12`}>
            Cardo
          </span>
          <p className={`${cardo.className} text-lg w-4/12`}>
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
            className={`${inter_tight.className} italic flex justify-end items-end text-rd font-bold w-4/12`}>
            Viga
          </span>
          <h2 className={`${viga.className} w-6/12 font-bold text-5xl`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${inter_tight.className} italic flex justify-end text-blgrn font-bold w-4/12`}>
            Oxygen
          </span>
          <p className={`${oxygen.className} text-lg w-4/12`}>
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
            className={`${inter_tight.className} italic flex justify-end items-end text-rd font-bold w-4/12`}>
            Playfair Display
          </span>
          <h2 className={`${playfair.className} w-6/12 font-bold text-5xl`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${inter_tight.className} italic flex justify-end text-blgrn font-bold w-4/12`}>
            Source Sans 3
          </span>
          <p className={`${sourSans.className} text-lg w-4/12`}>
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
            className={`${inter_tight.className} italic flex justify-end items-end text-rd font-bold w-4/12`}>
            Oswald
          </span>
          <h2 className={`${oswald.className} w-6/12 font-bold text-5xl`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${inter_tight.className} italic flex justify-end text-blgrn font-bold w-4/12`}>
            Quattrocento
          </span>
          <p className={`${quattro.className} text-lg w-4/12`}>
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
            className={`${inter_tight.className} italic flex justify-end items-end text-rd font-bold w-4/12`}>
            Bebas Neue
          </span>
          <h2 className={`${bebas.className} w-6/12 font-bold text-5xl`}>
            Heading Font
          </h2>
        </div>
        <div className="flex gap-20">
          <span
            className={`${inter_tight.className} italic flex justify-end text-blgrn font-bold w-4/12`}>
            Ubuntu Condensed
          </span>
          <p className={`${ubuntu.className} text-lg w-4/12`}>
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

      <h2 className={`${viga.className} text-center font-bold text-xl`}>
        MORE FONT PAIRINGS TO COME. ^^
      </h2>
    </main>
  );
}
