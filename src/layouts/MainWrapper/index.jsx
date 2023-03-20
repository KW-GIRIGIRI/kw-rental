import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import * as S from "./style"

export default function MainWrapper() {
  return (
    <>
      <Header classNum={'2020231123'}/>
      <NavBar />
      <S.Section>
        <Outlet />
      </S.Section>
    </>
  )
}
