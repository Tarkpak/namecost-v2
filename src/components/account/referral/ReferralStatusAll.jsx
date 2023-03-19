/* This example requires Tailwind CSS v2.0+ */
import { CurrencyDollarIcon } from '@heroicons/react/solid'
import { SelectMonth } from '@/components/common/SelectMonth'
import { ToolExcelMenu } from '@/components/common/ToolExcelMenu'
const domains = [
  {id: '1', campaign: 'Give100Get35', signupdate: '2022-07-05', referralstatus: 'Pending', myplan: 'Pro Monthly', commission: '$35.00',paydate:'2022-08-05',payout:'$50.00'},
  {id: '1', campaign: 'Give100Get35', signupdate: '2022-07-05', referralstatus: 'Invalid Referral', myplan: 'Pro Monthly', commission: '$35.00',paydate:'2022-08-05',payout:'$50.00'},
  {id: '1', campaign: 'Give100Get35', signupdate: '2022-07-05', referralstatus: 'Completed', myplan: 'Pro Monthly', commission: '$35.00',paydate:'2022-08-05',payout:'$50.00'},
  // More people...
]

export function ReferralStatusAll() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
          <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight mt-4 p-4"><CurrencyDollarIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" /> <span>Payouts</span></h3>
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full divide-y divide-gray-500 border-collapse text-center flex bg-mygray-500">
                <ToolExcelMenu className="py-2 text-sm w-10-50 w-3-10" titles="Campaign" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-7-50 w-3-10" titles="Signup Date" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-8-50 w-2-10" titles="Status" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-8-50 hidden md:block" titles="Plan" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-5-50 w-1-10" titles="Commission" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-7-50 hidden md:block" titles="Date" selectornot="" />
                <ToolExcelMenu className="py-2 text-sm w-5-50 w-1-10" titles="Payout" selectornot="" />

              </div>
              
              <div className="bg-white">
                  {domains.map((dom) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-gray-100 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-10-50 truncate text-left sm:text-center sm:pl-2 w-3-10">{dom.campaign}</div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-7-50 truncate w-3-10">{dom.signupdate}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-8-50 truncate w-2-10">{dom.referralstatus}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-8-50 truncate hidden md:block">{dom.myplan}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-1-10">{dom.commission}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-7-50 truncate hidden md:block">{dom.paydate}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-t border-b border-l border-gray-200 w-5-50 w-1-10">{dom.payout}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <form method="post" className="items-center lg:my-8 sm:mt-0 sm:flex-none  grid md:grid-cols-2">
        <div></div>
        <div className="sm:space-x-4 justify-self-end">
          <select
            id="expmonth"
            name="expmonth"
            autoComplete="country-name"
            defaultValue="01"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 border-transparent  px-12 py-2 text-sm font-medium  shadow-sm sm:w-auto text-gray-500 ring-0"
          >
            <SelectMonth />
          </select>

          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500">Goto</button>
        </div>
      </form>
      </div>
  )
}
