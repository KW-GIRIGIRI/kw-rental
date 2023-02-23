import HeaderTitle from './HeaderTitle'
import HeaderUserInfo from './HeaderUserInfo'
import { Wrapper } from "./style"

export default function Header({text, classNum}) {
  return (
    <Wrapper>
      <HeaderTitle text={text} />
      <HeaderUserInfo classNum={classNum} />
    </Wrapper>
  )
}
