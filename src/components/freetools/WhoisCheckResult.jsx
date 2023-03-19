/* This example requires Tailwind CSS v2.0+ */
import { ToolWhois } from '@/components/pages/ToolWhois'

const whoisdata=[]
function copyToClipboard(textToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      return navigator.clipboard.writeText(textToCopy);
  } else {
      // text area method
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}

const IsResults = () => {
  return (
    <>
    <div className="min-h-full px-4 sm:px-6  md:grid md:place-items-center lg:px-8 relative">
    <div className="max-w-max mx-auto min-w-full">
    <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-4">
          <div className="mb-8">
            <div className="">

              <div className="text-gray-500">
              {whoisdata.map((whois) => (

                              
                              

                <div key={whois.id} className="sm:flex sm:grid lg:grid-cols-2">
                <div className="bg-white border-b-4 border-l-4 border-r-4 border-dashed border-green-50">
                  <div className="py-3 bg-green-50 text-center text-green-700 font-bold border-4 border-dashed border-green-100"><span><a href={"/domains/"+whois.domain} className="hover:underline" title={whois.domain} target="_blank">See more details</a></span></div>
                  <div className="p-8 rounded-b-md space-y-4 divide-y divide-gray-200 block break-all overflow-clip overflow-hidden">
                  <div className="text-center"><span className="text-lg">Whois data for</span><span className="ml-4 text-lg font-bold">{whois.domain}</span></div>
                    <div className="py-3 space-y-2">
                      <div className="font-bold">Registrar Info</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Name:</span><span className="text-sm col-span-3">{whois.registrar}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Status:</span><span className="text-sm col-span-3">{whois.status}</span></div>
                    </div>
                    <div className="py-3 space-y-2">
                      <div className="font-bold">Registrant Info</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Name:</span><span className="text-sm col-span-3">{whois.registrant}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap">
                        <span className="col-span-1">Email:</span>
                        <span title="Click to copy it" className="text-sm col-span-3 block cursor-pointer hover:text-green-700 hover:font-bold"
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
                   <div className="py-3 space-y-2">
                      <div className="font-bold">Important Dates</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Updated:</span><span className="text-sm col-span-3">{whois.time_update}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Created:</span><span className="text-sm col-span-3">{whois.time_reg}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Expires:</span><span className="text-sm col-span-3">{whois.time_end}</span></div>
                   </div>
                   <div className="py-3 space-y-2">
                      <div className="font-bold">Name Servers</div>
                      <div className="text-sm">{whois.nameserver}</div>
                    </div>
                    <div className="py-3 space-y-2">
                      <div className="font-bold">Site Stats</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">pending Delete:</span><span className="text-sm col-span-3">{whois.delorredemp}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Park Or Sell:</span><span className="text-sm col-span-3">{whois.parkorbuy}</span></div>
                    </div>


                    </div>
                </div>

                <div className="bg-gray-50 border-b-4 border-l-4 border-r-4 border-dashed border-orange-50">
                  <div className="py-3 bg-orange-50 text-center text-orange-700 font-bold border-4 border-dashed border-orange-100"><span><a href={"/website/"+whois.domain} className="hover:underline" title={whois.domain} target="_blank">Buy this domain</a></span></div>
                  <div className="hidden lg:block p-8 rounded-b-md">
                  <div className="text-center"><span className="text-lg">Raw Registrar Data</span></div>
                  <div className=" break-all overflow-clip overflow-hidden">{whois.rawdatas}</div>
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
  return (
    <>

      {whoisdata.length ? (
        <IsResults />
      ) : (
        <ToolWhois />
      )}

    </>
  )
}
