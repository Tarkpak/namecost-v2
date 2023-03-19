/* This example requires Tailwind CSS v2.0+ */

import { TrendingUpIcon } from '@heroicons/react/solid'

export  function MinMax({ children }) {

  return (
    <>
      <legend className="mb-2 block text-sm font-semibold text-gray-500">
        <TrendingUpIcon
          className="mr-2 h-4 w-4 text-gray-400"
          aria-hidden="true"
        />
          { children }
      </legend>


      <div className="mt-2 flex justify-between space-x-4">
        <div className="flex">
          <input
            id="minbl"
            name="minbl"
            type="text"
            placeholder="Min"
            className="text-range-filter h-8 w-20  border-gray-300 text-xs"
          />
        </div>
        <div className="flex">
          <input
            id="minrd"
            name="minrd"
            type="text"
            placeholder="Max"
            className="text-range-filter h-8 w-20  border-gray-300 text-xs"
          />
        </div>
      </div>
    </>
  )
}
