import Header from "../../components/Header";
import TabNav from "../../modules/TabNav";
import EquipmentList from "../EquipmentList";

export default function EquipmentRental() {
  return (
    <>
      <Header text="기자재 대여" classNum="2023312344" />
      <TabNav text="기자재 조회" className="on" />
      <TabNav text="담은 기자재" />
      <EquipmentList />
    </>
  )
}
