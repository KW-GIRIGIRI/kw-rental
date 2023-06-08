import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setInitializePw } from "../../api/api";
import useTitle from "../../hook/useTitle";
import Button from "../../modules/Button";
import { Input } from "../SignUp/style";
import * as S from "./style";

export default function ForgotPassword() {
  const navigate = useNavigate();
  useTitle('비밀번호 찾기')

  const {
    register,
    handleSubmit,
    watch,
  } = useForm();

  const handleFindPassword = async (e) => {
    e.preventDefault();

    const data = {
      "memberNumber" : watch('memberNumber'),
      "email" : `${watch('emailF')}@${watch('emailS')}`,
    }

    const res = await setInitializePw(data)

    if (res === 204) navigate("/success", { state: { isSignup: false } });
    else alert('회원정보를 찾지 못했습니다.')
  };

  return (
    <S.Wrap>
      <h2>비밀번호 찾기</h2>
      <p>회원정보에 등록한 학번과 이메일을 입력해주세요</p>

      <S.Form onSubmit={handleSubmit(handleFindPassword)}>
        <label htmlFor="classNum">학번(아이디)</label>
        <Input id="classNum" type='number' autoFocus
          {...register("memberNumber", { required: true })}
        />

        <label htmlFor="email">이메일</label>
        <S.InpWrap>
          <Input id="email" 
            {...register("emailF", { required: true })}
          />
          <Input id="" 
            {...register("emailS", { required: true })}
          />
        </S.InpWrap>

        <Button
          width="100%"
          text="다음"
          className="main"
          padding="14px 0"
          borderRadius="10px"
          margin="20px 0"
          fontSize="16px"
          onClick={handleFindPassword}
        />
      </S.Form>
    </S.Wrap>
  );
}
