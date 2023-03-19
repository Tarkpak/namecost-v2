/* This example requires Tailwind CSS v2.0+ */

import { XCircleIcon,ChatAltIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { ToolExcelInput } from '@/components/common/ToolExcelInput'


const domains = [
  {id: '1', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '2', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '3', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '11', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '12', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '13', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '111', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '112', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  {id: '113', title: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', received: '2022-08-12 20:22', status:'1'},
  // More people...
]



export function Messages() {
  return (
    <div>
      <div className="text-lg">
        <div className="flex w-full items-start justify-between text-left text-gray-400">
          <span className="font-medium text-gray-900">
            <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight px-4">
              <ChatAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                <span className="ml-2 space-x-4">
                  <span>Notifications</span>
                </span>
            </h3>
          </span>
        </div>
      </div>


      {/* submitted your brands  --------START----------*/}
        {/* submitted your brands  --------END----------*/}
      {/* submitted your domains  --------START----------*/}
      <div className="mt-4">

        <div className="flex space-x-4 pt-1 pb-4">
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Mark as Read"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="Mark as Spam">Mark as Read</option>
            </select>
          </div>
          <div className="">
            <button
            type="submit"
            className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500"
            >
              Apply
            </button>
          </div>
          <div>
            <select
              id="commenttypes"
              name="commenttypes"
              autoComplete="commenttypes"
              defaultValue="No Read"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="Pendding">No Read</option>
            </select>
          </div>
          <div className="">
            <button
            type="submit"
            className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500  rounded-t-lg">
                <ToolExcelInput className="w-2-50 w-1-10 py-2 text-sm" selectornot="" />
                <ToolExcelMenu className="w-35-50 w-8-10 py-2 text-sm" titles="Title" selectornot="" />
                <ToolExcelMenu className="w-8-50 hidden md:block py-2 text-sm" titles="Received" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-1-10 py-2 text-sm" titles="Status" selectornot="" />
              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-center w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-normal py-2 text-mysm font-semibold text-blue-400 border-b border-gray-200 w-35-50  text-left sm:pl-4 w-8-10 break-words">
                        <a href={'viewmessage?id='+dom.id} className="hover:text-blue-500 hover:underline">
                          {dom.title}
                        </a>
                        </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-b border-gray-200 w-8-50 truncate hidden md:block">{dom.received}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-300 hover:text-gray-500 border-b border-b border-gray-200 w-5-50 w-1-10">
                        <button type="submit" >
                        <XCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your domains  --------END----------*/}
        <Pagination start={1} end={50} all={105} num1={50} num2={100} num3={200}/>
      </div>
  )
}
