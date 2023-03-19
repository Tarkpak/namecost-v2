import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ExpiredDom } from '@/components/datas/ExpiredDom'

export default function ExpiredAuction() {
  return (
    <>
      <Head>
        <title>Expired Auction Domains - NameCost.com</title>
        <meta
          name="description"
          content="Expired Auction Domains,The best free domains tools."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <ExpiredDom />
      </main>
      <Footer />
    </>
  )
}
