import clsx from 'clsx';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import Svg from '@/components/Svg';

const fira = Inter({
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
    <html lang="en" className="overflow-y-scroll" suppressHydrationWarning>
      <body
        className={clsx(
          'relative min-h-screen min-w-full bg-neutral-100 bg-none text-base text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-200 md:text-lg lg:text-xl',
          fira.className,
        )}
      >
        <Providers>
          <div className="absolute top-0 left-0 z-50 w-full p-2 md:p-4">
            <div className="mx-auto rounded-3xl bg-zinc-100/5 bg-opacity-5 dark:bg-zinc-900/5">
              <Navbar />
              <main className="mx-auto max-w-screen-md px-4 py-16 pb-4 md:py-20 md:px-8">
                {children}
              </main>
            </div>
          </div>
          {/* <Svg /> */}
          <div className="fixed h-screen w-full bg-grain opacity-60 dark:bg-black dark:opacity-30"></div>
        </Providers>
      </body>
    </html>
  );
}
