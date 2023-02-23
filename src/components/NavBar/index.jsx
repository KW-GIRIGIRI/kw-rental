import Logout from "../../assets/icon-logout.svg"
import NavClass from "../../assets/icon-nav-class.svg"
import NavEq from "../../assets/icon-nav-eq.svg"
import NavLab from "../../assets/icon-nav-lab.svg"
import NavNoti from "../../assets/icon-nav-noti.svg"
import Logo from "../../assets/logo.svg"
import * as S from "./style"

export default function NavBar() {
  return (
    <S.NavWrap>
      <h1 className='ir'>광운대학교 강의실 및 기자재 대여 페이지</h1>
      <S.LogoImg src={Logo} alt="" />
      <S.NavUl>
        <S.NavLi>
          <img src={NavEq} alt="" />
          <p>기자재 대여</p>
        </S.NavLi>
        <S.NavLi>
          <img src={NavLab} alt="" />
          <p>랩실 대여</p>
        </S.NavLi>
        <S.NavLi>
          <img src={NavClass} alt="" />
          <p>강의실 대여</p>
        </S.NavLi>
        <S.NavLi>
          <img src={NavNoti} alt="" />
          <p>공지사항</p>
        </S.NavLi>
      </S.NavUl>
      <S.LogoutWrap>
        <img src={Logout} alt="" />
        <p>로그아웃</p>
      </S.LogoutWrap>
    </S.NavWrap>
  )
}
