import Image from 'next/image';

import { styles } from '@/ui/style';
import { viga, inter } from '@/ui/fonts';

export default function ColorPalettes() {
  return (
    <main className={`${styles.flexCenter} flex-wrap mx-72 my-24 gap-8`}>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} h-3/5 bg-[#FFFFE3] flex items-end`}>
            <p className={`${viga.className} text-[#10100E] pl-2`}>#FFFFE3</p>
          </div>
          <div className={`${styles.customBorder} h-2/5 bg-[#10100E]`}>
            <p className={`${viga.className} text-[#FFFFE3] pl-2`}>#10100E</p>
          </div>
        </div>
        <div className="h-2/6 mt-2">
          <p className="font-bold text-2xl">PORTFOLIO THEME</p>
          <p>
            This color palette was the one used in the developer's portfolio.
          </p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} h-3/5 bg-[#1A1A1A] flex items-end`}>
            <p className={`${viga.className} text-whte pl-2`}>#1A1A1A</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/5 bg-whte flex items-center`}>
            <p className={`${viga.className} text-[#1A1A1A] pl-2`}>#EEEEEE</p>
          </div>
          <div className={`${styles.customBorder} h-1/5 bg-[#0BC6AB]`}>
            <p className={`${viga.className} text-[#1A1A1A] pl-2`}>#0BC6AB</p>
          </div>
        </div>
        <div className="h-2/6 mt-2">
          <p className="font-bold text-2xl">DARK-TECHY THEME</p>
          <p>
            This was used for an org website that the developer once worked on.
          </p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} h-3/5 bg-whte flex items-end`}>
            <p className={`${viga.className} text-[#393E46] pl-2`}>#EEEEEE</p>
          </div>
          <div className={`${styles.customBorder} h-2/5 bg-[#393E46]`}>
            <p className={`${viga.className} text-whte pl-2`}>#393E46</p>
          </div>
        </div>
        <div className="h-2/6 mt-2">
          <p className="font-bold text-2xl">PORTFOLIO THEME 2</p>
          <p>This color palette was used in someone's portfolio.</p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} h-2/5 bg-whte flex items-end`}>
            <p className={`${viga.className} text-[#323232] pl-2`}>#EEEEEE</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/5 bg-[#295F4E] flex items-center`}>
            <p className={`${viga.className} text-whte pl-2`}>#295F4E</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/5 bg-[#6DB193] flex items-center`}>
            <p className={`${viga.className} text-[#323232] pl-2`}>#6DB193</p>
          </div>
          <div className={`${styles.customBorder} h-1/5 bg-[#323232]`}>
            <p className={`${viga.className} text-whte pl-2`}>#323232</p>
          </div>
        </div>
        <div className="h-2/6 mt-2">
          <p className="font-bold text-2xl">THESIS SYSTEM THEME</p>
          <p>Dev team color palette for thesis project.</p>
        </div>
      </div>
      <div className={`${styles.colorCard} p-4`}>
        <div className="h-4/6">
          <div
            className={`${styles.customBorder} h-1/6 bg-whte flex items-center`}>
            <p className={`${viga.className} text-blck pl-2`}>#EEEEEE</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/6 bg-cyn flex items-center`}>
            <p className={`${viga.className} text-blck pl-2`}>#CBF3F0</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/6 bg-bge flex items-center`}>
            <p className={`${viga.className}  text-blck pl-2`}>#F7EDE2</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/6 bg-yllw flex items-center`}>
            <p className={`${viga.className} text-blck pl-2`}>#F6BD60</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/6 bg-blgrn flex items-center`}>
            <p className={`${viga.className} text-blck pl-2`}>#2EC4B6</p>
          </div>
          <div
            className={`${styles.customBorder} h-1/6 bg-rd flex items-center`}>
            <p className={`${viga.className} text-blck pl-2`}>#E76F51</p>
          </div>
        </div>
        <div className="h-2/6 mt-2">
          <p className="font-bold text-2xl">THE NOTEPAD THEME</p>
          <p>
            This color palette was used on this website itself for different
            elements.
          </p>
        </div>
      </div>
    </main>
  );
}
