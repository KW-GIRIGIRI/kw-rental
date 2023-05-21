import DOMPurify from "dompurify"
import { ViewerWrap, Div } from "../style"
import { AuthContext } from "../../../context/Context"
import { useContext } from "react"
import IconPencil from "../../../assets/icon-pencil.svg"

export default function QuillViewer({ content, setIsEdit }) {
  const { isAuth } = useContext(AuthContext)

  return (
    <ViewerWrap>
      {isAuth &&
        <Div onClick={() => { setIsEdit(true) }}>
          <img src={IconPencil} alt="수정 아이콘" />
          <p>랩실 소개 수정</p>
        </Div>}
      <div dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content)
      }}></div>
    </ViewerWrap>
  )
}