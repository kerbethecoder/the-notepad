import '@/ui/globals.css';
import { Nav } from '@/components/index';
import { oxygen } from '@/ui/fonts';

export const metadata = {
  title: 'The NotePad.',
  description:
    'The notepad is a personal repository of notes recorded throughout the owner&apos;s transformative journey, beginning with the aspiration to become a front-end web developer and culminating in the achievement of becoming a specialized software engineer/developer in the field of web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxygen.className}`}>
        <Nav />
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
