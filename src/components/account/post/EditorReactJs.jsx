import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const ReactWEditor = dynamic(import('wangeditor-for-react'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


const config = {
  height: 500,
  menus: [
    'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'indent',
    'lineHeight',
    'foreColor',
    'backColor',
    'list',
    'todo',
    'justify',
    'quote',
    'table',
    'splitLine',
    'link',
    'image',
    'undo',
    'redo',
  ],
  uploadImgShowBase64: true,
  // customUploadImg: (resultFiles, insertImgFn) => {
  //   // 获取上传的文件
  //   const file = resultFiles[0]
  //   console.log(file)
  //   // 上传图片，返回结果，将图片插入到编辑器中
  //   insertImgFn('imgUrl')
  // },
  uploadImage: {
    base64LimitSize: 1000 * 1024,
  },
  fontSizes: {
    'x-small': { name: '10px', value: '1' },
    small: { name: '12px', value: '2' },
    normal: { name: '16px', value: '3' },
    large: { name: '18px', value: '4' },
    'x-large': { name: '24px', value: '5' },
    'xx-large': { name: '32px', value: '6' },
    'xxx-large': { name: '48px', value: '7' },
  },
  showFullScreen: true,
}

function Editor({ value, setValue }) {
  let editorRef = useRef(null)
  return (
    <ReactWEditor
      ref={editorRef}
      config={config}
      defaultValue={value}
      onChange={setValue}
    />
  )
}

export default Editor
