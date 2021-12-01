import React from 'react';
import Head from 'next/head';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Web-store</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      {/* <Header /> */}
      <div className="container">
        <Main />
      </div>
    </>
  );
};

export default Home;
