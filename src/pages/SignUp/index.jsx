import Button from "../../modules/Button";
import * as S from "./style";
import iconShowPw from "../../assets/icon-showPassword.svg";
import iconBlockPw from "../../assets/icon-blockPassword.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { getClassNum, Signup } from "../../api/api";
import useTitle from "../../hook/useTitle";

export default function SignUp() {
  const [showPw, setShowPw] = useState({
    password: true,
    passwordCheck: true,
  });
  const navigate = useNavigate();
  const pwRef = useRef();
  useTitle('회원가입')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [memberNumber, setMemberNumber] = useState("");

  const handleGetClassNum = async (e) => {
    e.preventDefault();

    const data = {
      name: watch("name"),
      birthday: watch("birthDate"),
    };

    const response = await getClassNum(data);

    if (!response) alert("이름과 학번을 다시 확인해주세요.");
    else if (!response.codeName1.includes("미디어"))
      alert(
        "해당 서비스는 광운대학교 미디어커뮤니케이션 학부 학생만 가입 가능합니다."
      );
    else setMemberNumber(response.hakbun);
  };

  pwRef.current = watch("password");

  const handleSignUp = async () => {
    const data = {
      name: watch("name"),
      birthDate: watch("birthDate"),
      memberNumber: memberNumber,
      password: watch("password"),
      email: `${watch("emailF")}@${watch("emailS")}`,
      phoneNumber: watch("phoneNum"),
    };

    if (
      Object.entries(data)
        .map((i) => !!i[1])
        .includes(false)
    )
      alert("값을 입력해주세요");
    else {
      const res = await Signup(JSON.stringify(data));
      res === 201 && navigate("/success", { state: { isSignup: true } });
    }
  };

  return (
    <S.Wrap>
      <h2>회원가입</h2>
      <S.Form onSubmit={handleSubmit(handleSignUp)}>
        <label htmlFor="name">이름</label>
        <S.Input
          placeholder="홍길동"
          {...register("name", {
            required: {
              value: true,
              message: "이름을 입력해주세요.",
            },
            minLength: {
              value: 2,
              message: "2~10자 이내여야 합니다.",
            },
            pattern: {
              value: /^[ㄱ-ㅎ가-힣]+$/,
              message: "영어 대 소문자, 특수기호, 공백 사용 불가합니다.",
            },
          })}
        />
        {errors.name && <S.ErrText>{errors.name.message}</S.ErrText>}
        <label htmlFor="">생년월일</label>
        <S.InpWrap>
          <S.Input
            type="number"
            placeholder="000429"
            {...register("birthDate", {
              required: {
                value: true,
                message: "주민번호 앞자리를 입력하세요.",
              },
              minLength: {
                value: 6,
              },
              maxLength: {
                value: 6,
                message: "6자 이내여야 합니다.",
              },
            })}
          />
          <Button
            className="main"
            text="인증하기"
            borderRadius="5px"
            padding="9px 10px"
            onClick={handleGetClassNum}
          />
        </S.InpWrap>
        {errors.birthDate && <S.ErrText>{errors.birthDate.message}</S.ErrText>}

        <label htmlFor="">학번(아이디)</label>
        <S.Input
          defaultValue={memberNumber}
          {...register("memberNumber")}
          placeholder="이름과 생년월일을 인증해주세요"
          disabled
        />

        <label htmlFor="">비밀번호</label>
        <S.InpWrap>
          <S.Input
            type={showPw.password ? "password" : "text"}
            placeholder="8자 이상 작성해주세요"
            {...register("password", {
              required: {
                value: true,
                message: "비밀번호를 입력하세요.",
              },
              minLength: {
                value: 8,
                message: "8자 이상 입력하세요.",
              },
            })}
          />
          <S.PwImg
            bottom={showPw.password ? "22px" : "24px"}
            onClick={() => setShowPw({ ...showPw, password: !showPw.password })}
            src={showPw.password ? iconBlockPw : iconShowPw}
            alt=""
          />
        </S.InpWrap>
        {errors.password && <S.ErrText>{errors.password.message}</S.ErrText>}

        <label htmlFor="">비밀번호 확인</label>
        <S.InpWrap>
          <S.Input
            type={showPw.passwordCheck ? "password" : "text"}
            {...register("passwordConfirm", {
              required: {
                value: true,
                message: "비밀번호를 입력하세요",
              },
              validate: (value) =>
                value !== pwRef.current
                  ? "비밀번호가 일치하지 않습니다"
                  : undefined,
            })}
          />
          <S.PwImg
            bottom={showPw.passwordCheck ? "22px" : "24px"}
            onClick={() =>
              setShowPw({ ...showPw, passwordCheck: !showPw.passwordCheck })
            }
            src={showPw.passwordCheck ? iconBlockPw : iconShowPw}
            alt=""
          />
        </S.InpWrap>
        {errors.passwordConfirm && (
          <S.ErrText>{errors.passwordConfirm.message}</S.ErrText>
        )}

        <label htmlFor="">이메일</label>
        <S.InpWrap className="email">
          <S.Input
            {...register("emailF", {
              required: {
                value: true,
                message: "이메일을 입력하세요.",
              },
            })}
          />
          <S.Input
            {...register("emailS", {
              required: {
                value: true,
                message: "이메일을 입력하세요.",
              },
              pattern: {
                value:
                  /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: "이메일 주소를 다시 확인해주세요.",
              },
            })}
          />
        </S.InpWrap>
        {(errors.emailF || errors.emailS) && (
          <S.ErrText>
            {errors.emailF?.message || errors.emailS?.message}
          </S.ErrText>
        )}

        <label htmlFor="">연락처(전화번호)</label>
        <S.Input
          placeholder="공백, - 제외 숫자만 작성해주세요."
          {...register("phoneNum", {
            required: {
              value: true,
              message: "처음부터 끝까지 입력해주세요.",
            },
            maxLength: {
              value: 12,
              message: "12자 이하로 입력하세요.",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "공백, - 제외 숫자만 작성해주세요.",
            },
          })}
        />
        {errors.phoneNum && <S.ErrText>{errors.phoneNum.message}</S.ErrText>}

        <Button
          width="100%"
          text="회원가입"
          className="main"
          padding="14px 0"
          borderRadius="10px"
          margin="20px 0"
          fontSize="16px"
        />
      </S.Form>
    </S.Wrap>
  );
}
