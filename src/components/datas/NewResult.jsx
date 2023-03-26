/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function regdate() {
  return (
    <>
      R<span className="hidden sm:inline">eg</span>Date
    </>
  )
}
function parks() {
  return (
    <>
      <form>
        <button className="text-gray-100">
          P<span className="hidden sm:inline">ark</span>
        </button>
      </form>
    </>
  )
}

export function NewResult({ datas }) {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex  min-w-full border-collapse rounded-t-lg bg-gray-500 text-center">
                <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
                <ToolExcelMenu
                  className="w-15-50 w-4-10 py-2 text-sm"
                  titles="Domain"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-13-50 w-2-10 py-2 text-sm"
                  titles="Registrar"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-12-50 hidden py-2 text-sm md:block"
                  titles="Nameserver"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 w-1-10 py-2 text-sm"
                  titles={parks()}
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 w-2-10 py-2 text-sm"
                  titles={regdate()}
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
                    <div
                      className="text-mysm w-15-50 w-4-10 truncate whitespace-nowrap border border-gray-200 py-2 pl-1 text-left font-semibold text-blue-500 sm:pl-4"
                      title={dom.domain}
                    >
                      {dom.domain}
                    </div>
                    <div
                      className="w-13-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-medium text-gray-500"
                      title={dom.reg_is}
                    >
                      {dom.reg_is}
                    </div>
                    <div
                      className="w-12-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block"
                      title={dom.dns_is}
                    >
                      {dom.dns_is}
                    </div>
                    <div className="w-3-50 w-1-10 flex items-center justify-center truncate  whitespace-nowrap border border-gray-200 py-2  text-xs uppercase text-gray-500">
                      <span
                        className={classNames(
                          dom.park_sell
                            ? 'h-5 w-5 rounded-full bg-orange-100 font-bold text-orange-700 hover:bg-orange-200'
                            : 'h-5 w-5 rounded-full bg-green-50 font-bold text-green-700 hover:bg-green-200'
                        )}
                      >
                        {dom.park_sell}
                      </span>
                    </div>
                    <div className="w-5-50 w-2-10 truncate whitespace-nowrap border-t border-b border-l border-gray-200 py-2 text-xs text-gray-500">
                      {dom.reg_start}
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
