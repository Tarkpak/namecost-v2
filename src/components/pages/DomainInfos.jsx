/*
  This example requires Tailwind CSS v2.0+ 
*/
import {HomeIcon,  BanIcon,InformationCircleIcon, CheckCircleIcon} from '@heroicons/react/solid'
import {  useState } from 'react'
import {  RadioGroup, Switch } from '@headlessui/react'

const plans = [
  { name: 'Buy It Now', priceMonthly: '1,499',   },
  { name: 'Make An Offer', priceMonthly: 229, },

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Available = () => {
  return (
    <span className="h-5 w-5 rounded-full font-bold  text-green-400">
    <CheckCircleIcon
      className="h-5 w-5"
      aria-hidden="true"
    />
  </span>
  )
}
const Registered = () => {
  return (
    <span className="h-5 w-5 rounded-full font-bold  text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 font-bold">
        <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
      </svg>
    </span>
  )
}
const Stw = () => {
  return (
     <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                          </svg>
    </>
  )
}
const Sfb = () => {
  return (
     <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                          </svg>
    </>
  )
}
const Sytb = () => {
  return (
     <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="4"></rect>
                            <path d="M10 9l5 3l-5 3z"></path>
                          </svg>
    </>
  )
}
const Sins = () => {
  return (
     <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                            <circle cx="12" cy="12" r="3"></circle>
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                          </svg>
    </>
  )
}
const Sin = () => {
  return (
     <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <line x1="8" y1="11" x2="8" y2="16"></line>
                            <line x1="8" y1="8" x2="8" y2="8.01"></line>
                            <line x1="12" y1="16" x2="12" y2="11"></line>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                          </svg>
    </>
  )
}
const Circle1 = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 16v-8l-2 2"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
const Circle2 = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
const Circle3 = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12a2 2 0 1 0 -2 -2"></path>
   <path d="M10 14a2 2 0 1 0 2 -2"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
const Circle4 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M13 16v-8l-4 6h5"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>
  )
}

const domains = [
  {id:1,
    name:'symbolics.com',
    reg_is:'Network Solutions, LLC',
    reg_int:'5',
    reg_start:'1985-03-15',
    reg_end:'2022-03-16',
    reg_year:'37',
    reg_status:'82',
    dns_is:'NS1.AMERINOC.COM;NS2.AMERINOC.COM',
    dns_int:'2820',
    dns_status:'0',
    tld_com:'1',
    tld_org:'0',
    tld_net:'0',
    site_cat:'39',
    site_lan:'',
    site_co:'',
    dom_ds:'42',
    dom_links:'9993',
    dom_doms:'1978',
    ips_a:'64.6.98.185',
    ips_www:'64.6.98.185',
    mx_has:'2',
    mx_is:'10 mail.symbolics.com.',
    cdn_has:'0',
    ssl_has:'2',
    ssl_by:'',
    ssl_to:'symbolics.com;www.symbolics.com;',
    ssl_start:'2022-01-19',
    ssl_end:'2022-04-19',
    site_ads:'0',
    site_title:'Google',
    site_desc:'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of everyday essentials and other products, including fashion, home, beauty, electronics, Alexa Devices, sporting goods, toys, automotive, pets, baby, books, video games, musical instruments, office supplies, and more.',
    site_keys:'Amazon, Amazon.com, Books, Online Shopping, Book Store, Magazine, Subscription, Music, CDs, DVDs, Videos, Electronics, Video Games, Computers, Cell Phones, Toys, Games, Apparel, Accessories, Shoes, Jewelry, Watches, Office Products, Sports & Outdoors, Sporting Goods, Baby Products, Health, Personal Care, Beauty, Home, Garden, Bed & Bath, Furniture, Tools, Hardware, Vacuums, Outdoor Living, Automotive Parts, Pet Supplies, Broadband, DSL',
    site_phone:'',
    site_aff:'',
    site_tw:'share?url=https://symbolics.com/&amp;text=Home',
    site_fb:'',
    site_ins:'aronmeystedt/',
    site_ytb:'',
    site_in:'in/aron-meystedt-b4a03917/',
    archive_first:'1998-12-07',
    archive_all:'2180',
    key_name:'',
    key_status:'',
    key_rank:'',
    status_now:'',
    u_time:'2022-08-08 22:30',
  }
  // More people...
]
const Siteinfos = () => {
  return (
    <>
      <span>
marketglory.com is  year old. 
Marketglory.com registered under .COM top-level domain.The reigstrar is godaddy.com
The da is 42,has 9993 backlins.archive from
The last verification results, performed on (November 28, 2019) marketglory.com show that marketglory.com has an expired SSL certificate issued by Let's Encrypt (expired on January 06, 2020). 
Click “Refresh” button for SSL Information at the Safety Information section. Check the list of websites using SSL certificates issued by Let's Encrypt.
      </span>
    </>
  )
}


