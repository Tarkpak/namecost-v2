/* This example requires Tailwind CSS v2.0+ */
import { ToolDa } from '@/components/pages/ToolDa'

const whoisdata = []
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IsResults = () => {
  return (
    <div className="md:mb-12">

      <div className="mt-8 flex flex-col ">
        <div>

          <div className="py-2 align-middle min-w-full sm:flex space-x-2 overflow-hidden sm:overflow-visible">
            <div className="shadow sm:mx-auto w-screen 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500 rounded-t-lg">
                <ToolExcelInput className=" w-2-50 w-1-10 py-3.5 text-oksm" />
                <ToolExcelMenu className="w-2-50 hidden md:block py-3.5 text-oksm" titles="Id" selectornot="" />
                <ToolExcelMenu className="w-7-50 w-3-10 py-3.5 text-oksm" titles="Domain" selectornot="" />
               <ToolExcelMenu className="w-8-50 hidden md:block py-3.5 text-oksm" titles="Registrar" selectornot="" />
               <ToolExcelMenu className="w-4-50 hidden md:block py-3.5 text-oksm" titles="Time-Up" selectornot="" />
               <ToolExcelMenu className="w-4-50 w-2-10 py-3.5 text-oksm" titles="Time-Reg" selectornot="" />
                <ToolExcelMenu className="w-4-50 w-2-10 py-3.5 text-oksm" titles="Time-End" selectornot="" />
                <ToolExcelMenu className="w-7-50 hidden md:block py-3.5 text-oksm" titles="Status" selectornot="" />
                <ToolExcelMenu className="w-8-50 hidden md:block py-3.5 text-oksm" titles="NameServer" selectornot="" />
                <ToolExcelMenu className="w-2-50 w-1-10 py-3.5 text-oksm" titles="Del" selectornot="" />
                <ToolExcelMenu className="w-2-50 w-1-10 py-3.5 text-oksm" titles="Park" selectornot="" />
              </div>
              <div className="bg-white">
                  {whoisdata.map((person,personIdx) => (
                    <div key={person.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-3 text-oksm  text-gray-500 border border-gray-200 w-2-50  w-1-10">
                        <input
                          id={`${person.id}-${personIdx}`}
                          name={`${person.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-3 text-oksm font-medium text-gray-500 border border-gray-200 w-2-50 hidden md:block">
                        {person.id}
                      </div>
                      <div className="text-blue-500 whitespace-nowrap py-3 text-oksm font-medium border border-gray-200 w-14-50 truncate text-left sm:pl-4 w-3-10">
                        {person.name}
                      </div>

                      <div className={classNames(
                          person.da > 35 ? 'whitespace-nowrap py-3 text-oksm text-green-700 font-semibold border border-gray-200 w-3-50 truncate w-1-10' : 'whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-3-50 truncate w-1-10'
                        )}> 
                        {person.da}
                        </div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-9-50 w-2-10 truncate">{person.backlinks}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-9-50 w-2-10 truncate">{person.referringdomains}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-3-50 truncate w-1-10">{person.year}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-4-50 truncate hidden md:block">{person.aby}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border-t border-b border-l border-gray-200 w-4-50 hidden md:block">{person.acr}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export function DaChecksResult() {
  return (
    <>

      {whoisdata.length ? (
        <IsResults />
      ) : (
        <ToolDa />
      )}

    </>
  )
}