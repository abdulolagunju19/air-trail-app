import Head from 'next/head';
import RuleBook from '../components/RuleBook';

// The main component for the Rules page
export default function Rules() {
  return (
    <>
      <Head>
        <title>Demo Trail</title>
        <meta name="description" content="Brought to you by Abdul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RuleBook/>
    </>
  )
}
