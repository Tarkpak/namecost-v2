/* This example requires Tailwind CSS v2.0+ */
import { Pagination } from '@/components/Pagination'
import http from '@/utils/axios'
import { useEffect, useState } from 'react'

const people = [
  // {
  //   id: '1',
  //   title: 'Front-end Developersdfsfddfsdfsfds',
  //   lastreply: '3 days ago',
  //   status: 'closed',
  //   view: 'viewticket',
  // },
  // More people...
]

// {
//   "id": 4,
//   "uid": 3,
//   "title": "titletitle",
//   "content": "descdescdesc",
//   "created_at": "2023-01-09T13:37:57Z",
//   "updated_at": "2023-01-09T13:37:57Z",
//   "deleted_at": "0001-01-01T00:00:00Z",
//   "edges": {}
// }

export function Tickets() {
  const [tickets, setTickets] = useState([])
  useEffect(() => {
    http.get('/system/tickets').then((tickets) => {
      tickets
      setTickets(
        tickets.map(({ title, id, updated_at }) => ({
          title,
          id,
          lastreply:updated_at,
          status: 'closed',
          view: './viewticket?id=' + id,
        }))
      )
    })
  }, [])
  return (
    <div className="px-4 sm:px-6">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="mb-12 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Last Reply
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tickets.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person.lastreply}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-orange-100 px-2 text-xs font-semibold leading-5 text-orange-800">
                          {person.status}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href={person.view}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}