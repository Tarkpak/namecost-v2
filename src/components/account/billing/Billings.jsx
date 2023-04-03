/* This example requires Tailwind CSS v2.0+ */
import { Pagination } from '@/components/Pagination'
import http from '@/utils/axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
const payments = [
  // {
  //   id: 1,
  //   date: '1/1/2020',
  //   datetime: '2020-01-01',
  //   description: 'Business Plan - Annual Billing',
  //   amount: '$109.00',
  //   href: '#',
  // },
  // More payments...
]
// {
//   "id": 9,
//   "uid": 3,
//   "link_id": "17",
//   "pm": 1,
//   "title": "下单赠送积分",
//   "category": "积分",
//   "type": "1",
//   "number": 99,
//   "balance": 1,
//   "add_time": 1673102450,
//   "status": 1
// }
export function Billings() {
  const [bills, setBills] = useState(payments)
  useEffect(() => {
    http.get('/users/bills').then(( bills ) => {
      // http.get('/users/bills/info/' + 8).then(res => {
      //   console.log(res)
      // })
      setBills(
        bills.map(({ title, number, balance, add_time, link_id }) => ({
          description: title,
          amount: number * balance,
          date: dayjs.unix(add_time).format('DD/MM/YYYY'),
          href: `/orderdetail?orderId=${link_id}`,
        }))
      )
    })
  }, [])

  return (
    <div className="px-4 sm:px-6">
      {/* Billing history */}
      <section aria-labelledby="billing-history-heading">
        <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
          <div className="px-4 sm:px-6">
            <h2
              id="billing-history-heading"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Billing history
            </h2>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-t border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          Amount
                        </th>
                        {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                        <th
                          scope="col"
                          className="relative px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          <span className="sr-only">View receipt</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {bills.map((payment) => (
                        <tr key={payment.id}>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            <time dateTime={payment.datetime}>
                              {payment.date}
                            </time>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {payment.description}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {payment.amount}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <a
                              href={payment.href}
                              className="text-orange-600 hover:text-orange-900"
                            >
                              View receipt
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination />
    </div>
  )
}
