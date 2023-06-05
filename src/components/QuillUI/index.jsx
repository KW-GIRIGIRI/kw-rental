import { useContext, useState, useEffect } from "react"
import useTitle from "../../hook/useTitle"
import QuillEditor from "./QuillEditor"
import QuillViewer from "./QuillViewer"
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { BackBtn } from "./style"
import { getLabNotice } from "../../api/api"

export default function QuillUI() {
  const [content, setContent] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const hanul = useSelector(state => state.labControl.lab)
  useTitle(`${hanul ? '한울관' : '화도관'} 랩실 ${isEdit ? '소개 수정' : '소개'}`)
  const { isAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGetLabNotice = async () => {
    const response = await getLabNotice(hanul ? "hanul" : "hwado")
    setContent(response.notice)
  }

  useEffect(() => {
    handleGetLabNotice()
  }, [isEdit, hanul])

  return (
    <>
      {isEdit ?
        <QuillEditor
          content={content}
          setIsEdit={setIsEdit}
        /> :
        <>
          <QuillViewer
            content={content}
            setIsEdit={setIsEdit}
          />
          {
            isAuth && 
              <BackBtn
                onClick={() => navigate(-1)}
                className="sub"
                text="뒤로 가기"
                padding="15px 23px"
                borderRadius="10px"
                fontSize="15px"
                margin='30px auto'
              />
          }
        </>
      }
    </>
  )
}