import dynamic from 'next/dynamic'
import { useRef } from 'react'

const Editor = dynamic(
  import('@tinymce/tinymce-react').then(({ Editor }) => Editor),
  {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  }
)

export default function App({ value, setValue }) {
  const editorRef = useRef(null)

  const log = (e) => {
    e.preventDefault()
    if (editorRef.current) {
      const content = editorRef.current.getContent()
      setValue(content)
      console.log(content)
    }
  }

  return (
    <>
      <Editor
        apiKey="4xmweb7vtr0c9ltay0k0z2kyer037pkg6iuoy5uz2qty927f"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={value}
        init={{
          height: 500,
          width: '100%',
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'link image media |' +
            'preview fullscreen removeformat',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          images_upload_handler: async function (blobInfo, success, failure) {
            return (
              (await 'data:') +
              blobInfo.blob().type +
              ';base64,' +
              blobInfo.base64()
            )
            // console.log(blobInfo)
            // success(
            //   'data:' + blobInfo.blob().type + ';base64,' + blobInfo.base64()
            // )
          },
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  )
}
