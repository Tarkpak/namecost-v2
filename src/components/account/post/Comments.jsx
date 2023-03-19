/* This example requires Tailwind CSS v2.0+ */

import { XCircleIcon,ChatAltIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelMenuBrand } from '@/components/common/ToolExcelMenuBrand'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { ToolExcelInput } from '@/components/common/ToolExcelInput'

const comments = [
  {id: '1', all: '102', mine: '80', pendding: '10', approved: '10', spam: '1',trash:'1'},
]

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '2', name: 'What is a Sales Development Rep? How to Get a Job and the Skills You Need', da: 'What is a Sales Development Rep? How to Get a Job and the Skills You Need', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '3', name: 'ijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '4', name: 'abtuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '5', name: 'efghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '6', name: 'eqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '7', name: 'defghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '8', name: 'aeqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '9', name: 'imnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '10', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '11', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '12', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Comments() {
  return (
    <div>
      <div className="text-lg">
        <div className="flex w-full items-start justify-between text-left text-gray-400">
          <span className="font-medium text-gray-900">
            <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight px-4">
              <ChatAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                <span className="ml-2 space-x-4">
                  <span>Comments</span>
                </span>
            </h3>
          </span>
        </div>
      </div>


      {/* submitted your brands  --------START----------*/}
      <div className="my-4">
      </div>
      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full divide-y divide-gray-100 border-collapse text-center flex bg-green-50">
                <ToolExcelMenuBrand className="text-green-700 w-10-50 w-2-10" titles="All" />
                <ToolExcelMenuBrand className="text-green-700 w-8-50 w-2-10" titles="Mine" />
                <ToolExcelMenuBrand className="text-green-600 w-8-50 w-2-10" titles="Approved" />
                <ToolExcelMenuBrand className="text-gray-400 w-8-50 w-2-10" titles="Pendding" />
                <ToolExcelMenuBrand className="text-orange-600 w-8-50 w-2-10" titles="Spam" />
                <ToolExcelMenuBrand className="text-gray-600 w-8-50 hidden md:block" titles="Trash" />

              </div>
              <div className="bg-white">
                  {comments.map((comment) => (
                    <div key={comment.id} className="min-w-full  border-collapse text-center truncate flex">
                      <div className="whitespace-nowrap py-2 text-mysm font-bold text-green-500 border border-green-100 w-10-50 truncate text-left sm:pl-4 w-2-10 text-center">{comment.all}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold  text-green-500 border border-green-100 w-8-50 truncate w-2-10">{comment.mine}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-green-600 border border-green-100 w-8-50 truncate w-2-10">{comment.approved}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-gray-400 border border-green-100 w-8-50 truncate w-2-10">{comment.pendding}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-orange-600 border border-green-100 w-8-50 truncate w-2-10">{comment.spam}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-gray-600 border border-green-100 w-8-50 truncate hidden md:block">{comment.trash}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your brands  --------END----------*/}
      {/* submitted your domains  --------START----------*/}
      <div className="mt-4">

        <div className="flex space-x-4 pt-1 pb-4">
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Bulk Action"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="Bulk Action">Bulk Action</option>
              <option value="Unapproved">Unapproved</option>
              <option value="Approved">Approved</option>
              <option value="Mark as Spam">Mark as Spam</option>
              <option value="Move to Trash">Move to Trash</option>
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
              defaultValue="Pendding"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="Pendding">Pendding</option>
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
                <ToolExcelInput className="py-2 text-sm w-2-50 w-1-10 text-left sm:pl-4" />
                <ToolExcelMenu className=" w-20-50 w-4-10 py-2 text-sm" titles="Author" selectornot="" />
                <ToolExcelMenu className="w-10-50 hidden md:block py-2 text-sm" titles="Comment" selectornot="" />
                <ToolExcelMenu className="w-10-50 w-4-10 py-2 text-sm" titles="In Response To" selectornot="" />
                <ToolExcelMenu className="w-4-50 hidden md:block py-2 text-sm" titles="Time" selectornot="" />
                <ToolExcelMenu className="w-4-50 w-1-10 py-2 text-sm" titles="Status" selectornot="" />

              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-left sm:pl-4 w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-normal py-2 text-mysm font-semibold text-blue-400 border-b border-gray-200 w-10-50 truncate text-left sm:pl-4 hidden md:block break-words">{dom.name}</div>
                      <div className="whitespace-normal py-2 text-mysm font-semibold text-blue-400 border-b border-gray-200 w-20-50  text-left sm:pl-4 w-4-10 break-words">{dom.name}</div>
                      <div className="whitespace-normal py-2 text-xs font-medium text-gray-500 border-b border-gray-200 w-10-50 w-4-10 break-words">{dom.da}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-b border-gray-200 w-4-50 truncate hidden md:block">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-300 hover:text-gray-500 border-b border-b border-gray-200 w-4-50 w-1-10">
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
