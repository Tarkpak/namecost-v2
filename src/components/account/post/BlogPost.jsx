/* This example requires Tailwind CSS v2.0+ */

import { XCircleIcon, PencilAltIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelMenuBrand } from '@/components/common/ToolExcelMenuBrand'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { useEffect, useState } from 'react'
import http from '@/utils/axios'
import { dateTimeFormat } from '@/utils/time'
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

export function BlogPost() {
  const [list, setList] = useState([])
  useEffect(() => {
    const init = async () => {
      const { categorys } = await http.get('/posts/category')
      console.log('categorys', categorys)
      const list  = await http.get('/posts')
      setList(
        list.map((item) => ({
          id: item.id,
          name: item.title,
          da: categorys?.find((i) => i.id == item.cate).menu_name,
          backlink: dateTimeFormat(item.created_at),
        }))
      )
    }
    init()
  }, [])
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
              <span className="ml-2 space-x-4">
                <span>Posts</span>
                <a href="/account/newpost">
                  <span className="font-base border bg-gray-50 py-1 px-4 text-base text-green-600 hover:bg-gray-200 hover:text-green-700">
                    Add New
                  </span>
                </a>
              </span>
            </h3>
          </span>
        </div>
      </div>

      {/* submitted your brands  --------START----------*/}
      <div className="my-4"></div>
      <div className="flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex min-w-full border-collapse divide-y divide-gray-100 bg-green-50 text-center">
                <ToolExcelMenuBrand
                  className="w-10-50 w-2-10 text-green-700"
                  titles="All"
                />
                <ToolExcelMenuBrand
                  className="w-6-50 w-2-10 text-green-700"
                  titles="Approved"
                />
                <ToolExcelMenuBrand
                  className="w-6-50 w-2-10 text-gray-400"
                  titles="Pendding"
                />
                <ToolExcelMenuBrand
                  className="w-6-50 w-2-10 text-orange-600"
                  titles="Rejected"
                />
                <ToolExcelMenuBrand
                  className="w-6-50 hidden text-gray-400 md:block"
                  titles="Draft"
                />
                <ToolExcelMenuBrand
                  className="w-11-50 w-3-10 text-green-700"
                  titles="This Month"
                />
                <ToolExcelMenuBrand
                  className="w-6-50 hidden text-gray-400 md:block"
                  titles="Last Month"
                />
                <ToolExcelMenuBrand
                  className="w-4-50 w-2-10 text-green-700"
                  titles="Notice"
                />
              </div>
              <div className="bg-white">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex  min-w-full border-collapse truncate text-center"
                  >
                    <div className="text-mysm w-10-50 w-2-10 truncate whitespace-nowrap border border-green-100 py-2 text-left text-center font-bold text-green-500 sm:pl-4">
                      {post.all}
                    </div>
                    <div className="w-6-50 w-2-10 truncate whitespace-nowrap  border border-green-100 py-2 text-sm font-bold text-green-500">
                      {post.approved}
                    </div>
                    <div className="w-6-50 w-2-10 truncate whitespace-nowrap border border-green-100 py-2 text-sm font-bold text-gray-400">
                      {post.pendding}
                    </div>
                    <div className="w-6-50 w-2-10 truncate whitespace-nowrap border border-green-100 py-2 text-sm font-bold text-orange-500">
                      {post.rejected}
                    </div>
                    <div className="w-6-50 hidden truncate whitespace-nowrap border border-green-100 py-2 text-sm font-bold text-gray-400 md:block">
                      {post.draft}
                    </div>
                    <div className="w-6-50 hidden truncate whitespace-nowrap border border-green-100 py-2 text-sm font-bold text-green-700 md:block">
                      {post.thismonth}
                    </div>
                    <div className="w-6-50 hidden truncate whitespace-nowrap border border-green-100 py-2 text-sm font-bold text-green-700 md:block">
                      {post.lastmonth}
                    </div>
                    <div className="w-4-50 w-2-10 whitespace-nowrap border border-green-100 py-2 text-xs text-gray-300 hover:text-gray-500">
                      <button type="submit">
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
              className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
            >
              <option value="bulkaction">Bulk Action</option>
              <option value="edit">Edit</option>
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
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Bulk Action"
              className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
            >
              <option value="bulkaction">All dates</option>
              <option value="edit">Edit</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Bulk Action"
              className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
            >
              <option value="bulkaction">All Categories</option>
              <option value="edit">Edit</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <div className="">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 flex flex-col">
        <div>
          <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
            <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 flex min-w-full border-collapse rounded-t-lg bg-gray-500  text-center">
                <ToolExcelInput className="w-2-50 w-1-10 py-2 text-left text-sm sm:pl-4" />
                <ToolExcelMenu
                  className="w-33-50 w-8-10 py-2 text-sm"
                  titles="Title"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-10-50 hidden py-2 text-sm md:block"
                  titles="Category"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-10-50 hidden py-2 text-sm md:block"
                  titles="Time"
                  selectornot=""
                />
                <ToolExcelMenu
                  className="w-5-50 w-1-10 py-2 text-sm"
                  titles="Status"
                  selectornot=""
                />
              </div>
              <div className="bg-white">
                {list.map((dom, domIdx) => (
                  <div
                    key={dom.id}
                    className="flex min-w-full border-collapse truncate !bg-opacity-40 text-center even:bg-green-50 hover:bg-gray-200"
                  >
                    <div className="text-mysm w-2-50 w-1-10 truncate whitespace-nowrap border-b border-gray-200 py-2 text-left font-semibold text-blue-500 sm:pl-4">
                      <input
                        id={`${dom.id}-${domIdx}`}
                        name={`${dom.id}[]`}
                        type="checkbox"
                        className="text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                      />
                    </div>
                    <div className="text-mysm w-33-50 w-8-10 truncate whitespace-nowrap border-b border-gray-200 py-2 text-left font-semibold text-blue-400 sm:pl-4">
                      {dom.name}
                    </div>
                    <div className="w-10-50 hidden truncate whitespace-nowrap border-b border-gray-200 py-2 text-xs font-medium  text-gray-500 md:block">
                      {dom.da}
                    </div>
                    <div className="w-10-50 hidden truncate whitespace-nowrap border-b border-gray-200 py-2 text-xs text-gray-500 md:block">
                      {dom.backlink}
                    </div>
                    <div className="w-5-50 w-1-10 whitespace-nowrap border-b border-b border-gray-200 py-2 text-xs text-gray-300 hover:text-gray-500">
                      <button type="submit">
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
      <Pagination
        start={1}
        end={50}
        all={105}
        num1={50}
        num2={100}
        num3={200}
      />
    </div>
  )
}
