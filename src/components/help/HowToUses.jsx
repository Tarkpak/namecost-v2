/*
  This example requires Tailwind CSS v2.0+ 
*/
import { HelpFaqs } from '@/components/help/HelpFaqs'
import { HowToUseForm } from '@/components/common/help/HowToUseForm'
import { useEffect, useState } from 'react'
import http from '@/utils/axios'
import dayjs from 'dayjs'
const message = {
  id: 1,
  title: 'Velit placeat sit ducimus non sed',
  uptime: '2021-01-27',
  content:
    'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
}

export function HowToUses() {
  const [content, setContent] = useState([])
  useEffect(() => {
    http.get('/system/articles/how-to-use').then(({ about }) => {
      setContent(about)
    })
  }, [])
  return (
    <>
      <div>
        <div className="bg-banner relative pb-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl px-10 sm:px-12">
              <div
                aria-hidden="true"
                className="absolute inset-0  md:mt-0"
              ></div>
              <div className="relative">
                <div className="sm:text-center"></div>

                <div className="text-center ">
                  <div className="mx-auto max-w-7xl pt-12 pb-6 text-center text-3xl font-semibold text-gray-800">
                    <span className="">Getting Started with NameCost</span>
                  </div>
                </div>

                <form action="#" className="my-6">
                  <HowToUseForm className="bg-gray-400 hover:bg-gray-500" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  py-8">
        <div className="mx-auto flow-root max-w-md overflow-hidden rounded-lg bg-gray-50 px-4 py-12 py-8 shadow-lg sm:max-w-4xl sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="flex grid grid-cols-4">
            <div>
              <HelpFaqs />
            </div>
            <div className="col-span-3 rounded-lg bg-white px-12">
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <h2 className="truncate pt-12 pb-8 text-2xl font-medium text-gray-500">
                    {content.title}
                  </h2>
                </div>
                <time
                  dateTime={content.updated_at}
                  className="flex-shrink-0 whitespace-nowrap pt-12 text-sm text-gray-500"
                >
                  {dayjs(content.updated_at).format('YYYY-MM-DD hh:mm:ss')}
                </time>
              </div>
              <div className="mt-1">
                <p className="line-clamp-2 text-sm text-gray-600">
                  {content.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full pb-16 ">
        <div className="mx-auto max-w-6xl pb-16"></div>
      </div>
    </>
  )
}
