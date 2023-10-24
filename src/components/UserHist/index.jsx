import * as S from "./style";
import { useLocation } from "react-router-dom";
import DualDatePicker from "../DatePicker/DualDatePicker";
import UserEquipHist from "./UserEquipHist";
import UserLabHist from "./UserLabHist";
import UserPenaltyHist from "./UserPenaltyHist";

export default function UserHist() {
  const location = useLocation();
  const isEquipmentPath = location.pathname.includes("equipment");
  const isLabPath = location.pathname.includes("lab");
  const isPenaltyPath = location.pathname.includes("penalty");

  return (
    <>
      {(isEquipmentPath || isLabPath) && (
        <DualDatePicker firstInitial={-3} initialMonth={true} allDaysEnabled={true} />
      )}
      <S.Div>
        {isEquipmentPath && <UserEquipHist />}
        {isLabPath && <UserLabHist />}
        {isPenaltyPath && <UserPenaltyHist />}
      </S.Div>
    </>
  );
}
