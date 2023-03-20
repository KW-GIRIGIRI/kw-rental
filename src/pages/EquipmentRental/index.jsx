import { Outlet } from "react-router-dom";
import TabNav from "../../modules/TabNav";
import { BtnWrap } from "./style"

export default function EquipmentRental() {
  return (
    <>
      <BtnWrap>
        <TabNav text="기자재 조회" className="on" />
        <TabNav text="담은 기자재(2)"  />
      </BtnWrap>
      <Outlet />
    </>
  )
}
