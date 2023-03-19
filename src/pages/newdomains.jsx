import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NewDom } from '@/components/datas/NewDom'

export default function NewDomains() {
  return (
    <>
      <Head>
        <title>New Registered Domains - NameCost.com</title>
        <meta
          name="description"
          content="New Registered Domains"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <NewDom />
      </main>
      <Footer />
    </>
  )
}
