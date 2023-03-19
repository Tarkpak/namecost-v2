/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { DownloadIcon,PencilAltIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search enginesearchengine search engine',dropdate:'2022-08-08'},
  {id: '2', name: 'abcdeqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '3', name: 'ijklmnopqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '4', name: 'abtuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '5', name: 'efghijklmnopqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '6', name: 'eqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '7', name: 'defghijklmnopqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '8', name: 'aeqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '9', name: 'imnopqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '10', name: 'uvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '11', name: 'uvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  {id: '12', name: 'uvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine',dropdate:'2022-08-08'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Brands() {
  return (
    <div>
      <dl className="space-y-6">
        <Disclosure as="div" className="">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                  <span className="font-medium text-gray-900">
                    <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight px-4">
                      <PencilAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                      <span className="ml-2">
                        Brand Monitor ( <span className="text-green-500">90) </span> Left.<span className="text-gray-500 font-base">Click here to submit</span>
                      </span>
                    </h3>
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? '-rotate-180' : 'rotate-0',
                        'h-6 w-6 transform'
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <div className="">
                {/* submit your brands   --------START----------*/}
                <form className="my-6 sm:mx-auto sm:flex space-x-2 sm:px-6">
                  <div className=" flex-1 md:mr-12">
                    <div className="mt-1">
                      <textarea
                        rows={6}
                        name="comment"
                        id="comment"
                        className="shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
                        placeholder="Enter a list of brands no more than 100"
                    />
                    </div>
                  </div>
                  <div className="flex items-center">
                  <div className="mt-4 sm:mt-0 !md:ml-12 align-bottom">
                    <div className="pb-2">
                      <p className="leading-8 text-gray-400 font-medium text-center">Example<br></br>
                        brand1|<br></br>
                        brand2|company2<br></br>
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-2 bg-filter text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10"
                    >
                      Submit
                    </button>
                  </div>
                  </div>
                </form>
                {/* submit your brands   --------END----------*/}
                </div>
              </Disclosure.Panel>
            </>
          )}
      </Disclosure>
    </dl>
      {/* submitted your brands  --------START----------*/}
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
              <option value="bulkaction">Bulk Action</option>
              <option value="trash">Trash</option>
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
            <input
              id='cb-search'
              type='search'
              className='w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs'
              placeholder='Please enter a brand name'
            />
          </div>
          <div className="">
            <button
            type="submit"
            className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500"
            >
              Search
            </button>
          </div>
          <div>
            <select
              id="abusemail"
              name="abusemail"
              autoComplete="abusemail"
              defaultValue="Abuse Mail"
              className="text-gray-400 w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="trash">Abuse Mail</option>
            </select>
          </div>
          <div className="">
            <button
            type="submit"
            className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full  border-collapse text-center flex bg-gray-500  rounded-t-lg">

                <ToolExcelInput className="py-2 text-sm w-2-50 w-1-10" />
                <ToolExcelMenu className="w-11-50 w-3-10 py-2 text-sm" titles="Brand" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-1-10 py-2 text-sm" titles="TLD" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-2-10 py-2 text-sm" titles="Include" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-2-10 py-2 text-sm" titles="Typo" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-1-10 py-2 text-sm" titles="Phish" selectornot="" />
                <ToolExcelMenu className="w-10-50 hidden md:block py-2 text-sm" titles="Company" selectornot="" />
                <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles="Added" selectornot="" />
                <ToolExcelMenu className="w-2-50 hidden md:block py-2 text-sm" titles="View" selectornot="" />

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
                      <div className="whitespace-normal  py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-11-50 break-words text-left sm:pl-4 w-3-10 flex">
                        <a href={"/domains/"+dom.name} className="hover:underline break-all place-self-center" title={dom.name} target="_blank">
                          {dom.name}
                        </a>
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-5-50 truncate w-1-10 flex"><span className="mx-auto place-self-center">{dom.da}</span></div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10 flex"><span className="mx-auto place-self-center">{dom.backlink}</span></div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10 flex"><span className="mx-auto place-self-center">{dom.domainpop}</span></div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:flex"><span className="mx-auto place-self-center">{dom.year}</span></div>
                      <div className="whitespace-normal py-2 text-xs text-gray-500 border border-gray-200 w-10-50 text-left px-4 hidden md:flex"><span className="mx-auto text-center place-self-center break-words">{dom.cat}</span></div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 w-1-10 flex"><span className="mx-auto place-self-center">{dom.dropdate}</span></div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 hover:text-gray-700  border-t border-b border-l border-gray-200 w-2-50 hidden md:flex">
                        <div className="mx-auto place-self-center">
                        <button type="submit">
                          <DownloadIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your brands  --------END----------*/}
        <Pagination start={1} end={50} all={105} num1={50} num2={100} num3={200}/>
      </div>
  )
}
