/*
  This example requires Tailwind CSS v2.0+ 
*/
import { useForm } from 'react-hook-form'
import http from '@/utils/axios'

export function ContactsForm() {
  const {
    register,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    http.post('/system/contacts', data).then((res) => {
      console.log('res', res)
    })
  }
  return (
    <form
      action="#"
      method="POST"
      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-900"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            {...register('first_name', { required: true })}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-900"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            {...register('last_name', { required: true })}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            {...register('email', { required: true })}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone
          </label>
          <span id="phone-optional" className="text-sm text-gray-500">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            aria-describedby="phone-optional"
            {...register('phone', { required: true })}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            {...register('subject', { required: true })}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <span id="message-max" className="text-sm text-gray-500">
            Max. 500 characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            aria-describedby="message-max"
            defaultValue={''}
            {...register('message', { required: true })}
          />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
