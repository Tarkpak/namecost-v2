/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon,KeyIcon,ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const people = [
  { id: 1, name: 'Start' },
  { id: 2, name: 'End' },
  { id: 3, name: 'Contain' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export  function KeywordFilter() {
  const [selected, setSelected] = useState(people[0])
  return (
    <>
      <legend className="mb-2 block text-sm font-semibold text-gray-500">
        <KeyIcon
          className="mr-2 h-4 w-4 text-gray-400"
          aria-hidden="true"
        />
        Keyword
      </legend>

      <div className="col-span-2 sm:col-span-1 block text-xs sm:text-sm text-center hover:border-transparent rounded-l-sm lg:rounded-sm text-gray-400 font-semibold border-none focus:ring-0 focus:ring-offset-0 bg-white cursor-pointer">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
             <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 py-1 pl-3 pr-2 sm:pr-10 text-left shadow-sm  sm:text-sm">
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
                  <Listbox.Options className="font-semibold absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-200 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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

      <div className="mt-2">
        <div className="">
          <input
            id="minrd"
            name="minrd"
            type="text"
            placeholder="Your Keyword"
            className="text-range-filter w-full  border-gray-300 text-xs text-center"
          />
        </div>
      </div>
    </>
  )
}
