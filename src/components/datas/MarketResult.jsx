/* This example requires Tailwind CSS v2.0+ */
import { ToolExcelInput } from '@/components/common/ToolExcelInput'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
import { DatasExcelMenuDa } from '@/components/common/datas/DatasExcelMenuDa'
import { DatasExcelMenuBl } from '@/components/common/datas/DatasExcelMenuBl'
import { DatasExcelMenuRd } from '@/components/common/datas/DatasExcelMenuRd'
import { DatasExcelMenuBidnow } from '@/components/common/datas/DatasExcelMenuBidnow'
import { DatasExcelMenuYears } from '@/components/common/datas/DatasExcelMenuYears'
import { DatasExcelMenuAby } from '@/components/common/datas/DatasExcelMenuAby'


const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'https://www.usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '2', name: 'abcdeqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '3', name: 'ijklmnopqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '4', name: 'abtuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '5', name: 'efghijklmnopqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '6', name: 'eqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '7', name: 'defghijklmnopqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '8', name: 'aeqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '9', name: 'imnopqrstuvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '10', name: 'uvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '11', name: 'uvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '12', name: 'uvwxyz.com',place:'hd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',DomValued:'1998',askbid:'655,555' ,inkeys:'8',golink:'usa',aby: 2020,word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MarketResult() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full  border-collapse text-center flex rounded-t-lg bg-gray-500">

              <ToolExcelInput className=" w-2-50 w-1-10 py-2 text-sm" />
              <ToolExcelMenu className="w-14-50 w-4-10 py-2 text-sm" titles="Domain" selectornot="" />
              <ToolExcelMenu className="w-5-50 w-1-10 py-2 text-sm" titles={<DatasExcelMenuDa />} selectornot="" />
              <ToolExcelMenu className="w-7-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuBl />} selectornot="" />
              <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuRd />} selectornot="" />
              <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuYears />} selectornot="" />
              <ToolExcelMenu className="w-5-50 hidden md:block py-2 text-sm" titles={<DatasExcelMenuAby />} selectornot="" />
              <ToolExcelMenu className="w-7-50 w-3-10 py-2 text-sm" titles={<DatasExcelMenuBidnow />} selectornot="" />


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
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-14-50 truncate text-left sm:pl-4 w-4-10">
                        <a href={dom.golink} target="_blank" className="hover:underline" rel="nofollow" title={dom.name}>
                          {dom.name}
                        </a>
                      </div>
                      <div className={classNames(
                          dom.da > 35 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-5-50 truncate w-1-10' : 'whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-5-50 truncate w-1-10'
                        )}> 
                        {dom.da}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-7-50 truncate hidden md:block">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block">{dom.domainpop}</div>
                      <div className={classNames(
                          dom.year > 20 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block'
                        )}> 
                        {dom.year}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 hidden md:block" title={dom.aby}>{dom.aby}</div>
                      <div className={classNames(
                          (dom.askbid).replace(',','') > 5000 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-7-50 truncate w-3-10' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-7-50 truncate w-3-10'
                        )}> 
                        ${dom.askbid}
                      </div>
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
