/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import {
  SelectorIcon,
  XCircleIcon,
  LockOpenIcon,
  PencilAltIcon,
  TagIcon,
  DownloadIcon,
  InboxInIcon,
  IdentificationIcon,
  LibraryIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import Editor from '@/components/account/post/EditorTinyMCE'

const posts = [
  {
    id: '1',
    all: '110',
    approved: '80',
    rejected: '10',
    pendding: '10',
    draft: '10',
    thismonth: '1',
    lastmonth: '1',
    status: '10',
  },
]

const domains = [
  {
    id: '1',
    name: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com',
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
    name: 'What is a Sales Development Rep? How to Get a Job and the Skills You Need',
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

export default function NewPost() {
  const [value, setValue] = useState(
    '<p>This is the initial content of the editor.</p>'
  )

  return (
    <div>
      <div className="text-lg">
        <div className="flex w-full items-start justify-between text-left text-gray-400">
          <span className="font-medium text-gray-900">
            <h3 className="px-4 text-xl font-semibold text-orange-500 sm:tracking-tight">
              <PencilAltIcon
                className="text-mygreen-500 h-6 w-6"
                aria-hidden="true"
              />
              <span className="ml-2">
                <span>New Post</span>
              </span>
            </h3>
          </span>
        </div>
      </div>

      {/* submitted your brands  --------START----------*/}
      <div className="my-6 px-4"></div>
      <div className="flex flex-col px-4">
        <form action="#" className="">
          <div className="focus-within:border-mygreen-500  focus-within:ring-mygreen-500 w-full overflow-hidden font-semibold shadow-sm focus-within:ring-1">
            <label htmlFor="cta-email" className="sr-only">
              Add title
            </label>
            <input
              id="cta-email"
              type="email"
              className="bg-textarea block w-full resize-none border-0 py-2 px-4 placeholder-gray-500 focus:bg-white focus:ring-0 sm:text-sm"
              placeholder="Add title"
            />
          </div>
          <div className="py-6">
            <div className="space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="">
                <span className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500">
                  Category
                </span>
              </div>
              <div>
                <select
                  id="category"
                  name="category"
                  autoComplete="country-name"
                  defaultValue="Knowledge"
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                >
                  <option value="Knowledge">Knowledge</option>
                  <option value="Reviews">Reviews</option>
                  <option value="News">News</option>
                  <option value="Parking">Parking</option>
                  <option value="Website">Website</option>
                  <option value="ECom">ECom</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="">
                <span className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500">
                  Publish Type
                </span>
              </div>
              <div>
                <select
                  id="types"
                  name="types"
                  autoComplete="Draft"
                  defaultValue="Bulk Action"
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                >
                  <option value="Draft">Draft</option>
                  <option value="Publish">Publish</option>
                </select>
              </div>
            </div>
          </div>

          {/* submitted your Post  --------START----------*/}
          <div className="mb-8 flex flex-col">
            <div>
              <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
                <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
                  {/* <div className="sticky top-0 z-10 flex min-w-full border-collapse rounded-t-md bg-gray-50  text-center">
                    添加文本编辑框
                  </div> */}
                  <Editor value={value} setValue={setValue} />
                </div>
              </div>
            </div>
          </div>
          {/* submitted your post  --------END----------*/}
        </form>
      </div>
      {/* submitted your brands  --------END----------*/}
    </div>
  )
}
