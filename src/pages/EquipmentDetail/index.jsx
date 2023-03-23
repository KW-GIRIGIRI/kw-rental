import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../../api/api"
import AddCartEquip from "../../components/AddCartEquip"
import DetailDesc from "../../components/DetailDesc"
import WeekPicker from "../../components/WeekPicker"
import Image from "../../modules/Image"
import * as S from "./style"

export default function EquipmentDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null)

  const getProduct = async () => {
    const response = await getProductDetail(params.id);
    setProduct(response)
  }
  
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <S.Wrapper>
      {
        product &&
        <>
          <S.SimpleDesc>
            <span>기자재 조회</span> 
            <span>{product.category}</span> 
            <span>{product.modelName}</span>
          </S.SimpleDesc>
          <S.DetailWrapper>
            <Image width="300px" height="300px" borderRadius={props => props.theme.borderRadius.lv2} src={product.imgUrl} alt="" />
            <DetailDesc product={product} />
          </S.DetailWrapper>
          <S.SubTitle>안내사항</S.SubTitle>
          <S.NoticeUl>
            {/* {
              productDesc?.map((text, index) => {
                return (
                  <S.NoticeLi key={index}>{text}</S.NoticeLi>
                )
              })
            } */}
            <S.NoticeLi>{product.description}</S.NoticeLi>
          </S.NoticeUl>
          <S.SubTitle>대여 현황</S.SubTitle>
          <WeekPicker />
          <S.SubTitle>기자재 담기</S.SubTitle>
          <AddCartEquip />
        </>
      }
    </S.Wrapper>
  )
}
