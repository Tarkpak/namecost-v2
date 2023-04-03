/* This example requires Tailwind CSS v2.0+ */
import http from '@/utils/axios'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'
import { useState } from 'react'


const postUserPayment = (data) => http.post('/users/payments', data)

const faqs = [
  {
    question: 'Add New Payment',
  },
  // More questions...
]
const paymentMethods = [
  {
    id: 'credit-card',
    title: 'Credit Card',
  },
  {
    id: 'paypal',
    title: 'PayPal',
  },
  {
    id: 'crypto',
    title: 'Crypto',
  },
]

const CreditCard = (props) => {
  const [form, setForm] = useState({
    payment_type: 1,
    account: '',
    card_number: '',
    exp_year: '',
    exp_month: '',
    cvv: ''
  })
  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
    props.formChange({name, value})
  }

  const handlePost = () => {
    postUserPayment(form).then(res => {
      location.reload()
    })
  }

  return (
    <div className="mt-6 grid grid-cols-6 gap-y-6 gap-x-4">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="name-on-card"
          className="block text-sm font-medium text-gray-700"
        >
          Name on card
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="name-on-card"
            name="account"
            autoComplete="cc-name"
            className="focus:ring-mygreen-500 focus:border-mygreen-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
            value={form.account}
            onInput={handleChange}
          />
        </div>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="card-number"
          className="block text-sm font-medium text-gray-700"
        >
          Card number
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="card-number"
            name="card_number"
            autoComplete="cc-number"
            className="focus:ring-mygreen-500 focus:border-mygreen-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
            value={form.card_number}
            onInput={handleChange}
          />
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor="expiration-date"
          className="block text-sm font-medium text-gray-700"
        >
          Expiration month
        </label>
        <div className="mt-1">
          <select
            id="expmonth"
            name="exp_month"
            autoComplete="country-name"
            defaultValue="United States"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={form.exp_month}
            onInput={handleChange}
          >
            <option value=""></option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor="expiration-date"
          className="block text-sm font-medium text-gray-700"
        >
          Expiration year
        </label>
        <div className="mt-1">
          <select
            id="expmonth"
            name="exp_year"
            autoComplete="country-name"
            defaultValue="United States"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={form.exp_year}
            onInput={handleChange}
          >
            <option value=""></option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
          </select>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor="cvv"
          className="block text-sm font-medium text-gray-700"
        >
          CVV
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="cvv"
            id="cvc"
            autoComplete="csc"
            className="focus:ring-mygreen-500 focus:border-mygreen-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
            value={form.cvv}
            onInput={handleChange}
          />
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 col-span-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700"
          onClick={handlePost}
        >
          Add Credit Card
        </button>
      </div>
    </div>
  )
}

