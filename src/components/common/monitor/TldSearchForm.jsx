/* This example requires Tailwind CSS v2.0+ */
import {  SearchIcon } from '@heroicons/react/solid'

export function TldSearchForm() {
  return (
   <>
      
      <div className="rounded-md border border-gray-300 mx-4  text-center place-self-center hidden md:flex">
          <div className="relative border-r border-gray-300 flex flex-grow items-stretch focus-within:z-10">
            <input
              type=""
              name="domainkeyword"
              id="domainkeyword"
              className="block w-full rounded-none placeholder-gray-300 border-none focus:outline-none focus:border-transparent focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-200 px-4 lg:px-20 sm:text-sm"
              placeholder="Please enter a extension"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <SearchIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
          </button>
        </div>

    </>      
  )
}
