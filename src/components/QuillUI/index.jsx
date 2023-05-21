import { useState } from "react"
import QuillEditor from "./QuillEditor"
import QuillViewer from "./QuillViewer"

export default function QuillUI() {
  const [content, setContent] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      {isEdit ?
        <QuillEditor
          content={content}
          setContent={setContent}
          setIsEdit={setIsEdit}
        /> :
        <QuillViewer
          content={content}
          setIsEdit={setIsEdit}
        />
      }
    </>
  )
}