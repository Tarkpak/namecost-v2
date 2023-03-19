/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PencilAltIcon,DownloadIcon} from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'
import { ToolExcelMenuBrand } from '@/components/common/ToolExcelMenuBrand'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'

const brands = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', da: '100/100', backlink: '100/100', domainpop: '100/100', year: '100/100',archiveby:'100/100',inkeys:'8',cat:'search engine search engine search engine search engine',dropdate:'2022-08-08'},
]
const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '2', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '3', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '4', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '5', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '6', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '7', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'',sell:'S'},
  {id: '8', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '9', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '10', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  {id: '11', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',buy:''},
  {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com', type: 'include', registrar: 'godaddy.com inc', registrant: 'sdggdsgsdfsdfsdfs@gmail.com', regdate: '08-08-2022',enddate:'08-08-2026',nameserver:'NS1.BODIS.COM;NS2.BODIS.COM' ,park:'P',sell:'S'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BrandItems() {
  return (
    <div>

        <dl className="space-y-6">
          <Disclosure as="div" className="">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
                        <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight px-4">
                          <PencilAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                          <span className="ml-2">
                            Brand Monitor ( <span className="text-green-500">90) </span> Left.<span className="text-gray-500 font-base">Click here to submit</span>
                          </span>
                        </h3>
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
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <div className="">
                    {/* submit your brands   --------START----------*/}
                    <form className="my-6 sm:mx-auto sm:flex space-x-2 sm:px-6">
                      <div className=" flex-1 md:mr-12">
                        <div className="mt-1">
                          <textarea
                            rows={6}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
                            placeholder="Enter a list of brands no more than 100"
                        />
                        </div>
                      </div>
                      <div className="flex items-center">
                      <div className="mt-4 sm:mt-0 !md:ml-12 align-bottom">
                        <div className="pb-2">
                          <p className="leading-8 text-gray-400 font-medium text-center">Example<br></br>
                            example.com<br></br>
                            example.net<br></br>
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="block w-full rounded-md border border-transparent px-5 py-2 bg-filter text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10"
                        >
                          Submit
                        </button>
                      </div>
                      </div>
                    </form>
                    {/* submit your brands   --------END----------*/}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
          </Disclosure>
          
        </dl>

      {/* submitted your brands  --------START----------*/}
      <div className="my-4">
      </div>
      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full divide-y divide-gray-100 border-collapse text-center flex bg-green-50">
                <ToolExcelMenuBrand className="text-green-700 w-11-50 w-3-10" titles="Brand Name" />
                <ToolExcelMenuBrand className="text-green-700 w-5-50 w-1-10" titles="TLD" />
                <ToolExcelMenuBrand className="text-green-700 w-5-50 w-2-10" titles="Include" />
                <ToolExcelMenuBrand className="text-green-700 w-5-50 w-2-10" titles="Typo" />
                <ToolExcelMenuBrand className="text-green-700 w-5-50 w-1-10" titles="Phish" />
                <ToolExcelMenuBrand className="text-green-700 w-10-50 hidden md:block" titles="Company" />
                <ToolExcelMenuBrand className="text-green-700 w-5-50 w-1-10" titles="Date" />
                <ToolExcelMenuBrand className="text-green-700 w-4-50 hidden md:block" titles="View" />

              </div>
              <div className="bg-white">
                  {brands.map((brand) => (
                    <div key={brand.id} className="min-w-full  border-collapse text-center flex">
                      <div className="whitespace-normal py-2 text-mysm font-semibold text-blue-500 border border-green-100 w-11-50 text-left sm:pl-4 w-3-10 flex">
                        <span className="break-all place-self-center">
                        {brand.name}
                        </span>
                      </div>
                      <div className="whitespace-nowrap py-2 text-sm font-semibold font-medium text-orange-700 border border-green-100 w-5-50 truncate w-1-10 flex"><span className="mx-auto place-self-center">{brand.da}</span></div>
                      <div className="whitespace-nowrap py-2 text-sm font-semibold text-orange-700 border border-green-100 w-5-50 truncate w-2-10 flex"><span className="mx-auto place-self-center">{brand.backlink}</span></div>
                      <div className="whitespace-nowrap py-2 text-sm font-semibold text-orange-700 border border-green-100 w-5-50 truncate w-2-10 flex"><span className="mx-auto place-self-center">{brand.domainpop}</span></div>
                      <div className="whitespace-nowrap py-2 text-sm font-semibold text-orange-700 border border-green-100 w-5-50 truncate w-1-10 flex"><span className="mx-auto place-self-center">{brand.year}</span></div>
                      <div className="whitespace-normal py-2 text-xs font-semibold text-blue-400 border border-green-100 w-10-50 text-left pl-4 hidden md:block break-words">{brand.cat}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-semibold text-gray-500 border border-green-100 w-5-50 w-1-10 flex"><span className="mx-auto place-self-center">{brand.dropdate}</span></div>
                      <div className="whitespace-nowrap py-2 text-xs font-semibold text-gray-500 hover:text-gray-700 border-t border-b border-l border-green-100 w-4-50 hidden md:flex">
                        <div className="mx-auto place-self-center">
                        <button type="submit" >
                          <DownloadIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your brands  --------END----------*/}

      {/* submitted your domains  --------START----------*/}
      <div className="py-4">
      </div>
      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500 rounded-t-lg">
                <ToolExcelMenu className="w-10-50 w-3-10 py-2 text-sm" titles="Domain" selectornot="" />
                <ToolExcelMenu className="w-3-50 w-1-10 py-2 text-sm" titles="Type" selectornot="" />
                <ToolExcelMenu className="w-7-50 w-2-10 py-2 text-sm" titles="Registrar" selectornot="" />
                <ToolExcelMenu className="w-9-50 w-2-10 py-2 text-sm" titles="Registrant" selectornot="" />
                <ToolExcelMenu className="w-7-50 hidden md:block py-2 text-sm" titles="NameServer" selectornot="" />
                <ToolExcelMenu className="w-5-50 w-1-10 py-2 text-sm" title="RegDate" selectornot="" />
                <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles="EndDate" selectornot="" />
                <ToolExcelMenu className="w-2-50 hidden md:block py-2 text-sm" titles="P" selectornot="" />
                <ToolExcelMenu className="w-2-50 hidden md:block py-2 text-sm" titles="S" selectornot="" />

              </div>
              <div className="bg-white">
                  {domains.map((dom) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-10-50 truncate text-left sm:pl-4 w-3-10">
                        <a href={"/domains/"+dom.name} className="hover:underline" title={dom.name} target="_blank">
                          {dom.name}
                        </a>
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-3-50 truncate w-1-10">{dom.type}</div>
                      <div className="whitespace-nowrap px-1 py-2 text-xs text-gray-500 border border-gray-200 w-7-50 truncate w-2-10">{dom.registrar}</div>
                      <div className="whitespace-nowrap px-1 py-2 text-xs text-gray-500 border border-gray-200 w-9-50 truncate w-2-10">{dom.registrant}</div>
                      <div className="whitespace-nowrap px-1 py-2 text-xs text-gray-500 border border-gray-200 w-7-50 truncate hidden md:block">{dom.nameserver}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-1-10">{dom.regdate}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block">{dom.enddate}</div>
                      <div className="whitespace-nowrap p-2 text-xs text-gray-500 border border-gray-200 w-2-50 flex items-center justify-center uppercase">
                        <span className={classNames(
                          dom.park ? 'md:block rounded-full bg-orange-100 h-5 w-5 text-orange-700 font-bold' : 'md:block rounded-full bg-green-100 h-5 w-5 text-orange-700 font-bold'
                        )}>
                          {dom.park}
                        </span>
                      </div>
                      <div className="whitespace-nowrap p-2 text-xs text-gray-500 border-t border-b border-l border-gray-200 w-2-50 flex items-center justify-center uppercase">
                        <span className={classNames(
                          dom.sell ? 'md:block rounded-full bg-orange-100 h-5 w-5 text-orange-700 font-bold' : 'md:block rounded-full bg-green-100 h-5 w-5 text-orange-700 font-bold'
                        )}>
                          {dom.sell}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your domains  --------END----------*/}
        <Pagination start={1} end={50} all={105} num1={50} num2={100} num3={200}/>
      </div>
  )
}
