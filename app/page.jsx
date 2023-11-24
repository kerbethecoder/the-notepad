import Image from 'next/image';

import { Button } from '@/ui/index';
import { viga } from '@/ui/fonts';

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center mx-72 mt-24">
        <div>
          <h1 className={`${viga.className} text-5xl`}>The NotePad.</h1>
          <p className="my-2 text-lg">
            The notepad is a personal repository of tools, lessons, and other
            things that
            <br />
            helps on the developer&#39;s transformative journey, beginning with
            the aspiration
            <br />
            of just being a front-end web developer to becoming a full-stack web
            <br /> developer in the future.
          </p>
          <div className="flex mt-10 ml-16 gap-5">
            <Button title="Who's the Developer?" hex="bgYellow" />
            <Button title="Explore from the bottom." hex="bgWhite" />
          </div>
        </div>
        <Image src="/hero-img.png" alt="hero-image" width={400} height={300} />
      </div>
      <div className="flex justify-center items-center my-32">
        <Image src="/hr.svg" alt="horizontal rule" width={1000} height={1000} />
      </div>
    </main>
  );
}
