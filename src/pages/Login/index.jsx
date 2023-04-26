import Button from "../../modules/Button"
import * as S from "./style"
import iconShowPw from "../../assets/icon-showPassword.svg"
import iconBlockPw from "../../assets/icon-blockPassword.svg"
import { useState } from "react"

export default function Login() {
  const [showPw, setShowPw] = useState(true)

  return (
    <>
    <S.Wrap>
      <h2>로그인</h2>
      <S.Form action="">
        <input type="text" placeholder="학번(아이디)" />
        <input type={showPw ? 'password' : 'text'} placeholder="비밀번호" />
        <S.PwImg bottom={showPw ? '18px' : '16px'} onClick={() => setShowPw(!showPw)} src={showPw ? iconShowPw : iconBlockPw} alt="" />
      </S.Form>
      <S.LoginDiv>
        <S.CheckInp type="checkbox" id="check" />
        <label htmlFor="check">자동 로그인</label>
      </S.LoginDiv>
      <Button width='100%' text='로그인' className='main' padding='14px 0' borderRadius='10px' />
      <S.BtnDiv>
        <span>비밀번호 찾기</span>
        <span>회원가입</span>
      </S.BtnDiv>
    </S.Wrap>
    <S.Policy>개인정보처리방침</S.Policy>
    </>
  )
}
