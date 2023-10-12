import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getLabStatus, getUserClassNum } from "../../api/api";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { AuthContext } from "../../context/Context";
import * as S from "./style";

export default function MainWrapper() {
  const [classNum, setClassNum] = useState("");
  const { setIsAuth } = useContext(AuthContext)

  const handleGetClassNum = async () => {
    const res = await getUserClassNum();
    setClassNum(res.memberNumber);

    res.role === "ADMIN" ? setIsAuth(true) : setIsAuth(false)
  };

  useEffect(() => {
    handleGetClassNum();
  }, []);

  return (
    <>
      <Header classNum={classNum} />
      <NavBar />
      <S.Section>
        <Outlet />
      </S.Section>
    </>
  );
}
