import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Nav } from '@futbol-pro/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FutbolPRO</title>
      </Head>
      <div className="app">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
