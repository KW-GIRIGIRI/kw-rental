import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartEquip } from "../../../api/api";
import { category } from "../../../data/category";
import useModal from "../../../hook/useModal";
import Button from "../../../modules/Button";
import Image from "../../../modules/Image";
import { asyncGetCartList } from "../../../store/reducer/cartListSlice";
import ModifyModal from "../ModifyModal";
import * as S from "./style";

export default function ListItem({ cart }) {
  const [modal, setModal] = useState(false);
  const { Modal, open, close } = useModal();
  const dispatch = useDispatch();

  const handleDeleteInventory = async () => {
    const res = await deleteCartEquip(cart.id);
    res === 204 && close();
    dispatch(asyncGetCartList());
  };

  return (
    <S.ListLi>
      <ModifyModal cart={cart} modal={modal} setModal={setModal} />
      <Modal>
        <p>정말 삭제하시겠습니까?</p>
        <div>
          <Button
            onClick={close}
            text="취소"
            className="sub"
            padding="11px 34px"
            borderRadius="5px"
          />
          <Button
            onClick={handleDeleteInventory}
            text="삭제"
            className="main"
            padding="12px 34px"
            borderRadius="5px"
          />
        </div>
      </Modal>

      <Image
        width="72px"
        height="72px"
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
      <p>{cart.amount}</p>
      <p>{cart.rentalStartDate}</p>
      <p>{cart.rentalEndDate}</p>
      <S.BtnWrap>
        <button onClick={() => setModal(true)}>수정</button>
        <button onClick={open}>삭제</button>
      </S.BtnWrap>
    </S.ListLi>
  );
}
