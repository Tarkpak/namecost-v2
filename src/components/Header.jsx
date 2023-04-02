/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
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
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import http from '@/utils/axios'

const freetools = [
  { name: 'Domain Generator', href: '/generator', icon: ViewGridAddIcon },
  { name: 'Brand Generator', href: '/typo', icon: RefreshIcon },
  { name: 'Whois Lookup', href: '/whois', icon: IdentificationIcon },
  { name: 'DA Check', href: '/dacheck', icon: ClipboardCheckIcon },
]
const datas = [
  { name: 'Pending Delete Domains', href: '/pendingdelete', icon: BanIcon },
  {
    name: 'Expired Auction Domains',
    href: '/expireddomains',
    icon: RefreshIcon,
  },
  { name: 'Traffic Domains', href: '/trafficdomains', icon: RefreshIcon },
  { name: 'Domain Marketplace', href: '/marketplace', icon: RefreshIcon },
  { name: 'New Registered Domains', href: '/newdomains', icon: PlusCircleIcon },
  { name: 'Top Registrar', href: '/topregistrar', icon: ViewGridAddIcon },
]
const monitors = [
  { name: 'Domain Monitor', href: '/domainmonitor', icon: OlderOpenIcon },
  { name: 'Domains Coupons', href: '/domainsprice', icon: MailIcon },
]
const resources = [
  { name: 'About Namecost', href: '/about', icon: LockOpenIcon },
  { name: 'Contact Us', href: '/contact', icon: MailIcon },
  { name: 'How To Use', href: '/howtouse', icon: KeyIcon },
  { name: 'Blog', href: '/blog', icon: OlderOpenIcon },
  { name: 'API Document', href: '/api', icon: CodeIcon },
  { name: 'Status Updates', href: '/statusupdate', icon: CodeIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const getUserInfo = () => {
  return http('/users/info').then(({ users }) => users)
}
const user = atomWithStorage('userInfo', '')
export function Header() {
  const [userInfo, setUserInfo] = useAtom(user)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    console.log('userInfo', userInfo);
    const token = localStorage.getItem('token')
    if (!userInfo && token) {
      getUserInfo().then((res) => {
        console.log('res', res);
        if (res) setUserInfo(res)
      })
    }
    setIsClient(true)
  }, [])
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 md:space-x-10 lg:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">NameCost</span>
              <Logo className="h-10 w-auto" />
            </a>
          </div>

          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            <Popover className="buttonhover relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      'inline-flex items-center !border-none bg-white text-base font-semibold ring-0 hover:font-semibold'
                    )}
                  >
                    <span className="border-none">
                      {' '}
                      Free Tools
                      <span className="navshow nav-orange-color nav-r-9p">
                        HOT
                      </span>
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
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 min-w-full max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="mymenu bg-mygray-500 relative grid text-white">
                          {freetools.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start border-b border-gray-600 !border-opacity-30 px-8 py-3"
                            >
                              <div>
                                <p className="whitespace-nowrap text-base font-semibold">
                                  {item.name}
                                </p>
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

            <Popover className="buttonhover relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      'inline-flex items-center !border-none bg-white text-base font-semibold ring-0 hover:font-semibold'
                    )}
                  >
                    <span className="border-none">
                      {' '}
                      Datas
                      <span className="navshow nav-orange-color nav-r-9p">
                        Top
                      </span>
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
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 min-w-full max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="mymenu bg-mygray-500 relative grid text-white">
                          {datas.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start border-b border-gray-600 !border-opacity-30 px-8 py-3"
                            >
                              <div>
                                <p className="whitespace-nowrap text-base font-semibold">
                                  {item.name}
                                </p>
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

            <Popover className="buttonhover relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      'inline-flex items-center !border-none bg-white text-base font-semibold ring-0 hover:font-semibold'
                    )}
                  >
                    <span className="border-none">
                      {' '}
                      Monitor
                      <span className="navshow nav-orange-color nav-r-9p">
                        BEST
                      </span>
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
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 min-w-full max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="mymenu bg-mygray-500 relative grid text-white">
                          {monitors.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start border-b border-gray-600 !border-opacity-30 px-8 py-3"
                            >
                              <div>
                                <p className="whitespace-nowrap text-base font-semibold">
                                  {item.name}
                                </p>
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

            <a
              href="/pricing"
              className="mymenuhover relative inline-flex items-center bg-white text-base font-semibold text-gray-500 ring-0 hover:font-semibold md:hidden lg:block"
            >
              Pricing
              <span className="navshow nav-blue-color nav-r-15">Free</span>
            </a>

            <Popover className="buttonhover  relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-500' : 'text-gray-500',
                      ' inline-flex items-center text-base font-semibold !ring-0 hover:font-semibold'
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
                    <Popover.Panel className="absolute left-1/2 z-50 mt-3 max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg  shadow-lg">
                        <div className="mymenu bg-mygray-500 relative grid text-white">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start border-b border-gray-600 !border-opacity-30 px-8 py-3"
                            >
                              <div>
                                <p className="whitespace-nowrap text-base font-semibold">
                                  {item.name}
                                </p>
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

          <div className="hidden items-center justify-end md:flex-1 lg:flex lg:w-0">
            {isClient && userInfo.username ? (
              <a
                href="/account/profile"
                className="mymenuhover inline-flex items-center whitespace-nowrap bg-white  font-semibold text-gray-500 ring-0 hover:font-semibold"
              >
                {userInfo.username}
              </a>
            ) : (
              <div>
                <a
                  href="/login"
                  className="mymenuhover inline-flex items-center whitespace-nowrap bg-white text-base font-semibold text-gray-500 ring-0 hover:font-semibold"
                >
                  Sign in
                </a>
                <Button href="/register" color="headergreen">
                  <span>Creat Account</span>
                </Button>
              </div>
            )}
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
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo className="h-10 w-auto" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
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
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/pricing"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="/auctions"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
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
                  <span>Creat Account</span>
                </Button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a
                    href="/login"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
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
