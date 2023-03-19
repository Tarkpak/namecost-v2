/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'

const baseStyles = {
  solid:
    'block w-full rounded-md border border-transparent shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2',
}

export function BannerSearchButton({ variant = 'solid', className, ...props }) {
  className = clsx(baseStyles[variant], className)
  return (
    <>
      <button type="submit" className={className} {...props}>
        Search
      </button>
    </>
  )
}
