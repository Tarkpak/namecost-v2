/* This example requires Tailwind CSS v2.0+ */

import http from '@/utils/axios'
import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function MyTypeSelect({ filters }) {
  const [charData, setChartData] = useState([])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    http.post('/datas/top-data').then((data) => {
      setChartData(data)
    })
  }, [])
  return (
    <>
      {/* Mobile filter dialog 手机端*/}
      <Tab.Group onChange={(idx) => setIndex(idx)}>
        <Tab.List className="bg-maincolor flex space-x-1 rounded-lg p-1">
          {filters.map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-semibold leading-5 text-gray-700',
                  '',
                  selected
                    ? 'bg-white text-green-700 shadow'
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-600'
                )
              }
            >
              {category.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {filters.map((post, idx) => (
            <Tab.Panel key={idx} className="rounded-xl bg-white py-3 px-2">
              {post.content(charData[index])}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
