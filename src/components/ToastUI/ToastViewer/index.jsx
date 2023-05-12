import Editor from "@toast-ui/editor"
import "@toast-ui/editor/dist/toastui-editor.css"
import { useEffect, useRef } from 'react'

export default function ToastViewer({content}) {
  const viewerRef = useRef()

  useEffect(() => {
    viewerRef.current = new Editor.factory({
      el: document.querySelector("#viewer"),
      viewer: true,
      initialValue: content,
    })
  }, [content])

  return (
    <>
      <div id="viewer" />
    </>
  )
}