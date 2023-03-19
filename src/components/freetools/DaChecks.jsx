import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchInput } from '@/components/common/freetools/BannerSearchInput'
import { BannerSearchButton } from '@/components/common/freetools/BannerSearchButton'
export function DaChecks({ setSingle }) {
  return (
    <div>
      <div className="relative  bg-banner pb-6">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0  md:mt-0"></div>
            <div className="relative pb-12">
              <BannerTitleSub titles="Domain Authority & Backlink Checker" subtitles="Try our free DA and  backlink checker tool" />
              <form action="#" className="my-6 sm:mx-auto  sm:flex">
                <div className="flex-1 relative">
                  <BannerSearchInput />
                  <div className="absolute cursor-pointer hover:underline top-1/2 transform -translate-y-1/2 right-4 font-bold text-red-500" onClick={() => { setSingle(false) }} >Bulk Check</div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <BannerSearchButton className="text-base font-medium text-white px-5 py-3 bg-myred-500 sm:px-10" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
