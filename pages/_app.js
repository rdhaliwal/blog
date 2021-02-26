import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageProps.title || 'Randeep Dhaliwal'}</title>

        <link rel="preload" href="https://fonts.googleapis.com/css?family=Eczar&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Eczar&display=swap" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
