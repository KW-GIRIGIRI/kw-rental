import ItemResHistTbl from "./ItemResHistTbl";
import DualDatePicker from "../DatePicker/DualDatePicker";

export default function ItemReserveHist() {
  const 가짜품목대여이력데이터 = [
    {
      id: 1,
      returnStatus: "정상 반납",
      pickupDate: "23년 03월 11일",
      returnDate: "23년 03월 12일",
      renter: "박다은",
      note: "",
    },
    {
      id: 2,
      returnStatus: "정상 반납",
      pickupDate: "23년 03월 09일",
      returnDate: "23년 03월 10일",
      renter: "이영현",
      note: "",
    },
  ];

  return (
    <>
      <DualDatePicker firstInitial={-7} />
      <ItemResHistTbl data={가짜품목대여이력데이터} />
    </>
  );
}
