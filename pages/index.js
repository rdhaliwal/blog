import React from 'react';
import Head from 'next/head';
import HomePage from './home';

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Randeep Dhaliwal</title>
      </Head>

      <HomePage />
    </React.Fragment>
  );
};

export default App;
