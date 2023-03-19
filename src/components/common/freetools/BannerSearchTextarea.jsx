/* This example requires Tailwind CSS v2.0+ */

export function BannerSearchTextarea({
  setSingle,
  title,
}) {

  return (
   <>

        <div className="relative mt-1">
          <textarea
            rows={12}
            name="comment"
            id="comment"
            className="shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 block w-full sm:text-sm border-gray-300 rounded-md resize-none pl-4"
            placeholder="Enter a list of domains no more than 100"
          />
          <div className="absolute cursor-pointer hover:underline top-1/2 transform -translate-y-1/2 right-4 font-bold text-red-500" onClick={() => { setSingle(true) }} >{title}</div>
        </div>

    </>      
  )
}
