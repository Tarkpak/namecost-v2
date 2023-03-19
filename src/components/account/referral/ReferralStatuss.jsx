/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon,CalculatorIcon } from '@heroicons/react/solid'
import { SelectMonth } from '@/components/common/SelectMonth'
import { SelectYear } from '@/components/common/SelectYear'
const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ReferralStatuss() {
  return (
    <div className="mb-12">
      <form method="post" className="items-center lg:mb-8 sm:mt-0 sm:flex-none  grid md:grid-cols-2">
        <div><h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight px-4"><CalculatorIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" /> <span>This Month</span></h3></div>
        <div className="sm:space-x-4 justify-self-end">
          <select
            id="expmonth"
            name="expmonth"
            autoComplete="country-name"
            defaultValue="United States"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 border-transparent  px-12 py-2 text-sm font-medium  shadow-sm sm:w-auto text-gray-500 ring-0"
          >
            <SelectMonth />
          </select>

          <select
            id="expmonth"
            name="expmonth"
            autoComplete="country-name"
            defaultValue="United States"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 border-transparent  px-12 py-2 text-sm font-medium  shadow-sm sm:w-auto text-gray-500 ring-0"
          >
            <SelectYear />
          </select>

          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500">Apply</button>
        </div>
      </form>
      
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>


    </div>
  )
}
