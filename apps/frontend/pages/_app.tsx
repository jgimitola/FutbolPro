import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Nav } from '@futbol-pro/ui';

import { AppWrapper } from '../components/country-context/country-context';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FutbolPRO</title>
      </Head>
      <div className="app">
        <Nav />
        <main>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
