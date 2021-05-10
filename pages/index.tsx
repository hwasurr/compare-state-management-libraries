import Link from 'next/link';
import Head from 'next/head';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        maxWidth: 600,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="/native">native</Link>
      <Link href="/redux">redux</Link>
      <Link href="/recoil">recoil</Link>
      <Link href="/zustand">zustand</Link>
      <Link href="/jotai">jotai</Link>
      <Link href="/valtio">valtio</Link>
    </div>
  </div>
);

export default Home;
