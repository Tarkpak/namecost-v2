/*
  This example requires Tailwind CSS v2.0+ 
*/

import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchInput } from '@/components/common/freetools/BannerSearchInput'
import { BannerSearchButton } from '@/components/common/freetools/BannerSearchButton'
import BannerSearchSelect from '@/components/common/freetools/BannerSearchSelect'
import { useForm, FormProvider } from 'react-hook-form'
import { useSubmit } from '@/hook/useSubmit'

const typeselect = [
  {
    id: '0',
    name: 'Typo Type',
    value: 'popular',
    label: 'Popular',
    checked: true,
  },
  {
    id: '1',
    name: 'Typo Type',
    value: 'it',
    label: 'IT',
    checked: true,
  },
  {
    id: '2',
    name: 'Typo Type',
    value: 'pro',
    label: 'Professional',
    checked: true,
  },
  {
    id: '3',
    name: 'Wrong Type(Horizontal)',
    value: 'biz',
    label: 'Business',
    checked: true,
  },
  {
    id: '4',
    name: 'Typo Type',
    value: 'fin',
    label: 'Finance',
    checked: true,
  },
  {
    id: '5',
    name: 'Typo Type',
    value: 'market',
    label: 'Market',
    checked: true,
  },
  {
    id: '6',
    name: 'Typo Type',
    value: 'shop',
    label: 'Shop',
    checked: false,
  },
  {
    id: '7',
    name: 'Typo Type',
    value: 'food',
    label: 'Food',
    checked: false,
  },
  {
    id: '8',
    name: 'Typo Type',
    value: 'realestate',
    label: 'Real Estate',
    checked: false,
  },
  {
    id: '9',
    name: 'Typo Type',
    value: 'sport',
    label: 'Sport',
    checked: false,
  },
  {
    id: '10',
    name: 'Typo Type',
    value: 'travel',
    label: 'Travel',
    checked: true,
  },
  {
    id: '11',
    name: 'Wrong Type(Horizontal)',
    value: 'health',
    label: 'Health',
    checked: true,
  },
  {
    id: '12',
    name: 'Typo Type',
    value: 'beauty',
    label: 'Beauty',
    checked: true,
  },
  {
    id: '13',
    name: 'Typo Type',
    value: 'org',
    label: 'Organization',
    checked: true,
  },
  {
    id: '14',
    name: 'Typo Type',
    value: 'social',
    label: 'Social',
    checked: false,
  },
  {
    id: '15',
    name: 'Typo Type',
    value: 'media',
    label: 'Media',
    checked: false,
  },
  {
    id: '16',
    name: 'Typo Type',
    value: 'academic',
    label: 'Academic',
    checked: false,
  },
  {
    id: '17',
    name: 'Typo Type',
    value: 'adult',
    label: 'Adult',
    checked: false,
  },
]

export function GenCheck({ setSingle }) {
  const { register, handleSubmit, formState } = useForm()
  const { onSubmit, setSearchState, searchState } = useSubmit()
  return (
    <div>
      <div className="bg-banner relative px-2 sm:px-0  sm:pb-6">
        <div className="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <div className="relative rounded-2xl">
            <div className="relative">
              <BannerTitleSub
                titles="Start your domain name search"
                subtitles="Check domain name availability and secure yours now"
              />
              <form
                onSubmit={handleSubmit((data) =>
                  onSubmit('/tools/generator', data)
                )}
                className="my-6"
              >
                <div className="sm:mx-auto  sm:flex">
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
                      Bulk Search
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <BannerSearchButton
                      type="submit"
                      className="bg-myred-500 px-5 py-3 text-base font-medium text-white sm:px-10"
                    />
                  </div>
                </div>
                <dl className="">
                  <FormProvider register={register} formState={formState}>
                    <BannerSearchSelect types={typeselect} />
                  </FormProvider>
                </dl>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
