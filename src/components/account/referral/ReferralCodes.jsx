/*
  This example requires Tailwind CSS v2.0+ 
*/
import { useState } from 'react'
import { ShareTwitter } from '@/components/common/ShareTwitter'
import { ShareFacebook } from '@/components/common/ShareFacebook'


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

export function ReferralCodes() {
  const [sharecodes, setSharecodes] = useState({
    id: '1',
    link: 'Startup',
    fb: 'fbshare.com',
    tw: 'twfbshare.com',
  })
  const handleCopy = (e) => {
    e.preventDefault()
    copyToClipboard(sharecodes.link)
      .then((res) => {
        alert('copy successful')
      })
      .catch((err) => {
        console.log(err)
        alert('copy fail')
      })
  }
  const handleChange = (e) => {
    setSharecodes({
      ...sharecodes,
      link: e.target.value,
    })
  }

  return (
    <>
      <div className="text-center text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
        Invite Your Friends by Email
      </div>
      <div className=" flex rounded-md px-4 py-5 text-center sm:p-6 ">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="John Smith"
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-filter px-4 py-2 text-sm font-medium text-white"
        >
          <span>Send Email</span>
        </button>
      </div>

      <div className="mt-10 text-center text-xl font-extrabold text-gray-500 sm:text-2xl sm:tracking-tight lg:text-3xl">
        Share Your Invite Link
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid  ">
          <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 items-center gap-6">
                    <div className=" mt-1 flex rounded-md shadow-sm col-span-6 sm:col-span-6 lg:col-span-2">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <input
                          type="text"
                          name="sharecode"
                          value={sharecodes.link}
                          onChange={(e) => handleChange(e)}
                          readonly="readonly"
                          className="block w-full rounded-none rounded-l-md border-gray-300 text-center bg-gray-100 text-xs text-gray-500 py-3"
                          placeholder="input..."
                        />
                      </div>
                      <button
                        type="button"
                        className="relative border-solid -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-filter px-4 py-2 text-sm font-medium text-white"
                      >
                        <span
                          className="text-white"
                          onClick={(e) => {
                            handleCopy(e)
                          }}
                        >
                          Copy
                        </span>
                      </button>
                    </div>

                    <div className="text-center col-span-6 sm:col-span-3 lg:col-span-2">
                    <ShareTwitter codelink={sharecodes.link} />
                    </div>

                    <div className="text-center col-span-6 sm:col-span-3 lg:col-span-2">
                    <ShareFacebook codelink={sharecodes.link} />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
