import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { My404s } from '@/components/My404s'


export default function my404() {
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
      <main>

        <My404s />
      </main>
      <Footer />
    </>
  )
}
