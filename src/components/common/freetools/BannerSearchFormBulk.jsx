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
  className = clsx(
    baseStyles[variant],
    className
  )
  return (
   <>
      
        <div className=" flex-1">
          <BannerSearchTextarea setSingle={setSingle} title={title} />
        </div>
        <div className="mt-4 sm:mt-0 !md:ml-12 align-bottom">
          <div className="">
            <p className="text-center leading-8 text-gray-400 font-medium md:mt-8">Example<br></br>
              example.com<br></br>
              example.net<br></br>
              example.org<br></br>
              ...
            </p>
          </div>
          <BannerSearchButton className="text-base font-medium text-white px-5 py-3 bg-myred-500 sm:px-10" />
        </div>

    </>      
  )
}
