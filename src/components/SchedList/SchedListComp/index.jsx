import { forwardRef, useEffect, useState } from "react"
import { getItemList } from "../../../api/api"
import Button from "../../../modules/Button"
import CancelModal from "../../EquipSched/CancelModal"
import * as S from "./style"

const SchedListComp = forwardRef(({ receive, rentItem }, itemRef) => {
  const [cancelModal, setCancelModal] = useState(false)
  const [itemLi, setItemLi] = useState([])

  const handleGetEquip = async () => {
    const res = await getItemList(rentItem.equipmentId)
    setItemLi(res.items);
  }

  console.log(rentItem);


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
            itemLi.length ?
              <S.PropertyDiv>
                {
                  Array(rentItem.amount).fill().map((_, i) => 
                    <select
                      key={i} defaultValue="default">
                        <option value='default' disabled hidden>자산번호를 선택하세요.</option>
                          {
                            itemLi.map(item => 
                              <option key={item.propertyNumber} value={item.propertyNumber}>{item.propertyNumber}</option>  
                            )
                          }
                      </select> 
                  )
                }
                </S.PropertyDiv>
            : <S.PropertyNull>소모품</S.PropertyNull>
        :
        <S.NumWrap>
          {
            rentItem.rentalSpecs ?
              rentItem.rentalSpecs?.map(i => <p>{i.propertyNumber}</p>)
            : <p>-</p>
          }
        </S.NumWrap>
        }
        {
          receive &&
          <Button width="max-content" className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" onClick={() => setCancelModal(true)} />
        }
    </S.RentalLi>
      <CancelModal modelName={rentItem.modelName} count={rentItem.count} cancelModal={cancelModal} setCancelModal={setCancelModal} />
    </>
  )
})

export default SchedListComp