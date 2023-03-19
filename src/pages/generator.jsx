import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { GenCheck } from '@/components/freetools/GenCheck'
import { GenCheckResult } from '@/components/freetools/GenCheckResult'
import { BulkDomainSearch } from '@/components/freetools/BulkDomainSearch'
import { BulkDomainSearchResult } from '@/components/freetools/BulkDomainSearchResult'
import { useState } from 'react'

export default function Generator() {
  const [single, setSingle] = useState(true)
  return (
    <>
      <Head>
        <title>Domain name generator - NameCost.com</title>
        <meta
          name="description"
          content="The Best Domain Name Generator Tool"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavTitle><span className="hidden sm:inline">The Best </span>Domain Name Generator<span className="hidden sm:inline"> Tool</span></NavTitle> 
      <main className="">
        {single
          ? [<GenCheck setSingle={setSingle} />, <GenCheckResult />]
          : [<BulkDomainSearch setSingle={setSingle} />, <BulkDomainSearchResult />]
        }

      </main>
      <Footer />
    </>
  )
}
