/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon,SearchIcon,ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const people = [
  { id: 1, name: 'Whois' },
  { id: 2, name: 'Typo' },
  { id: 3, name: 'Domains' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export  function NavSearch() {
  const [selected, setSelected] = useState(people[0])
  return (
    <div className="relative bg-gray-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div>
          <form className="flex rounded-sm grid grid-cols-6 sm:grid-cols-4 lg:gap-x-2 xl:grid-cols-5">
            <div className="col-span-2 sm:col-span-1 block text-xs sm:text-sm text-center hover:border-transparent rounded-l-sm lg:rounded-sm text-gray-400 font-semibold border-none focus:ring-0 focus:ring-offset-0 bg-search cursor-pointer">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 py-2 pl-3 pr-2 sm:pr-10 text-left shadow-sm  sm:text-sm">
                        <span className="block truncate text-center pr-4 sm:pr-0">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-2 sm:pl-0 pr-2">
                          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="font-semibold absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-mygray-500 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active ? 'text-white bg-filter' : 'text-gray-400',
                                  'relative cursor-default select-none py-2  pl-3 pr-2 sm:pr-10'
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span className='font-semibold block truncate'>
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-white' : 'text-gray-400 ',
                                        'absolute inset-y-0 right-0 flex items-center pr-1'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>


            <div className="relative flex items-stretch flex-grow focus-within:z-10 w-full lg:mt-0 col-span-3 sm:col-span-2 xl:col-span-3">

              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-sm text-xs sm:text-sm  text-center placeholder-gray-400 border-none focus:ring-0 focus:ring-offset-0 bg-search text-gray-300 font-semibold"
           // className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Please enter a domain name"
              />
            </div>
  
            <button
              type="submit"
              className="bg-myred-500 relative  items-center space-x-2 px-4 py-2 border  text-sm font-medium rounded-r-sm lg:rounded-sm text-white bg-gray-50"
            >
              <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="hidden lg:inline">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
      </div>
    </div>
  )
}
