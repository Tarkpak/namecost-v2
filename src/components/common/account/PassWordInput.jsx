/*
  This example requires Tailwind CSS v2.0+ 
*/
export function PassWordInput({titles}) {
  return (
    <>
      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
        <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
          {titles}
        </label>
        <input
          type="password"
          name="city"
          id="city"
          autoComplete="address-level2"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  )
}
