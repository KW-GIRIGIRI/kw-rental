import { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { checkLabOperation, getUserClassNum } from "../../api/api";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { setOperationDay } from "../../store/reducer/operationDaySlice";
import * as S from "./style";
import { AuthContext } from "../../context/Context";

export default function MainWrapper() {
  const [classNum, setClassNum] = useState("");
  const dispatch = useDispatch()
  const { setIsAuth } = useContext(AuthContext)

  const handleGetClassNum = async () => {
    const res = await getUserClassNum();
    setClassNum(res.memberNumber);
    res.role === "ADMIN" ? setIsAuth(true) : setIsAuth(false)
  };

  const handleGetOperationDay = async () => {
    const res = await checkLabOperation()
    if(!!res.schedules.length) dispatch(setOperationDay(res.schedules))
  }

  useEffect(() => {
    handleGetClassNum();
    handleGetOperationDay();
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
