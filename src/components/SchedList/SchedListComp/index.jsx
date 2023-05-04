import { useEffect, useState } from "react"
import { getItemList } from "../../../api/api"
import Button from "../../../modules/Button"
import CancelModal from "../../EquipSched/CancelModal"
import * as S from "./style"

export default function SchedListComp({ receive, rentItem }) {
  const [cancelModal, setCancelModal] = useState(false)
  const [itemLi, setItemLi] = useState([])

  const handleGetEquip = async () => {
    const res = await getItemList(rentItem.equipmentId)
    setItemLi(res.items);
  }

  useEffect(() => {
    handleGetEquip()
  }, [])

  return (
    <>
    <S.RentalLi>
      <img src={rentItem.imgUrl} alt={`${rentItem.modelName} 이미지`} />
      <div>
        <p>{rentItem.category}</p>
        <p>{rentItem.modelName}</p>
      </div>
      <span>{rentItem.amount}</span>
      {
          receive ?
          <select defaultValue="default">
            <option value='default' disabled hidden>자산번호를 선택하세요.
              </option>
              {
                itemLi.map(item => 
                  <option key={item.propertyNumber} value={item.propertyNumber}>{item.propertyNumber}</option>  
                )
              }
          </select>
          :
            <S.NumWrap>
              {
                rentItem.rentalSpecs ?
                  rentItem.rentalSpecs?.map(i => <p>{i.propertyNumber}</p>)
                : <p>-</p>
              }
          </S.NumWrap>
      }
      <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" onClick={() => setCancelModal(true)} />
    </S.RentalLi>
      <CancelModal modelName={rentItem.modelName} count={rentItem.reservationSpecId} cancelModal={cancelModal} setCancelModal={setCancelModal} />
    </>
  )
}
