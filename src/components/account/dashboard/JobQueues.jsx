/* This example requires Tailwind CSS v2.0+ */
import { DownloadIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'

const domains = [
  {id: '1', jobtype: '1234567890', requested: '2022-08-08 12:22:20', started: '2022-08-08 12:22:20', completed: '2022-08-08 12:22:22', jobstatus: 'completed',domains:'123456789',download:'xxxxxxxxx'},
  {id: '2', jobtype: '1234567890', requested: '2022-08-08 12:22:20', started: '2022-08-08 12:22:20', completed: '2022-08-08 12:22:22', jobstatus: 'completed',domains:'123456789',download:'xxxxxxxxx'},
  {id: '3', jobtype: '1234567890', requested: '2022-08-08 12:22:20', started: '2022-08-08 12:22:20', completed: '2022-08-08 12:22:22', jobstatus: 'completed',domains:'123456789',download:'xxxxxxxxx'},
  // More people...
]

export function JobQueues() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500  rounded-t-lg">
                <ToolExcelMenu className="py-2 text-sm w-5-50 w-2-10" titles="Job Type" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-10-50 w-3-10" titles="Requested" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-10-50 hidden md:block" titles="Started" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-10-50 w-3-10" titles="completed" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-5-50 w-1-10" titles="Status" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-5-50 hidden md:block" titles="Domains" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-5-50 w-1-10" titles="Download" selectornot="" />
              </div>
              <div className="bg-white">
                  {domains.map((dom) => (
                    <div key={dom.id} className="min-w-full  border-collapse text-center truncate flex even:bg-gray-100 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-5-50 truncate text-left sm:pl-2 w-2-10">{dom.jobtype}</div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-10-50 truncate w-3-10">{dom.requested}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-10-50 truncate hidden md:block">{dom.started}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-10-50 truncate w-3-10">{dom.completed}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-1-10">{dom.jobstatus}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block">{dom.domains}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-t border-b border-l border-gray-200 w-5-50 w-1-10">
                        <button type="submit" >
                        <DownloadIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination start={1} end={50} all={105} num1={50} num2={100} num3={200}/>
      </div>
  )
}
