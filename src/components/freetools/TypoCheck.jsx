import { useState } from 'react'
import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchInput } from '@/components/common/freetools/BannerSearchInput'
import { BannerSearchButton } from '@/components/common/freetools/BannerSearchButton'
import { Circle0 } from '@/components/common/Circle0'
import { Circle1 } from '@/components/common/Circle1'
import { Circle2 } from '@/components/common/Circle2'
import { Circle3 } from '@/components/common/Circle3'
import { Circle4 } from '@/components/common/Circle4'
import { Circle6 } from '@/components/common/Circle6'
import { Circle7 } from '@/components/common/Circle7'
import { Circle8 } from '@/components/common/Circle8'
import { Circle9 } from '@/components/common/Circle9'
import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'
import { useSubmit } from '@/hook/useSubmit'

const typeselect = [
  {
    id: '0',
    name: 'Typo Type',
    value: 'bx',
    label: 'Look Alike',
    labelid: Circle0(),
    checked: true,
  },
  {
    id: '1',
    name: 'Typo Type',
    value: 'qz',
    label: 'Miss Letter',
    labelid: Circle1(),
    checked: true,
  },
  {
    id: '2',
    name: 'Wrong Type(Horizontal)',
    value: 'hc',
    label: 'Wrong Type(Horizontal)',
    labelid: Circle2(),
    checked: true,
  },
  {
    id: '3',
    name: 'Typo Type',
    value: 'dz',
    label: 'Double Letter',
    labelid: Circle3(),
    checked: true,
  },
  {
    id: '4',
    name: 'Typo Type',
    value: 'dd',
    label: 'Swap Letter',
    labelid: Circle4(),
    checked: true,
  },
  {
    id: '6',
    name: 'Typo Type',
    value: 'sc',
    label: 'Wrong Letter(Vertical)',
    labelid: Circle6(),
    checked: false,
  },
  {
    id: '7',
    name: 'Typo Type',
    value: 'hd',
    label: 'Double Hits (Horizontal)',
    labelid: Circle7(),
    checked: false,
  },
  {
    id: '8',
    name: 'Typo Type',
    value: 'sd',
    label: 'Double Hits (Vertical)',
    labelid: Circle8(),
    checked: false,
  },
  {
    id: '9',
    name: 'Typo Type',
    value: 'qh',
    label: 'Swap Letter II',
    labelid: Circle9(),
    checked: false,
  },
]

export function TypoCheck() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' })
  const { searchState, onSubmit, setSearchState } = useSubmit()

  const [checkList, setCheckList] = useState(
    typeselect.map(({ checked }) => checked)
  )

  return (
    <div>
      <div className="bg-banner relative pb-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl px-10 sm:px-12">
            <div aria-hidden="true" className="absolute inset-0  md:mt-0"></div>
            <div className="relative">
              <div className="sm:text-center"></div>
              <BannerTitleSub
                titles="Want to protect your domain brand?"
                subtitles="Exploring typo variations of domain names"
              />

              <form
                onSubmit={handleSubmit((data) => {
                  const reg = checkList
                    .map((isChecked, idx) =>
                      isChecked ? typeselect[idx].value : ''
                    )
                    .filter((value) => value !== '')
                    .join(',')
                  onSubmit('/tools/typo', { domain: data.domain, reg })
                })}
                className="my-6"
              >
                <div className="sm:mx-auto  sm:flex">
                  <div className="flex-1">
                    <BannerSearchInput
                      {...register('domain', { required: true })}
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <BannerSearchButton className="bg-myred-500 px-5 py-3 text-base font-medium text-white sm:px-10" />
                  </div>
                </div>

                <div className="mt-4 flex grid grid-cols-1 sm:mx-auto sm:grid-cols-2 lg:grid-cols-5">
                  {typeselect.map((section, idx) => (
                    <div key={section.id} className="pt-3">
                      <div className="space-y-1 pt-2">
                        <div className="flex items-center">
                          <input
                            id={section.id}
                            defaultValue={section.checked ? section.value : ''}
                            type="checkbox"
                            checked={checkList[idx]}
                            onChange={({ target }) => {
                              const isChecked = target.checked
                              setCheckList((prev) => {
                                const newList = [...prev]
                                newList[idx] = isChecked
                                return newList
                              })
                            }}
                            className="text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                          />
                          <label
                            htmlFor={section.id}
                            className="ml-3 text-sm text-gray-600"
                          >
                            <span className="text-mygreen-500 pr-1 font-bold">
                              {section.labelid}{' '}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
