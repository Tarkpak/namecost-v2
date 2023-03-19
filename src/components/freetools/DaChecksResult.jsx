/* This example requires Tailwind CSS v2.0+ */
import { ToolDa } from '@/components/pages/ToolDa'
import { searchAtom } from '@/state'
import { useAtom } from 'jotai'
import { ToolExcelInput } from '../common/ToolExcelInput'
import { ToolExcelMenu } from '../common/ToolExcelMenu'

const whoisdata = []
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IsResults = ({ datas }) => {
  return (
    <div className="md:mb-12">
      <div className="mt-8 flex flex-col ">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden py-2 align-middle sm:flex sm:overflow-visible">
            <div className="w-screen shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex min-w-full border-collapse rounded-t-lg bg-gray-500 text-center">
                <ToolExcelInput className=" w-2-50 w-1-10 text-oksm py-3.5" />
                <ToolExcelMenu
                  className="w-2-50 text-oksm hidden py-3.5 md:block"
                  titles="Id"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-7-50 w-3-10 text-oksm py-3.5"
                  titles="Domain"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-8-50 text-oksm hidden py-3.5 md:block"
                  titles="Registrar"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 text-oksm hidden py-3.5 md:block"
                  titles="Time-Up"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 w-2-10 text-oksm py-3.5"
                  titles="Time-Reg"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 w-2-10 text-oksm py-3.5"
                  titles="Time-End"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-7-50 text-oksm hidden py-3.5 md:block"
                  titles="Status"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-8-50 text-oksm hidden py-3.5 md:block"
                  titles="NameServer"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-2-50 w-1-10 text-oksm py-3.5"
                  titles="Del"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-2-50 w-1-10 text-oksm py-3.5"
                  titles="Park"
                  selectornot=""
                />
              </div>
              <div className="bg-white">
                {datas.map((person, personIdx) => (
                  <div
                    key={person.id}
                    className="flex min-w-full border-collapse truncate !bg-opacity-40 text-center even:bg-green-50 hover:bg-gray-200"
                  >
                    <div className="text-oksm w-2-50 w-1-10  whitespace-nowrap border border-gray-200 py-3  text-gray-500">
                      <input
                        id={`${person.id}-${personIdx}`}
                        name={`${person.id}[]`}
                        type="checkbox"
                        className="text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                      />
                    </div>
                    <div className="text-oksm w-2-50 hidden whitespace-nowrap border border-gray-200 py-3 font-medium text-gray-500 md:block">
                      {person.id}
                    </div>
                    <div className="text-oksm w-7-50 w-3-10 truncate whitespace-nowrap border border-gray-200 py-3 text-left font-medium text-blue-500 sm:pl-4">
                      {person.domain}
                    </div>
                    <div className="text-oksm w-8-50 w-3-10 truncate whitespace-nowrap border border-gray-200 py-3 text-left font-medium text-blue-500 sm:pl-4">
                      {person.registrar}
                    </div>
                    <div
                      className={classNames(
                        person.da > 35
                          ? 'text-oksm w-4-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-3 font-semibold text-green-700'
                          : 'text-oksm w-4-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-3 text-gray-500'
                      )}
                    >
                      {person.uptime}
                    </div>
                    <div className="text-oksm w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-3 text-gray-500">
                      {person.regtime}
                    </div>
                    <div className="text-oksm w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-3 text-gray-500">
                      {person.endtime}
                    </div>
                    <div className="text-oksm w-7-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-3 text-gray-500">
                      {person.status}
                    </div>
                    <div className="text-oksm w-8-50 hidden truncate whitespace-nowrap border border-gray-200 py-3 text-gray-500 md:block">
                      {person.nameserver}
                    </div>
                    <div className="text-oksm w-2-50 hidden whitespace-nowrap border-t border-b border-l border-gray-200 py-3 text-gray-500 md:block">
                      {person.delorredemp}
                    </div>
                    <div className="text-oksm w-2-50 hidden whitespace-nowrap border-t border-b border-l border-gray-200 py-3 text-gray-500 md:block">
                      {person.parkorbuy}
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

export function DaChecksResult() {
  const [searchState] = useAtom(searchAtom)
  return (
    <>
      {searchState.searchResult ? (
        <IsResults datas={searchState.searchResult} />
      ) : (
        <ToolDa />
      )}
    </>
  )
}
