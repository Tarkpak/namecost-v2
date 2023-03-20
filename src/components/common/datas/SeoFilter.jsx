/* This example requires Tailwind CSS v2.0+ */
import { LinkIcon } from '@heroicons/react/solid'
import RangeSlider from '@/components/common/RangeSlider'
import { useFormContext } from 'react-hook-form'

export function SeoFilter({ className, ...props }) {
  const {register} = useFormContext()
  return (
    <>
      <legend className="mb-1 block text-sm font-semibold text-gray-500">
        <LinkIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
        SEO Filter
      </legend>

      <RangeSlider
        initialMin={0}
        initialMax={100}
        min={0}
        max={100}
        step={1}
        priceCap={4}
      >
        <span>DA</span>
      </RangeSlider>
      <div className="mt-4 flex justify-between">
        <div className="flex">
          <input
            id="minbl"
            name="minbl"
            type="text"
            placeholder="Min BL"
            className={className}
            {...props}
          />
        </div>
        <div className="flex">
          <input
            id="minrd"
            name="minrd"
            type="text"
            placeholder="Min RD"
            className={className}
            {...props}
          />
        </div>
      </div>
    </>
  )
}
