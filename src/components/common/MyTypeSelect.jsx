/* This example requires Tailwind CSS v2.0+ */

import http from '@/utils/axios'
import { Tab } from '@headlessui/react'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { searchAtom } from '@/state/freeTools'
import Loading from '@/components/common/loading'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function MyTypeSelect({ filters }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [loading, setLoading] = useState(false)
  const [domains, setDomains] = useState([])
  const [search] = useAtom(searchAtom)

  useEffect(() => {
    setLoading(true)
    setDomains([])
    http
      .post(filters[activeIdx].href, {
        tools_type: search.type?.name?.toLocaleLowerCase(),
        domain: search.domain,
      })
      .then(({ domains }) => {
        setDomains(domains)
        setLoading(false)
      })
  }, [activeIdx, search])

  return (
    <>
      {/* Mobile filter dialog 手机端*/}
      <Tab.Group onChange={(idx) => setActiveIdx(idx)}>
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
              {loading ? <Loading /> : post.content(domains)}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
