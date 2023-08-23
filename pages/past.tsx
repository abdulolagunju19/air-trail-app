import Head from 'next/head';
import PastFlights from '@/components/PastFlights';

// The main component for the Past Flights page
export default function Past() {
  return (
    <>
      <Head>
        <title>Demo Trail</title>
        <meta name="description" content="Brought to you by Abdul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PastFlights/>
    </>
  )
}
