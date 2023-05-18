import { useEffect } from "react";
import useModal from "../../../hook/useModal";
import Image from "../../../modules/Image";
import WeekPicker from "../../WeekPicker";
import * as S from "./style";
import { category } from "../../../data/category";
import ModifyComp from "./ModifyComp";

export default function ModifyModal({
  modal,
  setModal,
  cart,
}) {
  const { Modal, open, close } = useModal();

  useEffect(() => {
    modal && open();
    setModal(false);
  }, [modal, close]);

  return (
    cart && (
      <Modal className="modify">
        <p>담은 기자재 수정</p>
        <S.Div className="item">
          <Image
            width="54px"
            height="54px"
            borderRadius="10px"
            src={cart.imgUrl}
            alt=""
          />
          <S.ItemWrap>
            <p>
              {category.map(
                (value) => value.value === cart.category && value.label
              )}
            </p>
            <p>{cart.modelName}</p>
          </S.ItemWrap>
        </S.Div>
        <p>대여 현황</p>
        <WeekPicker equipId={cart.equipmentId} modify="true" />
        <ModifyComp cart={cart} close={close} modal={modal} setModal={setModal} />
      </Modal>
    )
  );
}