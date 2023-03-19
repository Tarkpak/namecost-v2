
export function SelectNums({num1,num2,num3}) {
    return (
      <div className="mr-8">
        <select
          id="location"
          name="location"
          className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue="50"
        >
          <option>{num1}</option>
          <option>{num2}</option>
          <option>{num3}</option>
        </select>
      </div>
    )
  }
  