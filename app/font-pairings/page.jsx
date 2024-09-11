import styles from './styles.module.css';

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

const fontPairings = [
  {
    id: 1,
    headingFont: 'Oswald',
    headingClassName: oswald.className,
    bodyFont: 'Cardo',
    bodyClassName: cardo.className,
  },
  {
    id: 2,
    headingFont: 'Viga',
    headingClassName: viga.className,
    bodyFont: 'Oxygen',
    bodyClassName: oxygen.className,
  },
  {
    id: 3,
    headingFont: 'Playfair Display',
    headingClassName: playfairDisplay.className,
    bodyFont: 'Source Sans 3',
    bodyClassName: sourceSans.className,
  },
  {
    id: 4,
    headingFont: 'Oswald',
    headingClassName: oswald.className,
    bodyFont: 'Quattrocento',
    bodyClassName: quattrocento.className,
  },
  {
    id: 5,
    headingFont: 'Bebas Neue',
    headingClassName: bebasNeue.className,
    bodyFont: 'Ubuntu Condensed',
    bodyClassName: ubuntuCondensed.className,
  },
];

export default function FontPairings() {
  return (
    <section className="mx-14 my-40">
      <div className={styles.custom__grid}>
        {fontPairings.map((fontPair) => (
          <div
            key={fontPair.id}
            className={`${styles.grid__item} space-y-2 p-10`}
          >
            <div className="flex items-end gap-5">
              <span
                className={`${interTight.className} w-1/5 text-right text-sm font-bold italic text-rd`}
              >
                {fontPair.headingFont}
              </span>
              <h3
                className={`${fontPair.headingClassName} w-4/5 text-3xl font-bold`}
              >
                This is a Heading
              </h3>
            </div>
            <div className="flex gap-5">
              <span
                className={`${interTight.className} w-1/5 text-right text-sm font-bold italic text-blgrn`}
              >
                {fontPair.bodyFont}
              </span>
              <p className={`${fontPair.bodyClassName} w-4/5`}>
                This is how the body would look like using{' '}
                <span className="font-bold underline">{fontPair.bodyFont}</span>{' '}
                font. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
