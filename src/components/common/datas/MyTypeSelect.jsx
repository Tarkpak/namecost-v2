/* This example requires Tailwind CSS v2.0+ */

import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function MyTypeSelect({ filters }) {
  return (

    <>
      {/* Mobile filter dialog 手机端*/}
      <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-lg bg-maincolor p-1">
                    {filters.map((category, idx) => (
                      <Tab
                        key={idx}
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-semibold leading-5 text-gray-700',
                            '',
                          selected
                            ? 'bg-white shadow text-green-700'
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
                      <Tab.Panel
                        key={idx}
                        className='rounded-xl bg-white py-3 px-2'>
                          {post.content}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

    </>
  )
}
