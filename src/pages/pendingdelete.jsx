import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PendingDeleteDom } from '@/components/datas/PendingDeleteDom'

export default function PendingDeleteDoms() {
  return (
    <>
      <Head>
        <title>Pending Delete Domains - NameCost.com</title>
        <meta
          name="description"
          content="Pending Delete Domains,The best free domains tools."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <PendingDeleteDom />
      </main>
      <Footer />
    </>
  )
}
