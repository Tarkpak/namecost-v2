/* This example requires Tailwind CSS v2.0+ */

import { Tab } from '@headlessui/react'
import {
  PlusSmIcon,
  LockClosedIcon,
  ExternalLinkIcon,
} from '@heroicons/react/solid'
import { PriceAuctionIcon } from '@/components/common/PriceAuctionIcon'
import { PriceBitcoinIcon } from '@/components/common/PriceBitcoinIcon'
import { PriceCatchIcon } from '@/components/common/PriceCatchIcon'
import { PriceCouponIcon } from '@/components/common/PriceCouponIcon'
import { PriceWhoisPrivayIcon } from '@/components/common/PriceWhoisPrivayIcon'
import { TldSearchForm } from '@/components/common/monitor/TldSearchForm'
import { DivSpan } from '@/components/common/monitor/DivSpan'
import { DivSpanMenu } from '@/components/common/monitor/DivSpanMenu'
import http from '@/utils/axios'
import { useEffect, useState } from 'react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function copyToClipboard(textToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy)
  } else {
    // text area method
    let textArea = document.createElement('textarea')
    textArea.value = textToCopy
    // make the textarea out of viewport
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    return new Promise((res, rej) => {
      // here the magic happens
      document.execCommand('copy') ? res() : rej()
      textArea.remove()
    })
  }
}

const pricesdatas = [
  {
    id: '1',
    status: '',
    registrar: 'GoDaddy',
    tld: 'com',
    regs: '12.00',
    renew: '12.00',
    trans: '12.00',
    whois: '1',
    tax: '',
    bitcoin: '1',
    feature: '',
    icann: '',
    notes: '',
    code: '',
    update_at: '',
  },
  {
    id: '11',
    status: '',
    registrar: 'GoDaddy',
    tld: 'com',
    regs: '12.25',
    renew: '12.00',
    trans: '12.00',
    whois: '1',
    tax: '',
    bitcoin: '1',
    feature: '',
    icann: '',
    notes: '',
    code: '',
    update_at: '',
  },
  {
    id: '12',
    status: '',
    registrar: 'GoDaddy',
    tld: 'com',
    regs: '12.26',
    renew: '12.00',
    trans: '12.00',
    whois: '1',
    tax: '',
    bitcoin: '1',
    feature: '',
    icann: '',
    notes: '',
    code: '2',
    update_at: '',
  },
  {
    id: '13',
    status: '',
    registrar: 'GoDaddy',
    tld: 'com',
    regs: '12.00',
    renew: '12.00',
    trans: '12.00',
    whois: '1',
    tax: '',
    bitcoin: '1',
    feature: '',
    icann: '',
    notes: '',
    code: '',
    update_at: '',
  },
  {
    id: '123',
    status: '',
    registrar: 'GoDaddy',
    tld: 'com',
    regs: '123.00',
    renew: '12.00',
    trans: '12.00',
    whois: '1',
    tax: '',
    bitcoin: '1',
    feature: '',
    icann: '',
    notes: '',
    code: '',
    update_at: '',
  },
]

function lockopenicon({ subtitle }) {
  return (
    <>
      <LockClosedIcon
        className="mr-2 h-4 w-4 text-gray-300"
        aria-hidden="true"
      />
      <span>{subtitle}</span>
    </>
  )
}

