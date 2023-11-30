'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/components.module.css';

export default function Nav() {
  const pathname = usePathname();
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }

    return pathname.includes(path);
  };

  return (
    <nav className="flex justify-center items-center m-5 gap-10">
      <div className="flex gap-5 pt-2 h-fit">
        <Link
          href="/js-snippets"
          className={
            isActive('/js-snippets')
              ? 'font-bold underline underline-offset-4 decoration-2'
              : styles.transitionA
          }>
          JS Snippets
        </Link>
        <Link
          href="/font-pairings"
          className={
            isActive('/font-pairings')
              ? 'font-bold underline underline-offset-4 decoration-2'
              : styles.transitionA
          }>
          Font Pairings
        </Link>
        <Link
          href="/color-palettes"
          className={
            isActive('/color-palettes')
              ? 'font-bold underline underline-offset-4 decoration-2'
              : styles.transitionA
          }>
          Color Palettes
        </Link>
      </div>
      <div>
        <Image
          src="/devlogo.png"
          width={50}
          height={50}
          alt="developer logo"
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-5 pt-2 h-fit">
        <Link
          href="/"
          className={
            isActive('/')
              ? 'font-bold underline underline-offset-4 decoration-2'
              : styles.transitionA
          }>
          TheNotePad
        </Link>
        <Link
          href="/quick-starts"
          className={
            isActive('/quick-starts')
              ? 'font-bold underline underline-offset-4 decoration-2'
              : styles.transitionA
          }>
          Front-End Quick Start
        </Link>
        <Link
          href="/developer"
          className={
            isActive('/developer')
              ? 'font-bold underline underline-offset-4 decoration-2'
              : styles.transitionA
          }>
          Developer
        </Link>
      </div>
    </nav>
  );
}
