/* This example requires Tailwind CSS v2.0+ */
import http from '@/utils/axios'
import { CheckIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

const initTiers = [
  {
    name: 'Advanced',
    href: '#',
    priceMonthly: 29,
    description: 'For newbies and small teams.Appropriate limitations',
    includedFeatures: [
      '100 pages per hour',
      '100 results per report',
      'Results download',
      'Max to 10 domains monitoring',
    ],
  },
  {
    name: 'Pro',
    href: '#',
    priceMonthly: 119,
    description: 'Most Popular! Best for domain investors',
    includedFeatures: [
      '200 pages per hour',
      '200 results per report',
      'Results download',
      'Max to 100 domains monitoring',
    ],
  },
  {
    name: 'Guru',
    href: '#',
    priceMonthly: 229,
    description: 'For agencies and mid-size businesses',
    includedFeatures: [
      '500 pages per hour',
      '500 results per report',
      'Results download',
      'Max to 1,000 domains monitoring',
      'Job queue included',
      'Additional users + $80/mo per user',
    ],
  },
  {
    name: 'Business',
    href: '#',
    priceMonthly: 449,
    description: 'For large agencies and enterprises. API Included',
    includedFeatures: [
      '1,000 pages per hour',
      '1,000 results per report',
      'Results download',
      'Max to 10,000 domains monitoring',
      'Max to 100 brands monitoring',
      'API included',
      'Job queue included',
      'Additional users + $100/mo per user',
    ],
  },
]

const postCart = (product_id) => {
  return http.post('/carts', { product_id })
}

export function Pricings() {
  const router = useRouter()
  const [plan, setPlan] = useState('month')
  const [products, setProducts] = useState(initTiers)
  useMemo(() => {}, [])
  const [tiers] = useMemo(
    () => [
      products.map((item) => {
        item.price =
          plan === 'month'
            ? item.priceMonthly
            : Math.round(item.priceMonthly * 0.836)
        return item
      }),
    ],
    [products, plan]
  )
  useEffect(() => {
    http.get('/products').then((products) => {
      const filterProducts = products.map(
        ({ store_name, store_info, price, id, edges }) => ({
          id,
          href: `/cart?id=${id}`,
          name: store_name,
          description: store_info,
          priceMonthly: price,
          includedFeatures: edges.strore_product_attr?.map(
            (item) => item.attr_values
          ),
        })
      )
      setProducts(filterProducts)
    })
  }, [])

  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            Plans & Pricing
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Get{' '}
            <span className="text-2xl font-semibold text-gray-700">$28</span>{' '}
            credits monthly when you post at least 1 related article ( no less
            than 500 words ) monthly.
          </p>
          <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button
              type="button"
              className={`${
                plan === 'month' ? 'bg-white' : ''
              } relative w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium text-gray-900 focus:ring-0  sm:w-auto sm:px-8`}
              onClick={() => setPlan('month')}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`${
                plan === 'year' ? 'bg-white' : ''
              } relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:ring-0   sm:w-auto sm:px-8`}
              onClick={() => setPlan('year')}
            >
              Yearly billing
              <span className="navshow nav-orange-color nav-r-9p">
                Save up to 17%
              </span>
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="transform divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-xl motion-safe:hover:scale-110"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.price}
                  </span>{' '}
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <a
                  onClick={async () => {
                    const id = tier.id
                    const { carts } = await postCart(id)
                    router.push(`/checkout?cartId=${carts.id}`)
                  }}
                  className="bg-price-green text-md mt-8 block w-full rounded-md py-2.5 text-center font-medium text-white"
                >
                  Get {tier.name}
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-900">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {tier.includedFeatures?.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
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
