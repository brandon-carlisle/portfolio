import clsx from 'clsx';
import { type Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';

import '@/styles/globals.css';

import Navbar from '@/components/Navbar';

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Brandon Carlisle | Frontend Web Developer',
    template: '%s | Brandon Carlisle',
  },
  applicationName: 'Brandon Carlisle | Frontend Web Developer',
  authors: { name: 'Brandon Carlisle', url: 'https://www.carlisle.dev/' },
  publisher: 'Brandon Carlisle',
  description:
    'Frontend web developer interested in modern tools, and making cool stuff on the web.',
  colorScheme: 'dark',
  viewport: { width: 'device-width', initialScale: 1 },
  icons: {
    shortcut: '/favicon.ico',
  },
  keywords: [
    'brandon',
    'carlisle',
    'frontend',
    'developer',
    'Next.js',
    'React',
  ],
  openGraph: {
    title: 'Brandon Carlisle | Frontend Web Developer',
    description:
      'Frontend web developer interested in modern tools, and making cool stuff on the web',
    images: [
      {
        url: 'https://carlisle.dev/api/og',
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body
        className={clsx(
          'relative min-h-screen min-w-full bg-zinc-900 bg-none text-base text-zinc-50 antialiased md:text-lg lg:text-xl',
          fira.className,
        )}
      >
        <>
          <div className="fixed top-0 left-0 h-full w-full overflow-hidden bg-grain-texture bg-cover opacity-25 brightness-[0.45] contrast-125" />
          <div className="absolute top-0 left-0 z-50 w-full p-4">
            <Navbar />
            <main className="mx-auto max-w-screen-md pt-16 md:pt-32">
              {children}
            </main>
          </div>
        </>
      </body>
    </html>
  );
}
