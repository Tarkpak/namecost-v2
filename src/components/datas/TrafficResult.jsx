/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { DatasExcelMenuTraffic } from '@/components/common/datas/DatasExcelMenuTraffic'
import { DatasExcelMenuRev } from '@/components/common/datas/DatasExcelMenuRev'
import { DatasExcelMenuDa } from '@/components/common/datas/DatasExcelMenuDa'
import { DatasExcelMenuBl } from '@/components/common/datas/DatasExcelMenuBl'
import { DatasExcelMenuRd } from '@/components/common/datas/DatasExcelMenuRd'
import { DatasExcelMenuBidnow } from '@/components/common/datas/DatasExcelMenuBidnow'
import { DatasExcelMenuValued } from '@/components/common/datas/DatasExcelMenuValued'
import { DatasExcelMenuYears } from '@/components/common/datas/DatasExcelMenuYears'

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'https://www.usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '10', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '11', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '13', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '14', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '15', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '16', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '17', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '18', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '19', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  {id: '111', name: 'abcdefghijklmnopqrstuvwxyz.com',  da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'6,998',askbid:'655,555' ,golink:'usa',traffic:'1,000', renevue:'1,025',tld:'com',within:'',dropdate:'2022-08-08'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TrafficResult() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full  border-collapse text-center flex rounded-t-lg bg-gray-500">

              <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
              <ToolExcelMenu className="w-11-50 w-3-10 py-2 text-sm" titles="Domain" selectornot="" />
              <ToolExcelMenu className="w-4-50 w-2-10 py-2 text-sm" titles={<DatasExcelMenuTraffic />} selectornot="" />
              <ToolExcelMenu className="w-4-50 w-2-10 py-2 text-sm" titles={<DatasExcelMenuRev />} selectornot="" />
              <ToolExcelMenu className="w-3-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuDa />} selectornot="" />
              <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuBl />} selectornot="" />
              <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuRd />} selectornot="" />
              <ToolExcelMenu className="w-3-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuYears selectornot="" />} />
              <ToolExcelMenu className="w-4-50 w-2-10 py-2 text-sm" titles={<DatasExcelMenuBidnow />} selectornot="" />
              <ToolExcelMenu className="w-4-50 hidden md:block  py-2 text-sm" titles={<DatasExcelMenuValued />} selectornot="" />
              <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles="ED" selectornot="" />

              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-center w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-11-50 truncate text-left sm:pl-4 w-3-10">
                        <a href={dom.golink} title={dom.name} target="_blank" className="hover:underline" rel="nofollow">
                          {dom.name}
                        </a>
                      </div>
                      <div className={
                        (dom.traffic).replace(',','') >3000
                        ? 'whitespace-nowrap py-2 text-xs text-green-500 border border-gray-200 w-4-50 truncate w-2-10 font-semibold'
                        : "whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate w-2-10"       
                      }>
                      {dom.traffic}
                      </div>
                      <div className={
                        (dom.renevue).replace(',','') >100
                        ? 'whitespace-nowrap py-2 text-xs text-purple-700 border border-gray-200 w-4-50 truncate w-2-10 font-semibold'
                        : "whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate w-2-10"       
                      }>

                        ${dom.renevue}
                      </div>
                      <div className={classNames(
                          dom.da > 35 ? 'whitespace-nowrap py-2 text-xs text-green-700 font-semibold border border-gray-200 w-3-50 truncate hidden md:block' : 'whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block'
                        )}> 
                        {dom.da}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block">{dom.domainpop}</div>
                      <div className={classNames(
                          dom.year > 20 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block'
                        )}> 
                        {dom.year}
                      </div>
                      <div className={classNames(
                          dom.askbid.replace(',','') > 2000 ? 'text-orange-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate w-2-10' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate w-2-10'
                        )}> 
                        ${dom.askbid}
                      </div>
                      <div className={classNames(
                          (dom.DomValued).replace(',','') > 5000 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate hidden md:block' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate hidden md:block'
                        )}> 
                        ${dom.DomValued}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-t border-b border-l border-gray-200 w-5-50 hidden md:block">{dom.dropdate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
