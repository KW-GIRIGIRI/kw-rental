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
      {
        isAuth ?
          <TabNav onClick={() => navigate('/equipment')} text="기자재 관리" className={location.pathname.includes('status') ? 'false' : 'on'} /> :
          <TabNav onClick={() => navigate('/equipment')} text="기자재 조회" className={location.pathname.includes('inventory') ? 'false' : 'on'} />
      }

      {
        isAuth ?
          <TabNav className={location.pathname.includes('/status') ? "on" : false} onClick={() => navigate('/equipment/status')} text="대여 현황" /> :
          <TabNav className={location.pathname.includes('/inventory') ? "on" : false} onClick={() => navigate('/equipment/inventory')} text="담은 기자재" />
      }
      <Outlet />
    </>
  )
}
