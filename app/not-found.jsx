import Link from 'next/link';

import { inter } from '@/ui/fonts';
import { Button } from '@/ui/index';

export default function NotFound() {
  return (
    <>
      <h1 className={`${inter.className} text-7xl font-bold mt-48 text-center`}>
        404 - Page Not Found
      </h1>
      <Link href="/" className="flex justify-center items-center mt-5 mb-40">
        <Button title={`Let's go back! ^^`} hex="bgYellow" />
      </Link>
    </>
  );
}
