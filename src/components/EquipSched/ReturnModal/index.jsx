import { useEffect, useRef, useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import * as S from "./style"

export default function ReturnModal({returnModal, setReturnModal,}) {
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
    setReturnModal(false)
  }

  useEffect(() => {
    returnModal && open()
    setReturnModal(false)
  }, [returnModal, close])

  return (
    <Modal className="modify">
      <p>반납 확인</p>
      <S.ProductUl>
        <S.ProductLi>
          <p>정상/불량</p>
          <p>기자재</p>
          <p>자산번호</p>
        </S.ProductLi>
        {
          Array(3).fill().map((_, i) => 
            <S.ProductLi key={i}>
              <S.CheckInp type="checkbox" onClick={() => handleGet(i)} className={faulty.map(v => v.count === i ? 'checked' : '')}/>
              <p>Oculus Quest2</p>
              <p ref={el => checkRef.current[i] = el}>{i + 88888888888888}</p>
            </S.ProductLi>
          )
        }
      </S.ProductUl>

      <p>반납 상태</p>
      {
        faulty.length > 0 &&
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
      }

      <div>
        <Button text='확인하기' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px"/>
        <Button text='취소하기'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={handleClose}  />
      </div>
    </Modal>
  )
}
