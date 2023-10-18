import * as S from "./style";
import { useLocation } from "react-router-dom";
import UserEquipState from "./UserEquipState";
import UserLabState from "./UserLabState";
import UserPenaltyState from "./UserPenaltyState";

export default function UserState() {
  const location = useLocation();
  const isEquipmentPath = location.pathname.includes("equipment");
  const isLabPath = location.pathname.includes("lab");
  const isPenaltyPath = location.pathname.includes("penalty");

  return (
    <S.Div>
      {isEquipmentPath && <UserEquipState />}
      {isLabPath && <UserLabState />}
      {isPenaltyPath && <UserPenaltyState />}
    </S.Div>
  );
}
