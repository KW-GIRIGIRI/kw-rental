import * as S from "./style";
import { useContext, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../api/api";
import { AuthContext } from "../../context/Context";
import iconProfileMenu from "../../assets/icon-profile-menu.svg";
import SVGIcon from "../../modules/SVGIcon";

export default function ProfileMenu({ setVisible }) {
  const modalRef = useRef();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  const handleClose = (e) => {
    if (!modalRef.current?.contains(e.target)) setVisible(false);
  };

  const handleLogout = async () => {
    const res = await userLogout();
    res === 204 && navigate("/");
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <S.Wrap ref={modalRef}>
      <S.Li
        onClick={() => {
          navigate("/setaccount");
          setVisible(false);
        }}
      >
        <SVGIcon iconUrl={iconProfileMenu} id="icon-setting" size="22" />
        <p>계정 설정</p>
      </S.Li>
      <S.Li
        onClick={() => {
          window.open(
            "https://www.kwmedia.info/notice/raebsilgongjisahang",
            "_blank"
          );
          setVisible(false);
        }}
      >
        <SVGIcon iconUrl={iconProfileMenu} id="icon-notice" size="22" />
        <p>공지사항</p>
      </S.Li>
      <S.Li
        onClick={() => {
          window.open(
            isAuth
              ? "https://blyhry.notion.site/MEDIA-LAB-Admin-de66a69c22324a108ff840e32524deb9"
              : "https://blyhry.notion.site/blyhry/MEDIA-LAB-8f1a67a171024f668c87470bb705fa01",
            "_blank"
          );
          setVisible(false);
        }}
      >
        <SVGIcon iconUrl={iconProfileMenu} id="icon-help" size="22" />
        <p>도움말</p>
      </S.Li>
      <S.Li onClick={handleLogout}>
        <SVGIcon iconUrl={iconProfileMenu} id="icon-logout" size="22" />
        <p>로그아웃</p>
      </S.Li>
    </S.Wrap>
  );
}
