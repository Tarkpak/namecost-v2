/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'
const baseStyles = {
  solid:
    'py-2',
}

export function ToolExcelMenuHome({
  variant = 'solid',
  className,
  tips,
  titles1,
  titles2,
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
        <span  className="group inline-flex" title={tips}>
          <span className="hidden lg:inline">{titles1} </span><span className="inline lg:hidden">{titles2}</span>
        </span>
      </div>
    </>
  )
}
