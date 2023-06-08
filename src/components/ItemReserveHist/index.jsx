import ItemResHistTbl from "./ItemResHistTbl";
import DualDatePicker from "../DatePicker/DualDatePicker";

export default function ItemReserveHist({ propertyNumber }) {
  return (
    <>
      <DualDatePicker firstInitial={-7} />
      <ItemResHistTbl propertyNumber={propertyNumber} />
    </>
  );
}
