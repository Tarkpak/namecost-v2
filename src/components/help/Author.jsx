/*
  This example requires Tailwind CSS v2.0+ 
*/
import {HomeIcon,  UserCircleIcon, ClockIcon,TagIcon } from '@heroicons/react/solid'

import { Pagination } from '@/components/Pagination'

function socialWindow(url) {
  var left = (screen.width - 570) / 2
  var top = (screen.height - 570) / 2
  var params =
    'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
    top +
    ',left=' +
    left
  window.open(url, 'NewWindow', params)
}



const article = [{
  id: 1,
  author_name: 'Namecost',
  author_tier: 'Contributing Writer',
  author_desc: `Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
  porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
  purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.`,
  create_time: '2022-08-08 20:18',
  tag: 'domain investing',
  tagurl: 'domain-investing',
  post_url: 'sdfsfhergsdfsd',
  title: 'Aliquet nec orci mattis amet quisque ullamcorper neque',
  ad: 1,
  content: `<p>
  Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
  Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
  tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
  <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
</p>
<ul role="list">
  <li>Quis elit egestas venenatis mattis dignissim.</li>
  <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
</ul>`,
}]
export function Author() {

  return (
    <div className="pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-4 xl:mx-0 bg-white rounded-md">
          {/* ---------------author Begain--------------------------*/}
          <div className="px-6 lg:px-12 pb-12 pt-6">
          <div className="space-x-4 text-gray-400 text-xs pb-6 break-all overflow-clip overflow-hidden">
            <span>
              <a href="/"><HomeIcon className="h-4 w-4" aria-hidden="true"/></a>
            </span>
            <span>{'>'}</span>
            <span>
              <a href={'/author/'} >Author</a>
            </span>
            <span>{'>'}</span>
            <span>
            <a href={'/'+article[0]['tagurl']+'/'+article[0]['tag']} >{article[0]['post_url']}</a>
            </span>
          </div>
            {/* -------Content------------*/}
            <div className="py-4 px-4 lg:px-20 mx-auto max-w-3xl border border-gray-100 rounded-md shadow mt-10 bg-gray-50">
              <div className="mx-auto text-center z-10">
                <span className=""><UserCircleIcon className="h-16 w-16 lg:h-28 lg:w-28 text-gray-300 -mt-16 rounded-full" aria-hidden="true"/></span>
              </div>

              <div>
              <div className="font-bold text-xl text-gray-600 text-center py-2">
                  <span>{article[0]['author_name']}</span>
                </div>
                <div className="font-semibold text-xs text-green-700 text-center">
                  {article[0]['author_tier']}
                </div>
                <div className="text-gray-500 py-6 text-sm">
                  {article[0]['author_desc']}
                </div>
              </div>

            </div>

            <div className="py-8 text-gray-500 font-bold text-xl">
              <span>Latest Posts</span>
            </div>

            <div className="pb-12">
                {/* post-one */}
              <div className="md:px-4 md:py-2 border border-gray-50 shadow flex grid md:grid-cols-4 md:justify-between">
                <div className="mx-auto md:place-self-center pb-4 md:pb-0 md:order-last"><img className="w-screen rounded-t-md md:rounded-none" src="/images/hulu.png" /></div>
                <div className="md:col-span-3 px-4 py-2">
                  <div className="lg:text-xl text-gray-700 font-semibold"><h2> How to watch beIN Sports online from anywhere in 2022  </h2></div>
                    <div className="space-x-4 text-gray-400 text-sm py-2">
                      <span className="text-gray-400 font-normal">
                        <ClockIcon className="h-4 w-4 mr-2" aria-hidden="true"/>
                        {article[0]['create_time']}
                      </span>
                      <span className="text-gray-400  hover:text-gray-500  font-normal">
                        <TagIcon className="h-4 w-4 mr-2" aria-hidden="true"/>
                        <a href={'/blog/'+article[0]['tagurl']} target="_blank">{article[0]['tag']}</a>
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm hidden sm:block">Nadin has been tinkering with computers and gadgets for as long as she can remember. She has extensive knowledge about various topics, including IoT, Linux, digital security, and more. </div>
                </div>
              </div>
    {/* post-one */}
            </div>
    <Pagination />
          </div>
          
        </div>
        
      </div>
    </div>
  )
}
  