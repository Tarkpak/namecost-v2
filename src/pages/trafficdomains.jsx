import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TrafficDom } from '@/components/datas/TrafficDom'

export default function Traffics() {
  return (
    <>
      <Head>
        <title>Traffic Domains - NameCost.com</title>
        <meta
          name="description"
          content="Traffic Domains,The best free domains tools."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <TrafficDom />
      </main>
      <Footer />
    </>
  )
}
