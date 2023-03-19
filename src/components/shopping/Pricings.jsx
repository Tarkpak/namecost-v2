/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const initTiers = [
  {
    name: 'Advanced',
    href: '#',
    priceMonthly: 0,
    description: 'For newbies and small teams.Appropriate limitations',
    includedFeatures: [
      'All free tools and All datas',
      'Bulk domain check 10,000/Month',
      'Domains monitoring up to 1/Day',
    ],
  },
  {
    name: 'Pro',
    href: '#',
    priceMonthly: 119,
    description: 'Most Popular! Best for domain investors',
    includedFeatures: [
      'All free tools and All datas',
      'Bulk domain check 1,000,000/Month',
      'Domains monitoring up to 1,000/Day',
      'Results download',
      'API included',
    ],
  },
  {
    name: 'Guru',
    href: '#',
    priceMonthly: 229,
    description: 'For agencies and mid-size businesses',
    includedFeatures: [
      'All free tools and All datas',
      'Bulk domain check 3,000,000/Month',
      'Domains monitoring up to 3,000/Day',
      'Additional users + $80/mo per user',
      'Results download',
      'API included',
    ],
  },
  {
    name: 'Business',
    href: '#',
    priceMonthly: 449,
    description: 'For large agencies and enterprises. API Included',
    includedFeatures: [
      'All free tools and All datas',
      'Bulk domain check 10,000,000/Month',
      'Domains monitoring up to 10,000/Day',
      'Brands monitoring 100/Month',
      'Additional users + $80/mo per user',
      'Results download',
      'API included',
    ],
  },
]

export function Pricings() {
  const [plan, setPlan] = useState('month')
  const [tiers] = useState(initTiers.map(item => {
    item.price = plan === 'month' ? item.priceMonthly : Math.round(item.priceMonthly * 0.836)
    return item
  }
  ))
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Plans & Pricing</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Get <span className="font-semibold text-gray-700 text-2xl">$28</span> credits monthly when you post at least 1 related article ( no less than 500 words ) monthly.
          </p>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className={`${plan === 'month' ? 'bg-white' : ''} focus:ring-0 relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-900 whitespace-nowrap  sm:w-auto sm:px-8`}
              onClick={() => setPlan('month')}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`${ plan === 'year' ? 'bg-white' : ''} focus:ring-0 ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap   sm:w-auto sm:px-8`}
              onClick={() => setPlan('year')}
            >
              Yearly billing
              <span className="navshow nav-orange-color nav-r-9p">Save up to 17%</span>
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white transform motion-safe:hover:scale-110 border border-gray-200 rounded-lg shadow-xl divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-price-green rounded-md py-2.5 text-md font-medium text-white text-center"
                >
                  Get {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-2">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
