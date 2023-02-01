import Layout from '../components/Layout';
import '../styles/globals.css';
import { Heebo } from '@next/font/google';
import { AppProps } from 'next/app';

const heebo = Heebo({ subsets: ['hebrew', 'latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${heebo.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
