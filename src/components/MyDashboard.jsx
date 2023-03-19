/*
  This example requires Tailwind CSS v2.0+ 
*/
import { Fragment, useState } from 'react'
import { Disclosure, Transition, Dialog } from '@headlessui/react'
import {
  QuestionMarkCircleIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
  MenuIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  PencilAltIcon,
} from '@heroicons/react/outline'

const navigation = [
  {
    name: 'Dashboard',
    icon: ClipboardCheckIcon,
    current: true,
    children: [
      { name: 'Domain Monitor', href: '/account/monitor' },
      { name: 'Brand Monitor', href: '/account/brand' }, 
      { name: 'Jobs Queue', href: '/account/jobqueue' },
    ],
  },
  {
    name: 'Billing',
    icon: CreditCardIcon,
    current: true,
    children: [
      { name: 'My Plan', href: '/account/plan' },
      { name: 'Payment Info', href: '/account/payment' },
      { name: 'Billing History', href: '/account/billing' },
      { name: 'Billing Address', href: '/account/address' },
    ],
  },
  {
    name: 'Support',
    icon: QuestionMarkCircleIcon,
    current: true,
    children: [
      { name: 'Support Tickets', href: '/account/ticket' },
      { name: 'New Ticket', href: '/account/newticket' },
      { name: 'Message', href: '/account/message' },
    ],
  },
  {
    name: 'Referral Porgram',
    icon: CurrencyDollarIcon,
    current: true,
    children: [
      { name: 'Referral Code', href: '/account/referralcode' },
      { name: 'Status', href: '/account/referral' },
    ],
  },
  {
    name: 'Account',
    icon: UserCircleIcon,
    current: true,
    children: [
      { name: 'Profile', href: '/account/profile' },
      { name: 'Password', href: '/account/password' },
      { name: 'API', href: '/account/api' },
      { name: 'Notifications', href: '/account/notification' },
    ],
  },
  {
    name: 'Post',
    icon: PencilAltIcon,
    current: true,
    children: [
      { name: 'My Post', href: '/account/post' },
      { name: 'New Post', href: '/account/newpost' },
      { name: 'Comments', href: '/account/comment' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <aside className="lg:h-screen">
        <div className="sticky top-0 z-10 hidden lg:block">
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4">
            <div className="flex flex-grow flex-col">
              <nav
                className="flex-1 space-y-1 bg-white px-2"
                aria-label="Sidebar"
              >
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <a
                        href="#"
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </div>
                  ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-500'
                                : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-500',
                              'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-base font-medium'
                            )}
                          >
                            <item.icon
                              className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open
                                  ? 'rotate-90 text-gray-400'
                                  : 'text-gray-300',
                                'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1" static>
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as="a"
                                href={subItem.href}
                                className="mymenuhover group flex w-full items-center rounded-md py-1.5 pl-11 pr-2 text-sm font-medium  text-gray-500 hover:bg-gray-50"
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      </aside>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  {/* <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg"
                      alt="Workflow"
                    />
                  </div> */}
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) =>
                        !item.children ? (
                          <div key={item.name}>
                            <a
                              href="#"
                              className={classNames(
                                item.current
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? 'text-gray-500'
                                    : 'text-gray-400 group-hover:text-gray-500',
                                  'mr-3 h-6 w-6 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </div>
                        ) : (
                          <Disclosure
                            as="div"
                            key={item.name}
                            className="space-y-1"
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-100 text-gray-500'
                                      : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-500',
                                    'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-base font-medium'
                                  )}
                                >
                                  <item.icon
                                    className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <span className="flex-1">{item.name}</span>
                                  {/* <svg
                                    className={classNames(
                                      open
                                        ? 'rotate-90 text-gray-400'
                                        : 'text-gray-300',
                                      'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6 6L14 10L6 14V6Z"
                                      fill="currentColor"
                                    />
                                  </svg> */}
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1" static>
                                  {item.children.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as="a"
                                      href={subItem.href}
                                      className="mymenuhover group flex w-full items-center rounded-md py-1.5 pl-11 pr-2 text-sm font-medium  text-gray-500 hover:bg-gray-50"
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )
                      )}
                    </div>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="lg:hidden">
        <div>
          <button
            type="button"
            className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
