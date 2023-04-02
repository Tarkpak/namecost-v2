import { forwardRef } from 'react'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-green-500 sm:text-sm'

export const TextField = forwardRef(
  (
    { id, label, type = 'text', className = '', errors = {}, ...props },
    ref
  ) => {
    return (
      <div className={className}>
        <input
          ref={ref}
          id={id}
          type={type}
          autoComplete={type}
          placeholder={label}
          className={formClasses}
          {...props}
        />
        {errors.email && (
          <span role="alert" className="text-red-500">
            {errors.email.message}
          </span>
        )}
      </div>
    )
  }
)
