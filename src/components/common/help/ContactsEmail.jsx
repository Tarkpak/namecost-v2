/*
  This example requires Tailwind CSS v2.0+ 
*/
import { MailIcon } from '@heroicons/react/outline'
export function ContactsEmail() {
  return (
    <>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <MailIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                  <span className="ml-3">support@namecost.com</span>
                </dd>
              </dl>
    </>
  )
}
