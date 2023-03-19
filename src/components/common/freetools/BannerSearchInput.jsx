/* This example requires Tailwind CSS v2.0+ */

export function BannerSearchInput() {
  return (
   <>
      <label htmlFor="cta-text" className="sr-only">
        Enter a domain name
      </label>
      <input
          id="cta-text"
          type="text"
          className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 sm:text-center"
          placeholder="Enter a domain name,e.g. namecost.com"
      />
    </>      
  )
}
