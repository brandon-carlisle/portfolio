import clsx from 'clsx';
import { type Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';

import Navbar from '@components/Navbar';

import './global.css';

const arimo = Fira_Sans({
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
          'bg-zinc-950 relative min-h-screen min-w-full overscroll-y-none p-4 font-normal text-zinc-50 antialiased',
          arimo.className,
        )}
      >
        <Navbar />

        <main className="mx-auto max-w-screen-md pt-16 md:pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
