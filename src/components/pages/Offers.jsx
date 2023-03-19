/*
  This example requires Tailwind CSS v2.0+ 
*/
import { CheckCircleIcon} from '@heroicons/react/solid'
import { ClockIcon,CreditCardIcon,CheckIcon} from '@heroicons/react/outline'
import {  useState } from 'react'
import {  RadioGroup } from '@headlessui/react'
import { Faqs } from '@/components/pages/SellFaqs'
import { EscrowImage } from '@/components/common/EscrowImage'

const InputPrice = ({plan}) => {
  return (
    plan.name === 'Make An Offer' && <input
    id='inputprice'
    name='inputprice'
    defaultValue={500}
    min={500}
    max={2500}
    type='number'
    className='text-green-600 h-12 w-20 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'

  />
  )
}

const plans = [
  { name: 'Buy It Now', priceMonthly: () => '$1,499',   },
  { name: 'Make An Offer', priceMonthly: plan => <InputPrice plan={ plan } />, },

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const domains = [
  {id:1,
    name:'symbolics.com',
    reg_is:'Network Solutions, LLC',

  }
  // More people...
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
  
  }



export function Offers() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  return (
    <div className="pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:grid lg:grid-cols-3 mx-4 xl:mx-0 bg-white rounded-md">  
          <div className="col-span-2 px-6 lg:px-12 pb-12 pt-6">
            <div className="text-4xl lg:ml-4 font-semibold">
              <span className="text-green-600 ">{domains[0]['name']}</span><span className=" text-gray-500"> is for sale</span>
            </div>
            <div className=" border-b pb-16  ">
              <div className="py-24 bg-sell-banner text-4xl text-center font-bold text-white rounded-t-lg">
                {domains[0]['name']}
              </div>

              <ul role="list" className="py-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 bg-gray-50 rounded-b-lg shadow-sm">
                          {myplan.feature.map((funcs) => (
                          <li className="flex items-start lg:col-span-1 px-4">
                            <div className="flex-shrink-0">
                              <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm text-gray-700">{funcs.title}</p>
                          </li>
                          ))}
              </ul>

            </div>
            <div className="py-8">
              <div className="pb-4">
                <span className="text-2xl font-bold">We've got your back</span>
              </div>
              
              <div className="flex">
                <div className="pr-4 py-2">
                  <ClockIcon  className="h-8 w-8 text-gray-600" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-lg py-2 text-gray-600">Fast & easy transfers</div>
                  <div>98% of all domain ownership transfers are completed within 24 hours. The seller first delivers the domain to us, then we send you your tailored transfer instructions. Need help? Our domain ownership transfer specialists will assist you at no additional cost.</div>
                </div>
              </div>

              <div className="flex">
                <div className="pr-4 py-2">
                  <CreditCardIcon  className="h-8 w-8 text-gray-600" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-lg py-2 text-gray-600">Hassle free payments</div>
                  <div>Pay by bank wire  or use one of the most popular payment options available through our payment processor, Escrow.com. Escrow.com is the payment platform of choice for many leading tech companies.</div>
                </div>
              </div>

            </div>

            <div className="py-8">
              <div className="pb-2">
                <span className="text-2xl font-bold">We get these questions a lot</span>
              </div>
              <span>Your burning questions about domain sales, answered.</span>
              <Faqs />


            </div>



          </div>
          <div className="pt-12 w-full lg:h-screen">



              <div className="rounded-md shadow-2xl mr-8  mt-8 sticky top-0">
              <div className=" p-8">
                <span className="text-2xl font-semibold text-gray-500">Get this domain</span>
              </div>
              <div className="text-xs text-gray-500  pb-4 px-8">
                <span>Pay the full USD $3,000 now, or make an offer.</span>
              </div>

              {/* Plan */}
              <section aria-labelledby="plan-heading px-2">
                <form action="#" method="POST">
                  <div className="shadow  sm:overflow-hidden">
                    <div className=" space-y-6 ">


                      <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                        <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
                        <div className="relative bg-white rounded-md space-y-px divide-gray-100 divide-y">
                          {plans.map((plan, planIdx) => (
                            <RadioGroup.Option
                              key={plan.name}
                              value={plan}
                              className={({ checked }) =>
                                classNames(
                                  checked ? 'bg-blue-50  z-10' : '',
                                  'relative  px-8 py-6  flex flex-col cursor-pointer  md:grid md:grid-cols-3 focus:outline-none'
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <span className="flex items-center font-bold text-xl col-span-2">
                                    <span
                                      className={classNames(
                                        checked ? 'bg-green-700 border-transparent ring-2 ring-offset-2 ring-green-700' : 'bg-white  ring-2 ring-offset-2 ring-gray-700',
                                        active ? 'ring-2 ring-offset-2 ring-green-700' : '',
                                        'h-4 w-4 rounded-full  flex items-center justify-center'
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
                                    className="ml-6 pl-1 font-bold text-xl md:ml-0 md:pl-0 md:text-center"
                                  >
                                    <span
                                      className={classNames(
                                        checked ? 'text-green-600 font-semibold' : 'text-green-500',
                                        'font-medium'
                                      )}
                                    >
                                      {plan.priceMonthly(selectedPlan)} 
                                    </span>{' '}

                                  </RadioGroup.Description>

                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>

                    </div>
                    <div className="px-4 py-6  text-right sm:px-6 border-t border-b border-gray-200">
                      <button
                        type="submit"
                        className="bg-buy rounded-md shadow-sm py-4 px-8 inline-flex justify-center text-md w-full font-bold "
                      >
                        Next →
                      </button>
                    </div>
                    <div className="pt-4 px-8">
                      <div><span className="text-green-500 font-semibold"><CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" /> Free </span><span>Ownership transfer</span></div>
                      <div><span className="text-green-500 font-semibold"><CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" /> Free </span><span>Transaction support</span></div>
                      <div><span className="text-green-500 font-semibold"><CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" /> </span><span>Secure payments</span></div>
                    </div>
                    <div className="p-8">
                    <EscrowImage />
                    </div>
                    
                  </div>
                </form>
              </section>

              </div>
            </div>

          {/* ---------------Right End--------------------------*/}
        </div>

      </div>
    </div>
  )
}
  