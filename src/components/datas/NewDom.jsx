/*
  This example requires Tailwind CSS v2.0+ 
*/
import {  useState } from 'react'

import {
  PlusSmIcon,
  RewindIcon,
  FastForwardIcon,

} from '@heroicons/react/solid'
import { NewResult } from '@/components/datas/NewResult'
import { Pagination } from '@/components/Pagination'
import { DataHeader } from '@/components/common/datas/DataHeader'
import { MobileFilter } from '@/components/common/datas/MobileFilter'
import { PcFilter } from '@/components/common/datas/PcFilter'
import { DatasFilterTld } from '@/components/common/DatasFilterTld'
import { DatasFilterTime } from '@/components/common/DatasFilterTime'
import { DatasFilterDom } from '@/components/common/DatasFilterDom'
import { DatasFilterButton } from '@/components/common/datas/DatasFilterButton'


{/* FILTER - ONE - START */ }
const tlds = {
  id: 'tlds',
  name: 'TLD Filters',
  icon: <DatasFilterTld />,
  options: [{ value: 'Only Com', label: 'Only Com' }],
  myinput: false,
}

const newclosing = {
  id: 'closingtime',
  name: 'Closing Time',
  icon: <DatasFilterTime />,
  options: [
    { value: 'Ending today', label: 'Yestoday' },
    { value: 'Ending today', label: 'Within 1 week' },
  ],
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

const fnew = [tlds, newclosing, doms]


const searchdata = {
  "alldatas":2000,
  "seleted":888,
}


export function NewDom() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)
  return (
    <div className="">
      <div>
        <MobileFilter show={mobileFiltersOpen} toggleShow={setMobileFiltersOpen} filters={fnew} />
        {/* Mobile filter dialog 手机端*/}
 
        <main className="mx-auto max-w-7xl px-3 pb-16 sm:pb-10 lg:max-w-7xl">
          <div className="bg-white pt-4 px-5 rounded-lg">
            {/* 显示搜索结果 条数和选择的条数*/}
            <DataHeader title1={searchdata.alldatas} title2={searchdata.seleted}>New Regsitered</DataHeader>
            <div className={`lg:pt-3 lg:flex ${collapse ? 'flex-col' : ''}`}>
              {collapse && (
                <FastForwardIcon
                  className="h-5 w-5 mb-2 text-gray-500 cursor-pointer hover:text-green-700 transform motion-safe:hover:scale-110"
                  aria-hidden="true"
                  onClick={() => {
                    setCollapse(false)
                  }}
                />
              )}
              <aside
                className={`mr-2 lg:h-screen lg:w-60 ${collapse ? 'hidden' : ''}`}
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

                <div className="bg-gray-50 sticky top-0 hidden lg:block">
                  <form className=" ">
                    <header className="rounded-t-lg bg-gray-500 bg-opacity-80 py-2 px-4 text-sm font-semibold text-white">
                      <div
                        className="flex justify-between px-4"
                        translation="FiltersComponent_Header"
                      >
                        <div>Filters</div>
                        <div className="transform motion-safe:hover:scale-105">
                          <RewindIcon
                            className="h-5 w-5 text-white cursor-pointer hover:text-gray-300"
                            aria-hidden="true"
                            onClick={() => {
                              setCollapse(true)
                            }}
                          />
                        </div>{' '}
                      </div>
                    </header>
                    <div className="space-y-2 divide-y divide-gray-200 p-4">
                      <PcFilter filters={fnew} />
                      {/* PC filter dialog PC端*/}

                    </div>
                    <DatasFilterButton />
                  </form>
                </div>

              </aside>

              {/* Product grid */}
              <div className="mt-2 flex-1 lg:mt-0">
                {/* Replace with your content */}
                <div className="lg:h-full">
                  <NewResult />
                  <Pagination start={1} end={50} all={105} num1={50} num2={100} num3={200}/>
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
