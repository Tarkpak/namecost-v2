/* This example requires Tailwind CSS v2.0+ */

import { LockClosedIcon,LockOpenIcon,ExternalLinkIcon , SearchIcon,SelectorIcon } from '@heroicons/react/solid'
import { PriceAuctionIcon } from '@/components/common/PriceAuctionIcon'
import { PriceBitcoinIcon} from '@/components/common/PriceBitcoinIcon'
import { PriceCatchIcon } from '@/components/common/PriceCatchIcon'
import { PriceCouponIcon } from '@/components/common/PriceCouponIcon'
import { PriceWhoisPrivayIcon } from '@/components/common/PriceWhoisPrivayIcon'

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


const Pricedata = () => {

  return (
    <>
    <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
     <span className="text-gray-400 place-self-center">* <PriceBitcoinIcon /> = Accept Bitcoin , <PriceWhoisPrivayIcon /> = Free Whois Privacy , <PriceCouponIcon /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>
     <form method="POST" action="">
        <div className="rounded-md border border-gray-300 mx-4  text-center place-self-center hidden md:flex">
          <div className="relative border-r border-gray-300 flex flex-grow items-stretch focus-within:z-10">
            <input
              type=""
              name="domainkeyword"
              id="domainkeyword"
              className="block w-full rounded-none placeholder-gray-300 border-none focus:outline-none focus:border-transparent focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-200 px-4 lg:px-20 sm:text-sm"
              placeholder="Please enter a extension"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <SearchIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
          </button>
        </div>
      </form>
     </div>        
     <div className="sm:px-4 pb-8 pt-2">
       <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
         <div className="py-2  w-12-50 w-3-10">
           <span  className="group inline-flex">
             Registrar
           </span>
         </div>
         <div className="py-2 w-8-50 w-4-10">
           <span  className="align-center py-1 px-2">
            <LockClosedIcon className="h-4 w-4 text-gray-300 mr-2" aria-hidden="true" /> New
           </span>
         </div>
         <div className="py-2 w-8-50 w-3-10">
          <form>
          <span  className="align-center py-1 px-2">
            <LockOpenIcon className="h-4 w-4 text-gray-300 mr-2" aria-hidden="true" />  New<SelectorIcon className="h-5 w-5 text-gray-300 hover:text-gray-200" aria-hidden="true" />
           </span>
          </form>
         </div>
         <div className="py-2 w-11-50 hidden md:block">
          <form>
          <span  className="align-center py-1 px-2">
             Renew<SelectorIcon className="h-5 w-5 text-gray-300 hover:text-gray-200" aria-hidden="true" />
           </span>
          </form>
         </div>
         <div className="py-2 w-11-50 hidden md:block">
          <form>
          <span  className="align-center py-1 px-2">
             Transfer<SelectorIcon className="h-5 w-5 text-gray-300 hover:text-gray-200" aria-hidden="true" />
           </span>
          </form>
         </div>
       </div>

       {pricesdatas.map((price) => (
         <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
           <div className="whitespace-nowrap py-4 border-r truncate text-mysm font-semibold text-blue-500 w-12-50 w-3-10">
            <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
              <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
              {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><PriceBitcoinIcon /></span> : null} 
              {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><PriceWhoisPrivayIcon /></span>:null }
            </span>
           </div>

           <div className='whitespace-nowrap py-4 border-r truncate w-8-50 w-4-10'>
              {price.code ? <span className="mr-4"><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold"><span className="">${price.regs}</span></span></span> : null}
              {price.code ? <button type="button" className="relative"><span onClick={(e) => {HandleCopy(e,price.code)}} title={'Click to copy the Coupon : '+price.code}><PriceCouponIcon /></span></button> : null}

            </div>

            <div className='whitespace-nowrap py-4 border-r truncate w-8-50 w-3-10'>
              <div className="">
                <div className=""><span className="text-green-700 bg-maincolor py-1 px-3 rounded-md font-semibold"><span className="">${price.regs}</span></span></div>
              </div>
           </div>

           <div className='whitespace-nowrap py-4 border-r truncate w-11-50 hidden md:block flex'>
           <div className="">
                <span className="mr-4"><span className="py-1 rounded-md sm:font-semibold text-green-700"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></span>
                {price.code ? <span className=""><button type="button" className="relative"><span onClick={(e) => {HandleCopy(e,price.code)}} title={'Click to copy the Coupon : '+price.code}><PriceCouponIcon /></span></button></span> : null}
             </div>
           </div>
           <div className='whitespace-nowrap py-4  truncate w-11-50 hidden md:block'>
             <div className="">
                <span className="mr-4"><span className="py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></span>
                {price.code ? <span className=""><button type="button" className="relative"><span onClick={(e) => {HandleCopy(e,price.code)}} title={'Click to copy the Coupon : '+price.code}><PriceCouponIcon /></span></button></span> : null}
             </div>
           </div>
         </div>
         ))}
     </div>

   </>
  )
}





export function TldData() {

  return (
    <>

    <div className="min-h-full   md:grid md:place-items-center bg-white rounded-lg relative">
      <div className="max-w-max mx-auto min-w-full">
        <main>
          <div className="max-w-7xl mx-auto pt-2 sm:pt-4 sm:px-4">
            <div className="px-2 mb-8 sm:px-0">
              <div className="">
                <div className="text-gray-500">
                <div className="mx-auto text-base text-blue-green font-medium mb-2">
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
                <Pricedata />

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
