import Image from 'next/image';

import { styles } from '@/ui/style';
import { viga, inter } from '@/ui/fonts';

export default function ColorPalettes() {
  return (
    <main className={`${styles.flexCenter} flex-col`}>
      <div id="palette-1">
        <div className={`${styles.flexCenter} my-12`}>
          <div
            className={`${styles.flexCenter} bg-[#ffffe3] w-[200px] h-[200px] outline-outline outline outline-2 rounded-tl-lg rounded-bl-lg`}>
            <p
              className={`${inter.className} font-bold text-xl text-[#10100e]`}>
              #FFFFE3
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#10100e] w-[200px] h-[200px] outline-outline outline outline-2 rounded-tr-lg rounded-br-lg`}>
            <p
              className={`${inter.className} font-bold text-xl text-[#ffffe3]`}>
              #10100E
            </p>
          </div>
        </div>

        <h2 className={`${viga.className} text-center font-bold text-3xl`}>
          PORTFOLIO THEME
        </h2>
        <p className="text-center">
          This color palette is the one used in the developer&#39;s portfolio.{' '}
          <br /> Majority of the site used the light color, while for the other{' '}
          <br /> elements, the dark color is used.
        </p>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="palette-2">
        <div className={`${styles.flexCenter} mb-12`}>
          <div
            className={`${styles.flexCenter} bg-[#0BC6AB] w-[200px] h-[200px] outline-outline outline outline-2 rounded-tl-lg rounded-bl-lg`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #0BC6AB
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-whte w-[200px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #EEEEEE
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-blck w-[200px] h-[200px] outline-outline outline outline-2 rounded-tr-lg rounded-br-lg`}>
            <p className={`${inter.className} font-bold text-xl text-whte`}>
              #1A1A1A
            </p>
          </div>
        </div>

        <h2 className={`${viga.className} text-center font-bold text-3xl`}>
          ORG THEME
        </h2>
        <p className="text-center">
          This color palette is used for a certain org&#39;s website that the{' '}
          <br /> developer once worked on. Majority of the site is on dark
          color, <br /> the light color is used for text elements, and the last
          color is used <br /> for components such as button.
        </p>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="palette-3">
        <div className={`${styles.flexCenter} mb-12`}>
          <div
            className={`${styles.flexCenter} bg-[#393E46] w-[150px] h-[200px] outline-outline outline outline-2 rounded-tl-lg rounded-bl-lg`}>
            <p className={`${inter.className} font-bold text-xl text-whte`}>
              #393E46
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-whte w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p
              className={`${inter.className} font-bold text-xl text-[#393E46]`}>
              #EEEEEE
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#00CA4E] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-whte`}>
              #00CA4E
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#FFBD44] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p
              className={`${inter.className} font-bold text-xl text-[#393E46]`}>
              #FFBD44
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#FF605C] w-[150px] h-[200px] outline-outline outline outline-2 rounded-tr-lg rounded-br-lg`}>
            <p
              className={`${inter.className} font-bold text-xl text-[#393E46]`}>
              #FF605C
            </p>
          </div>
        </div>

        <h2 className={`${viga.className} text-center font-bold text-3xl`}>
          MAC THEME
        </h2>
        <p className="text-center">
          This color palette is used for a fellow developer&#39;s initial
          portfolio <br /> design. Majority of the site used the dark and light
          color while the <br /> 3 remaining colors are used for little details.
        </p>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="palette-4">
        <div className={`${styles.flexCenter} mb-12`}>
          <div
            className={`${styles.flexCenter} bg-[#323232] w-[150px] h-[200px] outline-outline outline outline-2 rounded-tl-lg rounded-bl-lg`}>
            <p className={`${inter.className} font-bold text-xl text-whte`}>
              #323232
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#FF5959] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #FF5959
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#248888] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-whte`}>
              #248888
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#295F4E] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-whte`}>
              #295F4E
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#6DB193] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #6DB193
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#FFBD67] w-[150px] h-[200px] outline-outline outline outline-2 rounded-tr-lg rounded-br-lg`}>
            <p
              className={`${inter.className} font-bold text-xl text-[#323232]`}>
              #FFBD67
            </p>
          </div>
        </div>

        <h2 className={`${viga.className} text-center font-bold text-3xl`}>
          THESIS PROJECT THEME
        </h2>
        <p className="text-center">
          This color palette is used by the developer together with a few <br />
          classmates on their thesis project which is a digital payment <br />{' '}
          system for their school. Majority of the site used a white color{' '}
          <br /> together with one of the green color above. The other colors{' '}
          <br /> were used for small elements or other purposes.
        </p>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <div id="palette-5">
        <div className={`${styles.flexCenter} mb-12`}>
          <div
            className={`${styles.flexCenter} bg-[#F6BD60] w-[150px] h-[200px] outline-outline outline outline-2 rounded-tl-lg rounded-bl-lg`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #F6BD60
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#E76F51] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #E76F51
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#F7EDE2] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #F7EDE2
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#CBF3F0] w-[150px] h-[200px] outline-outline outline outline-2`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #CBF3F0
            </p>
          </div>
          <div
            className={`${styles.flexCenter} bg-[#2EC4B6] w-[150px] h-[200px] outline-outline outline outline-2 rounded-tr-lg rounded-br-lg`}>
            <p className={`${inter.className} font-bold text-xl text-blck`}>
              #2EC4B6
            </p>
          </div>
        </div>

        <h2 className={`${viga.className} text-center font-bold text-3xl`}>
          THE NOTEPAD THEME
        </h2>
        <p className="text-center">
          This color palette is used on this website itself for different <br />
          elements. As for the majority of the site, a generic black and <br />{' '}
          white color were used.
        </p>
      </div>

      <div className={`${styles.flexCenter} my-12`}>
        <Image src="/hr.svg" alt="horizontal rule" width={1100} height={1} />
      </div>

      <h2
        className={`${viga.className} text-center font-bold text-xl mt-12 mb-24`}>
        MORE COLOR PALETTES TO COME. ^^
      </h2>
    </main>
  );
}
