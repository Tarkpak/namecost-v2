import Head from 'next/head'

import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Checkouts } from '@/components/shopping/Checkouts'

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout - NameCost.com</title>
        <meta name="description" content="" />
      </Head>
      <BannerTop />
      <Header />
      <NavTitle>
        <span className="hidden sm:inline">The Best </span>Domain Check
        <span className="hidden sm:inline"> Tool</span>
      </NavTitle>
      <main>
        <Checkouts />
      </main>
      <Footer />
    </>
  )
}
