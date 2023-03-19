import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Homes } from '@/components/Homes'

export default function Home() {
  return (
    <>
      <Head>
        <title>NameCost - The best free domains tools</title>
        <meta
          name="description"
          content="The best free domains tools."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">
        <Homes />
      </main>
      <Footer />
    </>
  )
}
