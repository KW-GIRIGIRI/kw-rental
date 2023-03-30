import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import TabNav from "../../modules/TabNav";

export default function EquipmentRental() {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      <TabNav text="기자재 조회" className="on" />
      <TabNav text={isAuth ? '대여 현황' : "담은 기자재(2)"}  />
      <Outlet /> 
    </>
  )
}
