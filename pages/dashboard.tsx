import Head from 'next/head';
import InsertFlight from '../components/InsertFlight'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Air Trail</title>
        <meta name="description" content="Brought to you by Air Trail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airtrail.jpg" />
      </Head>
      <InsertFlight/>
    </>
  )
}
