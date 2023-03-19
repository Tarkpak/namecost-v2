/*
  This example requires Tailwind CSS v2.0+ 
*/

export function ContactsForm() {
  return (
    <>
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
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
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
            aria-describedby="phone-optional"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
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
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 rounded-md"
            aria-describedby="message-max"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-500 hover:bg-gray-700 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </>
  )
}