const HandleCopy = (e, coupons) => {
  e.preventDefault()
  copyToClipboard(coupons)
    .then((res) => {
      alert('Copy Coupon Successful')
    })
    .catch((err) => {
      console.log(err)
      alert('Copy Fail')
    })
}
const Newdata = ({ datas }) => {
  return (
    <>
      <div className="hidden px-4 text-xs lg:flex lg:grid lg:grid-cols-2">
        <span className="place-self-center text-gray-400">
          * <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> =
          Free Whois Privacy , <PriceCouponIcon /> = Click to Copy{' '}
          <span className="font-semibold">Coupon Code</span>
        </span>
        <form method="POST" action="">
          <TldSearchForm />
        </form>
      </div>
      <div className="pb-8 pt-2 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full rounded-t-md  bg-gray-500 py-1 text-center text-sm font-semibold text-gray-300">
          <DivSpan title={'TLD'} className="w-10-50 w-2-10" />
          <DivSpan
            title={lockopenicon('Limited')}
            className="w-15-50 hidden md:block"
          />
          <DivSpan title={lockopenicon('Bulk')} className="w-15-50 w-6-10" />
          <DivSpan title={''} className="w-10-50 w-2-10" />
        </div>

        {datas.map((price) => (
          <div
            key={price.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="text-mysm w-10-50 w-2-10 truncate whitespace-nowrap border-r py-3 font-semibold text-blue-500">
              <span className="nav-blue-color rounded-md py-1 text-xs text-white hover:bg-blue-500 md:px-3 md:text-sm md:font-bold">
                <a href={'/domainsprice/' + price.tld} target="_blank">
                  .{price.tld}
                </a>
              </span>
            </div>
            <div className="w-15-50 hidden truncate whitespace-nowrap border-r py-4 md:block">
              <div className="flex grid grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <span className="bg-maincolor rounded-md py-1 px-3 font-semibold text-orange-600">
                    ${price.regs}
                  </span>
                </div>
                <div className="">
                  <span className="bg-filter rounded-md py-1 px-3 font-medium text-white">
                    <a
                      className="hover:underline xl:space-x-2"
                      href=""
                      target="_blank"
                      rel="nofollow"
                    >
                      <span title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? (
                        <span
                          className="hidden lg:inline-block"
                          title="Accept Bitcoin Payment"
                        >
                          <PriceBitcoinIcon />
                        </span>
                      ) : null}
                      {parseInt(price.whois) > 0 ? (
                        <span
                          className="hidden lg:inline-block"
                          title="Free Whois Privacy"
                        >
                          <PriceWhoisPrivayIcon />
                        </span>
                      ) : null}
                    </a>
                  </span>
                </div>
                <div className="hidden place-self-center pr-2 lg:block">
                  {price.code ? (
                    <button type="button" className="relative">
                      <span
                        onClick={(e) => {
                          HandleCopy(e, price.code)
                        }}
                        title={'Click to copy the Coupon : ' + price.code}
                      >
                        <PriceCouponIcon />
                      </span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="w-15-50 w-6-10 truncate whitespace-nowrap border-r py-3">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="rounded-md  py-1 sm:font-semibold xl:float-right">
                    <span className="border-b border-dashed border-green-900">
                      ${price.regs}
                    </span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="text-myblue-500 text-mysm space-x-2 py-1 font-semibold underline">
                    <span title={price.registrar}>
                      <a href="" target="_blank" rel="nofollow">
                        {price.registrar}
                        <ExternalLinkIcon
                          className="-mt-4 h-4 w-4 text-gray-300 hover:text-blue-500"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                    {price.bitcoin ? (
                      <span
                        className="hidden lg:inline-block"
                        title="Accept Bitcoin Payment"
                      >
                        <PriceBitcoinIcon />
                      </span>
                    ) : null}
                    {parseInt(price.whois) > 0 ? (
                      <span
                        className="hidden lg:inline-block"
                        title="Free Whois Privacy"
                      >
                        <PriceWhoisPrivayIcon />
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-mysm w-10-50 w-2-10 truncate whitespace-nowrap py-3 font-semibold">
              <a
                className="text-blue-500 hover:text-blue-600"
                href={'/domainsprice/' + price.tld}
                target="_blank"
              >
                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                <span className="hidden hover:underline sm:inline-block">
                  more
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
const Renewdata = ({ datas }) => {
  return (
    <>
      <div className="hidden px-4 text-xs lg:flex lg:grid lg:grid-cols-2">
        <span className="place-self-center text-gray-400">
          * <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> =
          Free Whois Privacy , <PriceCouponIcon /> = Click to Copy{' '}
          <span className="font-semibold">Coupon Code</span>
        </span>
        <form method="POST" action="">
          <TldSearchForm />
        </form>
      </div>
      <div className="pb-8 pt-2 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full rounded-t-md  bg-gray-500 py-1 text-center text-sm font-semibold text-gray-300">
          <DivSpanMenu />
        </div>

        {datas.map((price) => (
          <div
            key={price.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="text-mysm w-7-50 w-2-10 truncate whitespace-nowrap border-r py-4 font-semibold text-blue-500">
              <span className="nav-blue-color rounded-md py-1 text-xs text-white hover:bg-blue-500 md:px-3 md:text-sm md:font-bold">
                <a href={'/domainsprice/' + price.tld} target="_blank">
                  .{price.tld}
                </a>
              </span>
            </div>
            <div className="w-12-50 w-6-10 truncate whitespace-nowrap border-r py-4">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="bg-maincolor rounded-md py-1 px-3 font-semibold text-orange-600">
                    <span className="">${price.regs}</span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="bg-filter rounded-md py-1 px-3 font-medium text-white">
                    <a
                      className="hover:underline xl:space-x-1"
                      href=""
                      target="_blank"
                      rel="nofollow"
                    >
                      <span className="mr-1" title={price.registrar}>
                        {price.registrar}
                      </span>
                      {price.bitcoin ? (
                        <span
                          className="hidden xl:inline-block"
                          title="Accept Bitcoin Payment"
                        >
                          <PriceBitcoinIcon />
                        </span>
                      ) : null}
                      {price.whois > 0 ? (
                        <span
                          className="hidden xl:inline-block"
                          title="Free Whois Privacy"
                        >
                          <PriceWhoisPrivayIcon />
                        </span>
                      ) : null}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-12-50 hidden truncate whitespace-nowrap border-r py-4 md:block">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="rounded-md py-1 text-green-700 sm:font-semibold">
                    <span className="border-b border-dashed border-green-900">
                      ${price.regs}
                    </span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="text-myblue-500 text-mysm space-x-2 py-1 font-semibold underline">
                    <span title={price.registrar}>
                      <a href="" target="_blank" rel="nofollow">
                        {price.registrar}
                        <ExternalLinkIcon
                          className="-mt-4 h-4 w-4 text-gray-300 hover:text-blue-500"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                    {price.bitcoin ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Accept Bitcoin Payment"
                      >
                        <PriceBitcoinIcon />
                      </span>
                    ) : null}
                    {price.whois > 0 ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Free Whois Privacy"
                      >
                        <PriceWhoisPrivayIcon />
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-12-50 hidden truncate whitespace-nowrap border-r py-4 md:block">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="rounded-md py-1 sm:font-semibold">
                    <span className="border-b border-dashed border-green-900">
                      ${price.regs}
                    </span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="text-myblue-500 text-mysm space-x-2 py-1 font-semibold underline">
                    <span title={price.registrar}>
                      <a href="" target="_blank" rel="nofollow">
                        {price.registrar}
                        <ExternalLinkIcon
                          className="-mt-4 h-4 w-4 text-gray-300 hover:text-blue-500"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                    {price.bitcoin ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Accept Bitcoin Payment"
                      >
                        <PriceBitcoinIcon />
                      </span>
                    ) : null}
                    {price.whois > 0 ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Free Whois Privacy"
                      >
                        <PriceWhoisPrivayIcon />
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-mysm w-7-50 w-2-10 truncate whitespace-nowrap py-4 font-semibold">
              <a
                className="text-blue-500 hover:text-blue-600"
                href={'/domainsprice/' + price.tld}
                target="_blank"
              >
                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                <span className="hidden hover:underline sm:inline-block">
                  more
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Transferdata = ({ datas }) => {
  return (
    <>
      <div className="hidden px-4 text-xs lg:flex lg:grid lg:grid-cols-2">
        <span className="place-self-center text-gray-400">
          * <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> =
          Free Whois Privacy , <PriceCouponIcon /> = Click to Copy{' '}
          <span className="font-semibold">Coupon Code</span>
        </span>
        <form method="POST" action="">
          <TldSearchForm />
        </form>
      </div>
      <div className="pb-8 pt-2 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full rounded-t-md  bg-gray-500 py-1 text-center text-sm font-semibold text-gray-300">
          <DivSpanMenu />
        </div>

        {datas.map((price) => (
          <div
            key={price.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="text-mysm w-7-50 w-2-10 truncate whitespace-nowrap border-r py-4 font-semibold text-blue-500">
              <span className="nav-blue-color rounded-md py-1 text-xs text-white hover:bg-blue-500 md:px-3 md:text-sm md:font-bold">
                <a href={'/domainsprice/' + price.tld} target="_blank">
                  .{price.tld}
                </a>
              </span>
            </div>
            <div className="w-12-50 w-6-10 truncate whitespace-nowrap border-r py-4">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="bg-maincolor rounded-md py-1 px-3 font-semibold text-orange-600">
                    <span className="">${price.regs}</span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="bg-filter rounded-md py-1 px-3 font-medium text-white">
                    <a
                      className="hover:underline xl:space-x-1"
                      href=""
                      target="_blank"
                      rel="nofollow"
                    >
                      <span className="mr-1" title={price.registrar}>
                        {price.registrar}
                      </span>
                      {price.bitcoin ? (
                        <span
                          className="hidden xl:inline-block"
                          title="Accept Bitcoin Payment"
                        >
                          <PriceBitcoinIcon />
                        </span>
                      ) : null}
                      {price.whois > 0 ? (
                        <span
                          className="hidden xl:inline-block"
                          title="Free Whois Privacy"
                        >
                          <PriceWhoisPrivayIcon />
                        </span>
                      ) : null}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-12-50 hidden truncate whitespace-nowrap border-r py-4 md:block">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="rounded-md py-1 text-green-700 sm:font-semibold">
                    <span className="border-b border-dashed border-green-900">
                      ${price.regs}
                    </span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="text-myblue-500 text-mysm space-x-2 py-1 font-semibold underline">
                    <span title={price.registrar}>
                      <a href="" target="_blank" rel="nofollow">
                        {price.registrar}
                        <ExternalLinkIcon
                          className="-mt-4 h-4 w-4 text-gray-300 hover:text-blue-500"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                    {price.bitcoin ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Accept Bitcoin Payment"
                      >
                        <PriceBitcoinIcon />
                      </span>
                    ) : null}
                    {price.whois > 0 ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Free Whois Privacy"
                      >
                        <PriceWhoisPrivayIcon />
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-12-50 hidden truncate whitespace-nowrap border-r py-4 md:block">
              <div className="flex grid grid-cols-2">
                <div className="">
                  <span className="rounded-md py-1 sm:font-semibold">
                    <span className="border-b border-dashed border-green-900">
                      ${price.regs}
                    </span>
                  </span>
                </div>
                <div className="place-self-center">
                  <span className="text-myblue-500 text-mysm space-x-2 py-1 font-semibold underline">
                    <span title={price.registrar}>
                      <a href="" target="_blank" rel="nofollow">
                        {price.registrar}
                        <ExternalLinkIcon
                          className="-mt-4 h-4 w-4 text-gray-300 hover:text-blue-500"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                    {price.bitcoin ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Accept Bitcoin Payment"
                      >
                        <PriceBitcoinIcon />
                      </span>
                    ) : null}
                    {price.whois > 0 ? (
                      <span
                        className="hidden xl:inline-block"
                        title="Free Whois Privacy"
                      >
                        <PriceWhoisPrivayIcon />
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-mysm w-7-50 w-2-10 truncate whitespace-nowrap py-4 font-semibold">
              <a
                className="text-blue-500 hover:text-blue-600"
                href={'/domainsprice/' + price.tld}
                target="_blank"
              >
                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                <span className="hidden hover:underline sm:inline-block">
                  more
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function hexonetmore() {
  return (
    <>
      <a
        className="hover:underline"
        href="https://hexonet.net/backorder"
        target="_blank"
        rel="nofollow"
      >
        view more
      </a>
    </>
  )
}

function savmore() {
  return (
    <>
      <a
        className="hover:underline"
        href="https://www.sav.com/domains"
        target="_blank"
        rel="nofollow"
      >
        view more
      </a>
    </>
  )
}
const catchprice = [
  {
    name: 'Dropcatch.com',
    price: [
      { type: 'Discount Club', tld: 'com, net', price: '$11-$58' },
      { type: 'Backorder', tld: 'com, net', price: '$59' },
    ],
  },
  {
    name: 'NameJet.com',
    price: [{ type: 'Backorder', tld: 'com, net,org', price: '$79' }],
  },
  {
    name: 'SnapNames.com',
    price: [{ type: 'Backorder', tld: 'com, net,org', price: '$79' }],
  },
  {
    name: 'Sav.com',
    price: [
      { type: 'Backorder', tld: 'com', price: '$8.95' },
      { type: 'Backorder', tld: 'net', price: '$9.88' },
      { type: 'Backorder', tld: 'org', price: '$7.49' },
      { type: 'Backorder', tld: 'co', price: '$4.99' },
      { type: 'Backorder', tld: 'io', price: '$29.95' },
      { type: 'Backorder', tld: 'other', price: savmore() },
    ],
  },
  {
    name: 'Hexonet.net',
    price: [
      { type: 'Backorder', tld: 'com, net,org', price: '$18.91' },
      { type: 'Backorder', tld: 'other', price: hexonetmore() },
    ],
  },
]

const Catchdata = ({ datas }) => {
  return (
    <>
      <div className="px-4 text-xs">
        <span className="text-gray-300">
          * Inclue GoDaddy , Dropcatch and Namejet datas.
        </span>
      </div>
      <div className="pb-8 pt-4 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full  rounded-t-md bg-gray-500 text-center text-sm font-semibold text-gray-300">
          <div className="w-15-50 w-2-10 py-2">
            <span className="group inline-flex">Platform</span>
          </div>
          <div className="w-35-50 w-8-10 py-2">
            <span className="group inline-flex">Pricing </span>
          </div>
        </div>
        {datas.map((dom) => (
          <div className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200">
            <div className="text-mysm w-15-50  w-2-10 place-self-center truncate whitespace-nowrap font-semibold text-blue-500">
              <div className="py-2">
                <a
                  className="hover:underline"
                  href={'https://' + dom.name}
                  target="_blank"
                  rel="nofollow"
                >
                  {dom.name}
                </a>
              </div>
            </div>

            <div className="text-mysm w-35-50 w-8-10 truncate whitespace-nowrap border-l font-semibold text-blue-500">
              {/* {dom.price.map((myprice) => (
                <div className="flex grid grid-cols-3 break-words border-b text-center">
                  <span className="py-2">{myprice.type} </span>
                  <span className="text-semibold border-r border-l py-2  text-green-700">
                    {myprice.tld}
                  </span>
                  <span className="py-2 font-medium text-orange-700">
                    {myprice.price}
                  </span>
                </div>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Newhidden = () => {
  return <>New</>
}
const Renewhidden = () => {
  return <>Renew</>
}
const Transferhidden = () => {
  return <>Transfer</>
}

const Catchhidden = () => {
  return <>Catch</>
}

const Typeselect = [
  {
    id: 1,
    label: <Newhidden />,
    content: (datas) => <Newdata datas={datas} />,
  },
  {
    id: 2,
    label: <Renewhidden />,
    content: (datas) => <Renewdata datas={datas} />,
  },
  {
    id: 3,
    label: <Transferhidden />,
    content: (datas) => <Transferdata datas={datas} />,
  },
  {
    id: 4,
    label: <Catchhidden />,
    content: (datas) => <Catchdata datas={datas} />,
  },
]

export function PricesComData() {
  const [index, setIndex] = useState(0)
  const [datas, setDatas] = useState([])
  const handleChange = (val) => {
    setIndex(val)
    getList()
  }
  const getList = async () => {
    const { coupons } = await http.get('/monitors/coupons', {
      params: { type: index },
    })
    setDatas(coupons)
  }
  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <div className="relative   min-h-full rounded-lg bg-white md:grid md:place-items-center">
        <div className="mx-auto min-w-full max-w-max">
          <main>
            <div className="mx-auto max-w-7xl pt-2 sm:px-4 sm:pt-4">
              <div className="mb-8 px-2 sm:px-0">
                <div className="">
                  <div className="text-gray-500">
                    <div className="text-blue-green mx-auto mb-6 text-base font-medium">
                      <div className="bg-maincolor flex grid grid-cols-6 p-4">
                        <div className="mx-auto place-self-center">
                          <PriceAuctionIcon />
                        </div>
                        <div className="col-span-4 lg:px-10">
                          <p className="text-md font-bold md:text-xl">
                            Best Domain Registrars, NameServer, SSL, MX provider
                            2022
                          </p>
                          <p className="hidden lg:block">
                            Find the best domains service provider for you.
                          </p>
                        </div>
                        <div className="mx-auto place-self-center">
                          <PriceCatchIcon />
                        </div>
                      </div>
                    </div>

                    <Tab.Group selectedIndex={index} onChange={handleChange}>
                      <Tab.List className="bg-maincolor flex space-x-1 rounded-lg p-1">
                        {Typeselect.map((category, idx) => (
                          <Tab
                            key={category.id}
                            className={({ selected }) =>
                              classNames(
                                'w-full rounded-lg py-2.5 text-sm font-semibold leading-5 text-gray-700',
                                '',
                                selected
                                  ? 'bg-white text-green-700 shadow'
                                  : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-600'
                              )
                            }
                          >
                            {category.label}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        {Typeselect.map((post, idx) => (
                          <Tab.Panel
                            key={post.id}
                            className="rounded-xl bg-white py-1 px-2"
                          >
                            {post.content(datas)}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
