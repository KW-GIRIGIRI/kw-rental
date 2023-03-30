import * as S from "./style"
import { Wrapper, DetailWrapper, SubTitle } from "../EquipmentDetail/style"
import Button from "../../modules/Button"
import IconFileImg from "../../assets/icon-fileImg.svg"
import DetailDescInput from "../../components/DetailDesc/DetailDescInput"
import ItemManagerWrap from "../../components/ItemManagerWrap"
import iconFileImgWhite from "../../assets/icon-fileImg-white.svg"
import Textarea from "../../modules/Textarea"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Image from "../../modules/Image"

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

export default function AddEquipment() {
  const location = useLocation()
  const [isEdit, setIsEdit] = useState(false)




  const handleGetProduct = () => {
    // location.state.id로 api 요청

    // 이전 페이지에서 수정 버튼 누를 시 state.id로 전달
    setIsEdit(true)
  }


  useEffect(() => {
    if (location.pathname.includes('edit')) handleGetProduct()
  }, [])

  return (
    <Wrapper>
      <DetailWrapper>
        {
          isEdit ?
            <>
              <Image width="300px" height="300px" borderRadius={props => props.theme.borderRadius.lv2} src={product.imgUrl} alt="" />
              <S.FileBtn>
                <img src={iconFileImgWhite} alt="" />
                <p>사진 변경</p>
                <input type="file" />
              </S.FileBtn>
            </>
            : <S.FileLabel>
              <img src={IconFileImg} alt="" />
              <p>사진 추가</p>
              <input type="file" />
            </S.FileLabel>
        }
        <DetailDescInput product={product} />
      </DetailWrapper>
      <SubTitle>안내사항</SubTitle>
      <Textarea maxLen="500" className="detailDesc" placeholder="안내사항을 작성해주세요." name="" id="" rows="6" count="500" />
      {
        isEdit ?
          <>
            <SubTitle>품목 수정 및 추가</SubTitle>
            <ItemManagerWrap />
          </>
          :
          <>
            <SubTitle>품목관리</SubTitle>
            <ItemManagerWrap />
          </>
      }
      <S.BtnWrap>
        <Button className="main" text="저장하기" padding="15px 31px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0" />
        <Button className="sub" text="취소하기" padding="15px 31px" borderRadius="10px" fontSize="15px" />
      </S.BtnWrap>
    </Wrapper>
  )
}
