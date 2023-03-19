/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PencilAltIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BannerSearchSelect({types}) {
  return (
   <>
      <Disclosure as="div" className="mt-8">
        {({ open }) => (
        <>
          <dt className="text-lg">
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
              <span className="font-medium text-gray-900">
                <h3 class="text-base font-bold text-orange-500 sm:tracking-tight px-4">
                  <PencilAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                  <span className="ml-2">
                    Extensions? <span className="ml-4 text-green-700 font-base">Click here to select</span>
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
          <Disclosure.Panel as="dd" className="">
            <div className="">
            {/* submit your domains   --------START----------*/}
            <form post="" className="mb-6 sm:px-4 sm:mx-auto sm:flex">
            <div className="px-8 sm:px-0 sm:mx-auto w-full flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 mt-4">
            {types.map((section, idx) => (
            <div key={section.id} className="pt-3">
                <div className="pt-2 space-y-1">
                    <div className="flex items-center">
                      <input
                        id={section.id}
                        name={section.name}
                        defaultValue={section.value}
                        type="radio"
                        className="h-4 w-4 border-gray-300 rounded text-mygreen-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-white"
                      />
                    <label htmlFor={section.id} className="ml-3 text-sm text-gray-600">
                    <span className="text-mygreen-500 pr-1 font-bold"> </span><span className="font-semibold text-gray-400">{section.label}</span>
                    </label>
                  </div>
              </div>
            </div>
            ))}
          </div>
          </form>
          {/* submit your domains   --------END----------*/}
          </div>
        </Disclosure.Panel>
      </>
          )}
        </Disclosure>
    </>      
  )
}
