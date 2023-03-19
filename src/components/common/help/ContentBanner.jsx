/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'

const baseStyles = {
  solid:
    'relative sm:pb-6',
}

export function ContentBanner({ 
  titles,
  subtitles ,
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
      <div  className={className} {...props}>
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div  className="text-center text-3xl max-w-7xl mx-auto pt-12 pb-6 text-gray-800 font-semibold">
                  <span className="">{titles}</span>
                </div>
                <div className="max-w-3xl mx-auto text-gray-400 pb-8 font-medium">
                  <p>{subtitles}</p>
                </div>
              </div>
      </div>
    </>
  )
}
