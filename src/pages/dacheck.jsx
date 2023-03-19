import Head from 'next/head'

import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DaChecks } from '@/components/freetools/DaChecks'
import { DaChecksResult } from '@/components/freetools/DaChecksResult'
import { BulkDaCheck } from '@/components/freetools/BulkDaCheck'
import { BulkDaCheckResult } from '@/components/freetools/BulkDaCheckResult'
import { useState } from 'react'
export default function DaCheck() {
  const [single, setSingle] = useState(true)
  return (
    <>
      <Head>
        <title>Domain Authority & Backlink Checker - NameCost.com</title>
        <meta
          name="description"
          content="Try our free DA and backlink checker tool"
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="">
        {single
          ? [<DaChecks setSingle={setSingle} />, <DaChecksResult />]
          : [<BulkDaCheck setSingle={setSingle} />, <BulkDaCheckResult />]}
      </main>
      <Footer />
    </>
  )
}
