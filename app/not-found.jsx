import Link from 'next/link';

import { inter } from '@/ui/fonts';
import { Button } from '@/ui/index';

export default function NotFound() {
  return (
    <>
      <h1 className={`${inter.className} mt-20 text-center text-7xl font-bold`}>
        404 - Page Not Found
      </h1>
      <Link href="/" className="mt-10 flex items-center justify-center">
        <Button title={`Let's go back! ^^`} hex="bgYellow" />
      </Link>
    </>
  );
}
