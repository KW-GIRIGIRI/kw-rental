import HeaderUserInfo from "./HeaderUserInfo";
import Logo from "../../assets/logo.svg";
import LogoWebp from "../../assets/logo.webp";
import AdminLogoWebp from "../../assets/adminLogo.webp";
import AdminLogo from "../../assets/adminLogo.svg";
import { Wrapper, ImgLogo } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Header({ classNum }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ImgLogo onClick={() => navigate("/equipment")}>
        <source srcSet={isAuth ? AdminLogoWebp : LogoWebp} type="image/webp" />
        <img
          src={isAuth ? AdminLogo : Logo}
          alt="광운대학교 미디어커뮤니케이션학부 랩실 관리 시스템"
        />
      </ImgLogo>
      <HeaderUserInfo classNum={classNum} />
    </Wrapper>
  );
}
