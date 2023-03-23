import { useLocation, useNavigate } from "react-router-dom"
import * as S from "./style"

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <S.NavWrap>
      <S.NavUl>
        <S.NavLi
          className={ location.pathname === '/' ? 'on' : 'off' }
          onClick={() => navigate('/')}>
          <p >공지사항</p>
        </S.NavLi>
        <S.NavLi
          className={ location.pathname === '/equipment' ? 'on' : 'off' }
          onClick={() => navigate('/equipment')}>
          <p>기자재 대여</p>
        </S.NavLi>
        <S.NavLi>
          <p>랩실 대여</p>
        </S.NavLi>
      </S.NavUl>
    </S.NavWrap>
  )
}
