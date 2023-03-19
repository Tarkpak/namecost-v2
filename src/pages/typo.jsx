import Head from 'next/head'
import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TypoCheck } from '@/components/freetools/TypoCheck'
import { TypoCheckResult } from '@/components/freetools/TypoCheckResult'

export default function Typo() {
  return (
    <>
      <Head>
        <title>Protect your domain brand with NameCost.com</title>
        <meta
          name="description"
          content="Protect your domain brand,Domain name typo generator"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavTitle><span className="hidden sm:inline">The Best </span>Typo Domain Name Generator<span className="hidden sm:inline"> Tool</span></NavTitle> 
      <main className="">

        <TypoCheck />
        <TypoCheckResult />
      </main>
      <Footer />
    </>
  )
}
