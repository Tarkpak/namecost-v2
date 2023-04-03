/* This example requires Tailwind CSS v2.0+ */

import { BannerWords } from '@/components/common/BannerWords'
import { MyTypeSelect } from '@/components/common/MyTypeSelect'
import { ToolExcelMenuHome } from '@/components/common/ToolExcelMenuHome'
import { dateTimeFormat } from '@/utils/time'
const aucdoms = [
  {
    id: '1',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 10,
    backlink: 12345678901,
    years: 18,
    askbid: '3,025',
    strvalue: '1,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '11',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '12',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '13',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '14',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '15',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '16',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '17',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '2,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '18',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '2,025',
    strvalue: '3,135',
    aby: 1987,
    rank: 1000,
    dropdate: '08-08-2022',
  },
]

const expdoms = [
  {
    id: '1',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    da: 100,
    backlink: 12345678901,
    rd: 11123,
    years: 18,
    aby: 1990,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '12',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    da: 100,
    backlink: 12345678901,
    rd: 12356,
    years: 18,
    aby: 2020,
    rank: 1000,
    dropdate: '08-08-2022',
  },
]

const tradoms = [
  {
    id: '1',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    traffic: '1,000',
    renevue: '1,025',
    askbid: '2,025',
    strvalue: '3,135',
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '12',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    traffic: '10,000',
    renevue: '1,025',
    askbid: '2,025',
    strvalue: '3,135',
    rank: 1000,
    dropdate: '08-08-2022',
  },
]

const mardoms = [
  {
    id: '1',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'godaddy',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '11,025',
    aby: 2000,
    rank: 1000,
    dropdate: '08-08-2022',
  },
  {
    id: '12',
    name: 'abcdefghijklmnopqrstuvwxyz.com',
    platform: 'hugedomains',
    golink: 'https://www.usa',
    da: 100,
    backlink: 12345678901,
    years: 18,
    askbid: '1,025',
    aby: 2000,
    rank: 1000,
    dropdate: '08-08-2022',
  },
]

