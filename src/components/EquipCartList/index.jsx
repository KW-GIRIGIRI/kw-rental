import { useState } from "react"
import { category } from "../../data/category"
import Image from "../../modules/Image"
import ModifyModal from "./ModifyModal"
import * as S from "./style"

export default function EquipCartList({cart}) {
  const [modal, setModal] = useState(false)

  return (
    cart ? 
    <S.ListUl>
      <ModifyModal modal={modal} setModal={setModal} />
      <S.ListLi>
        <p>사진</p>
        <p>기자재</p>
        <p>개수</p>
        <p>수령일</p>
        <p>반납일</p>
        <p> </p>
      </S.ListLi>
      {
        cart.map((item, index) => 
        <S.ListLi key={index}>
            <Image width="72px" height="72px" borderRadius="10px" src={item.imgUrl} alt='' />
            <S.ItemWrap>
              <p>{category.map(value => 
                  value.value === item.category && value.label
                  )}</p>
              <p>{item.modelName}</p>
            </S.ItemWrap>
            <p>1</p>
            <p>{item.rentalStartDate}</p>
            <p>{item.rentalEndDate}</p>
            <S.BtnWrap>
              <button onClick={() => setModal(true)}>수정</button>
              <button>삭제</button>
            </S.BtnWrap>
          </S.ListLi>
        )
      }
      </S.ListUl>
      : <p>담은 기자재가 없습니다.</p>
  )
}
