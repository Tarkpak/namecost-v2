import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MarketDom } from '@/components/datas/MarketDom'

export default function Auctions() {
  return (
    <>
      <Head>
        <title>Marketplace Domains - NameCost.com</title>
        <meta
          name="description"
          content="Marketplace Domains"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <MarketDom />
      </main>
      <Footer />
    </>
  )
}
