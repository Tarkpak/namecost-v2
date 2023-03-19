/*
  This example requires Tailwind CSS v2.0+ 
*/
import { NotificationInput } from '@/components/common/account/NotificationInput'
export function Notifications() {
    return (
      <>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid  md:gap-6">
            <div className="mt-5 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <fieldset>
                      <legend className="sr-only">By Email</legend>
                      <div className="text-base font-medium text-gray-900" aria-hidden="true">
                        By Email
                      </div>
                      <div className="mt-4 space-y-4">
                        <NotificationInput titles="Comments" subtitles="Get notified when someones posts a comment on a posting." />
                        <NotificationInput titles="Candidates" subtitles="Get notified when a candidate applies for a job" />
                        <NotificationInput titles="Offers" subtitles="Get notified when a candidate accepts or rejects an offer." />
                      </div>
                    </fieldset>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  