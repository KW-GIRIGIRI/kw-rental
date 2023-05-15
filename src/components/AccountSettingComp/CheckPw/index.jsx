import * as S from "./style";
import iconShowPw from "../../../assets/icon-showPassword.svg";
import iconBlockPw from "../../../assets/icon-blockPassword.svg";
import { useState } from "react";
import { Form, Input, PwImg } from "../style";
import Button from "../../../modules/Button";

export default function CheckPw({ setCheckPw }) {
  const [showPw, setShowPw] = useState(false);

  const handleCheckPw = () => {
    // 비밀번호 확인
    setCheckPw(true);
  };

  return (
    <>
      <S.SubTit>계정 설정을 위해 비밀번호를 다시 한 번 입력해 주세요.</S.SubTit>
      <Form>
        <label htmlFor="pw">비밀번호 입력</label>
        <Input type={showPw ? "password" : "text"} />
        <PwImg
          bottom={showPw ? "22px" : "24px"}
          onClick={() => setShowPw(!showPw)}
          src={showPw ? iconBlockPw : iconShowPw}
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
