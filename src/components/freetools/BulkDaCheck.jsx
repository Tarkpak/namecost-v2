import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchFormBulk } from '@/components/common/freetools/BannerSearchFormBulk'
export function BulkDaCheck({ setSingle }) {
  return (
   <div>
      <div className="relative sm:pb-6 bg-banner">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl  overflow-hidden">
            <BannerTitleSub titles={"Domain Authority & Backlink Checker"} subtitles={"Try our free DA and  backlink checker tool"} />
            <form className="my-6 sm:mx-auto sm:flex space-x-2">
              <BannerSearchFormBulk setSingle={setSingle} title={"X"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
