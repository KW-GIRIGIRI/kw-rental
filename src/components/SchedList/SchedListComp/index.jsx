import { useState } from "react"
import Button from "../../../modules/Button"
import CancelModal from "../../EquipSched/CancelModal"
import * as S from "./style"

export default function SchedListComp({ receive, rentItem }) {
  const [cancelModal, setCancelModal] = useState(false)

  return (
    <>
    <S.RentalLi>
      <img src={rentItem.imgUrl} alt={`${rentItem.modelName} 이미지`} />
      <div>
        <p>{rentItem.category}</p>
        <p>{rentItem.modelName}</p>
      </div>
      <span>{rentItem.reservationSpecId}</span>
      {
          receive ?
            // equipmentId 수정 후 적용
          <select>
            <option>자산번호를 선택하세요.
            </option>
            <option>20190500020001
            </option>
            <option>20190500020002
            </option>
            <option>20190500020003
            </option>
          </select>
          :
          <S.NumWrap>
            <p>20200200020001</p>
          </S.NumWrap>
      }
      <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" onClick={() => setCancelModal(true)} />
    </S.RentalLi>
      <CancelModal modelName={rentItem.modelName} count={rentItem.reservationSpecId} cancelModal={cancelModal} setCancelModal={setCancelModal} />
    </>
  )
}
