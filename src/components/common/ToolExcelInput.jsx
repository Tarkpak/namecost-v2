/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'

const baseStyles = {
  solid:
    'font-semibold text-gray-300',
}

export function ToolExcelInput({
  variant = 'solid',
  className,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    className
  )
  return (

    <>
      <div className={className} {...props}>
        <input
          id='cb-select-all-1'
          type='checkbox'
          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
        />
      </div>
    </>
  )
}
