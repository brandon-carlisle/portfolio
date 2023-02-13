import Navbar from '../components/Navbar';
import './global.css';
import { Heebo } from '@next/font/google';
import clsx from 'clsx';
import { AnalyticsWrapper } from '../components/Analytics';

const heebo = Heebo({ subsets: ['hebrew', 'latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'min-h-screen min-w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-black p-4 text-white antialiased',
          heebo.className
        )}
      >
        <Navbar />
        <main className="mx-auto max-w-screen-md pt-16 md:pt-32">
          {children}
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
