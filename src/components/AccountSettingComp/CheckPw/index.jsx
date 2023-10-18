import * as S from "./style";
import iconShowPw from "../../../assets/icon-showPassword.svg";
import iconBlockPw from "../../../assets/icon-blockPassword.svg";
import { useState } from "react";
import { Form, Input, PwImg } from "../style";
import Button from "../../../modules/Button";
import { ConfirmPassword } from "../../../api/api";
import { useForm } from "react-hook-form";

export default function CheckPw({ setCheckPw }) {
  const [showPw, setShowPw] = useState(false);
  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const handleCheckPw = async (e) => {
    const res = await ConfirmPassword({ password: watch("password") });
    res === 204 ? setCheckPw(true) : alert("비밀번호를 다시 확인해주세요.");
  };

  return (
    <>
      <S.SubTit>계정 설정을 위해 비밀번호를 다시 한 번 입력해 주세요.</S.SubTit>
      <Form onSubmit={handleSubmit(handleCheckPw)}>
        <label htmlFor="pw">비밀번호 입력</label>
        <Input
          id="pw"
          autoFocus
          type={showPw ? "text" : "password"}
          {...register("password", {
            required: {
              value: true,
              message: "비밀번호를 입력하세요.",
            },
          })}
        />
        <PwImg
          bottom={showPw ? "24px" : "22px"}
          onClick={() => setShowPw(!showPw)}
          src={showPw ? iconShowPw : iconBlockPw}
          alt=""
        />
      </Form>
      <Button
        text="입력"
        className="main"
        padding="12px 33px"
        borderRadius="10px"
        fontSize="14px"
        margin="29px 0"
        onClick={handleCheckPw}
      />
    </>
  );
}
