/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import {
  CheckCircleIcon,
  TrashIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/solid'
import http from '@/utils/axios'

const paymentMethods = [
  // {
  //   id: 'credits',
  //   types: 'Credits',
  //   no: '',
  //   expired: '',
  //   score: '500',
  //   default: 'Default',
  // },
  // {
  //   id: 'credit-card',
  //   types: 'Visa',
  //   no: 'XXXX XXXX XXXX 1234',
  //   expired: '09/2026',
  //   default: 'Default',
  // },
  // {
  //   id: 'paypal',
  //   types: 'PayPal',
  //   no: 'info@abcd.com',
  //   expired: '',
  //   default: '',
  // },
  // {
  //   id: 'crypto',
  //   types: 'USDT',
  //   no: '19dENFt4wVwos6xtgwStA6n8bbA57WCS58',
  //   expired: '',
  //   default: '',
  // },
]
//1是card、2是pp、3是ustd
const typeMap = {
  1: 'Visa',
  2: 'Paypal',
  3: 'USDT',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const getUserPayments = () => http.get('/users/payments')
const postDefaultPayment = (id) =>
  http.post('/users/payments/set-default/' + id)

export function PaymentMethods() {
  const [mypaymentMethods, setMypaymentMethods] = useState(paymentMethods)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    mypaymentMethods[0]
  )
  const init = () => {
    getUserPayments().then(( payments ) => {
      const payMents = payments.map(
        ({
          id,
          payment_type,
          card_number,
          exp_month = '',
          exp_year = '',
          is_default = '',
        }) => ({
          id,
          types: typeMap[payment_type],
          no: card_number,
          expired: exp_year && `${exp_month}/${exp_year}`,
          default: is_default,
        })
      )
      setMypaymentMethods(payMents)
    })
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <div className="">
      <div className="">
        <div className="">
          {/* Payment */}
          <div className="">
            <RadioGroup
              value={selectedPaymentMethod}
              onChange={setSelectedPaymentMethod}
            >
              <RadioGroup.Label className="mb-8 text-lg font-medium text-gray-900">
                <h3 className="pb-4 text-xl font-semibold text-orange-500 sm:tracking-tight">
                  <CurrencyDollarIcon
                    className="text-mygreen-500 h-6 w-6"
                    aria-hidden="true"
                  />{' '}
                  <span>Payment method</span>
                </h3>
              </RadioGroup.Label>

              <div className="mt-4 grid gap-y-4">
                {mypaymentMethods.map((mypaymentMethod) => (
                  <RadioGroup.Option
                    key={mypaymentMethod.id}
                    value={mypaymentMethod}
                    className="relative rounded-lg bg-gray-50 p-4 shadow-sm"
                  >
                    <span className="">
                      <span className="grid w-full grid-cols-12">
                        <RadioGroup.Label
                          as="span"
                          className="col-span-12 block text-sm font-semibold text-green-800 sm:col-span-2"
                        >
                          {mypaymentMethod.types}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className="col-span-12 text-sm text-gray-500 sm:col-span-4"
                        >
                          {mypaymentMethod.no}
                          {mypaymentMethod.score ? (
                            <span className="font-bold text-green-500 sm:mx-12">
                              {mypaymentMethod.score}
                            </span>
                          ) : null}
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          as="span"
                          className="col-span-12 text-sm text-gray-500 sm:col-span-2"
                        >
                          {mypaymentMethod.expired}
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          as="span"
                          className="col-span-12 text-sm font-medium text-gray-900 sm:col-span-2 sm:place-self-center"
                        >
                          {mypaymentMethod.default ? (
                            <span className="text-gray-500">
                              {/* {mypaymentMethod.default} */}
                              default
                            </span>
                          ) : (
                            <button
                              className="motion-safe motion-safe:hover:scale-115 transform text-gray-300 hover:font-bold hover:text-green-700"
                              onClick={() => {
                                postDefaultPayment(mypaymentMethod.id).then(
                                  (res) => {
                                    init()
                                  }
                                )
                              }}
                            >
                              Set Default
                            </button>
                          )}
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          as="span"
                          className="col-span-12 text-sm font-medium text-gray-900 sm:col-span-2 sm:place-self-center"
                        >
                          {mypaymentMethod.default ? null : (
                            <button
                              className=""
                              onClick={() => {
                                http
                                  .delete(
                                    '/users/payments/' + mypaymentMethod.id
                                  )
                                  .then((res) => {
                                    init()
                                  })
                              }}
                            >
                              {' '}
                              <TrashIcon
                                className="motion-safe motion-safe:hover:scale-115 h-5 w-5 transform text-gray-300 hover:font-bold hover:text-red-500"
                                aria-hidden="true"
                              />{' '}
                            </button>
                          )}
                        </RadioGroup.Description>
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
