import * as S from "./style";
import useModal from "../../hook/useModal";
import Button from "../../modules/Button";
import { useState } from "react";

export default function PenaltyState({ data, setData }) {
  const { Modal, open, close } = useModal();
  const [index, setIndex] = useState(0);

  const onDelete = (idx) => {
    setIndex(idx);
    open();
  };

  const handleDeletePenalty = async () => {
    // 나중에 api로 바꿔야함
    setData((prevData) => prevData.filter((_, i) => i !== index));
    setIndex(0);
    close();
  };

  const handelEditPenaltyState = async (e, idx) => {
    // 나중에 api로 바꿔야함
    const newState = e.target.value;
    setData((prevData) => {
      const newData = [...prevData];
      newData[idx].상태 = newState;
      return newData;
    });
  };

  return (
    <S.ItemUl>
      <S.Header>
        <span>대여자</span>
        <span>상태</span>
        <span>페널티 기간</span>
        <span>기자재/랩실</span>
        <span>사유</span>
        <span></span>
      </S.Header>
      {data.map((penalty, idx) => (
        <S.ItemLi key={idx}>
          <span>{penalty.대여자}</span>
          <form action="#">
            <select
              name="penalty"
              value={penalty.상태}
              onChange={(e) => handelEditPenaltyState(e, idx)}
            >
              <option value="하루 이용 금지">하루 이용 금지</option>
              <option value="일주일 이용 금지">일주일 이용 금지</option>
              <option value="한 달 이용 금지">한 달 이용 금지</option>
              <option value="한 학기 이용 금지">한 학기 이용 금지</option>
              <option value="1년 이용 금지">1년 이용 금지</option>
            </select>
          </form>
          <span>{penalty.기간}</span>
          <span>{penalty.종류}</span>
          <span>{penalty.사유}</span>
          <span>
            <p onClick={() => onDelete(idx)}>삭제</p>
          </span>
          <Modal>
            <p>해당 패널티를 정말 삭제하시겠습니까?</p>
            <div>
              <Button
                text="취소"
                className="sub"
                padding="11px 30px"
                borderRadius="5px"
                fontSize="14px"
                onClick={close}
              />
              <Button
                text="삭제"
                className="main"
                padding="11px 30px"
                borderRadius="5px"
                fontSize="14px"
                onClick={handleDeletePenalty}
              />
            </div>
          </Modal>
        </S.ItemLi>
      ))}
    </S.ItemUl>
  );
}
