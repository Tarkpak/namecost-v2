/* This example requires Tailwind CSS v2.0+ */
import { ToolWhois } from '@/components/pages/ToolWhois'
import { searchAtom } from '@/state'
import { useAtom } from 'jotai'

const whoisdata = []
function copyToClipboard(textToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy)
  } else {
    // text area method
    let textArea = document.createElement('textarea')
    textArea.value = textToCopy
    // make the textarea out of viewport
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    return new Promise((res, rej) => {
      // here the magic happens
      document.execCommand('copy') ? res() : rej()
      textArea.remove()
    })
  }
}

const IsResults = ({ datas }) => {
  return (
    <>
      <div className="relative min-h-full px-4  sm:px-6 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto min-w-full max-w-max">
          <main>
            <div className="mx-auto max-w-7xl pt-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <div className="">
                  <div className="text-gray-500">
                    {datas.map((whois) => (
                      <div
                        key={whois.id}
                        className="sm:flex sm:grid lg:grid-cols-2"
                      >
                        <div className="border-b-4 border-l-4 border-r-4 border-dashed border-green-50 bg-white">
                          <div className="border-4 border-dashed border-green-100 bg-green-50 py-3 text-center font-bold text-green-700">
                            <span>
                              <a
                                href={'/domains/' + whois.domain}
                                className="hover:underline"
                                title={whois.domain}
                                target="_blank"
                              >
                                See more details
                              </a>
                            </span>
                          </div>
                          <div className="block space-y-4 divide-y divide-gray-200 overflow-hidden overflow-clip break-all rounded-b-md p-8">
                            <div className="text-center">
                              <span className="text-lg">Whois data for</span>
                              <span className="ml-4 text-lg font-bold">
                                {whois.domain}
                              </span>
                            </div>
                            <div className="space-y-2 py-3">
                              <div className="font-bold">Registrar Info</div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Name:</span>
                                <span className="col-span-3 text-sm">
                                  {whois.registrar}
                                </span>
                              </div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Status:</span>
                                <span className="col-span-3 text-sm">
                                  {whois.status}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2 py-3">
                              <div className="font-bold">Registrant Info</div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Name:</span>
                                <span className="col-span-3 text-sm">
                                  {whois.registrant}
                                </span>
                              </div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Email:</span>
                                <span
                                  title="Click to copy it"
                                  className="col-span-3 block cursor-pointer text-sm hover:font-bold hover:text-green-700"
                                  onClick={(e) => {
                                    {
                                      e.preventDefault()
                                      copyToClipboard(whois.regemail)
                                        .then((res) => {
                                          alert('Email Copied Successful')
                                        })
                                        .catch((err) => {
                                          console.log(err)
                                          alert('Copy Failed')
                                        })
                                    }
                                  }}
                                >
                                  {whois.regemail}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2 py-3">
                              <div className="font-bold">Important Dates</div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Updated:</span>
                                <span className="col-span-3 text-sm">
                                  {whois.uptime}
                                </span>
                              </div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Created:</span>
                                <span className="col-span-3 text-sm">
                                  {whois.regtime}
                                </span>
                              </div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">Expires:</span>
                                <span className="col-span-3 text-sm">
                                  {whois.endtime}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2 py-3">
                              <div className="font-bold">Name Servers</div>
                              <div className="text-sm">{whois.nameserver}</div>
                            </div>
                            <div className="space-y-2 py-3">
                              <div className="font-bold">Site Stats</div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">
                                  pending Delete:
                                </span>
                                <span className="col-span-3 text-sm">
                                  {whois.delorredemp}
                                </span>
                              </div>
                              <div className="grid flex-wrap sm:grid-cols-4">
                                <span className="col-span-1">
                                  Park Or Sell:
                                </span>
                                <span className="col-span-3 text-sm">
                                  {whois.parkorbuy}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-b-4 border-l-4 border-r-4 border-dashed border-orange-50 bg-gray-50">
                          <div className="border-4 border-dashed border-orange-100 bg-orange-50 py-3 text-center font-bold text-orange-700">
                            <span>
                              <a
                                href={'/website/' + whois.domain}
                                className="hover:underline"
                                title={whois.domain}
                                target="_blank"
                              >
                                Buy this domain
                              </a>
                            </span>
                          </div>
                          <div className="hidden rounded-b-md p-8 lg:block">
                            <div className="text-center">
                              <span className="text-lg">
                                Raw Registrar Data
                              </span>
                            </div>
                            <div className=" overflow-hidden overflow-clip break-all">
                              {whois.rawwhois}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export function WhoisCheckResult() {
  const [searchState] = useAtom(searchAtom)
  return (
    <>
      {searchState.searchResult ? (
        <IsResults datas={searchState.searchResult} />
      ) : (
        <ToolWhois />
      )}
    </>
  )
}
