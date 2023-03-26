/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { DatasExcelMenuTraffic } from '@/components/common/datas/DatasExcelMenuTraffic'
import { DatasExcelMenuRev } from '@/components/common/datas/DatasExcelMenuRev'
import { DatasExcelMenuDa } from '@/components/common/datas/DatasExcelMenuDa'
import { DatasExcelMenuBl } from '@/components/common/datas/DatasExcelMenuBl'
import { DatasExcelMenuRd } from '@/components/common/datas/DatasExcelMenuRd'
import { DatasExcelMenuBidnow } from '@/components/common/datas/DatasExcelMenuBidnow'
import { DatasExcelMenuValued } from '@/components/common/datas/DatasExcelMenuValued'
import { DatasExcelMenuYears } from '@/components/common/datas/DatasExcelMenuYears'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TrafficResult({ datas }) {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex  min-w-full border-collapse rounded-t-lg bg-gray-500 text-center">
                <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
                <ToolExcelMenu
                  className="w-11-50 w-3-10 py-2 text-sm"
                  titles="Domain"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 w-2-10 py-2 text-sm"
                  titles={<DatasExcelMenuTraffic />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 w-2-10 py-2 text-sm"
                  titles={<DatasExcelMenuRev />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuDa />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuBl />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuRd />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuYears selectornot="" />}
                />
                <ToolExcelMenu
                  className="w-4-50 w-2-10 py-2 text-sm"
                  titles={<DatasExcelMenuBidnow />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 hidden py-2  text-sm md:block"
                  titles={<DatasExcelMenuValued />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 hidden py-2 text-sm md:block"
                  titles="ED"
                  selectornot=""
                />
              </div>
              <div className="bg-white">
                {datas?.map((dom, domIdx) => (
                  <div
                    key={dom.id}
                    className="flex min-w-full border-collapse truncate !bg-opacity-40 text-center even:bg-green-50 hover:bg-gray-200"
                  >
                    <div className="text-mysm w-2-50 w-1-10 truncate whitespace-nowrap border-b border-gray-200 py-2 text-center font-semibold text-blue-500">
                      <input
                        id={`${dom.id}-${domIdx}`}
                        name={`${dom.id}[]`}
                        type="checkbox"
                        className="text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                      />
                    </div>
                    <div className="text-mysm w-11-50 w-3-10 truncate whitespace-nowrap border border-gray-200 py-2 text-left font-semibold text-blue-500 sm:pl-4">
                      <a
                        href={dom.domain}
                        title={dom.domain}
                        target="_blank"
                        className="hover:underline"
                        rel="nofollow"
                      >
                        {dom.domain}
                      </a>
                    </div>
                    <div
                      className={
                        dom.traffic > 3000
                          ? 'w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-500'
                          : 'w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500'
                      }
                    >
                      {dom.traffic}
                    </div>
                    <div
                      className={
                        dom.rev > 100
                          ? 'w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-purple-700'
                          : 'w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500'
                      }
                    >
                      ${dom.rev}
                    </div>
                    <div
                      className={classNames(
                        dom.da > 35
                          ? 'w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700 md:block'
                          : 'w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-medium text-gray-500 md:block'
                      )}
                    >
                      {dom.da}
                    </div>
                    <div className="w-5-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.da_links}
                    </div>
                    <div className="w-5-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.da_doms}
                    </div>
                    <div
                      className={classNames(
                        dom.years_old > 20
                          ? 'w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700 text-gray-500 md:block'
                          : 'w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block'
                      )}
                    >
                      {dom.years_old}
                    </div>
                    <div
                      className={classNames(
                        dom.now_price > 2000
                          ? 'w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-orange-700 text-gray-500'
                          : 'w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500'
                      )}
                    >
                      ${dom.now_price}
                    </div>
                    <div
                      className={classNames(
                        dom.valuation > 5000
                          ? 'w-4-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700 text-gray-500 md:block'
                          : 'w-4-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block'
                      )}
                    >
                      ${dom.valuation}
                    </div>
                    <div className="w-5-50 hidden whitespace-nowrap border-t border-b border-l border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.hour_end}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
