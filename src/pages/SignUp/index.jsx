import Button from "../../modules/Button"
import Input from "../../modules/Input"
import * as S from "./style"
import iconShowPw from "../../assets/icon-showPassword.svg"
import iconBlockPw from "../../assets/icon-blockPassword.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const [showPw, setShowPw] = useState({
    password: true,
    passwordCheck: true
  })
  const navigate = useNavigate()

  const handleSignUp = event => {
    event.preventDefault()

    navigate('/auth/success', { state: {isSignup : true}})
  }

  return (
    <S.Wrap>
      <h2>회원가입</h2>
      <S.Form>
        <label htmlFor="name">이름</label>
        <Input className='signup' placeholder='홍길동' />
        {/* <S.ErrText>영어 대 소문자, 특수기호, 공백 사용 불가합니다.</S.ErrText> */}

        <label htmlFor="">생년월일</label>
        <S.InpWrap>
          <Input className='signup' placeholder='000429' />
          <Button className='main' text='인증하기' borderRadius='5px' padding='9px 10px'/>
        </S.InpWrap>

        <label htmlFor="">이름</label>
        <Input className='signup' placeholder='이름과 생년월일을 인증해주세요' disabled />

        <label htmlFor="">비밀번호</label>
        <S.InpWrap>
          <Input type={showPw.password ? 'password' : 'text'}  className='signup' placeholder='8자 이상 작성해주세요' />
            <S.PwImg bottom={showPw.password ? '24px' : '22px'} onClick={() => setShowPw({...showPw, password : !showPw.password})} src={showPw.password ? iconShowPw : iconBlockPw} alt="" />
        </S.InpWrap>
      
        <label htmlFor="">비밀번호 확인</label>
        <S.InpWrap>
          <Input className='signup' type={showPw.passwordCheck ? 'password' : 'text'}  />
            <S.PwImg bottom={showPw.passwordCheck ? '24px' : '22px'}  onClick={() => setShowPw({...showPw, passwordCheck : !showPw.passwordCheck})} src={showPw.passwordCheck ? iconShowPw : iconBlockPw} alt="" />
        </S.InpWrap>

        <label htmlFor="">이메일</label>
        <S.InpWrap className="email">
          <Input className='signup' />
          <Input className='signup' />
        </S.InpWrap>

        <label htmlFor="">연락처(전화번호)</label>
        <Input className='signup' placeholder='공백, - 제외 숫자만 작성해주세요.' />

        <Button width='100%' text='회원가입' className='main' padding='14px 0' borderRadius='10px' margin='20px 0' fontSize='16px' onClick={handleSignUp}/>
      </S.Form>
    </S.Wrap>
  )
}
