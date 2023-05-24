import { useState } from "react"
import useTitle from "../../hook/useTitle"
import QuillEditor from "./QuillEditor"
import QuillViewer from "./QuillViewer"
import { useSelector } from "react-redux";

export default function QuillUI() {
  const [content, setContent] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const hanul = useSelector(state => state.labControl.lab)
  useTitle(`${hanul ? '한울관' : '화도관'} 랩실 ${isEdit ? '소개 수정' : '소개'}`)

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