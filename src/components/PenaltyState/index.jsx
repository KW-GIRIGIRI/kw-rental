import * as S from "./style"
import useModal from "../../hook/useModal"
import Button from "../../modules/Button"
import { useState } from "react"
import EmptyData from '../EmptyData'

export default function PenaltyState() {
  //가짜페널티통계
  const 가짜페널티 = [
    {
      대여자: "이영현",
      상태: "일주일 이용 금지",
      기간: "23년 03월 12일(목) ~ 23년 03월 19일(목)",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체",
    },
    {
      대여자: "김효리",
      상태: "1년 이용 금지",
      기간: "23년 03월 12일(목) ~ 24년 03월 12일(잉)",
      종류: "MIRRORLESS SONY a6600",
      사유: "고장",
    },
    {
      대여자: "박다은",
      상태: "1학기 이용 금지",
      기간: "23년 03월 12일(목) ~ 23년 09월 12일(목)",
      종류: "한울관 B119호",
      사유: "메롱",
    },
    {
      대여자: "공주님",
      상태: "한 달 이용 금지",
      기간: "23년 03월 12일(목) ~ 23년 04월 12일(목)",
      종류: "PRINCESS",
      사유: "공주라서",
    },
  ]

  const [data, setData] = useState(가짜페널티)
  const { Modal, open, close } = useModal()
  const [index, setIndex] = useState(0)

  const onDelete = (idx) => {
    setIndex(idx)
    open()
  }

  const handleDeletePenalty = async () => {
    // 나중에 api로 바꿔야함
    setData((prevData) => prevData.filter((_, i) => i !== index))
    setIndex(0)
    close()
  }

  const handelEditPenaltyState = async (e, idx) => {
    // 나중에 api로 바꿔야함
    const newState = e.target.value
    setData((prevData) => {
      const newData = [...prevData]
      newData[idx].상태 = newState
      return newData
    })
  }

  return (
    data.length ?
      <S.ItemUl>
        <S.Header>
          <span>대여자</span>
          <span>상태</span>
          <span>페널티 기간</span>
          <span>기자재/랩실</span>
          <span>사유</span>
          <span></span>
        </S.Header>
        {data.map((penalty, idx) => (
          <S.ItemLi key={idx}>
            <span>{penalty.대여자}</span>
            <form action="#">
              <select
                name="penalty"
                value={penalty.상태}
                onChange={(e) => handelEditPenaltyState(e, idx)}
              >
                <option value="1일 이용 금지">1일 이용 금지</option>
                <option value="7일 이용 금지">7일 이용 금지</option>
                <option value="1개월 이용 금지">1개월 이용 금지</option>
                <option value="3개월 이용 금지">3개월 이용 금지</option>
                <option value="6개월 이용 금지">6개월 이용 금지</option>
                <option value="12개월 이용 금지">12개월 이용 금지</option>
              </select>
            </form>
            <span>{penalty.기간}</span>
            <span>{penalty.종류}</span>
            <span>{penalty.사유}</span>
            <span>
              <p onClick={() => onDelete(idx)}>삭제</p>
            </span>
            <Modal>
              <p>해당 패널티를 정말 삭제하시겠습니까?</p>
              <div>
                <Button
                  text="취소"
                  className="sub"
                  padding="11px 30px"
                  borderRadius="5px"
                  fontSize="14px"
                  onClick={close}
                />
                <Button
                  text="삭제"
                  className="main"
                  padding="11px 30px"
                  borderRadius="5px"
                  fontSize="14px"
                  onClick={handleDeletePenalty}
                />
              </div>
            </Modal>
          </S.ItemLi>
        ))}
      </S.ItemUl>
      : <EmptyData content={["페널티 받은 대여자가 없습니다."]} />
  )
}
