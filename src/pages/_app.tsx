import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          key='fonts'
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
