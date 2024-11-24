'use client';

import React from 'react';
import { hexToRgb, calculateLuminance, rgbToHsl } from '@/utils/colorPicker';
import { viga } from '@/ui/fonts';
// import { styles } from '@/ui/style';

export default function ColorPalettes() {
  const [activeColor, setActiveColor] = React.useState('#eeeeee');
  const [textColor, setTextColor] = React.useState('#1a1a1a');
  const [terminalColor, setTerminalColor] = React.useState('#dedede');

  const handleChangeColor = (newColor) => {
    setActiveColor(newColor);

    const luminance = calculateLuminance(newColor);
    if (luminance > 0.5) {
      setTextColor('#1a1a1a');
      setTerminalColor('#dedede');
    } else {
      setTextColor('#eeeeee');
      setTerminalColor('#3b3b3b');
    }
  };

  const rgb = hexToRgb(activeColor);
  const hsl = rgbToHsl(rgb);

  return (
    <main className="mx-60 my-40">
      <div
        style={{ backgroundColor: activeColor, color: textColor }}
        className="my-10 flex h-80 items-center justify-evenly rounded border border-blck/30 text-sm shadow-lg"
      >
        <div className="flex items-center gap-2">
          {/* maybe add hex input, rgb input, and hsl input */}
          <p>Test your color:</p>
          <input
            type="color"
            id="chosenColor"
            value={`${activeColor}`}
            onChange={(e) => handleChangeColor(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">HEX:</span>
            <code
              className="rounded border border-blck/30 px-5 py-1"
              style={{ backgroundColor: terminalColor }}
            >
              {activeColor}
            </code>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">RGB:</span>
            <code
              className="rounded border border-blck/30 px-5 py-1"
              style={{ backgroundColor: terminalColor }}
            >
              {`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
            </code>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">HSL:</span>
            <code
              className="rounded border border-blck/30 px-5 py-1"
              style={{ backgroundColor: terminalColor }}
            >
              {`hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`}
            </code>
          </div>
        </div>
        <button
          className="rounded border border-blck/30 bg-whte px-5 py-1 font-bold text-blck transition hover:bg-blck hover:text-whte"
          onClick={() => handleChangeColor('#eeeeee')}
        >
          Reset Color
        </button>
      </div>
      <div>
        <div>
          <h3 className="text-lg font-bold">Color Inspirations:</h3>
          <hr className="my-2 border border-blck/10" />
          <div className="my-4 flex gap-10">
            <div className="size-40">
              <div
                className={`${viga.className} flex h-1/2 w-full items-end rounded border border-blck/30 bg-[#E7F6FF] p-1 text-sm text-blck`}
              >
                #E7F6FF
              </div>
            </div>
            <div className="size-40">
              <div
                className={`${viga.className} flex h-1/2 w-full items-end rounded border border-blck/30 bg-[#FFEDFA] p-1 text-sm text-blck`}
              >
                #FFEDFA
              </div>
            </div>
            <div className="size-40">
              <div
                className={`${viga.className} flex h-1/2 w-full items-end rounded border border-blck/30 bg-[#E3EDF8] p-1 text-sm text-blck`}
              >
                #E3EDF8
              </div>
            </div>
            <div className="size-40">
              <div
                className={`${viga.className} flex h-1/2 w-full items-end rounded border border-blck/30 bg-[#FAF5FF] p-1 text-sm text-blck`}
              >
                #FAF5FF
              </div>
            </div>
            <div className="size-40">
              <div
                className={`${viga.className} flex h-1/2 w-full items-end rounded border border-blck/30 bg-[#FEF5EA] p-1 text-sm text-blck`}
              >
                #FEF5EA
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">Two-Tone Palettes:</h3>
          <hr className="my-2 border border-blck/10" />
          <div className="my-4 flex gap-10">
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-t border border-blck/30 bg-[#FFFFE3] p-1 text-sm text-blck`}
              >
                #FFFFE3
              </div>
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-b border border-blck/30 bg-[#10100E] p-1 text-sm text-whte`}
              >
                #10100E
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-t border border-blck/30 bg-[#EEEEEE] p-1 text-sm text-blck`}
              >
                #EEEEEE
              </div>
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-b border border-blck/30 bg-[#393E46] p-1 text-sm text-whte`}
              >
                #393E46
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-t border border-blck/30 bg-[#EEEEEE] p-1 text-sm text-blck`}
              >
                #EEEEEE
              </div>
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-b border border-blck/30 bg-[#295F4E] p-1 text-sm text-whte`}
              >
                #294F4E
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-t border border-blck/30 bg-[#F8C617] p-1 text-sm text-blck`}
              >
                #F8C617
              </div>
              <div
                className={`${viga.className} flex h-1/3 w-full items-end rounded-b border border-blck/30 bg-[#252C37] p-1 text-sm text-whte`}
              >
                #252C37
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">Standard Color Palettes:</h3>
          <hr className="my-2 border border-blck/10" />
          <div className="my-4 flex gap-10">
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-t border border-blck/30 bg-[#6D597A] p-1 text-sm text-whte`}
              >
                #6D597A
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#B56576] p-1 text-sm text-whte`}
              >
                #B56576
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#E56B6F] p-1 text-sm text-whte`}
              >
                #E56B6F
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-b border border-blck/30 bg-[#EAAC8B] p-1 text-sm text-whte`}
              >
                #EAAC8B
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-t border border-blck/30 bg-[#CAD2C5] p-1 text-sm text-blck`}
              >
                #CAD2C5
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#84A98C] p-1 text-sm text-whte`}
              >
                #84A98C
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#52796F] p-1 text-sm text-whte`}
              >
                #52796F
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-b border border-blck/30 bg-[#354F52] p-1 text-sm text-whte`}
              >
                #354F52
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-t border border-blck/30 bg-[#3D5A80] p-1 text-sm text-whte`}
              >
                #3D5A80
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#98C1D9] p-1 text-sm text-blck`}
              >
                #98C1D9
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#E0FBFC] p-1 text-sm text-blck`}
              >
                #E0FBFC
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-b border border-blck/30 bg-[#EE6C4D] p-1 text-sm text-whte`}
              >
                #EE6C4D
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-t border border-blck/30 bg-[#CB997E] p-1 text-sm text-blck`}
              >
                #CB997E
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#DDBEA9] p-1 text-sm text-blck`}
              >
                #DDBEA9
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#FFE8D6] p-1 text-sm text-blck`}
              >
                #FFE8D6
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-b border border-blck/30 bg-[#B7B7A4] p-1 text-sm text-blck`}
              >
                #B7B7A4
              </div>
            </div>
            <div className="flex size-40 flex-col">
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-t border border-blck/30 bg-[#76C893] p-1 text-sm text-whte`}
              >
                #76C893
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#52B69A] p-1 text-sm text-whte`}
              >
                #52B69A
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end border border-blck/30 bg-[#34A0A4] p-1 text-sm text-whte`}
              >
                #34A0A4
              </div>
              <div
                className={`${viga.className} flex h-1/4 w-full items-end rounded-b border border-blck/30 bg-[#168AAD] p-1 text-sm text-whte`}
              >
                #168AAD
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
