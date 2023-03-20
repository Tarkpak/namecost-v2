/* This example requires Tailwind CSS v2.0+ */
import { SelectNums } from '@/components/common/SelectNums'
import { useMemo } from 'react'
export function Pagination({
  start,
  end,
  all,
  num1,
  num2,
  num3,
  pagination,
  setPagination,
}) {
  const isPrevDisabled = useMemo(
    () => parseInt(pagination.page) === 1,
    [pagination.page]
  )
  const isNextDisabled = useMemo(
    () => {
      return parseInt(pagination.page) === end
    },
    [pagination.page, end]
  )
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <SelectNums
        num1={num1}
        num2={num2}
        num3={num3}
        pagination={pagination}
        setPagination={setPagination}
      />
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          <span className="font-medium">{pagination.page}</span> -{' '}
          <span className="font-medium">{end}</span> of{' '}
          <span className="font-medium">{all}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <a
          href="#"
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            isPrevDisabled ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={() => {
            const page = parseInt(pagination.page)
            if (page > 0 && page < end) {
              setPagination({
                ...pagination,
                page: --pagination.page,
              })
            }
          }}
        >
          {'<'}
          <span className="hidden pl-1 sm:inline">Previous</span>
        </a>
        <a
          href="#"
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            isNextDisabled ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={() => {
            const page = parseInt(pagination.page)
            if (page < end) {
              setPagination({
                ...pagination,
                page: ++pagination.page,
              })
            }
          }}
        >
          <span className="hidden pr-1 sm:inline">Next</span>
          {'>'}
        </a>
      </div>
    </nav>
  )
}
