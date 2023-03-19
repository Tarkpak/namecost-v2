/*
  This example requires Tailwind CSS v2.0+ 
*/

import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchInput } from '@/components/common/freetools/BannerSearchInput'
import { BannerSearchButton } from '@/components/common/freetools/BannerSearchButton'
import { useForm } from 'react-hook-form'
import { useSubmit } from '@/hook/useSubmit'

export function WhoisCheck({ setSingle }) {
  const { register, handleSubmit } = useForm()
  const { onSubmit, setSearchState, searchState } = useSubmit()
  return (
    <div>
      <div className="bg-banner  relative pb-6">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div aria-hidden="true" className="absolute inset-0  md:mt-0"></div>
            <div className="relative pb-12">
              <BannerTitleSub
                titles="Want a domain that’s taken?"
                subtitles="Our domain broker service can get it for you"
              />
              <form
                onSubmit={handleSubmit((data) =>
                  onSubmit('/tools/whois', data)
                )}
                className="my-6 sm:mx-auto  sm:flex"
              >
                <div className="relative flex-1">
                  <BannerSearchInput
                    {...register('domain', { required: true })}
                  />
                  <div
                    className="absolute top-1/2 right-4 -translate-y-1/2 transform cursor-pointer font-bold text-red-500 hover:underline"
                    onClick={() => {
                      setSingle(false)
                      setSearchState({
                        ...searchState,
                        searchResult: null,
                      })
                    }}
                  >
                    Bulk Whois
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <BannerSearchButton className="bg-myred-500 px-5 py-3 text-base font-medium text-white sm:px-10" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
