import * as S from "./style"
import { useLocation } from "react-router-dom"
import DualDatePicker from "../DatePicker/DualDatePicker"
import UserEquipHist from "./UserEquipHist"
import UserLabHist from "./UserLabHist"
import UserPenaltyHist from "./UserPenaltyHist"

export default function UserHist() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname.includes("equipment") || location.pathname.includes("lab") ? (
          <DualDatePicker firstInitial={-90} />
        ) : (
          <></>
        )
      }
      <S.Div>
        {location.pathname.includes("equipment") ? (
          <UserEquipHist />
        ) : (
          <></>
        )}
        {location.pathname.includes("lab") ? (
          <UserLabHist />
        ) : (
          <></>
        )}
        {location.pathname.includes("penalty") ? (
          <UserPenaltyHist />
        ) : (
          <></>
        )}
      </S.Div>
    </>
  )
}
