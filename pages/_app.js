import '../styles/globals.css';
import Layout from '../components/layout';
import { Heebo } from '@next/font/google';

const heebo = Heebo({ subsets: ['hebrew', 'latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${heebo.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
