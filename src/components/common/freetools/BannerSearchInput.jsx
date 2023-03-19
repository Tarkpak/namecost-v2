import { forwardRef } from 'react'

/* This example requires Tailwind CSS v2.0+ */
export const BannerSearchInput = forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor="cta-text" className="sr-only">
        Enter a domain name
      </label>
      <input
        id="cta-text"
        type="text"
        className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 sm:text-center"
        placeholder="Enter a domain name,e.g. namecost.com"
        {...props}
        ref={ref}
      />
    </>
  )
})
