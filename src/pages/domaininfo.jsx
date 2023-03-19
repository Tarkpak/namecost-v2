import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DomainInfos } from '@/components/pages/DomainInfos'


export default function DomainInfo() {
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
      <main className="bg-mymain">

        <DomainInfos />
      </main>
      <Footer />
    </>
  )
}
