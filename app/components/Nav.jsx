'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/components.module.css';
import { viga } from '@/ui/fonts';

export default function Nav() {
  const pathname = usePathname();
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path;
  };

  return (
    <nav className="flex items-end justify-between px-20 py-5">
      <Link
        href="/developer"
        className={`flex items-end gap-2 ${viga.className}`}
      >
        <Image
          src="/devlogo.png"
          alt="developer logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
        <p
          className={
            isActive('/developer')
              ? 'underline decoration-2 underline-offset-4'
              : styles.transitionA
          }
        >
          Developer
        </p>
      </Link>
      <div className="space-x-5">
        <Link
          href="/"
          className={
            isActive('/')
              ? 'font-bold underline decoration-2 underline-offset-4'
              : styles.transitionA
          }
        >
          Home
        </Link>
        {/* TODO: make the JS SNIPPETS page */}
        {/* <Link
          href="/js-snippets"
          className={
            isActive('/js-snippets')
              ? 'font-bold underline decoration-2 underline-offset-4'
              : styles.transitionA
          }
        >
          JS Snippets
        </Link> */}
        <Link
          href="/dev-blueprints"
          className={
            isActive('/dev-blueprints')
              ? 'font-bold underline decoration-2 underline-offset-4'
              : styles.transitionA
          }
        >
          Dev Blueprints
        </Link>
        <Link
          href="/font-pairings"
          className={
            isActive('/font-pairings')
              ? 'font-bold underline decoration-2 underline-offset-4'
              : styles.transitionA
          }
        >
          Font Pairings
        </Link>
        <Link
          href="/color-palettes"
          className={
            isActive('/color-palettes')
              ? 'font-bold underline decoration-2 underline-offset-4'
              : styles.transitionA
          }
        >
          Color Palettes
        </Link>
      </div>
    </nav>
  );
}
