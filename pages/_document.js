import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen min-w-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-black p-2 text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// bg-gradient-to-r from-gray-700 via-gray-900 to-black

// bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-black
// bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-black
