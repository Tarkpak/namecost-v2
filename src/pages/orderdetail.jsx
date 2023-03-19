import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { OrderDetails } from '@/components/shopping/OrderDetails'

export default function OrderDetail() {
  return (
    <>
      <Head>
        <title>Order Detail - NameCost.com</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavTitle><span className="hidden sm:inline">The Best </span>Domain Check<span className="hidden sm:inline"> Tool</span></NavTitle> 
      <main>

        <OrderDetails />
      </main>
      <Footer />
    </>
  )
}
