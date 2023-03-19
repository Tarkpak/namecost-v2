import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchFormBulk } from '@/components/common/freetools/BannerSearchFormBulk'
export function BulkWhoisCheck({ setSingle }) {
  return (
   <div>
      <div className="relative sm:pb-6 bg-banner">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl  overflow-hidden">
          <BannerTitleSub titles="Want a domain that’s taken?" subtitles="Our domain broker service can get it for you" />
          <form className="my-6 sm:mx-auto sm:flex space-x-2">
            <BannerSearchFormBulk setSingle={setSingle} title={"Whois"} />
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}
