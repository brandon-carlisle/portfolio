import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen min-w-full bg-gray-800 p-2 text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
