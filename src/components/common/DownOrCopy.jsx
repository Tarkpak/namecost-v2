/* This example requires Tailwind CSS v2.0+ */

import { DocumentDownloadIcon,ClipboardCheckIcon } from '@heroicons/react/solid'
export function DownOrCopy() {
  return (

    <>
      <div className="pb-2 min-w-full">
            <div className="px-8 text-right sm:mx-auto w-screen 2xl:max-w-screen-2xl text-gray-400">
              <span className="pr-8" title="Export selected domains,include all results">
                <button>
                  <DocumentDownloadIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                </button>
              </span>
              <span className="" title="Copy all selected domains">
                <button>
                  <ClipboardCheckIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                </button>
              </span>
            </div>
          </div>
    </>
  )
}
