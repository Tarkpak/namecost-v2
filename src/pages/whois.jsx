import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { WhoisCheck } from '@/components/freetools/WhoisCheck'
import { WhoisCheckResult } from '@/components/freetools/WhoisCheckResult'
import { BulkWhoisCheck } from '@/components/freetools/BulkWhoisCheck'
import { BulkWhoisCheckResult } from '@/components/freetools/BulkWhoisCheckResult'
import { useState } from 'react'

export default function Whois() {
  const [single, setSingle] = useState(true)
  return (
    <>
      <Head>
        <title>Whois Lookup NameCost.com</title>
        <meta
          name="description"
          content="Bulk whois lookup"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavTitle><span className="hidden sm:inline">Find Out </span>who owns a domain<span className="hidden sm:inline"> name</span></NavTitle>
      <main className="bg-gray-50">
        {single
          ? [<WhoisCheck setSingle={setSingle} />, <WhoisCheckResult />]
          : [<BulkWhoisCheck setSingle={setSingle} />, <BulkWhoisCheckResult />]
        }
        
      </main>
      <Footer />
    </>
  )
}
