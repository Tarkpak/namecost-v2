/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

function f1 (){
  return (
    <>
      <div>
        <ul className="space-y-2 text-xs">
          <li>
            <a className="hover:font-semibold hover:text-green-700" href="">fqs1</a>
          </li>
          <li>
          <a className="hover:font-semibold hover:text-green-700" href="">fqs2</a>
          </li>
        </ul>
      </div>
    </>
  )
}

const faqs = [
  {
    question: "Free Tools",
    answer:f1 (),
  },
  {
    question: "Domain Datas",
    answer:f1 (),
  },
  {
    question: "Monitoring",
    answer:f1 (),
  },
  {
    question: "Plan and Pricing",
    answer:f1 (),
  },
  {
    question: "Billing",
    answer:f1 (),
  },
  {
    question: "My Account",
    answer:f1 (),
  },
  {
    question: "Support",
    answer:f1 (),
  },
  {
    question: "Post",
    answer:f1 (),
  },
  {
    question: "API",
    answer:f1 (),
  },
  {
    question: "Affiliate",
    answer:f1 (),
  },
  {
    question: "Our TOS",
    answer:f1 (),
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HelpFaqs() {
  return (
    <div className="bg-white rounded-lg mr-8 py-8">
      <div className="max-w-7xl mx-auto  px-4  sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-md">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-semibold text-gray-500">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center text-gray-300">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
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
