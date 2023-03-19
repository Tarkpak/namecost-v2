/*
  This example requires Tailwind CSS v2.0+ 
*/
import {  useState } from 'react'


const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Engineering', value: 'engineering' },
  // More items...
]

  const messages = [
    {
      id: 1,
      title: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27 16:35',
      content:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
      status:'read',
    },
    // More messages...
  ]



export function ViewMessages() {

  const [labelled, setLabelled] = useState(labels[0])


  return (
    <div>

    <div className="mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8 bg-white pb-16">
        <div role="list" className="">
            {messages.map((message) => (

             <div
                key={message.id}
             className="relative bg-white"
             >
              <h2 className="text-xl font-semibold text-gray-500 truncate items-center border-b pb-2"> {message.title}</h2>
             <div className="py-2">
                 <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                 {message.datetime}
                 </time>
             </div>
             <div className="mt-1">
                 <p className="line-clamp-2 text-sm text-gray-600">{message.content}</p>
             </div>
             </div>
         ))}
        </div>
      </div>

    </div>
  )
}
