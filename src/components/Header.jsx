/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  IdentificationIcon,
  ClipboardCheckIcon,
  ViewGridAddIcon,
  PlusCircleIcon,
  BanIcon,
  KeyIcon,
  CodeIcon,
  OlderOpenIcon,
  LockOpenIcon,
  MailIcon,
  MenuIcon,
  RefreshIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/common/Button'

const freetools = [
  {name: 'Domain Generator', href: '/generator', icon: ViewGridAddIcon},
  {name: 'Brand Generator', href: '/typo', icon: RefreshIcon},
  {name: 'Whois Lookup', href: '/whois', icon: IdentificationIcon},
  {name: 'DA Check', href: '/dacheck', icon: ClipboardCheckIcon },
]
const datas = [
  {name: 'Pending Delete Domains', href: '/pendingdelete', icon: BanIcon},
  {name: 'Expired Auction Domains', href: '/expireddomains', icon: RefreshIcon},
  {name: 'Traffic Domains', href: '/trafficdomains', icon: RefreshIcon},
  {name: 'Domain Marketplace', href: '/marketplace', icon: RefreshIcon},
  {name: 'New Registered Domains', href: '/newdomains', icon: PlusCircleIcon},
  {name: 'Top Registrar', href: '/topregistrar', icon: ViewGridAddIcon},
]
const monitors = [
  {name: 'Domain Monitor', href: '/domainmonitor', icon: OlderOpenIcon },
  {name: 'Domains Coupons', href: '/domainsprice', icon: MailIcon},
]
const resources = [
  {name: 'About Namecost', href: '/about', icon: LockOpenIcon},
  {name: 'Contact Us', href: '/contact', icon: MailIcon},
  { name: 'How To Use', href: '/howtouse', icon: KeyIcon },
  {name: 'Blog', href: '/blog', icon: OlderOpenIcon },
  { name: 'API Document', href: '/api', icon: CodeIcon },
  { name: 'Status Updates', href: '/statusupdate', icon: CodeIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 lg:justify-start md:space-x-10">

          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">NameCost</span>
              <Logo className="h-10 w-auto" />
            </a>
          </div>

          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Popover className="relative buttonhover">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      'bg-white inline-flex items-center text-base font-semibold hover:font-semibold ring-0 !border-none'
                    )}
                  >
                    <span className="border-none"> Free Tools
                      <span className="navshow nav-orange-color nav-r-9p">HOT</span>
                    </span>
                    
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 min-w-full">
                      <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="mymenu relative grid bg-mygray-500 text-white">
                          {freetools.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start px-8 py-3 border-b border-gray-600 !border-opacity-30"
                            >
                              <div>
                                <p className="text-base font-semibold whitespace-nowrap">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative buttonhover">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      'bg-white inline-flex items-center text-base font-semibold hover:font-semibold ring-0 !border-none'
                    )}
                  >
                    <span className="border-none"> Datas
                      <span className="navshow nav-orange-color nav-r-9p">Top</span>
                    </span>
                    
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 min-w-full">
                      <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="mymenu relative grid bg-mygray-500 text-white">
                          {datas.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start px-8 py-3 border-b border-gray-600 !border-opacity-30"
                            >
                              <div>
                                <p className="text-base font-semibold whitespace-nowrap">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative buttonhover">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      'bg-white inline-flex items-center text-base font-semibold hover:font-semibold ring-0 !border-none'
                    )}
                  >
                    <span className="border-none"> Monitor
                      <span className="navshow nav-orange-color nav-r-9p">BEST</span>
                    </span>
                    
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 min-w-full">
                      <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="mymenu relative grid bg-mygray-500 text-white">
                          {monitors.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start px-8 py-3 border-b border-gray-600 !border-opacity-30"
                            >
                              <div>
                                <p className="text-base font-semibold whitespace-nowrap">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="/pricing" className="relative mymenuhover text-gray-500 bg-white inline-flex items-center text-base font-semibold hover:font-semibold ring-0 md:hidden lg:block">
               Pricing
               <span className="navshow nav-blue-color nav-r-15">Free</span>
            </a>

            <Popover className="relative  buttonhover">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      ' inline-flex items-center text-base font-semibold hover:font-semibold !ring-0'
                    )}
                  >
                    <span> Help Center</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg  overflow-hidden">
                      <div className="mymenu relative grid bg-mygray-500 text-white">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start px-8 py-3 border-b border-gray-600 !border-opacity-30"
                            >
                              <div>
                                <p className="text-base font-semibold whitespace-nowrap">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="/login" className="whitespace-nowrap mymenuhover text-gray-500 bg-white inline-flex items-center text-base font-semibold hover:font-semibold ring-0">
              Sign in
            </a>
            <Button href="/register" color="headergreen">
              <span>
                Creat Account
              </span>
            </Button>
          </div>

        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo className="h-10 w-auto" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {freetools.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="/pricing" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
                <a href="/auctions" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Domain Auctions
                </a>
                {monitors.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                  
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
              <Button href="/register" color="headergreencell">
              <span>
                Creat Account
              </span>
            </Button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="/login" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
