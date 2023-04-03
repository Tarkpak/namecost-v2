/* This example requires Tailwind CSS v2.0+ */

import { PencilAltIcon } from '@heroicons/react/solid'
import { useForm, Controller } from 'react-hook-form'
import Editor from '@/components/account/post/EditorTinyMCE'

import http from '@/utils/axios'
import { useEffect, useState } from 'react'

export function NewPost() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      content: '<p>This is the initial content of the editor</p>',
    },
  })
  const onSubmit = (data) => {
    http
      .post('/posts', {
        ...data,
        category: Number(data.category),
        status: Number(data.status),
      })
      .then((res) => {
        console.log('res', res)
        reset()
      })
  }

  const [options, setOptions] = useState([])

  useEffect(() => {
    http.get('/posts/category').then(( categorys ) => {
      setOptions(categorys)
    })
  }, [])

  return (
    <div>
      <div className="text-lg">
        <div className="flex w-full items-start justify-between text-left text-gray-400">
          <span className="font-medium text-gray-900">
            <h3 className="px-4 text-xl font-semibold text-orange-500 sm:tracking-tight">
              <PencilAltIcon
                className="text-mygreen-500 h-6 w-6"
                aria-hidden="true"
              />
              <span className="ml-2">
                <span>New Post</span>
              </span>
            </h3>
          </span>
        </div>
      </div>

      {/* submitted your brands  --------START----------*/}
      <div className="my-6 px-4"></div>
      <div className="flex flex-col px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="focus-within:border-mygreen-500  focus-within:ring-mygreen-500 w-full overflow-hidden font-semibold shadow-sm focus-within:ring-1">
            <label htmlFor="cta-email" className="sr-only">
              Add title
            </label>
            <input
              id="cta-email"
              className="bg-textarea block w-full resize-none border-0 py-2 px-4 placeholder-gray-500 focus:bg-white focus:ring-0 sm:text-sm"
              placeholder="Add title"
              {...register('title', { required: true })}
            />
          </div>
          <div className="py-6">
            <div className="space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
              <div className="">
                <span className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500">
                  Category
                </span>
              </div>
              <div>
                <select
                  id="category"
                  autoComplete="country-name"
                  defaultValue="Knowledge"
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                  {...register('category', { required: true })}
                >
                  {options.map(({ id, menu_name }) => (
                    <option value={id}>{menu_name}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <span className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500">
                  Publish Type
                </span>
              </div>
              <div>
                <select
                  id="types"
                  autoComplete="Draft"
                  defaultValue="Bulk Action"
                  className="w-full rounded-md border border-gray-300 bg-white py-1 px-8 text-xs  shadow-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white"
                  {...register('status', { required: true })}
                >
                  <option value="0">Draft</option>
                  <option value="1">Publish</option>
                </select>
              </div>
            </div>
          </div>

          {/* submitted your Post  --------START----------*/}
          <div className="mb-8 flex flex-col">
            <div>
              <div className="min-w-full space-x-2 overflow-hidden align-middle sm:overflow-visible">
                <div className=" shadow sm:mx-auto 2xl:max-w-screen-2xl">
                  <div className="sticky top-0 z-10 flex min-w-full border-collapse flex-col rounded-t-md bg-gray-50  text-center">
                    <Controller
                      name="content"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <Editor errors={errors} {...field} />
                      )}
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-mygreen-500 hover:bg-mygreen-500 my-8 mr-4 flex w-28 items-center justify-center rounded-md px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm focus:outline-none focus:ring-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* submitted your post  --------END----------*/}
        </form>
      </div>
      {/* submitted your brands  --------END----------*/}
    </div>
  )
}
