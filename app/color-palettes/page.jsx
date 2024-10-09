'use client';

import React from 'react';
import { hexToRgb, calculateLuminance, rgbToHsl } from '@/utils/colorPicker';
// import { styles } from '@/ui/style';
// import { viga } from '@/ui/fonts';

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
      </div>
      <div>
        <div>
          <h3 className="text-lg font-bold">Project-Based Color Palettes:</h3>
          <hr className="my-2 border border-blck/10" />
          <div className="my-4 flex gap-10">
            <div className="flex size-40">
              <div className="h-full w-1/2 rounded-l border border-blck bg-[#FFFFE3] text-sm text-blck">
                #FFFFE3
              </div>
              <div className="h-full w-1/2 rounded-r border border-blck bg-[#10100E] text-sm text-whte">
                #10100E
              </div>
            </div>
            <div className="flex size-40">
              <div className="h-full w-1/2 rounded-l border border-blck bg-[#EEEEEE]"></div>
              <div className="h-full w-1/2 rounded-r border border-blck bg-[#393E46]"></div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <h3 className="text-lg font-bold">Standard Color Palettes:</h3>
          <hr className="my-2 border border-blck/10" />
          <div className="my-4">
            <div className="flex size-40 flex-col">
              <div className="h-1/2 w-full rounded-t bg-[#295F4E]"></div>
              <div className="h-1/2 w-full rounded-b bg-[#6DB193]"></div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">Color Inspirations:</h3>
          <hr className="my-2 border border-blck/10" />
          <div className="my-4">
            <div className="size-40 rounded bg-blck"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
