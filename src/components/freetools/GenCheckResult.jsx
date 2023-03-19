/* This example requires Tailwind CSS v2.0+ */
import {
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid'
import { ToolGenerator } from '@/components/pages/ToolGenerator'


const datas=[]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IsDatas = () => {
  return (
    <>
      {datas.map((whois) => (
        <div className={classNames(
          whois.okreg == 'available'
            ? 'p-2 lg:px-8 flex grid grid-cols-11 text-gray-700 font-medium text-base hover:bg-green-600 hover:text-white hover:rounded-md'
            :  whois.okreg == 'registered'
              ? 'p-2 lg:px-8 flex grid grid-cols-11 text-gray-700 font-medium text-base hover:bg-red-500 hover:text-white hover:rounded-md'
              : 'p-2 lg:px-8 flex grid grid-cols-11 text-gray-700 font-medium text-base hover:bg-gray-500 hover:text-white hover:rounded-md'
              )}>
        
          <span className="">
            {whois.okreg == 'available' ? (
              <span className="h-5 w-5 rounded-full font-bold  text-green-400">
              <CheckCircleIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
              </span>
              ) : whois.okreg === 'registered' ? 
                <span className="h-5 w-5 rounded-full font-bold  text-orange-400">
                  <XCircleIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                 : 
                    <span className="h-5 w-5 rounded-full font-bold  text-gray-400">
                      <QuestionMarkCircleIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    </span>
            }
            </span>
          <span className="col-span-8">{whois.name}</span>
          <span className="col-span-2 text-center font-medium hover-text-white">
          {whois.okreg == 'available' ? (
            <span className="h-6 w-6 rounded-full text-green-500 hover:text-white hover:font-semibold">
              <a href={'https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck='+whois.name} target="_blank">Buy</a>
              </span>
              ) : whois.okreg === 'registered' ? 
                <span className="h-5 w-5 rounded-full text-orange-500 hover:text-white hover:font-semibold">
                  <form method='POST' action=''>
                    <button>Whois</button>
                  </form>
                </span>
                 : 
                    <span className="h-6 w-6 rounded-full text-green-200">
                      
                    </span>
            }
          </span>
        </div>
      ))}
    </>
  )
}

const IsResults = () => {
  return (
    <>
      <div className="md:mb-12">
        <div className="min-h-full px-4 sm:px-6  md:grid md:place-items-center lg:px-8 relative">
          <div className="max-w-max mx-auto min-w-full">
            <main>
              <div className="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 pt-4 rounded-md">
                <div className="mx-auto py-4 text-center font-bold text-xl text-gray-500">Search Results for
                </div>

                <div className="mx-auto pb-8 lg:px-10 text-center font-bold text-xl text-gray-500 items-center">
                  <span className={classNames(
                      datas[0]['okreg'] == 'available'
                        ? 'text-green-700 text-2xl'
                        :  datas[0]['okreg'] == 'registered'
                          ? 'text-orange-700 text-2xl'
                          : 'text-gray-500 text-2xl'
                          )}>
                    {datas[0]['name']}
                  </span>
                  <span className="ml-4">
                  {datas[0]['okreg'] == 'available'
                        ? <span className=" text-green-700 rounded-md  p-2 mx-4 bg-green-50 hover:bg-green-500 hover:text-white text-base font-bold shadow sm:px-4"><button>Buy Now</button></span>
                        : datas[0]['okreg'] == 'registered'
                          ? <span>
                              <span className=" text-orange-700 rounded-md  p-2 mx-4 bg-orange-50 hover:bg-orange-400 hover:text-white text-base  shadow sm:px-4"><button>Whois</button></span>
                              <span className=" text-green-700 rounded-md  p-2 mx-4 bg-green-50 hover:bg-green-400 hover:text-white text-base  shadow sm:px-4"><a href=""  title={datas[0]['name']} target="_blank">Make Offer</a></span>
                            </span>
                          : <span></span>

                  }
                  
                </span>
                </div>


                <div className="mx-auto py-2 text-center font-bold text-base text-gray-300  border-b border-gray-300 ">Choose a name below and follow the steps to create your website.</div>
                <div className="px-4 py-4 lg:p-12 sm:px-0 sm:flex sm:grid md:grid-cols-2 xl:grid-cols-3">
                      <IsDatas />
                </div>
                <div className="mx-auto text-center pb-8 font-bold text-base text-gray-300 hover:text-gray-500"><button className="mx-auto">Show more results »</button></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
    )
  }
  
export function GenCheckResult() {
  return (
    <>
    {datas.length ? (
        <IsResults />
      ) : (
        <ToolGenerator />
      )}
    </>
  )
}

