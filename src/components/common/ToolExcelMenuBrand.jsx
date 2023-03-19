/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'
const baseStyles = {
  solid:
    'py-2 text-sm font-semibold border border-gray-100',
}

export function ToolExcelMenuBrand({
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
        <span  className="group inline-flex" title={titles}>
          {titles}
        </span>
      </div>
    </>
  )
}
