/*
  This example requires Tailwind CSS v2.0+ 
*/

import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchInput } from '@/components/common/freetools/BannerSearchInput'
import { BannerSearchButton } from '@/components/common/freetools/BannerSearchButton'
import { BannerSearchSelect } from '@/components/common/freetools/BannerSearchSelect'

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
  return (
    <div>
      <div className="relative px-2 sm:px-0 sm:pb-6  bg-banner">
        <div className="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <div className="relative rounded-2xl">
            <div className="relative">
              <BannerTitleSub titles="Start your domain name search" subtitles="Check domain name availability and secure yours now" />
              <form action="#" className="my-6">
                <div className="sm:mx-auto  sm:flex">
                  <div className="flex-1 relative">
                   <BannerSearchInput />
                    <div className="absolute cursor-pointer hover:underline top-1/2 transform -translate-y-1/2 right-4 font-bold text-red-500" onClick={() => { setSingle(false) }} >Bulk Search</div>
                 </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                   <BannerSearchButton className="text-base font-medium text-white px-5 py-3 bg-myred-500 sm:px-10" />
                 </div>
               </div>
                <dl className="">
                  <BannerSearchSelect types={typeselect} />
              </dl>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
