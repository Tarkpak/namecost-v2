import { BannerTitleSub } from '@/components/common/freetools/BannerTitleSub'
import { BannerSearchFormBulk } from '@/components/common/freetools/BannerSearchFormBulk'
import { useForm, FormProvider } from 'react-hook-form'
import { useSubmit } from '@/hook/useSubmit'

export function BulkDomainSearch({ setSingle }) {
  const methods = useForm()
  const { onSubmit } = useSubmit()
  const handleSubmit = (data) => {
    const queryString = data.domain.replace(/\n/g, ',')
    onSubmit('/tools/generator', { domain: queryString })
  }
  return (
    <div>
      <div className="bg-banner relative sm:pb-6">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden  rounded-2xl">
            <BannerTitleSub
              titles={'Start your domain name search'}
              subtitles={'Check domain name availability and secure yours now'}
            />
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(handleSubmit)}
                className="my-6 space-x-2 sm:mx-auto sm:flex"
              >
                <BannerSearchFormBulk
                  setSingle={setSingle}
                  title={'Generator'}
                />
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
