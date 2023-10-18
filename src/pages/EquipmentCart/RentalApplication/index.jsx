import * as S from "./style";
import Application from "../../../components/Application";
import Button from "../../../modules/Button";
import { useNavigate } from "react-router-dom";
import { postReservation } from "../../../api/api";
import { useRef } from "react";
import useModal from "../../../hook/useModal";
import useTitle from "../../../hook/useTitle";
import usePreventRefresh from "../../../hook/usePreventRefresh";

export default function RentalApplication() {
  const { Modal, open, close } = useModal();
  const navigate = useNavigate();
  const dataRef = useRef([]);
  useTitle("기자재 대여");
  usePreventRefresh();

  const handlePostReservation = async () => {
    if (dataRef.current.check && dataRef.current.purpose.value.length > 10) {
      const data = {
        renterName: dataRef.current.name.innerHTML,
        renterPhoneNumber: dataRef.current.pNumber.value,
        renterEmail: `${dataRef.current.id.value}@${dataRef.current.address.value}`,
        rentalPurpose: dataRef.current.purpose.value,
      };

      const response = await postReservation(JSON.stringify(data));

      if (response === 201) navigate("/equipment/inventory/success");
      else alert(response.data);
    }
  };

  return (
    <>
      <Application ref={dataRef} />
      <S.MainBtnWrap>
        <Button
          onClick={handlePostReservation}
          className="main"
          text="대여 완료"
          padding="16px 36px"
          borderRadius="10px"
          fontSize="15px"
          margin="0 13px 0 0"
        />
        <Button
          onClick={open}
          className="sub"
          text="뒤로 가기"
          padding="16px 36px"
          borderRadius="10px"
          fontSize="15px"
        />
        <Modal>
          <p>작성중인 내용이 있습니다. 나가시겠습니까?</p>
          <div>
            <Button
              onClick={close}
              text="취소"
              className="sub"
              padding="11px 34px"
              borderRadius="5px"
            />
            <Button
              onClick={() => navigate("/equipment/inventory")}
              text="나가기"
              className="main"
              padding="11px 28.5px"
              borderRadius="5px"
            />
          </div>
        </Modal>
      </S.MainBtnWrap>
    </>
  );
}
