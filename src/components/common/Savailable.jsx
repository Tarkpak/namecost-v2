import { CheckCircleIcon } from '@heroicons/react/solid'

export function Savailable(){
  return (
    <span className="rounded-full h-5 w-5 text-green-400  font-bold">
      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

