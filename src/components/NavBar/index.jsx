import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/Context";
import * as S from "./style"

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation()
  const { isAuth } = useContext(AuthContext)

  return (
    <S.NavWrap>
      <S.NavUl>
        <S.NavLi
          className={!location.pathname.includes('/history') ? 'on' : 'off'}
          onClick={() => navigate('/')}>
          <p>기자재 대여</p>
        </S.NavLi>
        <S.NavLi>
          <p>랩실 대여</p>
        </S.NavLi>
        <S.NavLi
          className={location.pathname.includes('/history') ? 'on' : 'off'}
          onClick={() => navigate('/history/equipment')}>
          <p>{isAuth ? '히스토리' : '내 대여 정보'}</p>
        </S.NavLi>
      </S.NavUl>
    </S.NavWrap>
  )
}
