import * as S from "./style";
import { BtnWrap } from "../AddEquipment/style";
import Button from "../../modules/Button";
import { useLocation, useNavigate } from "react-router-dom";
import ItemReserveHist from "../../components/ItemReserveHist";
import useToggle from "../../hook/useToggle";
import { useState } from "react";
import Input from "../../modules/Input";
import {
  changeItemState,
  changePropertyNum,
  deleteItem,
  getItem,
  getItemList,
  getProductDetail,
} from "../../api/api";
import { useEffect } from "react";
import { useRef } from "react";
import useModal from "../../hook/useModal";

export default function EquipmentItemDetail() {
  const navigate = useNavigate();
  const { Toggle, state, changeInitial } = useToggle();
  const [editNum, setEditNum] = useState(false);
  const [itemList, setitemList] = useState([]);
  const [equip, setEquip] = useState(null);
  const [item, setItem] = useState(null);
  const propertyNumRef = useRef();
  const location = useLocation();
  const { Modal, open, close } = useModal();

  const handleChangeItem = (e) => {
    const pItem = itemList.filter(
      (i) => i.propertyNumber === e.target.value
    )[0];
    Promise.all([handleGetEquip(pItem.equipmentId), handleGetItem(pItem.id)]);
  };

  const handleManageNum = () => {
    setEditNum(!editNum);
    if (editNum) handleChangePropertyNum();
  };

  const handleChangePropertyNum = async () => {
    if (propertyNumRef.current.value !== item.propertyNumber) {
      const data = {
        propertyNumber: propertyNumRef.current.value,
      };

      const response = await changePropertyNum(
        location.state.id,
        JSON.stringify(data)
      );
      response === 204 || setEditNum(!editNum);
    }
  };

  const handleChangeItemState = async (id) => {
    const data = {
      rentalAvailable: !state,
    };
    const response = await changeItemState(
      id || location.state.id,
      JSON.stringify(data)
    );
    response === 204 || alert("다시 시도해주세요");
  };

  const handleGetEquip = async (id) => {
    const response = await getProductDetail(id || location.state.equipmentId);
    setEquip(response);
  };

  const handleGetItemList = async () => {
    const response = await getItemList(location.state.equipmentId);
    setitemList(response.items);
  };

  const handleGetItem = async (id) => {
    const response = await getItem(id || location.state.id);
    changeInitial(response.rentalAvailable);
    setItem(response);
  };

  const handleDeleteItem = async () => {
    if (itemList.length > 1) {
      const response = await deleteItem(location.state.id);
      response === 204 && navigate(`/${location.state.equipmentId}`);
    } else {
      alert("품목이 1개일 경우, 삭제가 불가능합니다.");
      close();
    }
  };

  useEffect(() => {
    Promise.all([handleGetItemList(), handleGetItem(), handleGetEquip()]);
  }, []);

  return (
    equip &&
    itemList &&
    item && (
      <S.Wrapper>
        <S.NavDiv>
          <S.SimpleDesc>
            <span>기자재 조회</span>
            <span>{equip.category}</span>
            <span>{equip.modelName}</span>
            <span>{item.propertyNumber}</span>
          </S.SimpleDesc>
          <div>
            <button onClick={open}>삭제</button>
          </div>
        </S.NavDiv>
        <S.Div>
          <S.SubTitle>품목 현황</S.SubTitle>
          <S.SelectItem
            onChange={handleChangeItem}
            value={item.propertyNumber}
            name=""
            id=""
          >
            {itemList.map((item) => (
              <option key={item.propertyNumber} value={item.propertyNumber}>
                {item.propertyNumber}
              </option>
            ))}
          </S.SelectItem>
        </S.Div>
        <S.Div>
          <S.SubTitle>품목 대여 ON/OFF</S.SubTitle>
        </S.Div>
        <Toggle
          onClickFunc={handleChangeItemState}
          className="rental"
          on="대여 가능"
          off="대여 불가"
        />
        <S.Div>
          <S.SubTitle>자산번호 관리</S.SubTitle>
          <S.numEditBtn onClick={handleManageNum}>
            <p>수정</p>
          </S.numEditBtn>
        </S.Div>
        <Input
          placeholder="20190500260004"
          maxLen="14"
          className="propertyNum"
          defaultValue={item.propertyNumber}
          ref={propertyNumRef}
          disabled={!editNum}
        />
        <S.Div>
          <S.SubTitle>품목 예약/사용 이력</S.SubTitle>
        </S.Div>
        <ItemReserveHist />
        <BtnWrap>
          <Button
            onClick={() => navigate(-1)}
            className="sub"
            text="뒤로 가기"
            margin="60px 0 30px"
            padding="15px 23px"
            borderRadius="10px"
            fontSize="15px"
          />
        </BtnWrap>
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
              onClick={handleDeleteItem}
              text="삭제"
              className="main"
              padding="12px 34px"
              borderRadius="5px"
            />
          </div>
        </Modal>
      </S.Wrapper>
    )
  );
}
