/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PencilAltIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'

const domains = [
  {
    id: '1',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '2',
    name: 'abcdeqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '3',
    name: 'ijklmnopqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '4',
    name: 'abtuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '5',
    name: 'efghijklmnopqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '6',
    name: 'eqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '7',
    name: 'defghijklmnopqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '8',
    name: 'aeqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '9',
    name: 'imnopqrstuvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '10',
    name: 'uvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '11',
    name: 'uvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
  {
    id: '12',
    name: 'uvwxyz.com',
    da: '100',
    backlink: '12345678901',
    domainpop: '12345678',
    year: '88',
    archiveby: '1998',
    archivenum: '655555',
    inkeys: '8',
    cat: 'search engine',
    word: '1',
    tld: 'com',
    within: '',
    dashnum: '',
    charnum: '',
    dropdate: '2022-08-08',
  },
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
                    <h3 className="px-4 text-xl font-semibold text-orange-500 sm:tracking-tight">
                      <PencilAltIcon
                        className="text-mygreen-500 h-6 w-6"
                        aria-hidden="true"
                      />
                      <span className="ml-2">
                        Domain Monitor ({' '}
                        <span className="text-green-500">90) </span> Left.
                        <span className="font-base text-gray-500">
                          Click here to submit
                        </span>
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
                  <form className="my-6 space-x-2 sm:mx-auto sm:flex sm:px-6">
                    <div className=" flex-1 md:mr-12">
                      <div className="mt-1">
                        <textarea
                          rows={6}
                          name="comment"
                          id="comment"
                          className="block w-full resize-none rounded-md border-gray-300 shadow-sm  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200 sm:text-sm"
                          placeholder="Enter a list of domains no more than 100"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="!md:ml-12 mt-4 align-bottom sm:mt-0">
                        <div className="pb-2">
                          <p className="text-center font-medium leading-8 text-gray-400">
                            Example<br></br>
                            example.com<br></br>
                            example.net<br></br>
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="bg-filter block w-full rounded-md border border-transparent px-5 py-2 text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10"
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
              className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
            >
              <option value="bulkaction">Bulk Action</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <div className="">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500"
            >
              Apply
            </button>
          </div>
          <div>
            <input
              id="cb-search"
              type="search"
              className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
              placeholder="Please enter a domain name"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex min-w-full border-collapse rounded-t-lg bg-gray-500  text-center">
                <ToolExcelInput className="w-2-50 w-1-10 py-2 text-sm" />
                <ToolExcelMenu
                  className="w-11-50 w-3-10 py-2 text-sm"
                  titles="Domain"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 w-1-10 py-2 text-sm"
                  titles="DA"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 w-2-10 py-2 text-sm"
                  titles="BackLinks"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-4-50 w-2-10 py-2 text-sm"
                  titles="R-D"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 w-1-10 py-2 text-sm"
                  titles="Year"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 hidden py-2 text-sm md:block"
                  titles="A-B"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 hidden py-2 text-sm md:block"
                  titles="A-N"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-3-50 hidden py-2 text-sm md:block"
                  titles="Rel"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-8-50 hidden py-2 text-sm md:block"
                  titles="Cat"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 w-1-10 py-2 text-sm"
                  titles="ED"
                  selectornot=""
                />
              </div>
              <div className="bg-white">
                {domains.map((dom, domIdx) => (
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
                        href={'/domains/' + dom.name}
                        className="hover:underline"
                        title={dom.name}
                        target="_blank"
                      >
                        {dom.name}
                      </a>
                    </div>
                    <div className="w-3-50 w-1-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs font-medium text-gray-500">
                      {dom.da}
                    </div>
                    <div className="w-5-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500">
                      {dom.backlink}
                    </div>
                    <div className="w-4-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500">
                      {dom.domainpop}
                    </div>
                    <div className="w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.year}
                    </div>
                    <div className="w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.archiveby}
                    </div>
                    <div className="w-3-50 hidden truncate whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.archivenum}
                    </div>
                    <div className="w-3-50 hidden whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.inkeys}
                    </div>
                    <div className="w-8-50 hidden whitespace-nowrap border border-gray-200 py-2 pl-4 text-left text-xs text-gray-500 md:block">
                      {dom.cat}
                    </div>
                    <div className="w-5-50 w-1-10 whitespace-nowrap border border-gray-200 py-2 text-xs text-gray-500">
                      {dom.dropdate}
                    </div>
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
