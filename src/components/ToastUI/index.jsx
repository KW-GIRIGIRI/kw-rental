import { useState } from 'react'
import ToastEditor from './ToastEditor'
import ToastViewer from './ToastViewer'

export default function ToastUI() {
  const [content, setContent] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      {isEdit ?
        <ToastEditor content={content} setContent={setContent} setIsEdit={setIsEdit} /> :
        <ToastViewer content={content} setIsEdit={setIsEdit} />
      }
    </>
  )
}