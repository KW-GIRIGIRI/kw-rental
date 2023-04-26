import { Outlet } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { Section, LogoImg } from "./style"

export default function AuthWrapper() {
  return (
    <Section>
      <h1 className="ir">광운대학교 미디어커뮤니케이션학부 랩실 관리 시스템</h1>
      <LogoImg src={Logo} alt="" />
      <Outlet />
    </Section>
  )
}
