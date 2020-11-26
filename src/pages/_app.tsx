import React from 'react';
import Head from 'next/head';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Layout } from '../Layout/Layout';

Sentry.init({
  dsn:
    'https://8d5650188e3d46dd9d9e76f30f934dc8@o482995.ingest.sentry.io/5534045',
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          key='fonts'
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap'
        />
        <title key='title'>
          JWT Playground | Decode, Sign and Verify JWT Tokens
        </title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
