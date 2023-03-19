/*
  This example requires Tailwind CSS v2.0+ 
*/
import {  useState } from 'react'
import {  RadioGroup, Switch } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'



const plans = [
  { name: 'Pro', priceMonthly: 119, priceYearly: 1188, limit: 'Up to 5 active job postings' },
  { name: 'Guru', priceMonthly: 229, priceYearly: 2292, limit: 'Up to 25 active job postings' },
  { name: 'Business', priceMonthly: 449, priceYearly: 4500, limit: 'Unlimited active job postings' },
]

const myplan =
  {name:'Free Plan',
  desc:'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
  feature:
  [
    {title:'Private forum access'},
    {title:'Member resources'},
    {title:'Entry to annual conference'},
    {title:'Official member t-shirt'},
  ],
  price:349,
  }


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1])
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full bg-gray-100">
        <body className="h-full">
        ```
      */}
      <div className="h-full">
        <main className="max-w-7xl mx-auto pb-10 lg:px-8">
          {/* Plan */}
          <div className="">
            <div className="">
              <div className="relative">
                <div className="absolute inset-0 h-1/2 "></div>
                <div className="relative max-w-7xl mx-auto">
                  <div className="max-w-lg mx-auto py-6 sm:p-6 sm:rounded-md shadow overflow-hidden lg:max-w-none lg:flex sm:space-x-4">
                    <div className="flex-1 px-4 sm:px-0">
                      <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight"><UserCircleIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" /> <span>{myplan.name}</span></h3>
                      <p className="mt-6 text-base text-gray-500">{myplan.desc}</p>
                      <div className="mt-8">
                        <div className="flex items-center">
                          <h4 className="flex-shrink-0 pr-4 bg-white text-base font-semibold text-orange-500">What's included</h4>
                          <div className="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                          {myplan.feature.map((funcs) => (
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm text-gray-700">{funcs.title}</p>
                          </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                      <div className="lg:place-self-center">
                      <p className="text-lg leading-6 font-semibold text-mygreen-500">Pricing Monthly</p>
                      <div className="mt-4 flex items-center justify-center text-5xl tracking-tight font-bold text-orange-700">
                       <span> ${myplan.price} </span>
                        <span className="ml-3 text-xl font-medium text-orange-600 tracking-normal"> USD </span>
                      </div>
                      <p className="mt-4 text-sm">
                        <a href="/pricing" className="font-medium text-gray-400 underline"> Learn about our membership policy </a>
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="lg:grid  lg:gap-x-5 mt-8">

            {/* Payment details */}
            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">


              {/* Plan */}
              <section aria-labelledby="plan-heading">
                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h2 id="plan-heading" className="text-lg leading-6 font-medium text-gray-900">
                          Update Plan
                        </h2>
                      </div>

                      <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                        <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
                        <div className="relative bg-white rounded-md -space-y-px">
                          {plans.map((plan, planIdx) => (
                            <RadioGroup.Option
                              key={plan.name}
                              value={plan}
                              className={({ checked }) =>
                                classNames(
                                  planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                  planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                  checked ? 'bg-orange-50 border-orange-200 z-10' : 'border-gray-200',
                                  'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <span className="flex items-center text-sm">
                                    <span
                                      className={classNames(
                                        checked ? 'bg-orange-500 border-transparent' : 'bg-white border-gray-300',
                                        active ? 'ring-2 ring-offset-2 ring-gray-900' : '',
                                        'h-4 w-4 rounded-full border flex items-center justify-center'
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <RadioGroup.Label as="span" className="ml-3 font-medium text-gray-900">
                                      {plan.name}
                                    </RadioGroup.Label>
                                  </span>
                                  <RadioGroup.Description
                                    as="span"
                                    className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                                  >
                                    <span
                                      className={classNames(
                                        checked ? 'text-orange-900' : 'text-gray-900',
                                        'font-medium'
                                      )}
                                    >
                                      ${plan.priceMonthly} / mo
                                    </span>{' '}
                                    <span className={checked ? 'text-orange-700' : 'text-gray-500'}>
                                      (${plan.priceYearly} / yr)
                                    </span>
                                  </RadioGroup.Description>
                                  <RadioGroup.Description
                                    as="span"
                                    className={classNames(
                                      checked ? 'text-orange-700' : 'text-gray-500',
                                      'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                                    )}
                                  >
                                    {plan.limit}
                                  </RadioGroup.Description>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>

                      <Switch.Group as="div" className="flex items-center">
                        <Switch
                          checked={annualBillingEnabled}
                          onChange={setAnnualBillingEnabled}
                          className={classNames(
                            annualBillingEnabled ? 'bg-orange-500' : 'bg-gray-200',
                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              annualBillingEnabled ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 mt-0.5'
                            )}
                          />
                        </Switch>
                        <Switch.Label as="span" className="ml-3">
                          <span className="text-sm font-medium text-gray-900">Annual billing </span>
                          <span className="text-sm text-gray-500">(Save up to 17%)</span>
                        </Switch.Label>
                      </Switch.Group>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-myred-500 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
