import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchFormBulk } from '@/components/common/freetools/BannerSearchFormBulk'
import { FormProvider, useForm } from 'react-hook-form'
import { useSubmit } from '@/hook/useSubmit'
export function BulkDaCheck({ setSingle }) {
  const methods = useForm()
  const { onSubmit } = useSubmit()
  const handleSubmit = (data) => {
    const queryString = data.domain.replace(/\n/g, ',')
    onSubmit('/tools/dacheck', { domain: queryString })
  }
  return (
    <div>
      <div className="bg-banner relative sm:pb-6">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden  rounded-2xl">
            <BannerTitleSub
              titles={'Domain Authority & Backlink Checker'}
              subtitles={'Try our free DA and  backlink checker tool'}
            />
            <form
              onSubmit={methods.handleSubmit(handleSubmit)}
              className="my-6 space-x-2 sm:mx-auto sm:flex"
            >
              <FormProvider {...methods}>
                <BannerSearchFormBulk setSingle={setSingle} title={'X'} />
              </FormProvider>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
