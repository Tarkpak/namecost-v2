/*
  This example requires Tailwind CSS v2.0+ 
*/
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]
const discount = { code: 'CHEAPSKATE', amount: '$16.00' }
const mypaymentMethods = [
  { id: 'credits', types: 'Credits',no:'',expired:'' ,score:'500' ,default: 'Default' },
  { id: 'credit-card', types:'Visa',no:'XXXX XXXX XXXX 1234',expired:'09/2026', score:'',default: 'Default' },
  { id: 'paypal', types:'PayPal',no:'info@abcd.com',expired:'', score:'',default: '' },
  { id: 'crypto', types: 'USDT',no:'01xags8fus9fs09sdgfsdf645', score:'',expired:'',default: '' },
]

const address = [
  {name:"Name",text:"test1"},
  {name:"Address",text:"test1"},
  {name:"Email",text:"test1"},
  {name:"City,State/Province,Zip",text:"test1"},
  {name:"Phone",text:"test1"},
  {name:"Country",text:"test1"},
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Checkouts() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(mypaymentMethods[0])

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>

          {/* Payment */}
          <div className="">
              <RadioGroup value={selectedPaymentMethod} onChange={setSelectedPaymentMethod}>
                <RadioGroup.Label className="text-lg font-medium text-gray-900 mb-8">Payment method</RadioGroup.Label>

                <div className="grid gap-y-4 mt-4">
                  {mypaymentMethods.map((mypaymentMethod) => (
                    <RadioGroup.Option
                      key={mypaymentMethod.id}
                      value={mypaymentMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'ring-6 ring-mygreen-500' : '',
                          'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex-1 flex">
                            <span className="flex justify-between space-x-4 md:space-x-8 align-center">
                              <RadioGroup.Label as="span" className="block text-sm font-semibold text-gray-900">
                                {mypaymentMethod.types}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="flex items-center text-sm text-gray-500"
                              >
                                {mypaymentMethod.no}{mypaymentMethod.score ? <span className="text-green-500 font-bold sm:mx-12">{mypaymentMethod.score}</span>:null}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="text-sm text-gray-500">
                                {mypaymentMethod.expired}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="text-sm font-medium text-gray-900">
                                {mypaymentMethod.score ? <span className="text-gray-300 font-bold">{mypaymentMethod.default}</span> : mypaymentMethod.default}
                              </RadioGroup.Description>
                            </span>
                          </span>
                          {checked ? <CheckCircleIcon className="h-5 w-5 text-mygreen-700" aria-hidden="true" /> : null}
                          <span
                            className={classNames(
                              active ? 'border-2' : 'border-2',
                              checked ? 'border-mygreen-500' : 'border-transparent',
                              'absolute -inset-px rounded-lg pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            

              {/* Billing Address */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Billing Address</h2>

              <div className="mt-4 grid grid-cols-2 gap-y-2 sm:gap-x-4">
              {address.map((addr) => (
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  {addr.name}
                  </label>
                  <span className="text-xs text-gray-400">{addr.text}</span>
                </div>
             ))}



              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img src={product.imageSrc} alt={product.imageAlt} className="w-20 rounded-md" />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                        </div>

                        <div className="ml-4 flex-shrink-0 flow-root">
                          <button
                            type="button"
                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>

                        <div className="ml-4">
                          <label htmlFor="quantity" className="sr-only">
                            Quantity
                          </label>
                          <select
                            id="quantity"
                            name="quantity"
                            className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:border-mygreen-500 focus:border-mygreen-500 sm:text-sm"
                          >
                            <option value={1}>1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">


                    <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-gray-700">
                      Discount code
                    </label>
                    <div className="flex space-x-4 mt-1">
                      <input
                        type="text"
                        id="discount-code-mobile"
                        name="discount-code-mobile"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-mygreen-500 focus:border-mygreen-500 sm:text-sm"
                      />
                      <button
                        type="submit"
                        className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300"
                      >
                        Apply
                      </button>
                    </div>


                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Taxes</dt>
                  <dd className="text-sm font-medium text-gray-900">$6.40</dd>
                </div>
                <div className="flex justify-between">
                      <dt className="flex text-sm">
                        Discount
                        <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                          {discount.code}
                        </span>
                      </dt>
                      <dd className="text-sm font-semibold text-green-600">-{discount.amount}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Credits Use</dt>
                  <dd className="text-sm font-semibold text-green-600">-$50.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">$0.00</dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  type="submit"
                  className="w-full bg-myred-500 rounded-md shadow-sm py-3 px-4 text-base font-medium text-white"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
