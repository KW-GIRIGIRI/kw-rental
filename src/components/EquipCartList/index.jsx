import { useState } from "react"
import Image from "../../modules/Image"
import ModifyModal from "./ModifyModal"
import * as S from "./style"

export default function EquipCartList() {
  const [modal, setModal] = useState(false)

  const handleModify = () => {
    setModal(true)
  }

  return (
    <S.ListUl>
      <ModifyModal modal={modal} setModal={setModal} />
      <S.ListLi>
        <p>사진</p>
        <p>기자재</p>
        <p>개수</p>
        <p>수령일</p>
        <p>반닙일</p>
        <p> </p>
      </S.ListLi>
      <S.ListLi>
        <Image width="72px" height="72px" borderRadius="10px" src='https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg' alt='' />
        <S.ItemWrap>
          {/* <p>{category.map(value => 
              value.value === item.category && value.label
            )}</p> */}
            <p>카메라</p>
            <p>MIRRORLESS SONY a6600</p>
        </S.ItemWrap>
        <p>1</p>
        <p>23년 3월 1일(수)</p>
        <p>23년 3월 1일(수)</p>
        <S.BtnWrap>
          <button onClick={handleModify}>수정</button>
          <button>삭제</button>
        </S.BtnWrap>
      </S.ListLi>
    </S.ListUl>
  )
}
