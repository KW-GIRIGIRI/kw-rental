import IconNoti from "../../../assets/icon-notification.svg"
import * as S from "./style"

export default function HeaderUserInfo( { classNum } ) {
  return (
    <S.Wrapper>
      <S.NotiIcon src={IconNoti} alt="" />
      <S.ClassNumP>{classNum}</S.ClassNumP>
      <S.CircleSpan></S.CircleSpan>
    </S.Wrapper>
  )
}
