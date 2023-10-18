import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { returnRental } from "../../../api/api";
import useModal from "../../../hook/useModal";
import Button from "../../../modules/Button";
import { asyncGetReturned } from "../../../store/reducer/authReceiveSlice";
import * as S from "./style";

export default function ReturnModal({ user, returnModal, setReturnModal }) {
  const { Modal, open, close } = useModal();
  const [faulty, setFaulty] = useState([]);
  const checkRef = useRef([]);
  const dispatch = useDispatch();
  const receiveSpecList = useSelector(
    (state) => state.authReceive.receiveSpecList.byId
  );
  const selectDate = useSelector((state) => state.datePicker.singularDate);

  const specArr = user.reservationSpecs.flatMap((i) => {
    const item = receiveSpecList[i];
    const rentalSpecs = item.rentalSpecs || [];

    return rentalSpecs.map((spec) => ({
      modelName: item.modelName,
      id: spec.rentalSpecId,
      propertyNumber: spec.propertyNumber,
      status: "RETURNED",
    }));
  });

  const handleSelect = (e, item) => {
    faulty.filter((i) => i.propertyNum === item.propertyNum)[0].status =
      e.target.value;
  };

  const handleReturnRental = async () => {
    if (faulty.filter(({ status }) => !status).length)
      alert("불량 반납 사유를 선택하세요.");
    else {
      const faultyIds = faulty.map((obj) => obj.id);
      const filteredSpecArr = specArr.filter(
        (obj) => !faultyIds.includes(obj.id)
      );

      const faultArr = faulty.map(({ id, status }) => ({ id, status }));
      const filterArr = filteredSpecArr.map(({ id, status }) => ({
        id,
        status,
      }));

      const rentalSpecs = faultArr.concat(filterArr);

      const data = {
        reservationId: user.reservationId,
        rentalSpecs: rentalSpecs,
      };

      const res = await returnRental(JSON.stringify(data));
      res === 204 && close();

      dispatch(asyncGetReturned(selectDate));
    }
  };

  const handleGet = (val, i) => {
    const newList = {
      count: i,
      id: val.id,
      propertyNum: checkRef.current[i].innerHTML,
      status: "",
    };

    const newArr = faulty.map((i) => i.count === newList.count).includes(true)
      ? faulty.filter((fault) => newList.count !== fault.count)
      : faulty.concat(newList);

    setFaulty(newArr);
  };

  const handleClose = () => {
    close();
    setReturnModal(false);
  };

  useEffect(() => {
    returnModal && open();
    setReturnModal(false);
    setFaulty([]);
  }, [returnModal, close]);

  return (
    <Modal className="modify">
      <p>반납 확인</p>
      <S.ProductUl>
        <S.ProductLi>
          <p>정상/불량</p>
          <p>기자재</p>
          <p>자산번호</p>
        </S.ProductLi>
        {specArr.map((val, i) => (
          <S.ProductLi key={i}>
            <S.CheckInp
              type="checkbox"
              onClick={() => handleGet(val, i)}
              className={faulty.map((v) => (v.count === i ? "checked" : ""))}
            />
            <p>{val.modelName}</p>
            <p ref={(el) => (checkRef.current[i] = el)}>{val.propertyNumber}</p>
          </S.ProductLi>
        ))}
      </S.ProductUl>

      {faulty.length > 0 && (
        <>
          <p>반납 상태</p>
          <S.StateDiv>
            <span>
              {user.name} {user.memberNumber}
            </span>
            <ul>
              {faulty.map((item, i) => (
                <S.StateLi key={i}>
                  <p>{item.propertyNum}</p>
                  <S.Select
                    onChange={(e) => handleSelect(e, item)}
                    defaultValue={!item.status ? "default" : item.status}
                    name=""
                    id=""
                  >
                    <option value="default" disabled hidden>
                      사유
                    </option>
                    <option value="LOST">분실</option>
                    <option value="BROKEN">고장</option>
                    <option value="OVERDUE_RENTED">연체</option>
                  </S.Select>
                </S.StateLi>
              ))}
            </ul>
          </S.StateDiv>
        </>
      )}

      <div>
        <Button
          text="확인하기"
          className="main"
          padding="11px 24px"
          borderRadius="5px"
          fontSize="14px"
          onClick={handleReturnRental}
        />
        <Button
          text="취소하기"
          className="sub"
          padding="10px 24px"
          borderRadius="5px"
          fontSize="14px"
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
}
