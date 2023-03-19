import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Tlds } from '@/components/monitor/Tlds'

export default function Tld() {
  return (
    <>
      <Head>
        <title>Price Comparison – Find cheap domain to buy at NameCost.com</title>
        <meta
          name="description"
          content="Find cheap domain to buy at NameCost.com"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <Tlds />
      </main>
      <Footer />
    </>
  )
}
