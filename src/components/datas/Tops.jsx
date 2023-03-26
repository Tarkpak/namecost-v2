/*
  This example requires Tailwind CSS v2.0+ 
*/

import { TopData } from '@/components/datas/TopData'

export function Tops() {
  return (
    <div>
      <div className="relative sm:pb-6">
        <div className="mx-auto px-2 sm:px-4 md:px-6 lg:max-w-7xl">
          <div className="relative  ">
            <div className="relative">
              <div className=""></div>
            </div>
            <TopData />
          </div>
        </div>
      </div>
    </div>
  )
}
