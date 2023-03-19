/*
  This example requires Tailwind CSS v2.0+ 
*/
import { useState } from 'react'
import {  PaperClipIcon,UserCircleIcon } from '@heroicons/react/solid'


const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Engineering', value: 'engineering' },
  // More items...
]
const nowticket = 
  {
    id: '1',
    title: 'Front-end Developersdfsfddfsdfsfds',
    content: 'sdfsdfsdfsssssssssssssssssssssssssssssssssssssssssdsfsdfsd',
    creator: '3 days ago',
    status: 'closed',
    view: 'sdfsdfsdf',
  }
  const messages = [
    {
      id: 1,
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27 16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },

    // More messages...
  ]



export function ViewTickets() {

  const [labelled, setLabelled] = useState(labels[0])


  return (
    <div>

<div className="px-4 sm:px-6">
        <div className="flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Last Reply
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="bg-green-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{nowticket.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{nowticket.creator}</div>

                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {nowticket.status}
                          </span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="col-span-3 whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6" colspan='3'>
                        <div className=" ml-4">{nowticket.content}</div>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


      <form action="#" className="relative px-4 sm:px-6 mt-4 sticky top-0 z-10 bg-white pb-16">
        <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-mygreen-500 focus-within:ring-1 focus-within:ring-mygreen-500">
          <label htmlFor="description" className="sr-only">
           Description
         </label>
         <textarea
            rows={4}
            name="description"
           id="description"
           className="block w-full border-0 py-2 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
           placeholder="Write a description..."
            defaultValue={''}
          />
        </div>

        <div className="">
         {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}

         <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
            >
              <PaperClipIcon className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" aria-hidden="true" />
              <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">Attach a file</span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-700"
            >
              New Reply
            </button>
          </div>
        </div>
      </div>
    </form>

    <div className="mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8 bg-white pb-16">
        <ul role="list" className="divide-y divide-gray-200">
            {messages.map((message) => (
             <li
                key={message.id}
             className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
             >
             <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                    <div className="block focus:outline-none">
                     <span className="absolute inset-0" aria-hidden="true" />
                     <p className="text-sm font-medium text-gray-500 truncate items-center"><UserCircleIcon className=" h-5 w-5 mr-2 text-green-700" aria-hidden="true" /> {message.sender}</p>
                  </div>
                 </div>
                 <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                 {message.datetime}
                 </time>
             </div>
             <div className="mt-1">
                 <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                 <p className="float-right text-sm text-gray-500 pb-1">#{message.id}</p>
             </div>
             </li>
         ))}
        </ul>
      </div>

    </div>
  )
}
