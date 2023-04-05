import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import TabNav from "../../modules/TabNav";

export default function EquipmentRental() {
  const { isAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <TabNav onClick={() => navigate('/equipment')} text="기자재 조회" className={location.pathname.includes('/box') ? false : "on"} />
      {
        isAuth ?
          <TabNav className={location.pathname.includes('/box') ? "on" : false} text="대여 현황" /> :
          <TabNav className={location.pathname.includes('/box') ? "on" : false} onClick={() => navigate('/equipment/box')}  text="담은 기자재(2)" />
      }
      <Outlet /> 
    </>
  )
}
