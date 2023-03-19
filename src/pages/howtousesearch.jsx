import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HowToUseSearch } from '@/components/help/HowToUseSearch'


export default function HowToUseSearchs() {
  return (
    <>
      <Head>
        <title>Search - NameCost.com</title>
        <meta
          name="description"
          content="The best free domain tools"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="">

        <HowToUseSearch />
      </main>
      <Footer />
    </>
  )
}
