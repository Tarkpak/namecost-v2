/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'
const baseStyles = {
  solid:
    'font-semibold text-gray-300',
}

export function ToolExcelMenu({
  variant = 'solid',
  className,
  titles,
  selectornot,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    className
  )
  return (

    <>
      <div className={className} {...props}>
        <span  className="group inline-flex">
          {titles}
          <span className="flex-none rounded text-gray-400 hidden lg:block">
            {selectornot}
          </span>
        </span>
      </div>
    </>
  )
}
