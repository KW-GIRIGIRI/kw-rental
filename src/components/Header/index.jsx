import HeaderUserInfo from './HeaderUserInfo'
import Logo from "../../assets/logo.svg"
import { Wrapper } from "./style"

export default function Header({text, classNum}) {
  return (
    <Wrapper>
      <h1 className='ir'>광운대학교 강의실 및 기자재 대여 페이지</h1>
      <img src={Logo} alt="로고" />
      <HeaderUserInfo classNum={classNum} />
    </Wrapper>
  )
}
