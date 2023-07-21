import clsx from 'clsx';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import Navbar from '@/components/Navbar';

const fira = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Brandon Carlisle | Web Developer',
    template: '%s | Brandon Carlisle',
  },
  applicationName: 'Brandon Carlisle | Web Developer',
  authors: { name: 'Brandon Carlisle', url: 'https://www.carlisle.dev/' },
  publisher: 'Brandon Carlisle',
  description:
    'A developer crafting performant websites with up-to-date looking user interfaces on the web.',
  colorScheme: 'dark',
  viewport: { width: 'device-width', initialScale: 1 },
  icons: {
    shortcut: '/favicon.ico',
  },
  keywords: [
    'brandon',
    'carlisle',
    'frontend',
    'fullstack',
    'developer',
    'Next.js',
    'React',
    'TypeScript',
  ],
  openGraph: {
    title: 'Brandon Carlisle | Web Developer',
    description:
      'A developer crafting performant websites with up-to-date looking user interfaces on the web.',
    url: new URL('https://carlisle.dev'),
  },
  metadataBase: new URL('https://carlisle.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/en-GB',
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark overflow-y-scroll">
      <body
        className={clsx(
          'relative min-h-screen min-w-full bg-neutral-100 text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-400 md:text-lg',
          fira.className,
        )}
      >
        <div className="absolute top-0 left-0 z-50 w-full p-2 md:p-4">
          <div className="mx-auto">
            <Navbar />
            <main className="mx-auto max-w-screen-sm py-16 pb-4 md:py-20">
              {children}
            </main>
          </div>
        </div>
        <div className="fixed h-screen w-full bg-black/70 bg-grain opacity-40 contrast-[1.2]">
          <div className="blobs h-full w-full opacity-[0.05]"></div>
        </div>
      </body>
    </html>
  );
}
