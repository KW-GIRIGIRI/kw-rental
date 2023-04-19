import * as S from "./style"
import { BtnWrap } from "../AddEquipment/style"
import Button from "../../modules/Button"
import { useLocation, useNavigate } from "react-router-dom"
import ItemReserveHist from "../../components/ItemReserveHist"
import useToggle from "../../hook/useToggle"
import { useState } from "react"
import Input from "../../modules/Input"
import { changeItemState, getItem, getItemList, getProductDetail } from "../../api/api"
import { useEffect } from "react"

// mock data
export const product = {
  category: 'camera',
  modelName: 'DSLR SONY 6600',
  maker: "SONY",
  components: '줌렌즈, 단렌즈 20mm, 충전기 포함',
  purpose: '동영상 촬영',
  rentalQuantity: {
    totalQuantity: 10
  },
  rentalPlace: '한울관 B119호',
  imgUrl: "https://img.danawa.com/prod_img/500000/023/522/img/15522023_1.jpg?shrink=500:500"
}

export default function EquipmentItemDetail() {
  const navigate = useNavigate()
  const { Toggle, toggle, state } = useToggle()
  const [editNum, setEditNum] = useState(false);
  const [itemList, setitemList] = useState([])
  const [equip, setEquip] = useState(null)
  const [item, setItem] = useState(null)
  const location = useLocation()

  const handleChangeItemState = async (state) => {
    const data = {
      "rentalAvailable" : state
    }
    await changeItemState(location.state.id, JSON.stringify(data))
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
        <S.numEditBtn onClick={() => { setEditNum(!editNum) }}><p>수정</p></S.numEditBtn>
      </S.Div>
      {
        editNum ?
          <Input type="number" name="propertyNum" placeholder="20190500260004" maxLen="14" className="propertyNum" defaultValue={item.propertyNumber} />
          : <S.ItemNumDiv>
            <p>{item.propertyNumber}</p>
          </S.ItemNumDiv>
      }
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
