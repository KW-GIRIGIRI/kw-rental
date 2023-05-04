import Button from "../../modules/Button"
import * as S from "./style"
import iconShowPw from "../../assets/icon-showPassword.svg"
import iconBlockPw from "../../assets/icon-blockPassword.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { UserLogin } from "../../api/api"

export default function Login() {
  const [showPw, setShowPw] = useState(true)
  const navigate = useNavigate()

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const isValid = !!watch("id") && !!watch("password") && !errors.id && !errors.password

  const handleLogin = async () => {
    const data = {
      "memberNumber" : watch("id"),
      "password" : watch("password")
    }

    const res = await UserLogin(JSON.stringify(data))
    res === 200 && navigate('/')
  }

  return (
    <>
    <S.Wrap>
      <h2>로그인</h2>
        <S.Form>
        <input type="text" placeholder="학번(아이디)" {...register('id')} />
        <input type={showPw ? 'password' : 'text'} placeholder="비밀번호" {...register('password')}/>
        <S.PwImg bottom={showPw ? '16px' : '18px'} onClick={() => setShowPw(!showPw)} src={showPw ? iconBlockPw : iconShowPw} alt="" />
        </S.Form>
      <S.LoginDiv>
        <S.CheckInp type="checkbox" id="check" />
        <label htmlFor="check">자동 로그인</label>
        </S.LoginDiv>
      {/* <S.ErrText>아이디 또는 비밀번호를 잘못 입력했습니다.</S.ErrText> */}
      <Button width='100%' text='로그인' className={isValid ? 'main' : 'gray'} padding='14px 0' borderRadius='10px' fontSize='16px' onClick={handleLogin} />
      <S.BtnDiv>
        <span onClick={() => navigate('/auth/forgot')}>비밀번호 찾기</span>
        <span onClick={() => navigate('/auth/signup')}>회원가입</span>
      </S.BtnDiv>
    </S.Wrap>
    <S.Policy>개인정보처리방침</S.Policy>
    </>
  )
}
