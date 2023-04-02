/*
  This example requires Tailwind CSS v2.0+ 
*/
import { ContentBanner } from '@/components/common/help/ContentBanner'
import http from '@/utils/axios'
import { useEffect, useState } from 'react'

export function Abouts() {
  const [article, setArticle] = useState({})
  useEffect(() => {
    http.get('/system/articles/about').then(({ about }) => {
      setArticle(about)
    })
  }, [])
  return (
    <>
      <ContentBanner
        className="bg-maincolor rounded-lg pb-8"
        titles={article.title}
        subtitles={article.subTitle}
      />
      <div className="w-full  py-16">
        <div className="mx-auto flow-root max-w-md overflow-hidden rounded-lg bg-gray-50 px-4 py-8 pb-16 shadow-lg sm:max-w-4xl sm:px-6  lg:max-w-5xl lg:px-8">
          <div className="mx-auto max-w-md sm:max-w-4xl sm:px-6  lg:max-w-5xl lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              {/* <p className="mt-8 text-xl leading-8 text-gray-500">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p> */}
            </div>
            <div className="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
              <p>{article.content} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
