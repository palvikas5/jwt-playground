import React from 'react';
import Head from 'next/head';
import { HomePageWrapper } from '../styles/index.style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomePageWrapper>
        <main>
          <h1>
            Welcome to
            <a href='https://nextjs.org'>Next.js!</a>
          </h1>
        </main>
      </HomePageWrapper>
    </>
  );
}
