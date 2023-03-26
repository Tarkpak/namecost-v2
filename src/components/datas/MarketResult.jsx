/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { DatasExcelMenuDa } from '@/components/common/datas/DatasExcelMenuDa'
import { DatasExcelMenuBl } from '@/components/common/datas/DatasExcelMenuBl'
import { DatasExcelMenuRd } from '@/components/common/datas/DatasExcelMenuRd'
import { DatasExcelMenuBidnow } from '@/components/common/datas/DatasExcelMenuBidnow'
import { DatasExcelMenuYears } from '@/components/common/datas/DatasExcelMenuYears'
import { DatasExcelMenuAby } from '@/components/common/datas/DatasExcelMenuAby'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MarketResult({ datas }) {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex  min-w-full border-collapse rounded-t-lg bg-gray-500 text-center">
                <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
                <ToolExcelMenu
                  className="w-14-50 w-4-10 py-2 text-sm"
                  titles="Domain"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 w-1-10 py-2 text-sm"
                  titles={<DatasExcelMenuDa />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-7-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuBl />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuRd />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuYears />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuAby />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-7-50 w-3-10 py-2 text-sm"
                  titles={<DatasExcelMenuBidnow />}
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
                    <div className="text-mysm w-14-50 w-4-10 truncate whitespace-nowrap border border-gray-200 py-2 text-left font-semibold text-blue-500 sm:pl-4">
                      <a
                        href={dom.domain}
                        target="_blank"
                        className="hover:underline"
                        rel="nofollow"
                        title={dom.domain}
                      >
                        {dom.domain}
                      </a>
                    </div>
                    <div
                      className={classNames(
                        dom.da > 35
                          ? 'w-5-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold font-medium text-green-700 text-gray-500'
                          : 'w-5-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-medium text-gray-500'
                      )}
                    >
                      {dom.da}
                    </div>
                    <div className="w-7-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.da_links}
                    </div>
                    <div className="w-5-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.da_doms}
                    </div>
                    <div
                      className={classNames(
                        dom.years_old > 20
                          ? 'w-5-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700 text-gray-500 md:block'
                          : 'w-5-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block'
                      )}
                    >
                      {dom.years_old}
                    </div>
                    <div
                      className="w-5-50 hidden whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block"
                      title={dom.aby}
                    >
                      {dom.aby}
                    </div>
                    <div
                      className={classNames(
                        dom.ask_price > 5000
                          ? 'w-7-50 w-3-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700 text-gray-500'
                          : 'w-7-50 w-3-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500'
                      )}
                    >
                      ${dom.ask_price}
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
