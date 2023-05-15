import { useContext, useRef, useState } from "react";
import * as S from "./style";
import iconShowPw from "../../../assets/icon-showPassword.svg";
import iconBlockPw from "../../../assets/icon-blockPassword.svg";
import { ErrText, Form, Input, InpWrap, PwImg } from "../style";
import Button from "../../../modules/Button";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/Context";

export default function ChangeAccount({ setCheckPw }) {
  const { isAuth } = useContext(AuthContext);
  const [showPw, setShowPw] = useState({
    password: true,
    passwordCheck: true,
  });
  const pwRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  pwRef.current = watch("password");

  const handleAuthChangeAccount = () => {
    const data = {
      password: watch("password"),
    };

    setCheckPw(false);
  };

  const handleChangeAccount = () => {
    const data = {
      password: watch("password"),
      email: `${watch("emailF")}@${watch("emailS")}`,
      phoneNumber: watch("phoneNum"),
    };

    setCheckPw(false);
  };

  return isAuth ? (
    <>
      <S.AuthTit>
        공동 관리자와 비밀번호를 <ins>반드시</ins> 공유하세요.
      </S.AuthTit>
      <Form onSubmit={handleSubmit(handleAuthChangeAccount)}>
        <label>비밀번호</label>
        <InpWrap>
          <Input
            type={showPw.password ? "password" : "text"}
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
          <PwImg
            bottom={showPw.password ? "22px" : "24px"}
            onClick={() => setShowPw({ ...showPw, password: !showPw.password })}
            src={showPw.password ? iconBlockPw : iconShowPw}
            alt=""
          />
        </InpWrap>
        {errors.password && <ErrText>{errors.password.message}</ErrText>}

        <label>비밀번호 확인</label>
        <InpWrap>
          <Input
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
          <PwImg
            bottom={showPw.passwordCheck ? "22px" : "24px"}
            onClick={() =>
              setShowPw({ ...showPw, passwordCheck: !showPw.passwordCheck })
            }
            src={showPw.passwordCheck ? iconBlockPw : iconShowPw}
            alt=""
          />
        </InpWrap>
        {errors.passwordConfirm && (
          <ErrText>{errors.passwordConfirm.message}</ErrText>
        )}

        <Button
          text="설정하기"
          className="main"
          padding="12px 33px"
          borderRadius="10px"
          fontSize="14px"
          margin="29px 0"
        />
      </Form>
    </>
  ) : (
    <>
      <S.SubTit>*이름, 생년월일, 학번(아이디)는 변경이 불가합니다.</S.SubTit>
      <Form onSubmit={handleSubmit(handleChangeAccount)}>
        <label>비밀번호</label>
        <InpWrap>
          <Input
            type={showPw.password ? "password" : "text"}
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
          <PwImg
            bottom={showPw.password ? "22px" : "24px"}
            onClick={() => setShowPw({ ...showPw, password: !showPw.password })}
            src={showPw.password ? iconBlockPw : iconShowPw}
            alt=""
          />
        </InpWrap>
        {errors.password && <ErrText>{errors.password.message}</ErrText>}

        <label>비밀번호 확인</label>
        <InpWrap>
          <Input
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
          <PwImg
            bottom={showPw.passwordCheck ? "22px" : "24px"}
            onClick={() =>
              setShowPw({ ...showPw, passwordCheck: !showPw.passwordCheck })
            }
            src={showPw.passwordCheck ? iconBlockPw : iconShowPw}
            alt=""
          />
        </InpWrap>
        {errors.passwordConfirm && (
          <ErrText>{errors.passwordConfirm.message}</ErrText>
        )}

        <label>이메일</label>
        <InpWrap className="email">
          <Input
            type="text"
            placeholder="gildong1234"
            {...register("emailF", {
              required: {
                value: true,
                message: "이메일을 입력하세요.",
              },
            })}
          />
          <Input
            type="text"
            placeholder="naver.com"
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
        </InpWrap>
        {(errors.emailF || errors.emailS) && (
          <ErrText>{errors.emailF?.message || errors.emailS?.message}</ErrText>
        )}

        <label>연락처(전화번호)</label>
        <Input
          type="text"
          placeholder="01012341234"
          {...register("phoneNum", {
            required: {
              value: true,
              message: "전화번호를 입력하세요.",
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
        {errors.phoneNum && <ErrText>{errors.phoneNum.message}</ErrText>}

        <Button
          text="설정하기"
          className="main"
          padding="12px 33px"
          borderRadius="10px"
          fontSize="14px"
          margin="29px 0"
        />
      </Form>
    </>
  );
}
