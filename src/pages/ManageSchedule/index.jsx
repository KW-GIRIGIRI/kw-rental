import { useEffect, useState } from "react";
import { checkLabOperation, getLabStatus, setLabOperation, shutdownLab } from "../../api/api";
import { dayArr } from "../../data/weekDay";
import useModal from "../../hook/useModal";
import useToggle from "../../hook/useToggle";
import Button from "../../modules/Button";
import * as S from "./style"

export default function ManageSchedule() {
  const { Toggle, state, changeInitial } = useToggle();
  const [week, setWeek] = useState([])
  const { Modal, open, close } = useModal()

  const handleGetLabStatus = async () => {
    const res = await getLabStatus()
    changeInitial(res.isRunning)
  }

  const handleSetLabStatus = async () => {
    close()
    const res = await shutdownLab(state)
    if (res === 204) alert('랩실 상태가 변경되었습니다.')
    else alert('다시 시도해주세요.')
    handleGetLabStatus()
  }

  const handleGetLabDay = async () => {
    const res = await checkLabOperation()
    setWeek(res.schedules)
  }

  const handleSetLabDay = async () => {
    if (!!week.length) {
      const res = await setLabOperation(week)
      res === 204 && alert('운영 일자가 저장되었습니다.')
    } else alert('운영 일자는 하루 이상이어야 합니다.')
  }

  useEffect(() => {
    handleGetLabStatus()
    handleGetLabDay()
  }, [])

  return (
    <>
      <S.Title>일정 관리</S.Title>
      <S.SubTitle>전체 관리</S.SubTitle>
      <S.SubExp>끌 경우, 다시 켤 때까지 사용자의 조회 및 대여가 불가합니다. <br />랩실 점검기간 등 전체 관리가 필요할 경우만 이용해주세요.</S.SubExp>
      <Toggle on="운영중" off="미운영" onClickFunc={open}/>
      <S.SubTitle>운영 일자</S.SubTitle>
      <S.SubExp>랩실 관리자의 근무 시간에 맞춰 일자를 선택해주세요.</S.SubExp>
      {
        dayArr.map(day =>
          <S.DayBtn
            onClick={() => {
              !week.includes(day.value) 
                ? setWeek(week => [...week, day.value])
                : setWeek(week.filter(val => val !== day.value))
            }}
            className={week.includes(day.value) && 'on'}
            key={day.value}>{day.label}
          </S.DayBtn>)
      }
      <Button text='저장' className='main' fontSize='14px' padding='10px 18px' borderRadius='5px' onClick={handleSetLabDay} />
      <Modal>
        <p>정말 전체 관리 상태를 변경하시겠습니까?</p>
         <div>
          <Button
            onClick={close}
            text="취소"
            className="sub"
            padding="11px 34px"
            borderRadius="5px"
          />
          <Button
            onClick={handleSetLabStatus}
            text="확인"
            className="main"
            padding="12px 34px"
            borderRadius="5px"
          />
        </div>
      </Modal>
    </>
  )
}
