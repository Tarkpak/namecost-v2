/*
  This example requires Tailwind CSS v2.0+ 
*/
import clsx from 'clsx'

const baseStyles = {
  solid:
    'block w-full rounded-md border border-transparent px-5 py-3  text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10',
}



export function HowToUseForm({
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
                <div className="sm:mx-auto  sm:flex">
                <div className="flex-1">
                  <label htmlFor="cta-text" className="sr-only">
                    Enter a question
                  </label>
                  <input
                    id="cta-text"
                    type="text"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 sm:text-center"
                    placeholder="Enter your question"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className={className} {...props}
                  >
                    Search
                  </button>
                </div>
                </div>
    </>
  )
}
