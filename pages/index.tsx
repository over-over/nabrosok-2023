import type { NextPage } from 'next';
import Head from 'next/head';

import { HomePage } from '@pagination/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
