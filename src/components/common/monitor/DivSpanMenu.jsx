
import { MenuIcon,MenuAlt4Icon,MinusIcon } from '@heroicons/react/solid'

export function DivSpanMenu(){
  return (
   <>
          <div className="py-2  w-7-50 w-2-10">
            <span  className="group inline-flex">
              TLD
            </span>
          </div>
          <div className="py-2 w-12-50 w-6-10">
            <span  className="align-center py-1 px-2">
            <MenuIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-12-50 hidden md:block">
            <span  className="align-center py-1 px-2">
            <MenuAlt4Icon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-12-50 hidden md:block">
            <span  className="align-center py-1 px-2">
            <MinusIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-7-50 w-2-10">
            <span  className="group inline-flex">
            </span>
          </div>
    </>      
  )
}
