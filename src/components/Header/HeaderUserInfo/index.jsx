import iconDownArrow from "../../../assets/icon-downArrow.svg"
import * as S from "./style"

export default function HeaderUserInfo( { classNum } ) {
  return (
    <S.Wrapper>
      <S.ClassNumP>{classNum}</S.ClassNumP>
      <S.NotiIcon src={iconDownArrow} alt="" />
    </S.Wrapper>
  )
}
