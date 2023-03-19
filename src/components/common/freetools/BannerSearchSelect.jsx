import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PencilAltIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BannerSearchSelect = forwardRef(({ types }, ref) => {
  const { register, formState } = useFormContext()
  const { errors } = formState

  return (
    <>
      <Disclosure as="div" className="mt-8">
        {({ open }) => (
          <>
            <dt className="text-lg">
              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                <span className="font-medium text-gray-900">
                  <h3 class="px-4 text-base font-bold text-orange-500 sm:tracking-tight">
                    <PencilAltIcon
                      className="text-mygreen-500 h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      Extensions?{' '}
                      <span className="font-base ml-4 text-green-700">
                        Click here to select
                      </span>
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
                <form post="" className="mb-6 sm:mx-auto sm:flex sm:px-4">
                  <div className="mt-4 flex grid w-full grid-cols-1 px-8 sm:mx-auto sm:grid-cols-2 sm:px-0 lg:grid-cols-9">
                    {types.map((section, idx) => (
                      <div key={section.id} className="pt-3">
                        <div className="space-y-1 pt-2">
                          <div className="flex items-center">
                            <input
                              id={section.id}
                              name="type"
                              type="radio"
                              value={section.value}
                              {...register('type')}
                              className="text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                            />
                            <label
                              htmlFor={section.id}
                              className="ml-3 text-sm text-gray-600"
                            >
                              <span className="text-mygreen-500 pr-1 font-bold">
                                {' '}
                              </span>
                              <span className="font-semibold text-gray-400">
                                {section.label}
                              </span>
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
      {errors.radioselect && (
        <span className="text-red-500">Please select a domain extension</span>
      )}
    </>
  )
})

export default BannerSearchSelect
