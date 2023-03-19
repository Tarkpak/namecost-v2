/* This example requires Tailwind CSS v2.0+ */


export function MyTypeSelectPlus({ infos ,chartRef }) {
  return (

    <>
      <div className="px-4 text-xs">
      <span className="text-gray-300">{ infos }</span>
      
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div
          className="mb-20 pt-6  divide-y divide-gray-200"
          style={{ height: '800px'}}
          ref={chartRef}
        />
      </div>

    </>
  )
}
