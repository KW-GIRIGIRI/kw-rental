import AddCartEquip from "../../components/AddCartEquip"
import DetailDesc from "../../components/DetailDesc"
import WeekPicker from "../../components/WeekPicker"
import Image from "../../modules/Image"
import * as S from "./style"

const noticeList = [
  '대여 시간(17시~20시) / 반납 시간(15시~16시) 엄수',
  'SD카드 별도 대여 필요 ',
  '당일 대여 불가',
  '디지털영상촬영및편집 수업 사용 기자재'
]


export default function EquipmentDetail() {

  return (
    <S.Wrapper>
      <S.SimpleDesc>기자재 조회 {">"} 카메라 MIRRORLESS {">"} SONY a6600</S.SimpleDesc>
      <S.DetailWrapper>
        <Image width="335px" height="335px" borderRadius={props => props.theme.borderRadius.lv2} src={`https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1677078207~exp=1677078807~hmac=7e23a062e9420fadf600079d1364d67e11ff7c59f0c0b70bd40695105217f3aa`} alt="" />
        <DetailDesc />
      </S.DetailWrapper>
      <S.SubTitle>안내사항</S.SubTitle>
      <S.NoticeUl>
        {
          noticeList.map((text, index) => {
            return (
              <S.NoticeLi key={index}>{text}</S.NoticeLi>
            )
          })
        }
      </S.NoticeUl>
      <S.SubTitle>대여 현황</S.SubTitle>
      <WeekPicker />
      <S.SubTitle>기자재 담기</S.SubTitle>
      <AddCartEquip />
    </S.Wrapper>
  )
}
