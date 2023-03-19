

export function SendField(){

  return (
    <div className="col-span-full flex">

      <input
        type="text"
        name="validcode"
        id="validcode"
        className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-green-500 sm:text-sm"
        placeholder="validation code"
        required
      />

    <button
      type="button"
      className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-mygreen-500 px-4 py-2 text-sm font-medium text-white"
    >
      <span>Send</span>
    </button>
  </div>
  )
}

