/* This example requires Tailwind CSS v2.0+ */

import { Tab } from '@headlessui/react'
import { PlusSmIcon,LockClosedIcon,ExternalLinkIcon  } from '@heroicons/react/solid'
import { PriceAuctionIcon } from '@/components/common/PriceAuctionIcon'
import { PriceBitcoinIcon} from '@/components/common/PriceBitcoinIcon'
import { PriceCatchIcon } from '@/components/common/PriceCatchIcon'
import { PriceCouponIcon } from '@/components/common/PriceCouponIcon'
import { PriceWhoisPrivayIcon } from '@/components/common/PriceWhoisPrivayIcon'
import { TldSearchForm } from '@/components/common/monitor/TldSearchForm'
import { DivSpan } from '@/components/common/monitor/DivSpan'
import { DivSpanMenu } from '@/components/common/monitor/DivSpanMenu'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function copyToClipboard(textToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      return navigator.clipboard.writeText(textToCopy);
  } else {
      // text area method
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}

const pricesdatas = [
{id: '1', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.00', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
{id: '11', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.25', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
{id: '12', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.26', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'2', update_at:'',},
{id: '13', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.00', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
{id: '123', status:'',registrar: 'GoDaddy', tld:'com', regs:'123.00', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
]

function lockopenicon({subtitle}) {
  return(
    <>
    <LockClosedIcon className="h-4 w-4 text-gray-300 mr-2" aria-hidden="true" /><span>{subtitle}</span>
    </>
  )
}



const HandleCopy = (e,coupons) => {
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
const Newdata = () => {

  return (
    <>
      <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
        <span className="text-gray-400 place-self-center">* <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> = Free Whois Privacy , <PriceCouponIcon /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>
        <form method="POST" action="">
          <TldSearchForm />
        </form>
      </div>        
      <div className="sm:px-4 pb-8 pt-2">
        <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <DivSpan title={"TLD"} className="w-10-50 w-2-10" />
          <DivSpan title={lockopenicon("Limited")} className="w-15-50 hidden md:block" />
          <DivSpan title={lockopenicon("Bulk")} className="w-15-50 w-6-10" />
          <DivSpan title={""} className="w-10-50 w-2-10" />
        </div>

        {pricesdatas.map((price) => (
          <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-3 border-r truncate text-mysm font-semibold text-blue-500 w-10-50 w-2-10">
              <span className="nav-blue-color hover:bg-blue-500 text-white py-1 md:px-3 rounded-md md:font-bold text-xs md:text-sm"><a href={"/domainsprice/"+price.tld} target="_blank">.{price.tld}</a></span>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-15-50 hidden md:block'>
              <div className="flex grid grid-cols-2 lg:grid-cols-3">

                <div className=""><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold">${price.regs}</span></div>
                <div className="">
                  <span className="text-white bg-filter py-1 px-3 rounded-md font-medium">
                    <a className="hover:underline xl:space-x-2" href="" target="_blank" rel="nofollow">
                      <span title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? <span className="hidden lg:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                      {price.whois >0 ? <span className="hidden lg:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                    </a>
                  </span>
                </div>
                <div className="pr-2 hidden lg:block place-self-center">
                  {price.code ? <button type="button" className="relative"><span onClick={(e) => {HandleCopy(e,price.code)}} title={'Click to copy the Coupon : '+price.code}><PriceCouponIcon /></span></button> : null}
                </div>

              </div>
            </div>
            <div className='whitespace-nowrap py-3 border-r truncate w-15-50 w-6-10'>
              <div className="flex grid grid-cols-2">
                <div className=""><span className="xl:float-right  py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                    <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                    {price.bitcoin ? <span className="hidden lg:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                    {price.whois >0 ? <span className="hidden lg:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-3 truncate text-mysm font-semibold w-10-50 w-2-10'><a className="text-blue-500 hover:text-blue-600" href={"/domainsprice/"+price.tld} target="_blank"><PlusSmIcon className="h-5 w-5" aria-hidden="true" /><span className="hidden sm:inline-block hover:underline">more</span></a></div>
          </div>
          ))}
      </div>

    </>
  )
}
const Renewdata = () => {

  return (
    <>
     <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
      <span className="text-gray-400 place-self-center">* <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> = Free Whois Privacy , <PriceCouponIcon /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>
      <form method="POST" action="">
          <TldSearchForm />
        </form>
      </div>        
      <div className="sm:px-4 pb-8 pt-2">
        <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <DivSpanMenu  />
        </div>

        {pricesdatas.map((price) => (
          <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-4 border-r truncate text-mysm font-semibold text-blue-500 w-7-50 w-2-10">
              <span className="nav-blue-color hover:bg-blue-500 text-white py-1 md:px-3 rounded-md md:font-bold text-xs md:text-sm"><a href={"/domainsprice/"+price.tld} target="_blank">.{price.tld}</a></span>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-12-50 w-6-10'>
            <div className="flex grid grid-cols-2">
                <div className=""><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold"><span className="">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-white bg-filter py-1 px-3 rounded-md font-medium">
                    <a className="hover:underline xl:space-x-1" href="" target="_blank" rel="nofollow">
                      <span className="mr-1" title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                      {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
              <div className="flex grid grid-cols-2">
                <div className=""><span className="py-1 rounded-md sm:font-semibold text-green-700"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                    <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                    {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                    {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
              <div className="flex grid grid-cols-2">
                <div className=""><span className="py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                    <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                    {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                    {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-4 truncate text-mysm font-semibold w-7-50 w-2-10'><a className="text-blue-500 hover:text-blue-600" href={"/domainsprice/"+price.tld} target="_blank"><PlusSmIcon className="h-5 w-5" aria-hidden="true" /><span className="hidden sm:inline-block hover:underline">more</span></a></div>
          </div>
          ))}
      </div>

    </>
  )
}

const Transferdata = () => {

  return (
    <>
    <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
     <span className="text-gray-400 place-self-center">* <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> = Free Whois Privacy , <PriceCouponIcon /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>
     <form method="POST" action="">
          <TldSearchForm />
        </form>
     </div>        
     <div className="sm:px-4 pb-8 pt-2">
     <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
      <DivSpanMenu  />
        </div>

       {pricesdatas.map((price) => (
         <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
           <div className="whitespace-nowrap py-4 border-r truncate text-mysm font-semibold text-blue-500 w-7-50 w-2-10">
             <span className="nav-blue-color hover:bg-blue-500 text-white py-1 md:px-3 rounded-md md:font-bold text-xs md:text-sm"><a href={"/domainsprice/"+price.tld} target="_blank">.{price.tld}</a></span>
           </div>
           <div className='whitespace-nowrap py-4 border-r truncate w-12-50 w-6-10'>
           <div className="flex grid grid-cols-2">
               <div className=""><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold"><span className="">${price.regs}</span></span></div>
               <div className="place-self-center">
                  <span className="text-white bg-filter py-1 px-3 rounded-md font-medium">
                    <a className="hover:underline xl:space-x-1" href="" target="_blank" rel="nofollow">
                      <span className="mr-1" title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                      {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                    </a>
                  </span>
               </div>
             </div>
           </div>
           <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
             <div className="flex grid grid-cols-2">
               <div className=""><span className="py-1 rounded-md sm:font-semibold text-green-700"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
               <div className="place-self-center">
                 <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                   <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                   {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                   {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                 </span>
               </div>
             </div>
           </div>
           <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
             <div className="flex grid grid-cols-2">
               <div className=""><span className="py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
               <div className="place-self-center">
                 <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                   <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                   {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
                   {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
                 </span>
               </div>
             </div>
           </div>
           <div className='whitespace-nowrap py-4 truncate text-mysm font-semibold w-7-50 w-2-10'><a className="text-blue-500 hover:text-blue-600" href={"/domainsprice/"+price.tld} target="_blank"><PlusSmIcon className="h-5 w-5" aria-hidden="true" /><span className="hidden sm:inline-block hover:underline">more</span></a></div>
         </div>
         ))}
     </div>

   </>
  )
}

function hexonetmore (){
  return(
    <>
    <a className="hover:underline" href="https://hexonet.net/backorder" target="_blank" rel="nofollow">view more</a>
    </>
  )
}

function savmore (){
  return(
    <>
    <a className="hover:underline" href="https://www.sav.com/domains" target="_blank" rel="nofollow">view more</a>
    </>
  )
}
const catchprice = [
  {
    name:'Dropcatch.com',
    price:[
      {type:'Discount Club',tld:'com, net',price:'$11-$58',},
      {type:"Backorder",tld:"com, net",price:"$59",},
       ]
  },
  {
    name:"NameJet.com",
    price:[
    {type:"Backorder",tld:"com, net,org",price:"$79",},
    ]
  },
  {
    name:"SnapNames.com",
    price:[
    {type:"Backorder",tld:"com, net,org",price:"$79",},
    ]
  },
  {
      name:"Sav.com",
      price:[
        {type:"Backorder",tld:"com",price:"$8.95",},
        {type:"Backorder",tld:"net",price:"$9.88",},
        {type:"Backorder",tld:"org",price:"$7.49",},
        {type:"Backorder",tld:"co",price:"$4.99",},
        {type:"Backorder",tld:"io",price:"$29.95",},
        {type:"Backorder",tld:"other",price:savmore (),},
    ]
    },
  {
      name:"Hexonet.net",
      price:[
      {type:"Backorder",tld:"com, net,org",price:"$18.91",},
      {type:"Backorder",tld:"other",price:hexonetmore(),}, 
      ]
    },
]

const Catchdata = () => {

  return (

    <>
      <div className="px-4 text-xs">
        <span className="text-gray-300">* Inclue GoDaddy , Dropcatch and Namejet datas.</span>
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div className="sticky rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2 w-15-50 w-2-10"><span  className="group inline-flex">Platform</span></div>
          <div className="py-2 w-35-50 w-8-10"><span  className="group inline-flex">Pricing </span>
          </div>
        </div>
        {catchprice.map((dom) => (
        <div  className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
          <div className="whitespace-nowrap place-self-center  truncate text-mysm font-semibold text-blue-500 w-15-50 w-2-10">
            <div className="py-2">
              <a className="hover:underline" href={"https://"+dom.name} target="_blank" rel="nofollow">{dom.name}</a>
            </div>
          </div>

          <div className='whitespace-nowrap border-l truncate text-mysm font-semibold text-blue-500 w-35-50 w-8-10'>
            {dom.price.map((myprice) => (
            <div className="flex grid grid-cols-3 text-center border-b break-words">
              <span className="py-2">{myprice.type}  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">{myprice.tld}</span>
              <span className="py-2 text-orange-700 font-medium">{myprice.price}</span>
            </div>
             ))}
          </div>
        </div>
         ))}
      </div>
    </>
  )
}

const Newhidden = () =>{
  return (
    <>
      New
    </>
  )
}
const Renewhidden = () =>{
  return (
    <>
      Renew
    </>
  )
}
const Transferhidden = () =>{
  return (
    <>
      Transfer
    </>
  )
}

const Catchhidden = () =>{
  return (
    <>
      Catch
    </>
  )
}

const Typeselect =[
  {
    id: 1,
    label: <Newhidden />,
    content: <Newdata />,
  },
  {
    id: 2,
    label: <Renewhidden />,
    content: <Renewdata />,
  },
  {
    id: 3,
    label: <Transferhidden />,
    content: <Transferdata />,
  },
  {
    id: 4,
    label: <Catchhidden />,
    content: <Catchdata />,
  },
]




export function PricesComData() {

  return (
    <>

    <div className="min-h-full   md:grid md:place-items-center bg-white rounded-lg relative">
      <div className="max-w-max mx-auto min-w-full">
        <main>
          <div className="max-w-7xl mx-auto pt-2 sm:pt-4 sm:px-4">
            <div className="px-2 mb-8 sm:px-0">
              <div className="">
                <div className="text-gray-500">
                <div className="mx-auto text-base text-blue-green font-medium mb-6">
                  <div className="bg-maincolor p-4 flex grid grid-cols-6">
                    <div className="mx-auto place-self-center">
                      <PriceAuctionIcon />
                    </div>
                    <div className="col-span-4 lg:px-10">
                      <p className="font-bold text-md md:text-xl">Best Domain Registrars, NameServer, SSL, MX provider 2022</p>
                      <p className="hidden lg:block">Find the best domains service provider for you.</p>
                    </div>
                    <div className="mx-auto place-self-center">
                      <PriceCatchIcon />
                    </div>
                  </div> 
                </div>

                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-lg bg-maincolor p-1">
                    {Typeselect.map((category, idx) => (
                      <Tab
                        key={idx}
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-semibold leading-5 text-gray-700',
                            '',
                          selected
                            ? 'bg-white shadow text-green-700'
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
                        key={idx}
                        className='rounded-xl bg-white py-1 px-2'>
                          {post.content}
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
