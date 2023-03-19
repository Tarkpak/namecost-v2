/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'


const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '2', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '3', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '4', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '5', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'s',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '6', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'s',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '11', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'s',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '13', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '14', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '15', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'p',tld:'com',within:'',regdate:'08-08-2022'},
  {id: '16', name: 'abcdefghijklmnopqrstuvwxyz.com',registrar:'search enginefhfghfghfgh',registrant: '12345678901ffhfghfhfhfhg',nameserver:'1998fghfghfghfghfghfh',parkorsell:'',tld:'com',within:'',regdate:'08-08-2022'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function regdate() {
  return (
    <>
      R<span className="hidden sm:inline">eg</span>Date
    </>
    
  )
}
function parks() {
  return (
    <>
    <form>
      <button className="text-gray-100">
      P<span className="hidden sm:inline">ark</span>
      </button>
    </form>
    
    </>
  )
}

export function NewResult() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full  border-collapse text-center rounded-t-lg flex bg-gray-500">

              <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
              <ToolExcelMenu className="w-15-50 w-4-10 py-2 text-sm" titles="Domain" selectornot="" /> 
              <ToolExcelMenu className="w-13-50 w-2-10 py-2 text-sm" titles="Registrar" selectornot="" />
              <ToolExcelMenu className="w-12-50 hidden md:block py-2 text-sm" titles="Nameserver" selectornot="" />
              <ToolExcelMenu className="w-3-50 w-1-10 py-2 text-sm" titles={parks()} selectornot="" />
              <ToolExcelMenu className="w-5-50 w-2-10 py-2 text-sm" titles={regdate()} selectornot="" />
   
              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-center w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-15-50 truncate text-left pl-1 sm:pl-4 w-4-10" title={dom.name}>{dom.name}</div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-13-50 truncate w-2-10" title={dom.registrar}>{dom.registrar}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-12-50 truncate hidden md:block" title={dom.nameserver}>{dom.nameserver}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200  uppercase w-3-50 truncate w-1-10  flex items-center justify-center">
                        <span className={classNames(
                            dom.parkorsell
                              ? 'h-5 w-5 rounded-full bg-orange-100 font-bold text-orange-700 hover:bg-orange-200'
                              : 'h-5 w-5 rounded-full bg-green-50 font-bold text-green-700 hover:bg-green-200'
                          )}
                        >
                          {dom.parkorsell}
                        </span>
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-t border-b border-l border-gray-200 w-5-50 truncate w-2-10">{dom.regdate}</div>
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
