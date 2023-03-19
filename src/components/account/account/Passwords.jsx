/*
  This example requires Tailwind CSS v2.0+ 
*/
import { PassWordInput } from '@/components/common/account/PassWordInput'
export function Passwords() {
    return (
      <>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid  ">
            <div className="mt-5 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <PassWordInput titles="Current Password" />
                      <PassWordInput titles="New Password" />
                      <PassWordInput titles="Confirm New Password" />
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700"
                    >
                      Change Password
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
  