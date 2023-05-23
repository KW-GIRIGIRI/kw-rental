import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import LogoWebp from "../../assets/logo.webp";
import { Section, LogoImg } from "./style";

export default function AuthWrapper() {
  const navigate = useNavigate();

  return (
    <Section>
      <LogoImg onClick={() => navigate("/")}>
        <source srcSet={LogoWebp} type="image/webp" />
        <img
          src={Logo}
          alt="광운대학교 미디어커뮤니케이션학부 랩실 관리 시스템"
        />
      </LogoImg>
      <Outlet />
    </Section>
  );
}
