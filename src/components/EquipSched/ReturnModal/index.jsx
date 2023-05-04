import { useEffect, useRef, useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import * as S from "./style"

export default function ReturnModal({returnModal, setReturnModal, reservationSpecs}) {
  const { Modal, open, close } = useModal()
  const [faulty, setFaulty] = useState([])
  const checkRef = useRef([])

  /* 수령 확인 api 나온 후에 수정 

  reservationSpecs.map(item => 
    item.rentalSpecs.map(value => 
      <S.ProductLi key={i}>
        <S.CheckInp type="checkbox" onClick={() => handleGet(i)} className={faulty.map(v => v.count === i ? 'checked' : '')}/>
        <p>Oculus Quest2</p>
        <p ref={el => checkRef.current[i] = el}>{i + 88888888888888}</p>
      </S.ProductLi>
    )  
  )
  */
  
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
          reservationSpecs.map((val, i) => 
            <S.ProductLi key={i}>
              <S.CheckInp type="checkbox" onClick={() => handleGet(i)} className={faulty.map(v => v.count === i ? 'checked' : '')}/>
              <p>{val.modelName}</p>
              <p ref={el => checkRef.current[i] = el}>{i + 88888888888888}</p>
            </S.ProductLi>
          )
        }
      </S.ProductUl>

      {
        faulty.length > 0 &&
        <>
          <p>반납 상태</p>
          <S.StateDiv>
            <span>홍길동 2013020123</span>
            <ul>
              {
                faulty.map((item, i) =>
                  <S.StateLi key={i}>
                    <p>{item.propertyNum}</p>
                    <S.Select  defaultValue="default" name="" id="">
                      <option value='default' disabled hidden>사유</option>
                      <option value="">분실</option>
                      <option value="">고장</option>
                      <option value="">연체</option>
                    </S.Select>
                  </S.StateLi>
                )
              }
            </ul>
          </S.StateDiv>
        </>
      }

      <div>
        <Button text='확인하기' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px"/>
        <Button text='취소하기'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={handleClose}  />
      </div>
    </Modal>
  )
}
