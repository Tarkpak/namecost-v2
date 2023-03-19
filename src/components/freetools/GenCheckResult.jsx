/* This example requires Tailwind CSS v2.0+ */
import {
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid'
import { ToolGenerator } from '@/components/pages/ToolGenerator'
import { useAtom } from 'jotai'
import { searchAtom } from '@/state'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IsDatas = ({ datas }) => {
  return (
    <>
      {datas.map((whois) => (
        <div
          className={classNames(
            whois.okreg == 'available'
              ? 'flex grid grid-cols-11 p-2 text-base font-medium text-gray-700 hover:rounded-md hover:bg-green-600 hover:text-white lg:px-8'
              : whois.okreg == 'registered'
              ? 'flex grid grid-cols-11 p-2 text-base font-medium text-gray-700 hover:rounded-md hover:bg-red-500 hover:text-white lg:px-8'
              : 'flex grid grid-cols-11 p-2 text-base font-medium text-gray-700 hover:rounded-md hover:bg-gray-500 hover:text-white lg:px-8'
          )}
        >
          <span className="">
            {whois.okreg == 'available' ? (
              <span className="h-5 w-5 rounded-full font-bold  text-green-400">
                <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : whois.okreg === 'registered' ? (
              <span className="h-5 w-5 rounded-full font-bold  text-orange-400">
                <XCircleIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : (
              <span className="h-5 w-5 rounded-full font-bold  text-gray-400">
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            )}
          </span>
          <span className="col-span-8">{whois.domain}</span>
          <span className="hover-text-white col-span-2 text-center font-medium">
            {whois.okreg == 'available' ? (
              <span className="h-6 w-6 rounded-full text-green-500 hover:font-semibold hover:text-white">
                <a
                  href={
                    'https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=' +
                    whois.name
                  }
                  target="_blank"
                >
                  Buy
                </a>
              </span>
            ) : whois.okreg === 'registered' ? (
              <span className="h-5 w-5 rounded-full text-orange-500 hover:font-semibold hover:text-white">
                <form method="POST" action="">
                  <button>Whois</button>
                </form>
              </span>
            ) : (
              <span className="h-6 w-6 rounded-full text-green-200"></span>
            )}
          </span>
        </div>
      ))}
    </>
  )
}

const IsResults = ({ datas }) => {
  return (
    <>
      <div className="md:mb-12">
        <div className="relative min-h-full px-4  sm:px-6 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto min-w-full max-w-max">
            <main>
              <div className="mx-auto max-w-7xl rounded-md bg-white pt-4 sm:px-6 lg:px-8">
                <div className="mx-auto py-4 text-center text-xl font-bold text-gray-500">
                  Search Results for
                </div>

                <div className="mx-auto items-center pb-8 text-center text-xl font-bold text-gray-500 lg:px-10">
                  <span
                    className={classNames(
                      datas[0]['okreg'] == 'available'
                        ? 'text-2xl text-green-700'
                        : datas[0]['okreg'] == 'registered'
                        ? 'text-2xl text-orange-700'
                        : 'text-2xl text-gray-500'
                    )}
                  >
                    {datas[0]['domain']}
                  </span>
                  <span className="ml-4">
                    {datas[0]['okreg'] == 'available' ? (
                      <span className=" mx-4 rounded-md  bg-green-50 p-2 text-base font-bold text-green-700 shadow hover:bg-green-500 hover:text-white sm:px-4">
                        <button>Buy Now</button>
                      </span>
                    ) : datas[0]['okreg'] == 'registered' ? (
                      <span>
                        <span className=" mx-4 rounded-md  bg-orange-50 p-2 text-base text-orange-700 shadow hover:bg-orange-400  hover:text-white sm:px-4">
                          <button>Whois</button>
                        </span>
                        <span className=" mx-4 rounded-md  bg-green-50 p-2 text-base text-green-700 shadow hover:bg-green-400  hover:text-white sm:px-4">
                          <a href="" title={datas[0]['name']} target="_blank">
                            Make Offer
                          </a>
                        </span>
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </span>
                </div>

                <div className="mx-auto border-b border-gray-300 py-2 text-center text-base  font-bold text-gray-300 ">
                  Choose a name below and follow the steps to create your
                  website.
                </div>
                <div className="px-4 py-4 sm:flex sm:grid sm:px-0 md:grid-cols-2 lg:p-12 xl:grid-cols-3">
                  <IsDatas datas={datas} />
                </div>
                <div className="mx-auto pb-8 text-center text-base font-bold text-gray-300 hover:text-gray-500">
                  <button className="mx-auto">Show more results »</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export function GenCheckResult() {
  const [searchState] = useAtom(searchAtom)

  return (
    <>
      {searchState.searchResult ? (
        <IsResults datas={searchState.searchResult} />
      ) : (
        <ToolGenerator />
      )}
    </>
  )
}
