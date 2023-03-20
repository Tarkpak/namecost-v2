/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, KeyIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { forwardRef, Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useFormContext, Controller } from 'react-hook-form'

const people = [
  { id: 1, name: 'Start' },
  { id: 2, name: 'End' },
  { id: 3, name: 'Contain' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const KeywordFilter = forwardRef((_, ref) => {
  const [selected, setSelected] = useState(people[0])
  const { register, control } = useFormContext()
  return (
    <>
      <legend className="mb-2 block text-sm font-semibold text-gray-500">
        <KeyIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
        Keyword
      </legend>

      <div className="col-span-2 block cursor-pointer rounded-l-sm border-none bg-white text-center text-xs font-semibold text-gray-400 hover:border-transparent focus:ring-0 focus:ring-offset-0 sm:col-span-1 sm:text-sm lg:rounded-sm">
        <Controller
          name="keyword-type"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <Listbox value={value} onChange={onChange}>
                {({ open }) => (
                  <>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 py-1 pl-3 pr-2 text-left shadow-sm sm:pr-10  sm:text-sm">
                        <span className="block truncate pr-4 text-center sm:pr-0">
                          {people.find(({ id }) => id === value)?.name }
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:pl-0">
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-200 text-xs font-semibold shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'bg-filter text-white'
                                    : 'text-gray-400',
                                  'relative cursor-default select-none py-2  pl-3 pr-2 sm:pr-10'
                                )
                              }
                              value={person.id}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span className="block truncate font-semibold">
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-gray-400 ',
                                        'absolute inset-y-0 right-0 flex items-center pr-1'
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
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
            )
          }}
        ></Controller>
      </div>

      <div className="mt-2">
        <div className="">
          <input
            id="minrd"
            type="text"
            placeholder="Your Keyword"
            className="text-range-filter w-full  border-gray-300 text-center text-xs"
            {...register('keyword')}
          />
        </div>
      </div>
    </>
  )
})
