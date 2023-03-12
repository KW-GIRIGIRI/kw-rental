import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import * as S from "./style"

export default function MainWrapper() {
  return (
    <>
      <NavBar />
      <S.Section>
        <Outlet />
      </S.Section>
    </>
  )
}
