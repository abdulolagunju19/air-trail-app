import Head from 'next/head';
import InsertFlight from '../components/InsertFlight'

// The main component for the Add Flight page
export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Demo Trail</title>
        <meta name="description" content="Brought to you by Abdul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InsertFlight/>
    </>
  )
}
