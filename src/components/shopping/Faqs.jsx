/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription, downgrade or upgrade your plan at any time. If you decide to cancel or downgrade your subscription within the first 7 days, you’ll get a full refund. No questions asked.",
  },
  {
    question: "What is Semrush’s refund policy?",
    answer:
      "You get a 7-day money-back guarantee on all plans. Submit your request via our contact form, and we will refund the payment made if the request is made within 7 days after the sign-up.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      `You can pay using the following payment methods:
      Credits in account, All major credit cards, Paypal, USDT(TRC-20 and ERC-20)`,
  },
  {
    question: "Can I use Namecost for free?",
    answer:
      "Yes. With a free account, you can still use a lot of tools, but you will be limited in your ability to pull all of the data and use other tools. 100 pages daily.",
  },
  {
    question: "Which would be better for me, Guru or Pro?",
    answer:
      "If you’re a freelancer, blogger, or in-house marketer with a limited budget, then the Semrush Pro plan will likely be the best option. If you’re a professional SEO consultant or an agency with numerous clients, then you will be best suited to the Semrush Guru plan.You can find a deep comparison of our plans by limits in the subscription limits article.",
  },
  {
    question: "I run a small agency. What plan should I choose?",
    answer:
      "You might choose Pro plan, which is the basic subscription, or Guru plan, which is the most popular for SMBs and growing agencies. The plans differ in the number of tools available as well as in the number of limits.You can consult this page to understand better which subscription will better fit your marketing needs.",
  },
  {
    question: "Can I withdraw my credits?",
    answer:
      "No.You can only pay any plan use the credits.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Faqs() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
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
