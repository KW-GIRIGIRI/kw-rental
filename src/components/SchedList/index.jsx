import { useState } from "react"
import Button from "../../modules/Button"
import ReturnModal from "../EquipSched/ReturnModal"
import SchedListComp from "./SchedListComp"
import * as S from "./style"

export default function SchedList({ receive }) {
  const [returnModal, setReturnModal] = useState(false)
  
  return (
    <>
      <S.SchedLi>
        <S.Rental>
          <S.Renter>
            <p>이름</p>
            <p>학번</p>
            {/* <p>반납일 초과</p> */}
            <Button className="main shadow" text={ receive ? "수령확인" : "반납확인" } borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" onClick={() => setReturnModal(true)} />
          </S.Renter>
          <S.RentalUl>
            <SchedListComp receive={receive}/>
            <SchedListComp receive={receive}/>
            <SchedListComp receive={receive}/>
          </S.RentalUl>
        </S.Rental>
      </S.SchedLi>
      <ReturnModal returnModal={returnModal} setReturnModal={setReturnModal} />
    </>
  )
}
