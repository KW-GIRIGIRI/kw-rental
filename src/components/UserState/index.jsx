import * as S from "./style"
import { useLocation } from "react-router-dom"
import UserEquipState from "./UserEquipState"
import UserLabState from "./UserLabState"
import UserPenaltyState from "./UserPenaltyState"

export default function UserState() {
  const location = useLocation()

  return (
    <S.Div>
      {location.pathname.includes("equipment") ? (
        <UserEquipState />
      ) : (
        <></>
      )}
      {location.pathname.includes("lab") ? (
        <UserLabState />
      ) : (
        <></>
      )}
      {location.pathname.includes("penalty") ? (
        <UserPenaltyState />
      ) : (
        <></>
      )}
    </S.Div>
  )
}
