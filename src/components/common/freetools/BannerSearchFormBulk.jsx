/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'
import { BannerSearchButton } from '@/components/common/freetools/BannerSearchButton'
import { BannerSearchTextarea } from '@/components/common/freetools/BannerSearchTextarea'
const baseStyles = {
  solid:
    'block w-full rounded-md border border-transparent shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2',
}

export function BannerSearchFormBulk({
  setSingle,
  title,
  variant = 'solid',
  className,
  ...props
}) {
  className = clsx(baseStyles[variant], className)
  return (
    <>
      <div className=" flex-1">
        <BannerSearchTextarea setSingle={setSingle} title={title} />
      </div>
      <div className="!md:ml-12 mt-4 align-bottom sm:mt-0">
        <div className="">
          <p className="text-center font-medium leading-8 text-gray-400 md:mt-8">
            Example<br></br>
            example.com<br></br>
            example.net<br></br>
            example.org<br></br>
            ...
          </p>
        </div>
        <BannerSearchButton className="bg-myred-500 px-5 py-3 text-base font-medium text-white sm:px-10" />
      </div>
    </>
  )
}
