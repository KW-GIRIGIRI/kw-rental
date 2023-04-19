import * as S from "./style"
import { BtnWrap } from "../AddEquipment/style"
import Button from "../../modules/Button"
import { useLocation, useNavigate } from "react-router-dom"
import ItemReserveHist from "../../components/ItemReserveHist"
import useToggle from "../../hook/useToggle"
import { useState } from "react"
import Input from "../../modules/Input"
import { changeItemState, changePropertyNum, getItem, getItemList, getProductDetail } from "../../api/api"
import { useEffect } from "react"
import { useRef } from "react"

export default function EquipmentItemDetail() {
  const navigate = useNavigate()
  const { Toggle, toggle, state } = useToggle()
  const [editNum, setEditNum] = useState(false);
  const [itemList, setitemList] = useState([])
  const [equip, setEquip] = useState(null)
  const [item, setItem] = useState(null)
  const propertyNumRef = useRef()
  const location = useLocation()

  const handleManageNum = () => {
    setEditNum(!editNum)
    if(editNum) handleChangePropertyNum()
  }

  const handleChangePropertyNum = async () => {
    if (propertyNumRef.current.value !== item.propertyNumber) {
      const data = {
        "propertyNumber": propertyNumRef.current.value
      }

      const response = await changePropertyNum(location.state.id, JSON.stringify(data))
      response === 204 || setEditNum(!editNum)
    }
  }

  const handleChangeItemState = async (state) => {
    const data = {
      "rentalAvailable" : state
    }
    const response = await changeItemState(location.state.id, JSON.stringify(data))
    response === 204 || alert()
  }

  const handleGetEquip = async () => {
    const response = await getProductDetail(location.state.id)
    setEquip(response)
  }

  const handleGetItemList = async () => {
    const response = await getItemList(location.state.id)
    setitemList(response.items)
  }

  const handleGetItem = async () => {
    const response = await getItem(location.state.id)
    response.rentalAvailable && toggle()
    setItem(response)
  }

  useEffect(() => {
    Promise.all([handleGetItemList(), handleGetItem(), handleGetEquip()])
  }, [])

  useEffect(() => {
    handleChangeItemState(state)
  }, [state])

  return (
    equip && itemList && item &&
    <S.Wrapper>
      <S.NavDiv>
        <S.SimpleDesc>
          <span>기자재 조회</span>
          <span>{equip.category}</span>
          <span>{equip.modelName}</span>
          <span>{item.propertyNumber}</span>
        </S.SimpleDesc>
        <div>
          <button>삭제</button>
        </div>
      </S.NavDiv>
      <S.Div>
        <S.SubTitle>품목 현황</S.SubTitle>
        <S.SelectItem name="" id="">
        {
          itemList.map(item => <option key={item.propertyNumber} value="">{item.propertyNumber}</option>)
        }
        </S.SelectItem>
      </S.Div>
      <S.Div>
        <S.SubTitle>품목 대여 ON/OFF</S.SubTitle>
      </S.Div>
      <Toggle className='rental' on='대여 가능' off='대여 불가' />
      <S.Div>
        <S.SubTitle>자산번호 관리</S.SubTitle>
        <S.numEditBtn onClick={handleManageNum}><p>수정</p></S.numEditBtn>
      </S.Div>
      <Input placeholder="20190500260004" maxLen="14" className="propertyNum" defaultValue={item.propertyNumber} ref={propertyNumRef} disabled={!editNum} />
      <S.Div>
        <S.SubTitle>품목 예약/사용 이력</S.SubTitle>
      </S.Div>
      <ItemReserveHist />
      <BtnWrap>
        <Button onClick={() => navigate(-1)} className="sub" text="뒤로 가기" margin="60px 0 30px" padding="15px 23px" borderRadius="10px" fontSize="15px" />
      </BtnWrap>
    </S.Wrapper>
  )
}
