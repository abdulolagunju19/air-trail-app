import Head from 'next/head';
import FlightApp from '../components/FlightApp';

// The main component for the Home page
export default function Home() {
  return (
    <>
      <Head>
        <title>Air Trail</title>
        <meta name="description" content="Brought to you by Air Trail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airtrail.jpg" />
      </Head>
      <FlightApp/>
    </>
  )
}
