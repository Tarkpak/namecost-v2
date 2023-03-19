/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import {  TrashIcon,CurrencyDollarIcon } from '@heroicons/react/solid'

const mypaymentMethods = [
  { id: 'credits', types: 'Credits',no:'',expired:'' ,score:'500' ,default: 'Default' },
  { id: 'credit-card', types:'Visa',no:'XXXX XXXX XXXX 1234',expired:'09/2026',default: 'Default' },
  { id: 'paypal', types:'PayPal',no:'info@abcd.com',expired:'',default: '' },
  { id: 'crypto', types: 'USDT',no:'19dENFt4wVwos6xtgwStA6n8bbA57WCS58',expired:'',default: '' },
]

export function PaymentMethods() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(mypaymentMethods[0])
    return (
      <div className="">
        <div className="">
          <div className="">
          {/* Payment */}
          <div className="">
              <RadioGroup value={selectedPaymentMethod} onChange={setSelectedPaymentMethod}>
                <RadioGroup.Label className="text-lg font-medium text-gray-900 mb-8"><h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight pb-4"><CurrencyDollarIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" /> <span>Payment method</span></h3></RadioGroup.Label>

                <div className="grid gap-y-4 mt-4">
                  {mypaymentMethods.map((mypaymentMethod) => (
                    <RadioGroup.Option
                      key={mypaymentMethod.id}
                      value={mypaymentMethod}
                      className="relative bg-gray-50 rounded-lg shadow-sm p-4"
                    >


                          <span className="">
                            <span className="grid grid-cols-12 w-full">
                              <RadioGroup.Label as="span" className="block text-sm font-semibold text-green-800 col-span-12 sm:col-span-2">
                                {mypaymentMethod.types}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="text-sm text-gray-500 col-span-12 sm:col-span-4"
                              >
                                {mypaymentMethod.no}{mypaymentMethod.score ? <span className="text-green-500 font-bold sm:mx-12">{mypaymentMethod.score}</span>:null}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="text-sm text-gray-500 col-span-12 sm:col-span-2">
                                {mypaymentMethod.expired}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="text-sm font-medium text-gray-900 col-span-12 sm:col-span-2 sm:place-self-center">
                                {mypaymentMethod.default ?
                                  <span className="text-gray-500">{mypaymentMethod.default}</span>
                                :
                                  <button className="motion-safe text-gray-300 hover:text-green-700 hover:font-bold transform motion-safe:hover:scale-115">Set Default</button>
                                }
                              </RadioGroup.Description >
                              <RadioGroup.Description as="span" className="text-sm font-medium text-gray-900 col-span-12 sm:col-span-2 sm:place-self-center">
                                {
                                mypaymentMethod.default ? null : <button className=""> <TrashIcon className="h-5 w-5 text-gray-300 motion-safe hover:text-red-500 hover:font-bold transform motion-safe:hover:scale-115" aria-hidden="true" /> </button>
                                }
                              </RadioGroup.Description >
                            </span>
                          </span>


                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    )
  }
  