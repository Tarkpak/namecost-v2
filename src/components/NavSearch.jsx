/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, SearchIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
import { Listbox, Popover, Transition } from '@headlessui/react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { searchAtom } from '@/state/freeTools'

const types = [
  { id: 1, name: 'Whois' },
  { id: 2, name: 'Typo' },
  { id: 3, name: 'Domains' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function NavSearch() {
  const router = useRouter()
  const [search, setSearch] = useAtom(searchAtom)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: search.type || { id: 1, name: 'Whois' }, // 默认选中第一个选项
      domain: search.domain,
    },
  })
  const onSubmit = (search) => {
    setSearch({ ...search })
    const asPath = router.asPath
    if (asPath !== '/') {
      router.push('/')
    }
  }
  return (
    <div className="relative bg-gray-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div>
          <form
            className="flex grid grid-cols-6 rounded-sm sm:grid-cols-4 lg:gap-x-2 xl:grid-cols-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="bg-search col-span-2 block cursor-pointer rounded-l-sm border-none text-center text-xs font-semibold text-gray-400 hover:border-transparent focus:ring-0 focus:ring-offset-0 sm:col-span-1 sm:text-sm lg:rounded-sm">
              {/* <Listbox value={selected} onChange={setSelected}> */}
              <Controller
                name="type"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <Listbox value={value} onChange={onChange}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 py-2 pl-3 pr-2 text-left shadow-sm sm:pr-10  sm:text-sm">
                              <span className="block truncate pr-4 text-center sm:pr-0">
                                {value ? value.name : types[0].name}
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
                              <Listbox.Options className="bg-mygray-500 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md text-xs font-semibold shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {types.map((type) => (
                                  <Listbox.Option
                                    key={type.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? 'bg-filter text-white'
                                          : 'text-gray-400',
                                        'relative cursor-default select-none py-2  pl-3 pr-2 sm:pr-10'
                                      )
                                    }
                                    value={type}
                                  >
                                    {({ active }) => (
                                      <>
                                        <span className="block truncate font-semibold">
                                          {type.name}
                                        </span>

                                        {value.id === type.id ? (
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
              />
            </div>

            <div className="relative col-span-3 flex w-full flex-grow items-stretch focus-within:z-10 sm:col-span-2 lg:mt-0 xl:col-span-3">
              <input
                type="search"
                name="search"
                id="search"
                className="bg-search block w-full rounded-sm border-none  text-center text-xs font-semibold text-gray-300 placeholder-gray-400 focus:ring-0 focus:ring-offset-0 sm:text-sm"
                // className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Please enter a domain name"
                {...register('domain', { required: true })}
              />
            </div>

            <button
              type="submit"
              className="bg-myred-500 relative  items-center space-x-2 rounded-r-sm border bg-gray-50  px-4 py-2 text-sm font-medium text-white lg:rounded-sm"
            >
              <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="hidden lg:inline">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2"></div>
    </div>
  )
}
