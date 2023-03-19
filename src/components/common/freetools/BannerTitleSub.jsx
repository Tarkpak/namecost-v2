export function BannerTitleSub({ titles,subtitles }) {
  return (
   <>
      <div className="text-center ">
        <div  className="text-center text-3xl max-w-7xl mx-auto pt-12 pb-6 text-gray-800 font-semibold">
          <span className="">{titles}</span>
        </div>
        <div className="max-w-3xl mx-auto text-gray-400 pb-8 font-medium">
          <p>{subtitles}</p>
        </div>
      </div>

    </>      
  )
}
