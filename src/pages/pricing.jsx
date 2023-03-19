import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricings } from '@/components/shopping/Pricings'
import { Faqs } from '@/components/shopping/Faqs'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>NameCost</title>
        <meta
          name="description"
          content="The best free domain tools"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-gray-50">

        <Pricings />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
