/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import http from '@/utils/axios'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

const myprofiles = [
  { id: 'individual', title: 'Individual' },
  { id: 'organization', title: 'Organization' },
]

export function Profiles() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    organization: '',
    about: '',
    state: '',
  })

  useEffect(() => {
    http.get('/users/info').then(({ users }) => {
      setForm({ ...users })
    })
  }, [])

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid  ">
          <div className="mt-5 md:mt-0">
            <div action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="mt-4 px-4 sm:px-6">
                  <h2
                    id="billing-history-heading"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Profile
                  </h2>
                </div>
                <div className="flex  grid grid-cols-6 gap-6 px-4 pt-4 sm:px-6">
                  {/* profile start */}
                  <fieldset className="col-span-6 flex border-b border-gray-100 pb-4">
                    <div className="mx-auto flex place-self-center md:space-x-8">
                      {myprofiles.map((myprofile, myprofileIdx) => (
                        <div key={myprofile.id} className="flex items-center">
                          {myprofileIdx === 0 ? (
                            <input
                              id={myprofile.id}
                              name="payment-type"
                              type="radio"
                              defaultChecked
                              className="text-mygreen-500 h-4 w-4 border-gray-300 focus:ring-gray-300"
                            />
                          ) : (
                            <input
                              id={myprofile.id}
                              name="payment-type"
                              type="radio"
                              className="text-mygreen-500 h-4 w-4 border-gray-300 focus:ring-gray-300"
                            />
                          )}

                          <label
                            htmlFor={myprofile.id}
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            {myprofile.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <div className="col-span-6 lg:col-span-3">
                    <div className="pb-4">
                      <label
                        htmlFor="user-name"
                        className="grid grid-cols-2 text-sm font-medium text-gray-700"
                      >
                        <span className="">User Name</span>
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        readOnly
                        autoComplete="given-name"
                        placeholder={'UserName'}
                        className="mt-1 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
                        value={form.username}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            username: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        placeholder={'Verified'}
                        readOnly
                        className="mt-1 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
                        value={form.email}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-span-6 mx-auto place-self-center lg:col-span-3">
                    <div className="flex space-x-4">
                      <img
                        src="/images/avatars/avatar-0.png"
                        className="h-28 w-28 rounded-full text-center  text-green-200 shadow"
                      />
                      <div className="mx-auto place-self-center">
                        <span className="inline-flex justify-center rounded-md border border-transparent bg-gray-500 py-1.5 px-3 text-sm font-medium text-white shadow-sm hover:bg-gray-700">
                          <button className="">Update</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 lg:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={form.firstname}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            firstname: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-span-6 lg:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={form.lastname}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            lastname: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={form.organization}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            organization: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label
                        htmlFor="user-name"
                        className="grid grid-cols-2 text-sm font-medium text-gray-700"
                      >
                        <span className="">About</span>
                      </label>
                      <div className="focus-within:border-mygreen-500 focus-within:ring-mygreen-500 w-full overflow-hidden rounded-lg shadow-sm focus-within:ring-1">
                        <textarea
                          rows={4}
                          name="description"
                          id="description"
                          className="bg-textarea block w-full resize-none border-0 py-2 px-4 placeholder-gray-500 focus:bg-white focus:ring-0 sm:text-sm"
                          placeholder="Write a description.No more than 100 words..."
                          defaultValue={''}
                          value={form.about}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              about: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
                    onClick={() => {
                      http.put('/users/info', form).then((res) => {
                        console.log(res)
                      })
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
