import { useEffect, useRef, useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import * as S from "./style"
import iconSend from "../../../assets/icon-sendEmail.svg"

export default function CancelModal({cancelModal, setCancelModal,}) {
  const { Modal, open, close } = useModal()
  const [faulty, setFaulty] = useState([])
  const checkRef = useRef([])

  const handleGet = i => {
    const newList = {
      count: i,
      propertyNum: checkRef.current[i].innerHTML
    }

    const newArr = 
      faulty.map(i => i.count === newList.count).includes(true) ?
        faulty.filter(fault => newList.count !== fault.count) :
        faulty.concat(newList)

    setFaulty(newArr)
  }

  const handleClose = () => {
    close()
    setCancelModal(false)
  }

  useEffect(() => {
    cancelModal && open()
    setCancelModal(false)
  }, [cancelModal, close])

  return (
    <Modal className="modify">
      <p>대여취소</p>
      <S.ProductUl>
        <S.ProductLi>
          <p>취소 품목</p>
          <p>기자재</p>
          <p>자산번호</p>
        </S.ProductLi>
        {
          Array(2).fill().map((_, i) => 
            <S.ProductLi key={i}>
              <S.CheckInp type="checkbox" onClick={() => handleGet(i)} className={faulty.map(v => v.count === i ? 'checked' : '')}/>
              <p>Oculus Quest2</p>
              <p ref={el => checkRef.current[i] = el}>{i + 88888888888888}</p>
            </S.ProductLi>
          )
        }
      </S.ProductUl>

      {
        faulty.length > 0 &&
        <>
          <p>취소 사유</p>
          <S.StateDiv>
            <span>홍길동 2013020123</span>
            <ul>
              {
                faulty.map((item, i) =>
                  <S.StateLi key={i}>
                    <p>{item.propertyNum}</p>
                    <S.Select name="" id="">
                      <option value="">사유</option>
                      <option value="">연체</option>
                      <option value="">고장</option>
                    </S.Select>
                    <S.DetailInput type="text" placeholder="상세 사유 입력창" />
                  </S.StateLi>
                )
              }
            </ul>
          </S.StateDiv>

          <p>대여취소 처리 알림 (필수)</p>
          <S.Email>받는 이 : leesara0220@naver.com</S.Email>
          <S.MailWrap>
            <S.Textarea placeholder="예 : 대여취소 처리 관련 연락드립니다. 사유는" name="" id="" cols="30" rows="5"></S.Textarea>
            <img src={iconSend} alt="" />
          </S.MailWrap>
        </>
      }
      <div>
        <Button text='확인하기' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px"/>
        <Button text='취소하기'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={handleClose}  />
      </div>
    </Modal>
  )
}