function socialWindow(url) {
  var left = (screen.width - 570) / 2
  var top = (screen.height - 570) / 2
  var params =
    'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
    top +
    ',left=' +
    left
  window.open(url, 'NewWindow', params)
}



const article = [{
  id: 1,
  author_name: 'Namecost',
  author_tier: 'Contributing Writer',
  author_desc: `Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
  porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
  purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.`,
  create_time: '2022-08-08 20:18',
  tag: 'domain investing',
  tagurl: 'domain-investing',
  post_url: 'sdfsfhergsdfsd',
  title: 'google.com',
  ad: 1,
  content: `<p>
  Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
  Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
  tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
  `,
}]



export function DomainInfos() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1])
  return (
    <div className="pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex grid lg:grid-cols-4 mx-4 xl:mx-0 bg-white rounded-md">  
          <div className="cos-span-3 px-6 lg:px-12 pb-12 pt-6">
          {/* ---------------top-nav--start-----------------*/}
          <div className="space-x-4 text-gray-400 text-xs pb-6 break-all overflow-clip overflow-hidden">
            <span>
              <a href="/"><HomeIcon className="h-4 w-4" aria-hidden="true"/></a>
            </span>
            <span>{'>'}</span>
            <span>
              <a href='/domains/' target="_blank">Domain Infos</a>
            </span>
            <span>{'>'}</span>
            <span>
            <a href={'/domains/'+domains[0]['name']} >{domains[0]['name']}</a>
            </span>
          </div>
        {/* ---------------top-nav--end--------------*/}
          <div>
            <div className="text-lg">
            {/* -------About Author-----avatar------*/}
            <div className="md:flex space-x-4 pt-4 p-4">
              <div className="hidden md:flex items-center">
                <div 
                  className={classNames(
                    domains[0]['name'] == '0'
                    ? 'bg-green-50 text-center py-1.5 h-28 w-28 text-green-200 mr-2 rounded-full text-8xl font-extrabold uppercase shadow'
                    : 'bg-orange-50 text-center py-1.5 h-28 w-28 text-orange-200 mr-2 rounded-full text-8xl font-extrabold uppercase shadow'
                  )}
                >
                  {domains[0]['name'].slice(0,1)}
                </div>
              </div>
              <div className="md:flex-1 ">
                <div className="font-bold text-xl text-gray-600">
                  <h1>
                    <span className="block text-2xl text-gray-600 font-semibold tracking-wide">
                      {domains[0]['name']}
                    </span>
                  </h1>
                </div>
                <div className=" py-1 text-xs text-gray-400">
                Last Checked: {domains[0]['u_time']}
                </div>
                <div className="text-gray-400 pt-1 text-sm">
                <Siteinfos />
                </div>
              </div>
            </div>
            {/* -------About Author-----------*/}
            <div className="pt-10 block text-gray-500 text-base font-semibold">
              <div><span  className="pb-3 border-b-4 w-24 border-gray-50"><Circle1 /> Web Analysis for <span className="text-green-700 mx-1">{domains[0]['name']}</span></span></div>
            </div>
              {/*site infos start*/}
              <div className="py-8">
                <div className="mt-4 text-sm text-gray-500 font-semibold flex">
                  <div className="bg-gray-400 text-white px-1 lg:px-4 font-bold text-sm lg:text-md text-center flex  rounded-l-md">
                    <div className="place-self-center text-center"><span className="block">Site</span><span className="block">Info</span></div>
                  </div>
                  <div className="flex-1 border border-gray-300">
                    <div className="flex grid md:grid-cols-6">
                      <div className="px-4 py-2 text-center border-r flex bg-gray-50">
                        <p  className="mx-auto place-self-center text-green-700">Title</p>
                      </div>
                      <div className="px-4 py-2 text-center flex md:col-span-5 bg-gray-50">
                        <p className="mx-auto items-center font-normal">{domains[0]['site_title']}</p>
                      </div>
                    </div>
                    <div className="border-t border-b border-gray-200 flex grid md:grid-cols-6">
                      <div className="px-4 py-2 text-center border-r flex">
                        <p  className="mx-auto place-self-center text-green-700">Description</p>
                      </div>
                      <div className="px-4 py-2 text-center flex md:col-span-5">
                        <p className="mx-auto items-center font-normal">{domains[0]['site_desc']}</p>
                      </div>
                    </div>
                    <div className="flex grid md:grid-cols-6 border-b border-gray-200">
                      <div className="px-4 py-2 text-center border-r flex bg-gray-50">
                        <p  className="mx-auto place-self-center text-green-700">Keywords</p>
                      </div>
                      <div className="px-4 py-2 text-center flex md:col-span-5 bg-gray-50">
                        <p className="mx-auto items-center font-normal">{domains[0]['site_keys']}</p>
                      </div>
                    </div>
                    <div className="flex grid md:grid-cols-6">
                      <div className="px-4 py-2 text-center border-r flex">
                        <p  className="mx-auto place-self-center text-green-700">Category</p>
                      </div>
                      <div className="px-4 py-2 text-center flex md:col-span-5">
                        <p className="mx-auto items-center font-normal"><span className="bg-orange-100 font-semibold text-orange-500 px-8 py-1 rounded-lg">{domains[0]['site_cat']}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* site infos  end*/}


            <div className="pt-4 pb-8 block text-gray-500 text-base font-semibold">
              <div><span  className="pb-3 border-b-4 w-24 border-gray-50"><Circle2 /> DA , Achive & Social Media</span></div>
            </div>
            <div className="flex grid lg:grid-cols-3 lg:space-x-4">
            <div className="col-span-2">
            {/* DA INFOS START */}
                {/* header start */}
                <div className="mt-4 text-sm text-gray-400 font-semibold flex grid sm:grid-cols-6">
                  <div className="bg-gray-400 col-span-2 text-white lg:px-4 md:font-bold text-xs md:text-sm py-1.5  text-center rounded-t-md">
                    <span>DA</span>
                  </div>
                  <div className="sm:col-span-4">
                    <p></p>
                  </div>
                </div>
                  {/* header end */}
                <div className="border-t border-r border-l">

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 col-span-2 text-center border-r flex bg-gray-50">
                    <p  className="mx-auto items-center">Domain Authority</p>
                  </div>
                  <div className="py-2 col-span-4   flex bg-gray-50">
                    <p className="mx-auto place-self-center"><span className="px-8 py-1 rounded-lg bg-orange-600  text-white">{domains[0]['dom_ds']}</span></p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 col-span-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Backlinks:</p>
                  </div>
                  <div className="py-2 col-span-4   flex">
                    <p className="mx-auto place-self-center font-normal"><span className="px-8 py-1 font-semibold rounded-lg bg-orange-500  text-white">{domains[0]['dom_links']}</span></p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 col-span-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Referring Domains:</p>
                  </div>
                  <div className="py-2 col-span-4   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal"><span className="px-8 py-1 font-semibold rounded-lg bg-orange-500  text-white">{domains[0]['dom_doms']}</span></p>
                  </div>
                </div>               

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 col-span-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Archive From</p>
                  </div>
                  <div className="py-2 col-span-4   flex">
                    <p className="mx-auto place-self-center font-normal"><span className="px-8 py-1 font-semibold rounded-lg bg-green-500 text-white">{domains[0]['archive_first']}</span></p>
                  </div>
                </div> 

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 col-span-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Archive Nums</p>
                  </div>
                  <div className="py-2 col-span-4   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal"><span className="px-8 py-1 font-semibold rounded-lg bg-green-500 text-white">{domains[0]['archive_all']}</span></p>
                  </div>
                </div> 

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 col-span-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Root A Record</p>
                  </div>
                  <div className="py-2 col-span-4   flex">
                    <p className="mx-auto place-self-center font-normal">{domains[0]['ips_a']}</p>
                  </div>
                </div> 

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 col-span-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">WWW A Record</p>
                  </div>
                  <div className="py-2 col-span-4   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal">{domains[0]['ips_www']}</p>
                  </div>
                </div> 

                </div>
              {/* DA INFOS START */}
              </div>

              <div>
            {/* SOCIAL INFOS START */}
                {/* header start */}
                <div className="mt-4 text-sm text-gray-400 font-semibold flex grid sm:grid-cols-2">
                  <div className="bg-gray-400 text-white lg:px-4 md:font-bold text-xs md:text-sm py-1.5  text-center rounded-t-md">
                    <span>Social</span>
                  </div>
                  <div className="">
                    <p></p>
                  </div>
                </div>
                  {/* header end */}
                <div className="border-t border-r border-l">

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2  border-b">
                  <div className="py-2 text-center border-r flex bg-gray-50">
                    <p  className="mx-auto items-center">Twitter</p>
                  </div>
                  <div className="py-2    flex bg-gray-50">
                    <p className="mx-auto place-self-center">{domains[0]['site_tw'] ? <a href={'https:/>/twitter.com/'+domains[0]['site_tw']} target="_blank"><Stw /></a>  : null}</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2  border-b">
                  <div className="py-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Facebook</p>
                  </div>
                  <div className="py-2    flex">
                    <p className="mx-auto place-self-center">  {domains[0]['site_fb'] ? <a href={domains[0]['site_fb']} target="_blank"><Sfb /> </a> : null}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Instagram</p>
                  </div>
                  <div className="py-2    flex bg-gray-50">
                    <p className="mx-auto place-self-center">  {domains[0]['site_ins'] ? <a href={domains[0]['site_ins']} target="_blank"><Sins /></a>  : null }</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2 border-b">
                  <div className="py-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Youtube</p>
                  </div>
                  <div className="py-2    flex">
                    <p className="mx-auto place-self-center"> {domains[0]['site_ytb'] ?  <a href={domains[0]['site_ytb']} target="_blank"><Sytb /></a> : null }</p>
                  </div>
                </div> 

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Linkein</p>
                  </div>
                  <div className="py-2    flex bg-gray-50">
                    <p className="mx-auto place-self-center"> {domains[0]['site_in'] ? <a href={domains[0]['site_in']} target="_blank"><Sin /></a>   : null }</p>
                  </div>
                </div>                

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2 border-b">
                  <div className="py-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Phone</p>
                  </div>
                  <div className="py-2    flex">
                    <p className="mx-auto place-self-center font-normal">
                      {domains[0]['site_phone']}
                    </p>
                  </div>
                </div> 

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-2 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Language</p>
                  </div>
                  <div className="py-2    flex bg-gray-50">
                    <p className="mx-auto place-self-center">
                      {domains[0]['site_lan']}
                    </p>
                  </div>
                </div> 

                </div>
              {/* SOCIAL INFOS START */}
              </div>
            </div>



            <div className="pt-8 pb-12 block text-gray-500 text-base font-semibold">
                <div><span  className="pb-3 border-b-4 w-24 border-gray-50"><Circle3 /> MX , SSL & CND</span></div>
              </div>
              {/* register infos  start*/}
              <div className="flex grid md:grid-cols-3 border text-sm md:text-md font-semibold text-gray-500 md:text-white md:rounded-t-lg">
                <div className="flex grid grid-cols-4 md:grid-cols-none md:flex-none">
                  <div className="px-4 py-2  text-center md:bg-gray-400 border-r md:border-r-0 col-span-3 md:col-span-full">
                    MX
                  </div>
                  <div className="px-4 py-2  text-center border-r">
                    {domains[0]['mx_has'] == 0 ? <Registered /> : <Available />}
                  </div>
                </div>
                <div className="flex grid grid-cols-4 md:grid-cols-none md:flex-none border-t border-b md:border-t-0 md:border-b-0">
                  <div className="px-4 py-2  text-center  md:bg-gray-400 border-r md:border-r-0 col-span-3 md:col-span-full">
                    SSL
                  </div>
                  <div className="px-4 py-2  text-center border-r">
                        {domains[0]['ssl_has'] == 0 ? <Registered /> : <Available />}
                  </div>
                </div>
                <div className="flex grid grid-cols-4 md:grid-cols-none md:flex-none">
                  <div className="px-4 py-2  text-center md:bg-gray-400 border-r md:border-r-0 col-span-3 md:col-span-full">
                    CDN
                  </div>
                  <div className="px-4 py-2  text-center border-r">
                  {domains[0]['cdn_has'] == 0 ? <Registered /> : <Available />}
                  </div>
                </div>
              </div>
              {/* register infos  end*/}


              <div className="">
            {/* MX INFOS START */}
                {/* header start */}
                <div className="mt-8 text-sm text-gray-400 font-semibold flex grid sm:grid-cols-6">
                  <div className="bg-gray-300 text-white lg:px-4 md:font-bold text-xs md:text-sm py-1.5  text-center rounded-t-md  col-span-2">
                    <span>MX</span>
                  </div>
                  <div className="sm:col-span-4">
                    <p></p>
                  </div>
                </div>
                  {/* header end */}
                <div className="border-t border-r border-l">

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 text-center border-r flex bg-gray-50 col-span-2">
                    <p  className="mx-auto items-center">Priority & Target</p>
                  </div>
                  <div className="py-2 col-span-4   flex">
                    <p className="mx-auto place-self-center font-normal text-gray-500">{domains[0]['mx_is']}</p>
                  </div>
                </div>
               
                </div>
              {/* MX INFOS END */}
              </div>

              <div className="">
            {/* SSL INFOS START */}
                {/* header start */}
                <div className="mt-8 text-sm text-gray-400 font-semibold flex grid sm:grid-cols-6">
                  <div className="bg-gray-300 text-white lg:px-4 md:font-bold text-xs md:text-sm py-1.5  text-center rounded-t-md">
                    <span>SSL</span>
                  </div>
                  <div className="sm:col-span-5">
                    <p></p>
                  </div>
                </div>
                  {/* header end */}
                <div className="border-t border-r border-l">

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 text-center border-r flex bg-gray-50">
                    <p  className="mx-auto items-center">Issuer</p>
                  </div>
                  <div className="py-2 col-span-5   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['ssl_by']}</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Issued To</p>
                  </div>
                  <div className="py-2 col-span-5   flex">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['ssl_to']}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Valid form</p>
                  </div>
                  <div className="py-2 col-span-5   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['ssl_start']}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Expiration</p>
                  </div>
                  <div className="py-2 col-span-5   flex">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['ssl_end']}</p>
                  </div>
                </div>     

                </div>
              {/* SSL INFOS END */}
              </div>


              <div className="pt-8 pb-12 block text-gray-500 text-base font-semibold">
                <div><span  className="pb-3 border-b-4 w-24 border-gray-50"><Circle4 /> Whois Infos</span></div>
              </div>

              {/* register infos  start*/}
              <div className="flex grid md:grid-cols-3 border text-sm md:text-md font-semibold text-gray-500 md:text-white md:rounded-t-lg">
                <div className="flex grid grid-cols-4 md:grid-cols-none md:flex-none">
                  <div className="px-4 py-2  text-center md:bg-gray-400 border-r md:border-r-0 col-span-3 md:col-span-full">
                    {domains[0]['name'].substring(0, domains[0]['name'].indexOf("."))+'.com'}
                  </div>
                  <div className="px-4 py-2  text-center border-r bg-gray-50">
                    {domains[0]['tld_com'] == 0 ? <Available /> : <Registered />}
                  </div>
                </div>
                <div className="flex grid grid-cols-4 md:grid-cols-none md:flex-none border-t border-b md:border-t-0 md:border-b-0">
                  <div className="px-4 py-2  text-center  md:bg-gray-400 border-r md:border-r-0 col-span-3 md:col-span-full">
                    {domains[0]['name'].substring(0, domains[0]['name'].indexOf("."))+'.org'}
                  </div>
                  <div className="px-4 py-2  text-center border-r bg-gray-50">
                        {domains[0]['tld_org'] == 0 ? <Available /> : <Registered />}
                  </div>
                </div>
                <div className="flex grid grid-cols-4 md:grid-cols-none md:flex-none">
                  <div className="px-4 py-2  text-center md:bg-gray-400 border-r md:border-r-0 col-span-3 md:col-span-full">
                    {domains[0]['name'].substring(0, domains[0]['name'].indexOf("."))+'.net'}
                  </div>
                  <div className="px-4 py-2  text-center border-r bg-gray-50">
                  {domains[0]['tld_net'] == 0 ? <Available /> : <Registered />}
                  </div>
                </div>
              </div>
              {/* register infos  end*/}

                <div className="">
            {/* WHOIS INFOS START */}
                {/* header start */}
                <div className="mt-8 text-sm text-gray-400 font-semibold flex grid sm:grid-cols-6">
                  <div className="bg-gray-300 text-white lg:px-4 md:font-bold text-xs md:text-sm py-1.5  text-center rounded-t-md">
                    <span>Whois</span>
                  </div>
                  <div className="sm:col-span-5">
                    <p></p>
                  </div>
                </div>
                  {/* header end */}
                <div className="border-t border-r border-l">

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 text-center border-r flex bg-gray-50">
                    <p  className="mx-auto items-center">Name</p>
                  </div>
                  <div className="py-2 col-span-5   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['name']}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 text-center border-r flex">
                    <p  className="mx-auto items-center">Registrar</p>
                  </div>
                  <div className="py-2 col-span-5   flex">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['reg_is']}</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6  border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Created</p>
                  </div>
                  <div className="py-2 col-span-5   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['reg_start']}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Expired</p>
                  </div>
                  <div className="py-2 col-span-5   flex">
                    <p className="mx-auto place-self-center font-normal  text-gray-500">{domains[0]['reg_end']}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Years Old</p>
                  </div>
                  <div className="py-2 col-span-5   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal"><span className="px-8 py-1 font-semibold rounded-lg bg-green-100 text-green-700">{domains[0]['reg_year']}</span></p>
                  </div>
                </div>

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 text-center border-r flex flex">
                    <p  className="mx-auto items-center">Name Servers</p>
                  </div>
                  <div className="py-2 col-span-5   flex">
                    <p className="mx-auto place-self-center font-normal">{domains[0]['dns_is']}</p>
                  </div>
                </div> 

                <div className="text-sm text-gray-400 font-semibold flex grid grid-cols-6 border-b">
                  <div className="py-2 text-center border-r flex flex bg-gray-50">
                    <p  className="mx-auto items-center">Status</p>
                  </div>
                  <div className="py-2 col-span-5   flex bg-gray-50">
                    <p className="mx-auto place-self-center font-normal">{domains[0]['reg_status']}</p>
                  </div>
                </div>                

                </div>
              {/* WHOIS INFOS END */}
              </div>

                {/* infos2 */}
              </div>
            </div>
            {/* -------Content------------*/}

          </div>
          {/* ---------------Left End--------------------------*/}
          {/* ---------------Right Begain--------------------------*/}
          <div className="pt-28 w-full lg:h-screen">
            <a className="sticky top-0 " href="" target="_blank">
            <div className="rounded-md shadow p-4 mr-8 bg-gray-100">
              <div>
                <span className="uppercase bg-gray-500 text-white p-1 rounded-lg text-xs font-bold">Domain Taken</span>
              </div>
              <div className="py-3">
                <BanIcon className="h-6 w-6 text-gray-500" aria-hidden="true"/><span className="text-gray-500 text-2xl lg:ml-4 font-semibold">{domains[0]['name']}</span>
              </div>
              <div className="pl-4">
                <span className="text-xs text-gray-500">We might be able to help you get it. <br></br><a className="underline font-semibold"  >See How</a></span>
              </div>


              <div className="grid justify-items-center">
                <div >

                  <div class="bg-orange-50 text-center py-1.5 h-24 w-24 text-orange-500 mr-2 rounded-full text-xl font-extrabold uppercase shadow mx-auto">
                    <div>
                      <span className="line-through text-xs text-gray-500">$99.9</span>
                      <span className="px-1" title="Pricing.When you purchase our Domain Broker Service, you get a dedicated broker who will contact the current domain owner and negotiate a sale price on your behalf. "><InformationCircleIcon className="h-4 w-4 text-gray-500" aria-hidden="true"/></span>
                    </div>
                    <div> <span>$19.99</span></div>
                  </div>

                  <div className="text-gray-500 text-xs font-semibold pt-2">
                    <span >Broker Service Fee</span>
                  </div>
                </div>
                </div>
                

                
              </div>
              </a>





            </div>

          {/* ---------------Right End--------------------------*/}
        </div>

      </div>
    </div>
  )
}
  