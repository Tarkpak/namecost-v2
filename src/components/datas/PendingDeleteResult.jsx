/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { DatasExcelMenuDa } from '@/components/common/datas/DatasExcelMenuDa'
import { DatasExcelMenuBl } from '@/components/common/datas/DatasExcelMenuBl'
import { DatasExcelMenuRd } from '@/components/common/datas/DatasExcelMenuRd'
import { DatasExcelMenuYears } from '@/components/common/datas/DatasExcelMenuYears'
import { DatasExcelMenuAby } from '@/components/common/datas/DatasExcelMenuAby'
import { DatasExcelMenuAcr } from '@/components/common/datas/DatasExcelMenuAcr'
import { dateTimeFormat } from '@/utils/time'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PendingDeleteResult({ datas }) {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex min-w-full  rounded-t-md bg-gray-500 text-center">
                <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
                <ToolExcelMenu
                  className="w-13-50 w-5-10 py-2 text-sm"
                  titles="Domain"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 w-1-10 py-2 text-sm"
                  titles={<DatasExcelMenuDa />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 w-2-10 py-2 text-sm"
                  titles={<DatasExcelMenuBl />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuRd />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 w-1-10 py-2 text-sm"
                  titles={<DatasExcelMenuYears />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-6-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuAby />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 hidden py-2 text-sm md:block"
                  titles={<DatasExcelMenuAcr />}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 hidden py-2  text-sm md:block"
                  titles="Cat"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-8-50 hidden py-2 text-sm md:block"
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
                    <div className="text-mysm w-13-50 w-5-10 truncate whitespace-nowrap border border-gray-200 py-2 pl-1 text-left font-semibold text-blue-500 sm:pl-4">
                      <a
                        href={dom.domain}
                        className="hover:underline"
                        title={dom.domain}
                        target="_blank"
                      >
                        {dom.domain}
                      </a>
                    </div>
                    <div
                      className={classNames(
                        dom.da > 35
                          ? 'w-3-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700'
                          : 'w-3-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-medium text-gray-500'
                      )}
                    >
                      {dom.da}
                    </div>
                    <div className="w-5-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500">
                      {dom.da_links}
                    </div>
                    <div className="w-4-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.da_doms}
                    </div>
                    <div
                      className={classNames(
                        dom.years_old > 20
                          ? 'w-3-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-semibold text-green-700 text-gray-500'
                          : 'w-3-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500'
                      )}
                    >
                      {dom.years_old}
                    </div>
                    <div className="w-6-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.aby}
                    </div>
                    <div className="w-4-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.acr}
                    </div>
                    <div
                      className="w-3-50 hidden whitespace-nowrap border border-gray-200 py-2 pl-4 text-left text-xs text-gray-500 md:block"
                      title={dom.cat_int}
                    >
                      {dom.cat_int}
                    </div>
                    <div
                      className="w-8-50 hidden whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block"
                      title={dateTimeFormat(dom.drop_date)}
                    >
                      {dateTimeFormat(dom.drop_date)}
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
