/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PencilAltIcon} from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '2', name: 'abcdeqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
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

export function Monitors() {
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
                            Domain Monitor ( <span className="text-green-500">90) </span> Left.<span className="text-gray-500 font-base">Click here to submit</span>
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
                    {/* submit your domains   --------START----------*/}
                    <form className="my-6 sm:mx-auto sm:flex space-x-2 sm:px-6">
                      <div className=" flex-1 md:mr-12">
                        <div className="mt-1">
                          <textarea
                            rows={6}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
                            placeholder="Enter a list of domains no more than 100"
                        />
                        </div>
                      </div>
                      <div className="flex items-center">
                      <div className="mt-4 sm:mt-0 !md:ml-12 align-bottom">
                        <div className="pb-2">
                          <p className="leading-8 text-gray-400 font-medium text-center">Example<br></br>
                            example.com<br></br>
                            example.net<br></br>
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
                    {/* submit your domains   --------END----------*/}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
          </Disclosure>
        </dl>


      {/* submitted your domains  --------START----------*/}
      <div className="my-4">
        <div className="flex space-x-4 pt-1">
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
              placeholder='Please enter a domain name'
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
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500  rounded-t-lg">
                <ToolExcelInput className="py-2 text-sm w-2-50 w-1-10" />
                <ToolExcelMenu className="w-11-50 w-3-10 py-2 text-sm" titles="Domain" selectornot="" />
                <ToolExcelMenu className="w-3-50 w-1-10 py-2 text-sm" titles="DA" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-2-10 py-2 text-sm" titles="BackLinks" selectornot="" />
                <ToolExcelMenu className="w-4-50 w-2-10 py-2 text-sm" titles="R-D" selectornot="" />
                <ToolExcelMenu className="w-3-50 w-1-10 py-2 text-sm" titles="Year" selectornot="" />
                <ToolExcelMenu className="w-3-50 hidden md:block py-2 text-sm" titles="A-B" selectornot="" />
                <ToolExcelMenu className="w-3-50 hidden md:block py-2 text-sm" titles="A-N" selectornot="" />
                <ToolExcelMenu className="w-3-50 hidden md:block py-2 text-sm" titles="Rel" selectornot="" />
                <ToolExcelMenu className="w-8-50 hidden md:block py-2 text-sm" titles="Cat" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-1-10 py-2 text-sm" titles="ED" selectornot="" />

              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-center w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-11-50 truncate text-left sm:pl-4 w-3-10">
                        <a href={"/domains/"+dom.name} className="hover:underline" title={dom.name} target="_blank">
                          {dom.name}
                        </a>
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-3-50 truncate w-1-10">{dom.da}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate w-2-10">{dom.domainpop}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block">{dom.year}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block">{dom.archiveby}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block">{dom.archivenum}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 hidden md:block">{dom.inkeys}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-8-50 text-left pl-4 hidden md:block">{dom.cat}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 w-1-10">{dom.dropdate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your domains  --------END----------*/}
        <Pagination />
      </div>
  )
}
