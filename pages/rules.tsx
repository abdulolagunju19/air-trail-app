import Head from 'next/head';
import RuleBook from '../components/RuleBook';

// The main component for the Rules page
export default function Rules() {
  return (
    <>
      <Head>
        <title>Air Trail</title>
        <meta name="description" content="Brought to you by Air Trail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airtrail.jpg" />
      </Head>
      <RuleBook/>
    </>
  )
}
