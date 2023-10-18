import * as S from "./style";
import Button from "../../../modules/Button";
import { useNavigate } from "react-router-dom";
import EquipCartList from "../../../components/EquipCartList";
import { deleteAllCartEquip } from "../../../api/api";
import { useEffect } from "react";
import useModal from "../../../hook/useModal";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCartList } from "../../../store/reducer/cartListSlice";
import useTitle from "../../../hook/useTitle";
import EmptyData from "../../../components/EmptyData";

export default function EquipmentBox() {
  const navigate = useNavigate();
  const { Modal, open, close } = useModal();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList.cartList);
  useTitle("담은 기자재");

  const handleDeleteCart = async () => {
    const response = await deleteAllCartEquip();
    response === 204 && close();
    dispatch(asyncGetCartList());
  };

  useEffect(() => {
    dispatch(asyncGetCartList());
  }, []);

  return cartList.length ? (
    <>
      <S.Div>
        <Button
          onClick={open}
          text="전체 삭제"
          className="sub shadow"
          padding="7px 10px"
          borderRadius="50px"
        />
      </S.Div>
      <EquipCartList cartList={cartList} />
      <S.MainBtnWrap>
        <Button
          onClick={() => navigate("/equipment/inventory/application")}
          className="main"
          text="대여하기"
          padding="16px 36px"
          borderRadius="10px"
          fontSize="15px"
          margin="0 13px 0 0"
        />
        <Button
          onClick={() => navigate("/equipment")}
          className="sub"
          text="목록보기"
          padding="16px 36px"
          borderRadius="10px"
          fontSize="15px"
        />
      </S.MainBtnWrap>
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
            onClick={handleDeleteCart}
            text="삭제"
            className="main"
            padding="12px 34px"
            borderRadius="5px"
          />
        </div>
      </Modal>
    </>
  ) : (
    <EmptyData content={["담은 기자재가 없습니다."]} />
  );
}
