import iconDownArrow from "../../../assets/icon-downArrow.svg";
import { useState } from "react";
import * as S from "./style";
import ProfileMenu from "../../ProfileMenu";

export default function HeaderUserInfo({ classNum }) {
  const [visible, setVisible] = useState(false);

  const handleDropMenu = (e) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  return (
    <>
      <S.Wrapper onClick={handleDropMenu}>
        <S.ClassNumP>{classNum}</S.ClassNumP>
        <S.NotiIcon src={iconDownArrow} alt="" />
      </S.Wrapper>
      {visible && <ProfileMenu visible={visible} setVisible={setVisible} />}
    </>
  );
}
