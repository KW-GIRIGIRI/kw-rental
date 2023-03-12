import NavEq from "../../assets/icon-nav-eq.svg"
import NavLab from "../../assets/icon-nav-lab.svg"
import NavNoti from "../../assets/icon-nav-noti.svg"
import Logo from "../../assets/logo.svg"
import * as S from "./style"

export default function NavBar() {
  return (
    <S.NavWrap>
      <h1 className='ir'>광운대학교 강의실 및 기자재 대여 페이지</h1>
      <S.LogoImg src={Logo} alt="기리기리" />
      <ul>
        <S.NavLi>
          <img src={NavNoti} alt="" />
          <p>공지사항</p>
        </S.NavLi>
        <S.NavLi>
          <img src={NavEq} alt="" />
          <p>기자재 대여</p>
        </S.NavLi>
        <S.NavLi>
          <img src={NavLab} alt="" />
          <p>랩실 대여</p>
        </S.NavLi>
      </ul>
    </S.NavWrap>
  )
}