const Paypal = () => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
      <div className="border border-gray-300 bg-gray-50 text-center col-span-4 hover:bg-gray-100">
        <form>
          <button className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
	            <path d="M58.505 27.333c0 1.64-.675 2.96-2.034 3.964S53.215 32.8 50.78 32.8h-1.35l-1.037 4.478H44.83l3.176-13.756h4.944c.9 0 1.68.064 2.348.185s1.246.338 1.73.635a3.08 3.08 0 0 1 1.101 1.174c.25.498.378 1.1.378 1.817zm-3.787.346c0-.54-.193-.933-.587-1.2s-.965-.386-1.73-.386h-1.43l-.95 4.116h1.28c1.077 0 1.92-.217 2.516-.66.603-.442.9-1.07.9-1.88zm10.34 8.506l-.756.5c-.297.193-.57.346-.82.458a6.17 6.17 0 0 1-.973.322c-.306.072-.724.113-1.254.113-.86 0-1.568-.24-2.114-.724s-.82-1.118-.82-1.9c0-.82.193-1.5.58-2.082s.965-1.03 1.73-1.367c.716-.322 1.568-.555 2.55-.7l3.208-.314.04-.177c.024-.08.032-.177.032-.28a.93.93 0 0 0-.6-.917c-.4-.177-1.013-.265-1.817-.265-.547 0-1.15.088-1.817.273l-1.487.458h-.306l.5-2.46c.386-.096 1-.2 1.8-.33s1.624-.185 2.428-.185c1.624 0 2.822.2 3.578.635.764.426 1.142 1.085 1.142 1.978a4.1 4.1 0 0 1-.032.482 3.62 3.62 0 0 1-.088.515l-1.624 7.06h-3.304zm.884-3.795l-1.672.177a6.27 6.27 0 0 0-1.327.297c-.378.137-.667.33-.86.57-.2.25-.297.57-.297.98 0 .354.13.6.394.756s.643.217 1.15.217c.33 0 .675-.072 1.053-.225a5.11 5.11 0 0 0 1.053-.58zm9.038 8.7h-3.66l2.645-4.012-1.704-10.162h3.4l.9 6.794 3.947-6.794h3.513z" fill="#123984"/>
	            <path d="M97.32 27.333c0 1.64-.675 2.96-2.034 3.964S92.03 32.8 89.595 32.8h-1.35l-1.037 4.478h-3.562l3.168-13.748h4.944c.9 0 1.68.064 2.348.185s1.246.338 1.73.635a3.08 3.08 0 0 1 1.101 1.174c.257.5.386 1.093.386 1.8zm-3.795.346c0-.54-.193-.933-.587-1.2s-.965-.386-1.73-.386h-1.43l-.95 4.116h1.278c1.077 0 1.92-.217 2.516-.66.603-.442.9-1.07.9-1.88zm10.348 8.506l-.756.5c-.297.193-.57.346-.82.458a6.17 6.17 0 0 1-.973.322c-.306.072-.724.113-1.254.113-.86 0-1.568-.24-2.114-.724s-.82-1.118-.82-1.9c0-.82.193-1.5.58-2.082s.965-1.03 1.73-1.367c.716-.322 1.568-.555 2.55-.7l3.208-.314.04-.177c.024-.08.032-.177.032-.28a.93.93 0 0 0-.6-.917c-.4-.177-1.013-.265-1.817-.265-.547 0-1.15.088-1.817.273l-1.487.458h-.306l.5-2.46c.386-.096 1-.2 1.8-.33s1.624-.185 2.428-.185c1.624 0 2.822.2 3.578.635.764.426 1.142 1.085 1.142 1.978a4.1 4.1 0 0 1-.032.482 3.62 3.62 0 0 1-.088.515l-1.624 7.06h-3.312zm.884-3.795l-1.672.177a6.27 6.27 0 0 0-1.327.297c-.378.137-.667.33-.86.57-.2.25-.297.57-.297.98 0 .354.13.6.394.756s.643.217 1.15.217c.33 0 .675-.072 1.053-.225a5.11 5.11 0 0 0 1.053-.58zm11.875-9.48l-3.32 14.375h-3.345l3.32-14.375z" fill="#009de2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
const Crypto = (props) => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
      <div>crypto</div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function AddPayments() {
  const [select, setSelect] = useState('credit-card')
  const formChange = form => {
    console.log(form)
  }
  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight pb-4"><PlusIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" /> <span>{faq.question}</span></h3>
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12" static>
                      <div className="">
                        <fieldset className="mt-4">
                          <legend className="sr-only">Payment method</legend>
                          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                            {paymentMethods.map(
                              (paymentMethod, paymentMethodIdx) => (
                                <div
                                  key={paymentMethod.id}
                                  className="flex items-center"
                                >
                                  <input
                                    id={paymentMethod.id}
                                    name="payment-type"
                                    type="radio"
                                    checked={select === paymentMethod.id}
                                    onChange={(e) => {
                                      setSelect(e.target.id)
                                    }}
                                    className="focus:ring-mygreen-500 text-mygreen-700 h-4 w-4 border-gray-300"
                                  />
                                  <label
                                    htmlFor={paymentMethod.id}
                                    className="ml-3 block text-sm font-medium text-gray-700"
                                  >
                                    {paymentMethod.title}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </fieldset>
                        {select === 'credit-card' && <CreditCard formChange={ formChange  } />}
                        {select === 'paypal' && <Paypal />}
                        {select === 'crypto' && <Crypto />}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
