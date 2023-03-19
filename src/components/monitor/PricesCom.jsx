/*
  This example requires Tailwind CSS v2.0+ 
*/

import { PricesComData } from '@/components/monitor/PricesComData'

export function PricesCom() {
  return (
    <div>
      <div className="relative sm:pb-6">

        <div className="mx-auto px-2 sm:px-4 md:px-6 lg:max-w-7xl">
          <div className="relative  ">
            <div className="relative">
              <div className="">
              </div>
            </div>
            <PricesComData />
          </div>
        </div>
      </div>
    </div>
  )
}
