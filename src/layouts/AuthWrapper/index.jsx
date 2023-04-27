import { Outlet } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { Section, LogoImg } from "./style"

export default function AuthWrapper() {
  return (
    <Section>
      <LogoImg src={Logo} alt="광운대학교 미디어커뮤니케이션학부 랩실 관리 시스템" />
      <Outlet />
    </Section>
  )
}
