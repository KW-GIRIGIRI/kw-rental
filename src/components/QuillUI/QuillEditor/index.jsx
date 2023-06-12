import ReactQuill, { Quill } from "react-quill"
import 'react-quill/dist/quill.snow.css'
import ImageResize from 'quill-image-resize'
import { EditorWrap, BtnWrap } from "../style"
import { postImage } from "../../../api/api"
import { useRef, useMemo, useState } from "react"
import Button from "../../../modules/Button"
import { editLabNotice } from "../../../api/api"
import { useSelector } from "react-redux"

export default function QuillEditor({ content, setIsEdit }) {
  const hanul = useSelector(state => state.labControl.lab)
  const quillRef = useRef(null)
  const [input, setInput] = useState(content)

  const imageHandler = () => {
    const img = document.createElement('input')
    img.setAttribute('type', 'file')
    img.setAttribute('accept', 'image/*')
    img.click()

    img.addEventListener('change', async () => {
      const file = img.files[0]
      const formData = new FormData()
      formData.append("file", file)
      const imgUrl = await postImage(formData)
      const editor = quillRef.current.getEditor()
      const range = editor.getSelection()
      editor.insertEmbed(range.index, 'image', imgUrl)
      editor.setSelection(range.index + 1)
    })
  }

  const handleEditState = async () => {
    const res = await editLabNotice(hanul ? "hanul" : "hwado", { "notice": input })
    res === 204 && setIsEdit(false)
  }

  const modules = useMemo(
    () => {
      Quill.register('modules/ImageResize', ImageResize, true)

      return {
        toolbar: {
          container: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'bullet'}],
            ['link'],
            ['image'],
            ['clean']
          ],
          handlers: { image: imageHandler },
        },
        ImageResize: {
          parchment: Quill.import('parchment')
        }
      }
    }, [])

  return (
    <>
      <EditorWrap>
        <ReactQuill
          ref={quillRef}
          value={input}
          placeholder={'랩실 소개를 작성해주세요.'}
          onChange={(value) => { setInput(value) }}
          modules={modules}
          theme="snow"
        />
      </EditorWrap>

      <BtnWrap>
        <Button
          text="저장하기"
          onClick={handleEditState}
          padding="15px 30px"
          fontSize="15px"
          fontWeight="600"
          className="main"
          borderRadius="10px"
        />
        <Button
          text="취소하기"
          onClick={() => setIsEdit(false)}
          padding="15px 30px"
          fontSize="15px"
          fontWeight="600"
          className="sub"
          borderRadius="10px"
        />
      </BtnWrap>
    </>
  )
}