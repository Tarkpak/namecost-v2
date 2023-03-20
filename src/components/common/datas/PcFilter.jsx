/* This example requires Tailwind CSS v2.0+ */

import { KeywordFilter } from '@/components/common/datas/KeywordFilter'
import { MinMax } from '@/components/common/datas/MinMax'
import { useFormContext } from 'react-hook-form'
export const  PcFilter = ({ filters },ref) => {
  const { register } = useFormContext()
  return (

    <>
      {/* Mobile filter dialog 手机端*/}
      {filters.map((section, sectionIdx) => (
        <div
          key={section.name}
          className={sectionIdx === 0 ? 'px-4' : 'pt-3 px-4'}
        >
          <fieldset>
            <legend className="block text-sm font-semibold text-gray-500">
              {section.icon} {section.name}
            </legend>
            <div
              className={
                section.myinput ? 'space-y-1 pt-2' : 'space-y-1 pt-2'
              }
            >
              {section.options.map((option, optionIdx) => (
                <div
                  key={option.value}
                  className="flex items-center"
                >
                  <input
                    id={`${section.id}-${optionIdx}`}
                    name={section.id}
                    defaultValue={option.value}
                    type={section.myinput ? 'text' : 'checkbox'}
                    className={
                      section.myinput
                        ? 'text-mygreen-500 h-6 max-w-max  border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        : 'text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                    }
                    {...register(section.id)}
                  />
                  <label
                    htmlFor={`${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-400 font-medium"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      ))}
      <div className="pt-3 px-4">
        <KeywordFilter />
      </div>

      <div className="pt-1 px-4 border-none">
        <MinMax >
          Character Length
        </MinMax>
      </div>
    </>
  )
}
