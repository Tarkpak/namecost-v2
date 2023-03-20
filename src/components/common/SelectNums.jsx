export function SelectNums({ num1, num2, num3, pagination, setPagination }) {
  return (
    <div className="mr-8">
      <select
        id="location"
        name="location"
        className="block w-full rounded-md border-gray-300 py-1 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="50"
        onChange={({ target }) => {
          setPagination({
            ...pagination,
            pageSize: target.value,
          })
        }}
      >
        <option>{num1}</option>
        <option>{num2}</option>
        <option>{num3}</option>
      </select>
    </div>
  )
}
