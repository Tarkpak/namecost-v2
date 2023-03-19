/*
  This example requires Tailwind CSS v2.0+ 
*/

import { Pagination } from '@/components/Pagination'
import { HowToUseForm } from '@/components/common/help/HowToUseForm'
const messages = [
    {
      id: 1,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 2,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    // More messages...
  ]
 function question() {
  return(
    <>
      <span className="text-green-700 font-semibold text-xl">how to use namecost</span>
    </>

  )

 }
  export function HowToUseSearch() {
    return (
      <>


<div>
      <div className="relative bg-banner pb-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-10 overflow-hidden sm:px-12">
            <div aria-hidden="true" className="absolute inset-0  md:mt-0">
            </div>
            <div className="relative">
              <div className="sm:text-center">
              </div>

              <div className="text-center ">
                <div  className="text-center text-3xl max-w-7xl mx-auto pt-12 pb-6 text-gray-800 font-semibold">
                  <span className="">Getting Started with NameCost</span>
                </div>
  
              </div>

              <form action="#" className="my-6">
                <HowToUseForm className="bg-gray-400 hover:bg-gray-500" />

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-5xl mx-auto py-8 text-center"><span className="text-lg font-medium text-gray-400">Results for "{question()}"</span></div>

    <div className="w-full  py-8">
      <div className="flow-root mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-7xl lg:px-8 py-12 bg-gray-50  rounded-lg  overflow-hidden shadow-lg">

          
          <div className="col-span-3">
            <ul role="list" className="divide-y divide-gray-200">
            {messages.map((message) => (
             <li
                key={message.id}
             className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
             >
             <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                    <a href="#" className="block focus:outline-none">
                     <span className="absolute inset-0" aria-hidden="true" />
                     <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                     <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                  </a>
                 </div>
                 <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                  {message.time}
                 </time>
             </div>
             <div className="mt-1">
                 <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
             </div>
             </li>
           ))}
          </ul>
          </div>


      </div>
      </div>

      <div className="w-full mx-auto pb-16 ">
  <div className="max-w-6xl mx-auto pb-16">
  <Pagination start={1} end={50} all={105} num1={50} num2={100} num3={200}/>
</div></div>
      </>
    )
  }
  