import * as S from "../style"
import { getCurrentRental } from "../../../api/api"
import { rentalStatus } from "../../../data/rentalStatus"
import { useState, useEffect } from "react"
import dayjs from "dayjs"
import Button from "../../../modules/Button"
import Image from "../../../modules/Image/index.jsx"
import useModal from "../../../hook/useModal"

export default function UserEquipState() {
  const [myRental, setMyRental] = useState([])
  const { Modal, open, close } = useModal()

  useEffect(() => {
    const handleGetCurrentRental = async () => {
      const res = await getCurrentRental()
      setMyRental(res.reservations)
    }

    handleGetCurrentRental()
  }, [])

  const onCancel = () => {
    // 기자재 취소 구현
    close()
  }

  return (
    <S.HistWrap>
      <S.Header className="equip">
        <span>수령일 ~ 반납일</span>
        <span>기자재</span>
        <span></span>
        <span>개수</span>
        <span>상태</span>
      </S.Header>
      {myRental.map((rental, i) => (
        <S.HistList key={i} className="equipList">
          <S.DateEquip>
            <p>{dayjs(rental.startDate).format("YY년 MM월 DD일(dd)")}</p>
            <p>~</p>
            <p>{dayjs(rental.endDate).format("YY년 MM월 DD일(dd)")}</p>
          </S.DateEquip>
          <S.ItemUl>
            {rental.reservationSpecs.map((item, idx) => (
              <S.ItemLi key={idx}>
                <Image
                  src={item.imgUrl}
                  width="50px"
                  height="50px"
                  borderRadius="5px"
                />
                <S.NameEquip>
                  <p>{item.category}</p>
                  <p>{item.modelName}</p>
                </S.NameEquip>
                <span>{item.rentalAmount}</span>
                <S.State>{rentalStatus[item.status]}</S.State>
                {item.status === "RESERVED" && (
                  <Button
                    text="대여취소"
                    className="shadow sub"
                    borderRadius="20px"
                    fontSize="14px"
                    width="70px"
                    height="27px"
                    onClick={open}
                  />
                )}
              </S.ItemLi>
            ))}
          </S.ItemUl>
        </S.HistList>
      ))}
      <Modal>
        <p>기자재 대여를 취소하시겠습니까?</p>
        <div>
          <Button
            onClick={close}
            text="아니오"
            className="sub"
            padding="11px 34px"
            borderRadius="5px"
          />
          <Button
            onClick={onCancel}
            text="네"
            className="main"
            padding="12px 34px"
            borderRadius="5px"
          />
        </div>
      </Modal>
    </S.HistWrap>
  )
}