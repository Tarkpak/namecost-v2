/* This example requires Tailwind CSS v2.0+ */

import { useSubmit } from '@/hook/useSubmit'
import { useFormContext } from 'react-hook-form'

export function BannerSearchTextarea({ setSingle, title }) {
  const { register } = useFormContext()
  const { searchState, setSearchState } = useSubmit()
  return (
    <>
      <div className="relative mt-1">
        <textarea
          rows={12}
          name="comment"
          id="comment"
          className="block w-full resize-none rounded-md border-gray-300 pl-4  shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200 sm:text-sm"
          placeholder="Enter a list of domains no more than 100"
          {...register('domain', { required: true })}
        />
        <div
          className="absolute top-1/2 right-4 -translate-y-1/2 transform cursor-pointer font-bold text-red-500 hover:underline"
          onClick={() => {
            setSingle(true)
            setSearchState({
              ...searchState,
              searchResult: null,
            })
          }}
        >
          {title}
        </div>
      </div>
    </>
  )
}