const Expireds = ({ domains }) => {
  return (
    <>
      <div className="px-4 text-xs">
        <span className="text-gray-300">
          * Inclue Godaddy , Dropcatch and Namejet datas.
        </span>
        <span className="text-blue-green pl-4 pr-4 text-sm font-semibold underline hover:font-bold hover:text-green-700 sm:float-right sm:pl-0">
          <a href="/expireddomains" target="_blank">
            See More
          </a>
        </span>
      </div>
      <div className="pb-8 pt-4 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full  rounded-t-md bg-gray-500 text-center text-sm font-semibold text-gray-300">
          <ToolExcelMenuHome
            className="w-13-50 w-5-10"
            tips=""
            titles1="Domain"
            titles2="Domain"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-3-10"
            tips=""
            titles1="Current Bid"
            titles2="Bid"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips=""
            titles1="Estimated Value"
            titles2="Value"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips="Auctions Platform"
            titles1="Platform"
            titles2="P"
          />
          <ToolExcelMenuHome
            className="w-4-50 w-1-10"
            tips=""
            titles1="Years"
            titles2="Yrs"
          />
          <ToolExcelMenuHome
            className="w-4-50 w-1-10"
            tips="Domain Authority"
            titles1="DA"
            titles2="DA"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips=""
            titles1="BackLinks"
            titles2="BL"
          />
          <ToolExcelMenuHome
            className="w-4-50 hidden md:block"
            tips="The Birth Year of the Domain using the first found Date from archive.org"
            titles1="ABY"
            titles2="ABY"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips="Time Left"
            titles1="Ended"
            titles2="ED"
          />
          <ToolExcelMenuHome className="" tips="" titles1="" titles2="" />
        </div>
        {domains.map((aucdom) => (
          <div
            key={aucdom.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="w-15-50 text-mysm w-5-10 truncate whitespace-nowrap border-r py-2 pl-1 text-left font-semibold text-blue-500 sm:pl-4">
              <a
                href={aucdom.domain}
                className="hover:underline"
                target="_blank"
                rel="nofollow"
              >
                {aucdom.domain}
              </a>
            </div>
            <div
              className={
                aucdom.now_price > 2000
                  ? 'w-5-50 w-3-10 truncate whitespace-nowrap border-r py-2 font-semibold text-orange-700'
                  : 'w-5-50 w-3-10 truncate whitespace-nowrap border-r py-2'
              }
            >
              ${aucdom.now_price}
            </div>
            <div
              className={
                aucdom.valuation > 2000
                  ? 'w-5-50 hidden truncate whitespace-nowrap border-r py-2 font-semibold text-green-700 md:block'
                  : 'w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block'
              }
            >
              ${aucdom.valuation}
            </div>
            <div className="w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {aucdom.platform}
            </div>
            <div className="w-4-50 w-1-10 truncate whitespace-nowrap border-r py-2">
              {aucdom.years_old}
            </div>
            <div
              className={
                aucdom.da > 30
                  ? 'w-4-50 w-1-10 truncate whitespace-nowrap border-r py-2 font-semibold text-green-700'
                  : 'w-4-50 w-1-10 truncate whitespace-nowrap border-r py-2'
              }
            >
              {aucdom.da}
            </div>
            <div className="w-5-50 hidden truncate whitespace-nowrap border-r  py-2 md:block">
              {aucdom.da_links}
            </div>
            <div className="w-4-50 hidden truncate whitespace-nowrap border-r  py-2 md:block">
              {aucdom.aby}
            </div>
            <div className="w-10-50 hidden truncate whitespace-nowrap py-2 md:block">
              {dateTimeFormat(aucdom.u_time)}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Deleteds = ({ domains }) => {
  return (
    <>
      <div className="px-4 text-xs">
        <span className="text-gray-300">
          * Inclue all Pendding delete .com , .net and .org domains datas.
        </span>
        <span className="text-blue-green pl-4 pr-4 text-sm font-semibold underline hover:font-bold hover:text-green-700 sm:float-right sm:pl-0">
          <a href="/pendingdelete" target="_blank">
            See More
          </a>
        </span>
      </div>
      <div className="pb-8 pt-4 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full  rounded-t-md bg-gray-500 text-center text-sm font-semibold text-gray-300">
          <ToolExcelMenuHome
            className="w-20-50 w-5-10"
            tips=""
            titles1="Domain"
            titles2="Domain"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-1-10"
            tips="Domain Authority"
            titles1="DA"
            titles2="DA"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-2-10"
            tips=""
            titles1="BackLinks"
            titles2="BL"
          />
          <ToolExcelMenuHome
            className="w-5-50  hidden md:block"
            tips="Number of Backlinks from different Domains"
            titles1="R-D"
            titles2="RD"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-1-10"
            tips=""
            titles1="Years"
            titles2="Yrs"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-1-10"
            tips="The Birth Year of the Domain using the first found Date from archive.org"
            titles1="ABY"
            titles2="ABY"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips="Time Left"
            titles1="Ended"
            titles2="ED"
          />
        </div>
        {domains.map((expdom) => (
          <div
            key={expdom.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="w-15-50 text-mysm w-5-10 truncate whitespace-nowrap border-r py-2 pl-1 text-left font-semibold text-blue-500 sm:pl-4">
              <a
                href={'/domains/' + expdom.domain}
                className="hover:underline"
                target="_blank"
              >
                {expdom.domain}
              </a>
            </div>
            <div
              className={
                expdom.da > 30
                  ? 'w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2 font-semibold text-green-700'
                  : 'w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2'
              }
            >
              {expdom.da}
            </div>
            <div className="w-5-50 w-2-10 truncate whitespace-nowrap border-r py-2">
              {expdom.da_links}
            </div>
            <div className="w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {expdom.score_rank}
            </div>
            <div className="w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2">
              {expdom.years_old}
            </div>
            <div className="w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2">
              {expdom.aby}
            </div>
            <div className="w-10-50 hidden truncate whitespace-nowrap py-2 md:block">
              {dateTimeFormat(expdom.drop_date)}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Traffics = ({ domains }) => {
  return (
    <>
      <div className="px-4 text-xs">
        <span className="text-gray-300">
          * Inclue all Godaddy Expired and OK domains datas.
        </span>
        <span className="text-blue-green pl-4 pr-4 text-sm font-semibold underline hover:font-bold hover:text-green-700 sm:float-right sm:pl-0">
          <a href="/trafficdomains" target="_blank">
            See More
          </a>
        </span>
      </div>
      <div className="pb-8 pt-4 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full rounded-t-md bg-gray-500 text-center text-sm font-semibold text-gray-300">
          <ToolExcelMenuHome
            className="w-14-50 w-4-10"
            tips=""
            titles1="Domain"
            titles2="Domain"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-2-10"
            tips="Estimated monthly pageviews"
            titles1="Traffic"
            titles2="Traffic"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-2-10"
            tips=""
            titles1="Revenue"
            titles2="Rev"
          />
          <ToolExcelMenuHome
            className="w-3-50 hidden md:block"
            tips="Domain Authority"
            titles1="DA"
            titles2="DA"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips=""
            titles1="Backlinks"
            titles2="BL"
          />
          <ToolExcelMenuHome
            className="w-3-50  hidden md:block"
            tips=""
            titles1="Years"
            titles2="Yrs"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-2-10"
            tips=""
            titles1="Current Bid"
            titles2="Bid"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips=""
            titles1="Estimated Value"
            titles2="Value"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips="Time Left"
            titles1="Ended"
            titles2="ED"
          />
        </div>
        {domains.map((tradom) => (
          <div
            key={tradom.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="w-15-50 text-mysm w-4-10 truncate whitespace-nowrap border-r py-2 pl-1 text-left font-semibold text-blue-500 sm:pl-4">
              <a
                href={tradom.domain}
                className="hover:underline"
                target="_blank"
                rel="nofollow"
              >
                {tradom.domain}
              </a>
            </div>
            <div
              className={
                tradom?.traffic > 3000
                  ? 'w-5-50 w-2-10 truncate whitespace-nowrap border-r py-2 font-semibold text-green-700'
                  : 'w-5-50 w-2-10 truncate whitespace-nowrap border-r py-2'
              }
            >
              {tradom.traffic}
            </div>
            <div
              className={
                tradom.rev > 100
                  ? 'w-5-50 w-2-10 truncate whitespace-nowrap border-r  py-2 font-semibold text-purple-700'
                  : 'w-5-50 w-2-10 truncate whitespace-nowrap border-r  py-2'
              }
            >
              ${tradom.rev}
            </div>
            <div
              className={
                tradom.da > 30
                  ? 'w-3-50 hidden truncate whitespace-nowrap border-r py-2 font-semibold text-green-700 md:block'
                  : 'w-3-50 hidden truncate whitespace-nowrap border-r py-2 md:block'
              }
            >
              {tradom.da}
            </div>
            <div className="w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {tradom.da_links}
            </div>
            <div className="w-3-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {tradom.years_old}
            </div>
            <div
              className={
                tradom.now_price > 2000
                  ? 'w-5-50 w-2-10 truncate whitespace-nowrap border-r py-2 font-semibold text-orange-700'
                  : 'w-5-50 w-2-10 truncate whitespace-nowrap border-r py-2'
              }
            >
              ${tradom.now_price}
            </div>
            <div
              className={
                tradom.valuation > 2000
                  ? 'w-5-50 hidden truncate whitespace-nowrap border-r py-2 font-semibold text-green-700 md:block'
                  : 'w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block'
              }
            >
              ${tradom.valuation}
            </div>
            <div className="w-10-50 hidden truncate whitespace-nowrap py-2 md:block">
              {dateTimeFormat(tradom.auc_endtime)}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Markets = ({ domains }) => {
  return (
    <>
      <div className="px-4 text-xs">
        <span className="text-gray-300">* Inclue all selling domains now.</span>
        <span className="text-blue-green pl-4 pr-4 text-sm font-semibold underline hover:font-bold hover:text-green-700 sm:float-right sm:pl-0">
          <a href="/marketplace" target="_blank">
            See More
          </a>
        </span>
      </div>
      <div className="pb-8 pt-4 sm:px-4">
        <div className="sticky top-0 z-10 flex min-w-full  rounded-t-md bg-gray-500 text-center text-sm font-semibold text-gray-300">
          <ToolExcelMenuHome
            className="w-20-50 w-5-10"
            tips=""
            titles1="Domain"
            titles2="Traffic"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-3-10"
            tips="Ask or Bid Price"
            titles1="Ask Price"
            titles2="Ask"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips="Marketplace Platform"
            titles1="Platform"
            titles2="P"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-1-10"
            tips="Domain Authority"
            titles1="DA"
            titles2="DA"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips=""
            titles1="Backlinks"
            titles2="BL"
          />
          <ToolExcelMenuHome
            className="w-5-50 w-1-10"
            tips=""
            titles1="Years"
            titles2="Yrs"
          />
          <ToolExcelMenuHome
            className="w-5-50 hidden md:block"
            tips="The Birth Year of the Domain using the first found Date from archive.org"
            titles1="ABY"
            titles2="ABY"
          />
        </div>
        {domains.map((mardom) => (
          <div
            key={mardom.id}
            className="flex  min-w-full truncate border !bg-opacity-40 text-center text-xs font-normal text-gray-500 even:bg-green-50 hover:bg-gray-200"
          >
            <div className="w-15-50 text-mysm w-5-10 truncate whitespace-nowrap border-r py-2 pl-1 text-left font-semibold text-blue-500 sm:pl-4">
              <a
                href={mardom.domain}
                className="hover:underline"
                target="_blank"
                rel="nofollow"
              >
                {mardom.domain}
              </a>
            </div>
            <div
              className={
                mardom.ask_price > 5000
                  ? 'w-5-50 w-3-10 truncate whitespace-nowrap border-r  py-2 font-semibold text-green-700'
                  : 'w-5-50 w-3-10 truncate whitespace-nowrap border-r  py-2'
              }
            >
              ${mardom.ask_price}
            </div>
            <div className="w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {mardom.platform}
            </div>
            <div
              className={
                mardom.da > 30
                  ? 'w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2 font-semibold text-green-700'
                  : 'w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2'
              }
            >
              {mardom.da}
            </div>
            <div className="w-5-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {mardom.da_links}
            </div>
            <div className="w-5-50 w-1-10 truncate whitespace-nowrap border-r py-2">
              {mardom.years_old}
            </div>
            <div className="w-10-50 hidden truncate whitespace-nowrap border-r py-2 md:block">
              {dateTimeFormat(mardom.u_time)}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Expiredhidden = () => {
  return (
    <>
      Expired <span className="hidden sm:inline">Auction Domains</span>
    </>
  )
}
const Deletedhidden = () => {
  return (
    <>
      <span className="hidden sm:inline">Pending</span> Delete{' '}
      <span className="hidden sm:inline">Domains</span>
    </>
  )
}
const Traffichidden = () => {
  return (
    <>
      Traffic<span className="hidden sm:inline"> Domains</span>
    </>
  )
}
const Markethidden = () => {
  return (
    <>
      Market<span className="hidden sm:inline">Place</span>
    </>
  )
}
const Typeselect = [
  {
    id: 1,
    label: <Expiredhidden />,
    content: (list) => <Expireds domains={list} />,
    href: '/datas/nc-auction',
  },
  {
    id: 2,
    label: <Deletedhidden />,
    content: (list) => <Deleteds domains={list} />,
    href: '/datas/nc-delete',
  },
  {
    id: 3,
    label: <Traffichidden />,
    content: (list) => <Traffics domains={list} />,
    href: '/datas/nc-traffic-auction',
  },
  {
    id: 4,
    label: <Markethidden />,
    content: (list) => <Markets domains={list} />,
    href: '/datas/nc-market',
  },
]

const AuctionIcons = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-gavel"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385"></path>
        <path d="M6 9l4 4"></path>
        <path d="M13 10l-4 -4"></path>
        <path d="M3 21h7"></path>
        <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z"></path>
      </svg>
    </>
  )
}

const CatchIcons = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-hand-grab"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"></path>
        <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"></path>
        <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5"></path>
        <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
      </svg>
    </>
  )
}
export function HomesData() {
  return (
    <>
      <div className="relative   min-h-full rounded-lg bg-white md:grid md:place-items-center">
        <div className="mx-auto min-w-full max-w-max">
          <main>
            <div className="mx-auto max-w-7xl pt-2 sm:px-4 sm:pt-4">
              <div className="mb-8 px-2 sm:px-0">
                <div className="">
                  <div className="text-gray-500">
                    <BannerWords
                      wt="Get the best valued domains with our best free datas"
                      wb="Catch and bid on expired domains anywhere, anytime."
                      iconl={<AuctionIcons />}
                      iconr={<CatchIcons />}
                    />
                    <MyTypeSelect filters={Typeselect} />
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
