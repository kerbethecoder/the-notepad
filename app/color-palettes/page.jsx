import { styles } from '@/ui/style';
import { viga } from '@/ui/fonts';

export default function ColorPalettes() {
  return (
    <main className={`${styles.flexCenter} mx-72 my-24 flex-wrap gap-8`}>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} flex h-3/5 items-end bg-[#FFFFE3]`}
          >
            <p className={`${viga.className} pl-2 text-[#10100E]`}>#FFFFE3</p>
          </div>
          <div className={`${styles.customBorder} h-2/5 bg-[#10100E]`}>
            <p className={`${viga.className} pl-2 text-[#FFFFE3]`}>#10100E</p>
          </div>
        </div>
        <div className="mt-2 h-2/6">
          <p className="text-2xl font-bold">PORTFOLIO THEME</p>
          <p>
            This color palette was the one used in the developer&apos;s
            portfolio.
          </p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} flex h-3/5 items-end bg-[#1A1A1A]`}
          >
            <p className={`${viga.className} pl-2 text-whte`}>#1A1A1A</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/5 items-center bg-whte`}
          >
            <p className={`${viga.className} pl-2 text-[#1A1A1A]`}>#EEEEEE</p>
          </div>
          <div className={`${styles.customBorder} h-1/5 bg-[#0BC6AB]`}>
            <p className={`${viga.className} pl-2 text-[#1A1A1A]`}>#0BC6AB</p>
          </div>
        </div>
        <div className="mt-2 h-2/6">
          <p className="text-2xl font-bold">DARK-TECHY THEME</p>
          <p>
            This was used for an org website that the developer once worked on.
          </p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} flex h-3/5 items-end bg-whte`}
          >
            <p className={`${viga.className} pl-2 text-[#393E46]`}>#EEEEEE</p>
          </div>
          <div className={`${styles.customBorder} h-2/5 bg-[#393E46]`}>
            <p className={`${viga.className} pl-2 text-whte`}>#393E46</p>
          </div>
        </div>
        <div className="mt-2 h-2/6">
          <p className="text-2xl font-bold">PORTFOLIO THEME 2</p>
          <p>This color palette was used in someone&apos;s portfolio.</p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} flex h-2/5 items-end bg-whte`}
          >
            <p className={`${viga.className} pl-2 text-[#323232]`}>#EEEEEE</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/5 items-center bg-[#295F4E]`}
          >
            <p className={`${viga.className} pl-2 text-whte`}>#295F4E</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/5 items-center bg-[#6DB193]`}
          >
            <p className={`${viga.className} pl-2 text-[#323232]`}>#6DB193</p>
          </div>
          <div className={`${styles.customBorder} h-1/5 bg-[#323232]`}>
            <p className={`${viga.className} pl-2 text-whte`}>#323232</p>
          </div>
        </div>
        <div className="mt-2 h-2/6">
          <p className="text-2xl font-bold">THESIS SYSTEM THEME</p>
          <p>Dev team color palette for thesis project.</p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} flex h-1/6 items-center bg-whte`}
          >
            <p className={`${viga.className} pl-2 text-blck`}>#EEEEEE</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/6 items-center bg-cyn`}
          >
            <p className={`${viga.className} pl-2 text-blck`}>#CBF3F0</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/6 items-center bg-bge`}
          >
            <p className={`${viga.className} pl-2 text-blck`}>#F7EDE2</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/6 items-center bg-yllw`}
          >
            <p className={`${viga.className} pl-2 text-blck`}>#F6BD60</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/6 items-center bg-blgrn`}
          >
            <p className={`${viga.className} pl-2 text-blck`}>#2EC4B6</p>
          </div>
          <div
            className={`${styles.customBorder} flex h-1/6 items-center bg-rd`}
          >
            <p className={`${viga.className} pl-2 text-blck`}>#E76F51</p>
          </div>
        </div>
        <div className="mt-2 h-2/6">
          <p className="text-2xl font-bold">THE NOTEPAD THEME</p>
          <p>
            This color palette was used on this website itself for different
            elements.
          </p>
        </div>
      </div>
    </main>
  );
}
