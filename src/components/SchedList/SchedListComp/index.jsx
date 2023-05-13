import { useEffect, useState } from "react"
import { getRentAvailabilityItemList } from "../../../api/api"
import Button from "../../../modules/Button"
import CancelModal from "../../EquipSched/CancelModal"
import * as S from "./style"
import { useDispatch, useSelector } from "react-redux";
import { setReserveId } from "../../../store/reducer/authReceiveSlice"

export default function SchedListComp({ id, receive }) {
  const [cancelModal, setCancelModal] = useState(false)
  const [itemLi, setItemLi] = useState([])
  const dispatch = useDispatch()
  const receiveSpecList = useSelector(state => state.authReceive.receiveSpecList.byId)
  const receiveItem = receiveSpecList[id] || null;

  const handleGetEquip = async () => {
    const res = await getRentAvailabilityItemList(receiveItem.equipmentId)
    setItemLi(res.items);
  }

  const handleSetProperty = (e, i) => {
    dispatch(setReserveId({
      length: receiveItem.amount,
      reservationSpecId: receiveItem.reservationSpecId,
      idx: i,
      value: e.target.value
    }))
  }

  useEffect(() => {
    handleGetEquip()
  }, [])

  return (
    <>
      <S.RentalLi>
      <img src={receiveItem.imgUrl} alt={`${receiveItem.modelName} 이미지`} />
      <div>
        <p>{receiveItem.category}</p>
        <p>{receiveItem.modelName}</p>
      </div>
      <span>{receiveItem.amount}</span>
        {
          receive && !receiveItem.rentalSpecs ?
          itemLi.length ?
            <S.PropertyDiv>
              {
                Array(receiveItem.amount).fill().map((_, i) => 
                  <select onChange={(e) => handleSetProperty(e, i)}
                    key={i} defaultValue={"default"}>
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
            receiveItem.rentalSpecs ?
              receiveItem.rentalSpecs?.map(i => <p key={i.propertyNumber}>{i.propertyNumber}</p>)
            : <p>-</p>
          }
        </S.NumWrap>
        }
        {
          receive &&
          <Button width="max-content" className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" onClick={() => setCancelModal(true)} />
        }
    </S.RentalLi>
      <CancelModal modelName={receiveItem.modelName} count={receiveItem.count} cancelModal={cancelModal} setCancelModal={setCancelModal} />
    </>
  )
}