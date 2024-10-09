export const hexToRgb = (hex) => {
  const bigInt = parseInt(hex.substring(1), 16);
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return { r, g, b };
};

export const rgbToHsl = ({ r, g, b }) => {
  let [rColor, gColor, bColor] = [r / 255, g / 255, b / 255];

  const max = Math.max(rColor, gColor, bColor);
  const min = Math.min(rColor, gColor, bColor);

  let h, s;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0;
  } else {
    const diff = max - min;
    if (l > 0.5) {
      s = diff / (2 - max - min);
    } else {
      s = diff / (max + min);
    }

    switch (max) {
      case rColor:
        if (gColor < bColor) {
          h = (gColor - bColor) / diff + 6;
        } else {
          h = (gColor - bColor) / diff;
        }
        break;
      case gColor:
        h = (bColor - rColor) / diff + 2;
        break;
      case bColor:
        h = (rColor - gColor) / diff + 4;
        break;
    }
    h = h / 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

export const calculateLuminance = (hexColor) => {
  const rgb = hexToRgb(hexColor);

  let redChannel = rgb.r / 255;
  let greenChannel = rgb.g / 255;
  let blueChannel = rgb.b / 255;

  let red, green, blue;

  if (redChannel <= 0.03928) {
    red = redChannel / 12.92;
  } else {
    red = Math.pow((redChannel + 0.055) / 1.055, 2.4);
  }

  if (greenChannel <= 0.03928) {
    green = greenChannel / 12.92;
  } else {
    green = Math.pow((greenChannel + 0.055) / 1.055, 2.4);
  }

  if (blueChannel <= 0.03928) {
    blue = blueChannel / 12.92;
  } else {
    blue = Math.pow((blueChannel + 0.055) / 1.055, 2.4);
  }

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};
