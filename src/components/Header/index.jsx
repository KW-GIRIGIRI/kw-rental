import HeaderUserInfo from './HeaderUserInfo'
import Logo from "../../assets/logo.svg"
import { Wrapper, Desc, ImgLogo } from "./style"
import { useContext } from 'react'
import { AuthContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

export default function Header({ text, classNum }) {
  const { isAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <Wrapper>
      <ImgLogo src={Logo} alt="광운대학교 강의실 및 기자재 대여 페이지" onClick={() => navigate('/')} />
      {isAuth ? <Desc>관리자용</Desc> : <></>}
      <HeaderUserInfo classNum={classNum} />
    </Wrapper>
  )
}
