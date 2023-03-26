/*
  This example requires Tailwind CSS v2.0+ 
*/
import { useEffect, useState } from 'react'

import { PlusSmIcon, RewindIcon, FastForwardIcon } from '@heroicons/react/solid'
import { MarketResult } from '@/components/datas/MarketResult'
import { Pagination } from '@/components/Pagination'
import { MinMax } from '@/components/common/datas/MinMax'
import { DataHeader } from '@/components/common/datas/DataHeader'
import { MobileFilter } from '@/components/common/datas/MobileFilter'
import { PcFilter } from '@/components/common/datas/PcFilter'
import { DatasFilterTld } from '@/components/common/DatasFilterTld'
import { DatasFilterDom } from '@/components/common/DatasFilterDom'
import { DatasFilterButton } from '@/components/common/datas/DatasFilterButton'
import { FormProvider, useForm } from 'react-hook-form'
import { useSubmit } from '@/hook/useSubmit'

{
  /* FILTER - ONE - START */
}
const tlds = {
  id: 'tlds',
  name: 'TLD Filters',
  icon: <DatasFilterTld />,
  options: [{ value: 'Only Com', label: 'Only Com' }],
  myinput: false,
}

const doms = {
  id: 'filter domains',
  name: 'Filter Domains',
  icon: <DatasFilterDom />,
  options: [
    { value: 'no dashes', label: 'No dashes' },
    { value: 'all numbers', label: 'All numbers' },
    { value: 'no numbers', label: 'No numbers' },
  ],
  myinput: false,
}

{
  /*
const mardict = {
  id: 'Marketplace Platform',
  name: 'Dictionary match',
  icon: fdic(),
  options: [
    { value: 'Afternic', label: 'Afternic' },
    { value: 'Namefind', label: 'Namefind' },
    { value: 'Sedo', label: 'Sedo' },
    { value: 'Dan', label: 'Dan' },
    { value: 'Buydomains', label: 'Buydomains' },
    { value: 'Hugedomains', label: 'Hugedomains' },
    { value: 'Others', label: 'Others' },
  ],
  myinput: false,
}
*/
}
const fmar = [tlds, doms]

const searchdata = {
  alldatas: 2000,
  seleted: 888,
}

export function MarketDom() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [pagination, setPagination] = useState({ page: '1', pageSize: '50' })
  const methods = useForm({
    defaultValues: {
      'dictionary-match': 0,
      'close-time': 0,
      'filter-domains': '',
      'min-character-length': '',
      'max-character-length': '',
      'seo-filters': '0,100',
      'keyword-type': 1,
      keyword: '',
      'tld-filters': 0,
    },
  })

  useEffect(() => {
    console.log('pagination', pagination)
    const formData = methods.getValues()
    handleSubmit(formData)
  }, [pagination])

  const { onSubmit, searchState } = useSubmit()
  const handleSubmit = (data) => {
    onSubmit(
      '/datas/nc-market',
      {
        ...data,
        page: parseInt(pagination.page),
        'per-page': parseInt(pagination.pageSize),
        'filter-domains': data['filter-domains'].toString(),
      },
      'post'
    )
  }
  return (
    <div className="">
      <div>
        <MobileFilter
          show={mobileFiltersOpen}
          toggleShow={setMobileFiltersOpen}
          filters={fmar}
        />
        {/* Mobile filter dialog 手机端*/}

        <main className="mx-auto max-w-7xl px-3 pb-16 sm:pb-10 lg:max-w-7xl">
          <div className="rounded-lg bg-white px-5 pt-4">
            {/* 显示搜索结果 条数和选择的条数*/}
            <DataHeader
              title1={searchdata.alldatas}
              title2={searchdata.seleted}
            >
              MarketPlace Domains
            </DataHeader>
            <div className={`lg:flex lg:pt-3 ${collapse ? 'flex-col' : ''}`}>
              {collapse && (
                <FastForwardIcon
                  className="mb-2 h-5 w-5 transform cursor-pointer text-gray-500 hover:text-green-700 motion-safe:hover:scale-110"
                  aria-hidden="true"
                  onClick={() => {
                    setCollapse(false)
                  }}
                />
              )}
              <aside
                className={`mr-2 lg:h-screen lg:w-60 ${
                  collapse ? 'hidden' : ''
                }`}
              >
                <h2 className="sr-only">Filters</h2>

                <button
                  type="button"
                  className="inline-flex items-center lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="text-sm font-medium text-gray-700">
                    Filters
                  </span>
                  <PlusSmIcon
                    className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </button>

                <div className="sticky top-0 hidden bg-gray-50 lg:block">
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                      <header className="rounded-t-lg bg-gray-500 bg-opacity-80 py-2 px-4 text-sm font-semibold text-white">
                        <div
                          className="flex justify-between px-4"
                          translation="FiltersComponent_Header"
                        >
                          <div>Filters</div>
                          <div className="transform motion-safe:hover:scale-105">
                            <RewindIcon
                              className="h-5 w-5 cursor-pointer text-white hover:text-gray-300"
                              aria-hidden="true"
                              onClick={() => {
                                setCollapse(true)
                              }}
                            />
                          </div>{' '}
                        </div>
                      </header>
                      <div className="space-y-2 divide-y divide-gray-200 p-4">
                        <PcFilter filters={fmar} />
                        {/* PC filter dialog PC端*/}
                        <div className="border-none px-4 pt-1">
                          <MinMax>Price Range</MinMax>
                        </div>
                      </div>
                      <DatasFilterButton />
                    </form>
                  </FormProvider>
                </div>
              </aside>

              {/* Product grid */}
              <div className="mt-2 flex-1 lg:mt-0">
                {/* Replace with your content */}
                <div className="lg:h-full">
                  <MarketResult datas={searchState.searchData?.domains} />
                  <Pagination
                    start={pagination.page}
                    end={Math.ceil(
                      (parseInt(searchState.searchData?.count) || 1) /
                        pagination.pageSize
                    )}
                    all={searchState.searchData?.count}
                    num1={50}
                    num2={100}
                    num3={200}
                    pagination={pagination}
                    setPagination={setPagination}
                  />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
