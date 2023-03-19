/*
  This example requires Tailwind CSS v2.0+ 
*/
import { useState } from 'react'

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

export function Apis() {
  const [sharecodes, setSharecodes] = useState({
    id: '1',
    link: '1tdfgdfgdfgdfgdgdfgd8768artup',
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
      <div className="text-center text-xl font-extrabold text-gray-500 sm:text-2xl sm:tracking-tight lg:text-3xl">
      Business Access Token
      </div>
      <div className="text-gray-500 text-center p-8">Integrate with the Namecost API to quickly spin up, destroy, and control your instances using this API key.</div>
      <div className="rounded-md px-4 lg:px-16 py-5 text-center  mx-auto">
        <div className=" mt-1 flex rounded-md shadow-sm col-span-6 sm:col-span-6 lg:col-span-2">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="text"
              name="sharecode"
              value={sharecodes.link}
              onChange={(e) => handleChange(e)}
              readonly="readonly"
              className="block w-full rounded-none rounded-l-md border-gray-300 text-center bg-gray-100 text-xs text-gray-500 py-4"
              placeholder="input..."
            />
          </div>
          <button
            type="button"
            className="relative border-solid -ml-px inline-flex items-center space-x-2  border border-gray-300 bg-gray-300 px-4 sm:px-8 py-2 text-sm font-medium text-white"
            onClick={(e) => {
              handleCopy(e)
            }}
          >
            <span className="text-white">
              Copy
            </span>
          </button>
          <button
            type="button"
            className="relative border-solid -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-filter px-4 py-2 text-sm font-medium text-white"
          >
            <span
              className="text-white"
            >
              New API Key
            </span>
          </button>
        </div>
      </div>

      <div className="mt-1 rounded-md shadow-sm text-center  mx-4 lg:mx-16 border border-gray-300">

        <button
          type="button"
          className="block w-full rounded-none rounded-l-md text-center bg-gray-100 text-base font-semibold text-green-800 py-3"
        >
            Disable API
        </button>
      </div>
    </>
  )
}
