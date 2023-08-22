import Head from 'next/head';
import PastFlights from '@/components/PastFlights';

export default function Past() {
  return (
    <>
      <Head>
        <title>Air Trail</title>
        <meta name="description" content="Brought to you by Air Trail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airtrail.jpg" />
      </Head>
      <PastFlights/>
    </>
  )
}
