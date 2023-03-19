/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'

const baseStyles = {
  solid:
    'py-2',
}



export function DivSpan({
  titles,
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
            <span  className="group inline-flex">
              {titles}
            </span>
          </div>
    </>      
  )
}
