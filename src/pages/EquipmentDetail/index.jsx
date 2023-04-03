import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteEquipment, getProductDetail, getItemList } from "../../api/api"
import AddCartEquip from "../../components/AddCartEquip"
import DetailDesc from "../../components/DetailDesc"
import WeekPicker from "../../components/WeekPicker"
import ItemListWrap from "../../components/ItemListWrap"
import { AuthContext } from "../../context/Context"
import Button from "../../modules/Button"
import Image from "../../modules/Image"
import { BtnWrap } from "../AddEquipment/style"
import * as S from "./style"

export default function EquipmentDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null)
  const [item, setItem] = useState(null)
  const navigate = useNavigate()
  const { isAuth } = useContext(AuthContext)

  const getProduct = async () => {
    const response = await getProductDetail(params.id);
    setProduct(response)
  }

  const getItem = async () => {
    const response = await getItemList(params.id);
    setItem(response)
  };

  const handleDeleteProduct = async () => {
    // console.log(params.id)
    const response = await deleteEquipment(params.id)
    // console.log(response)
  }

  useEffect(() => {
    getProduct();
  }, [])

  useEffect(() => {
    getItem();
  }, [])

  return (
    <S.Wrapper>
      {
        product &&
        <>
          <S.NavDiv>
            <S.SimpleDesc>
              <span>기자재 조회</span>
              <span>{product.category}</span>
              <span>{product.modelName}</span>
            </S.SimpleDesc>
            {
              isAuth ?
                <div>
                  <button onClick={() => navigate('/equipment/edit', { state: { id: params.id } })}>수정</button>
                  <button onClick={handleDeleteProduct}>삭제</button>
                </div> : <></>
            }
          </S.NavDiv>
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
          {
            isAuth ?
              <>
                <S.SubTitle>품목 대여 현황</S.SubTitle>
                {/* 월별 캘린더로 수정 */}
                <WeekPicker />
                <S.SubTitle>품목 관리</S.SubTitle>
                {
                  item ?
                    <ItemListWrap item={item.items} isEdit={false} />
                    : <div>loading...</div>
                }
                <BtnWrap>
                  <Button onClick={() => navigate(-1)} className="sub" text="뒤로 가기" margin="120px 0 30px" padding="15px 23px" borderRadius="10px" fontSize="15px" />
                </BtnWrap>
              </>
              :
              <>
                <S.SubTitle>대여 현황</S.SubTitle>
                <WeekPicker />
                <S.SubTitle>기자재 담기</S.SubTitle>
                <AddCartEquip />
              </>
          }
        </>
      }
    </S.Wrapper>
  )
}
