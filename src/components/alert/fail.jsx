/* This example requires Tailwind CSS v2.0+ */
import { XCircleIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

export default function Example({ errList = [] }) {
  const [transform, setTransform] = useState({})
  // useEffect(() => {
  //   const asyncClose = async () => {
  //     const messageContainer = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         setTransform({
  //           transform: `translateY(-${100 + errList.length * 24}px)`,
  //         })
  //         resolve(document.querySelector('#messageContainer'))
  //       }, 3000)
  //     })
  //     await new Promise((resolve, _) => {
  //       setTimeout(() => {
  //         resolve()
  //       }, 1000)
  //     })
  //     document?.body?.removeChild(messageContainer)
  //   }
  //   asyncClose()
  // }, [])

  return (
    <div
      className="m-3 inline-flex transition-transform duration-1000"
      style={transform}
    >
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex text-left">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              There were {errList.length} errors with your submission
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                {errList.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
