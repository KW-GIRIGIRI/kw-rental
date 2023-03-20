import { Outlet } from "react-router-dom";
import TabNav from "../../modules/TabNav";

export default function EquipmentRental() {
  return (
    <>
      <TabNav text="기자재 조회" className="on" />
      <TabNav text="담은 기자재(2)"  />
      <Outlet />
    </>
  )
}
