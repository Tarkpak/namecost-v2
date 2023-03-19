/*
  This example requires Tailwind CSS v2.0+ 
*/
import {HomeIcon,  UserCircleIcon, ClockIcon,TagIcon } from '@heroicons/react/solid'



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
</ul>
<p>
  Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
  porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
  purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
</p>
<h2>From beginner to expert in 30 days</h2>
<p>
  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
  mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
  ipsum eu a sed convallis diam.
</p>
<blockquote>
  <p>
    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
    pellentesque. Blandit amet, sed aenean erat arcu morbi.
  </p>
</blockquote>
<p>
  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
  sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
</p>

<h2>Everything you need to get up and running</h2>
<p>
  Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
  volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
  non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
  congue erat ac. Cras fermentum convallis quam.
</p>
<p>
  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
  sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
</p>`,
}]
export function BlogItem() {

  return (
    <div className="pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex grid lg:grid-cols-4 mx-4 xl:mx-0 bg-white rounded-md">
          {/* ---------------Left Begain--------------------------*/}
          <div className="cos-span-3 px-6 lg:px-12 pb-12 pt-6">
          <div className="space-x-4 text-gray-400 text-xs pb-6 break-all overflow-clip overflow-hidden">
            <span>
              <a href="/"><HomeIcon className="h-4 w-4" aria-hidden="true"/></a>
            </span>
            <span>{'>'}</span>
            <span>
              <a href={'/'+article[0]['tagurl']} >{article[0]['tag']}</a>
            </span>
            <span>{'>'}</span>
            <span>
            <a href={'/'+article[0]['tagurl']+'/'+article[0]['tag']} >{article[0]['post_url']}</a>
            </span>
          </div>
            <div>
              {/* -------Content------------*/}
              <div className="text-lg max-w-prose">
                <h1>
                  <span className="block text-2xl text-gray-600 font-semibold tracking-wide">
                  {article[0]['title']}
                  </span>
                </h1>
                <div className="mt-4 text-sm text-gray-400 space-x-4 font-semibold flex">
                  <div className="w-12">
                    <span>
                      <UserCircleIcon className="h-12 w-12 text-gray-400 mr-2" aria-hidden="true"/>
                      
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="space-x-4">
                      <span className="text-gray-500"><a href={'/author/'+article[0]['author_name']} target="_blank">{article[0]['author_name']}</a></span>
                      <span>|</span>
                      <span className="text-green-700">{article[0]['author_tier']}</span>
                    </div>
                    <div className="space-x-4">
                      <span className="text-gray-400 font-normal">
                        <ClockIcon className="h-4 w-4 mr-2" aria-hidden="true"/>
                        {article[0]['create_time']}
                      </span>
                      <span className="text-gray-400  hover:text-gray-500  font-normal">
                        <TagIcon className="h-4 w-4 mr-2" aria-hidden="true"/>
                        <a href={'/blog/'+article[0]['tagurl']} target="_blank">{article[0]['tag']}</a>
                      </span>
                    </div>
                  </div>


                </div>
              </div>
              <div className="mt-4 prose prose-indigo prose-lg text-gray-600 mx-auto">
                {article[0]['content']}
              </div>
            </div>
            {/* -------Content------------*/}
            {/* -------Share------------*/}
            <div className="pt-10 pb-4">
              <div className="font-bold text-gray-700 pb-4 sm:flex text-center lg:space-x-10">
              <div className="text-gray-500 text-base font-semibold">Share this article</div>
                <div className="mx-auto">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-textarea px-10 py-1 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-500"
                        onClick={() => {
                          socialWindow(`https://twitter.com/intent/tweet?url=${location.href}&text=${article[0]['title']}`)
                        }}
                      >
                        <svg
                          viewBox="0 0 48 48"
                          className="mr-1 h-6 w-6 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"
                            fill="#fff"
                            stroke="#fff"
                            stroke-width="4"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Share
                      </button>
                    </div>

                    <div className="mx-auto">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-textarea px-10 py-1 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-500"
                        onClick={() => {
                          socialWindow(`https://www.facebook.com/sharer.php?u=${location.href}`)
                        }}
                      >
                        <svg
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-6 w-6 fill-white"
                        >
                          <path
                            d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"
                            fill="#fff"
                            stroke="#fff"
                            stroke-width="4"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Share
                      </button>
                    </div>
              </div>

            </div>
            {/* -------Share------------*/}
            <div className="border-b border-gray-200"></div>
            {/* -------About Author-----avatar------*/}
            <div className="flex space-x-4 pt-4">
              <div>
                <span><UserCircleIcon className="h-28 w-28 text-gray-300 mr-2" aria-hidden="true"/></span>
              </div>
              <div className="flex-1 pt-2">
                <div className="font-bold text-xl text-gray-600">
                  <a href={'/author/'+article[0]['author_name']} target="_blank">{article[0]['author_name']}</a>
                </div>
                <div className="font-semibold text-xs text-gray-500">
                  {article[0]['author_tier']}
                </div>
                <div className="text-gray-400 pt-2 text-sm">
                  {article[0]['author_desc']}
                </div>
              </div>
            </div>
            {/* -------About Author-----------*/}
            <div className="pt-10 pb-6 block text-gray-500 text-base font-semibold">Comments (<span className="text-green-700 mx-1">5</span>)</div>
             {/* -----Submit--Comments---Start---------*/}
            <div>
              <form action="#" className="relative pb-6">
                <div className="flex">
                  <span><UserCircleIcon className="h-12 w-12 text-gray-300 mr-2" aria-hidden="true"/></span>
                  <div className="w-full rounded-lg shadow-sm overflow-hidden focus-within:border-mygreen-500 focus-within:ring-1 focus-within:ring-mygreen-500">
                    <label htmlFor="description" className="sr-only">
                      Description
                    </label>
         
                    <textarea
                      rows={4}
                      name="description"
                      id="description"
                      className="block w-full border-0 py-2 px-4 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm bg-textarea focus:bg-white"
                      placeholder="Write a description..."
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="hidden">
                 {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}

                  <div className=" px-2 py-4 sm:px-3">
                  </div>
                </div>
              </form>
              </div>
              {/* -----Submit--Comments---End---------*/}
            <div className="py-10">
              {/* -------Comments------------*/}
              <div className="divide-y divide-gray-200 space-y-3 border-b border-gray-200 pb-4">
                {/* -------Comment-1------------*/}
                <div className="py-2">
                  <div className="pb-4">
                    <div className="text-base text-gray-400 pb-1">
                      <span><span><UserCircleIcon className="h-12 w-12 text-gray-300 mr-2" aria-hidden="true"/></span><span>author</span></span>
                      <span className="float-right">2022-08-01 18:22:38</span>
                    </div>
                    <div className="pl-12">
                      <div className="break-all overflow-clip overflow-hidden text-gray-500">
                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
                      </div>
                      <div className="float-right mr-4 text-xs text-gray-300 hover:text-gray-500 font-semibold">
                        <button>
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 评论嵌套 */}
                  <div className="pl-10">
                    <div className="py-2">
                      <div className="text-base text-gray-400 pb-1">
                        <span><span><UserCircleIcon className="h-12 w-12 text-gray-300 mr-2" aria-hidden="true"/></span><span>author</span></span>
                        <span className="float-right">2022-08-01 18:22:38</span>
                      </div>
                      <div className="pl-12">
                        <div className="break-all overflow-clip overflow-hidden text-gray-500">
                          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
                        </div>
                        <div className="float-right mr-4 text-xs text-gray-300 hover:text-gray-500 font-semibold">
                          <button>
                           Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* 评论嵌套 */}
                </div>
              {/* -------Comment-2------------*/}
              <div className="py-2">
                  <div className="text-base text-gray-400 pb-1">
                    <span><span><UserCircleIcon className="h-12 w-12 text-gray-300 mr-2" aria-hidden="true"/></span><span>author</span></span>
                    <span className="float-right">2022-08-01 18:22:38</span>
                  </div>
                  <div className="pl-12">
                    <div className="break-all overflow-clip overflow-hidden text-gray-500">
                      Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
                    </div>
                    <div className="float-right mr-4 text-xs text-gray-300 hover:text-gray-500 font-semibold">
                      <button>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          {/* ---------------Left End--------------------------*/}
          {/* ---------------Right Begain--------------------------*/}
          <div className="pt-28">
            <span>ad here</span>
          </div>
          {/* ---------------Right End--------------------------*/}
        </div>

      </div>
    </div>
  )
}
  