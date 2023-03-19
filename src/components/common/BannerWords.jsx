/* This example requires Tailwind CSS v2.0+ */


export function BannerWords({ wt,wb,iconl,iconr }) {
  return (

    <>
      <div className="mx-auto text-base text-blue-green font-medium mb-6">
        <div className="bg-maincolor p-4 flex grid grid-cols-6">
          <div className="mx-auto place-self-center">
            {iconl}
          </div>
          <div className="col-span-4 lg:px-10">
          <p className="font-bold text-md md:text-xl xl:text-2xl">{wt}</p>
            <p className="hidden lg:block">{wb}</p>
          </div>
          <div className="mx-auto place-self-center">
            {iconr}
          </div>
        </div> 
      </div>
    </>
  )
}
