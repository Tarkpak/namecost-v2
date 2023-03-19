
const myprofiles = [
  { id: 'individual', title: 'Individual' },
  { id: 'organization', title: 'Organization' },
]

export function Profiles() {
  return (
      <>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid  ">
            <div className="mt-5 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 sm:px-6 mt-4">
                    <h2 id="billing-history-heading" className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h2>
                  </div>
                  <div className="px-4  pt-4 sm:px-6 flex grid grid-cols-6 gap-6">
                  {/* profile start */}
                  <fieldset className="flex col-span-6 pb-4 border-b border-gray-100">
                      <div className="flex mx-auto place-self-center md:space-x-8">
                      {myprofiles.map((myprofile, myprofileIdx) => (
                        <div key={myprofile.id} className="flex items-center">
                        {myprofileIdx === 0 ? (
                          <input
                           id={myprofile.id}
                            name="payment-type"
                            type="radio"
                            defaultChecked
                            className="focus:ring-gray-300 h-4 w-4 text-mygreen-500 border-gray-300"
                          />
                        ) : (
                          <input
                            id={myprofile.id}
                            name="payment-type"
                            type="radio"
                            className="focus:ring-gray-300 h-4 w-4 text-mygreen-500 border-gray-300"
                          />
                         )}

                          <label htmlFor={myprofile.id} className="ml-3 block text-sm font-medium text-gray-700">
                            {myprofile.title}
                          </label>
                        </div>
                      ))}
                      </div>
                    </fieldset>
                  <div className="col-span-6 lg:col-span-3">

                    <div className="pb-4">
                      <label htmlFor="user-name" className="text-sm font-medium text-gray-700 grid grid-cols-2">
                        <span className="">User Name</span>
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder={"UserName"}
                        readonly="readonly"
                        className="mt-1 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
                      />
                    </div>
                    <div className="">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          placeholder={'Verified'}
                          readonly="readonly"
                          className="mt-1 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
                        />
                    </div>

                    </div>
                    
                    <div className="col-span-6 lg:col-span-3 mx-auto place-self-center">
                      <div className="flex space-x-4">
                        <img src="/images/avatars/avatar-0.png" className="text-center h-28 w-28 text-green-200  rounded-full shadow" />
                        <div className="mx-auto place-self-center"><span className="inline-flex justify-center py-1.5 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700"><button className="">Update</button></span></div>
                      </div>

                    </div>

                  </div>


                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 lg:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 lg:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label htmlFor="user-name" className="text-sm font-medium text-gray-700 grid grid-cols-2">
                        <span className="">About</span>
                      </label>
                      <div className="w-full rounded-lg shadow-sm overflow-hidden focus-within:border-mygreen-500 focus-within:ring-1 focus-within:ring-mygreen-500">
                        <textarea
                          rows={4}
                          name="description"
                          id="description"
                          className="block w-full border-0 py-2 px-4 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm bg-textarea focus:bg-white"
                          placeholder="Write a description.No more than 100 words..."
                          defaultValue={''}
                        />
                      </div>
                    </div>

                    </div>
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
  