import { useState } from 'react'
import ToastEditor from './ToastEditor'
import ToastViewer from './ToastViewer'

export default function ToastUI() {
  const [content, setContent] = useState("")

  return (
    <>
      <ToastEditor setContent={setContent} />
      <ToastViewer content={content} />
    </>
  )
}