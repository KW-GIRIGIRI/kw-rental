import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUserClassNum } from "../../api/api";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import * as S from "./style"

export default function MainWrapper() {
  const [classNum, setClassNum] = useState('')
  
  const handleGetClassNum = async () => {
    const res = await getUserClassNum()
    setClassNum(res.memberNumber)
  }

  useEffect(() => {
    handleGetClassNum()
  }, [])

  return (
    <>
      <Header classNum={classNum}/>
      <NavBar />
      <S.Section>
        <Outlet />
      </S.Section>
    </>
  )
}
