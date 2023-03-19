/*
  This example requires Tailwind CSS v2.0+ 
*/
import { HelpFaqs } from '@/components/help/HelpFaqs'
import { HowToUseForm } from '@/components/common/help/HowToUseForm'
const message = {
      id: 1,
      title: 'Velit placeat sit ducimus non sed',
      uptime: '2021-01-27',
      content:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    }

 
  
  export function HowToUses() {
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


    <div className="w-full  py-8">
      <div className="flow-root mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-7xl lg:px-8 py-12 bg-gray-50 py-8 rounded-lg  overflow-hidden shadow-lg">
        <div className="flex grid grid-cols-4">
          <div>
          <HelpFaqs />

          </div>
          <div className="col-span-3 bg-white rounded-lg px-12">
 
  
             <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                     <h2 className="text-2xl font-medium text-gray-500 truncate pt-12 pb-8">{message.title}</h2>
                 </div>
                 <time dateTime={message.uptime} className="flex-shrink-0 whitespace-nowrap text-sm pt-12 text-gray-500">
                  {message.uptime}
                 </time>
             </div>
             <div className="mt-1">
                 <p className="line-clamp-2 text-sm text-gray-600">{message.content}</p>
             </div>
   


          </div>
        </div>

      </div>
      </div>

      <div className="w-full mx-auto pb-16 ">
  <div className="max-w-6xl mx-auto pb-16">
</div></div>
      </>
    )
  }
  