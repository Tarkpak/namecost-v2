/*
  This example requires Tailwind CSS v2.0+ 
*/

export function NotificationInput({titles,subtitles}) {
  return (
    <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id={titles}
        name={titles}
        type="checkbox"
        className="h-4 w-4 text-mygreen-500 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={titles} className="font-medium text-gray-700">
        {titles}
      </label>
      <p className="text-gray-500">{subtitles}</p>
    </div>
  </div>
  )
}
