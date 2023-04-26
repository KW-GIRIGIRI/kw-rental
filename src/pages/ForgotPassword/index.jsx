import Button from "../../modules/Button"
import Input from "../../modules/Input"
import * as S from "./style"

export default function ForgotPassword() {
  return (
    <>
      <S.Wrap>
        <h2>비밀번호 찾기</h2>
        <p>회원정보에 등록한 학번과 이메일을 입력해주세요</p>
        
        <S.Form>
          <label htmlFor="">학번(아이디)</label>
          <Input className='signup' />

          <label htmlFor="">이메일</label>
          <S.InpWrap className="email">
            <Input className='signup' />
            <Input className='signup' />
          </S.InpWrap>

           <Button width='100%' text='다음' className='main' padding='14px 0' borderRadius='10px' margin='20px 0' fontSize='16px'/>
        </S.Form>
      </S.Wrap>
    </>
  )
}
