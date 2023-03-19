/* This example requires Tailwind CSS v2.0+ */

import { DocumentDownloadIcon,ClipboardCheckIcon } from '@heroicons/react/solid'

export  function DataHeader({ 
  children,
  title1,
  title2,
  ...props
 }) {

  return (
    <>
      <div className="nc-expired md:flex md:grid md:grid-cols-5">
        <div>
        <h2 className="text-md lg:text-md xl:text-xl font-bold tracking-tight text-gray-500 md:text-center">
        { children }
        </h2>
        </div>
        <div className="col-span-4 flex md:justify-end">

        <div>
          <section className="pt-2 text-sm text-gray-500 sm:text-center">
            {' '}
            <span className="mr-1" title={title1}{...props}>{ title1 }</span>
            <span>Results,</span> 
            <span className="mx-1 font-semibold text-orange-600 text-normal" title={title2}{...props}>( { title2 } )</span>
            <span className="text-green-700 font-semibold">Selected</span>
            <span className="mx-2 font-semibold text-gray-400 text-normal" title="Export selected domains,include all results">
              <button>
            <DocumentDownloadIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
              </button>
            </span>
            <span className="mx-2 font-semibold text-gray-400 text-normal" title="Copy all selected domains">
              <button>
            <ClipboardCheckIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
              </button>
            </span>
          </section>
        </div>

        </div>
      </div>
    </>
  )
}
