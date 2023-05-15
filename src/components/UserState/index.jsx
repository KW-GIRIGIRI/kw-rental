import * as S from "./style";
import Image from "../../modules/Image/index.jsx";
import Button from "../../modules/Button";
import { getCurrentRental } from "../../api/api";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { rentalStatus } from "../../data/rentalStatus";

export default function UserState({ isEquip, isLab }) {
  const [myRental, setMyRental] = useState([]);

  const handleGetCurrentRental = async () => {
    const res = await getCurrentRental();
    setMyRental(res.reservations);
  };

  useEffect(() => {
    handleGetCurrentRental();
  }, []);

  const onDelete = () => {};

  const 랩실대여 = [
    {
      사용기간: "23년 03월 11일(수) ~ 23년 03월 12일(목)",
      장소: "한울관 B119호",
      사용인원: 4,
      대여중: false,
    },
    {
      사용기간: "23년 03월 10일(수) ~ 23년 03월 11일(목)",
      장소: "화도관 302호",
      사용인원: 6,
      대여중: true,
    },
  ];

  const 페널티 = {
    이용가능: true,
    사유: "",
  };

  return (
    <S.Div>
      {isEquip && myRental.length ? (
        <S.HistWrap>
          <S.Header className="equip">
            <span>수령일 ~ 반납일</span>
            <span>기자재</span>
            <span></span>
            <span>개수</span>
            <span>상태</span>
          </S.Header>
          {myRental.map((rental, i) => (
            <S.HistList key={i} className="equipList">
              <S.DateEquip>
                <p>{dayjs(rental.startDate).format("YY년 MM월 DD일(dd)")}</p>
                <p>~</p>
                <p>{dayjs(rental.endDate).format("YY년 MM월 DD일(dd)")}</p>
              </S.DateEquip>
              <S.ItemUl>
                {rental.reservationSpecs.map((item, idx) => (
                  <S.ItemLi key={idx}>
                    <Image
                      src={item.imgUrl}
                      width="50px"
                      height="50px"
                      borderRadius="5px"
                    />
                    <S.NameEquip>
                      <p>{item.category}</p>
                      <p>{item.modelName}</p>
                    </S.NameEquip>
                    <span>{item.rentalAmount}</span>
                    <S.State>{rentalStatus[item.status]}</S.State>
                    {item.status === "RESERVED" ? (
                      <Button
                        text="대여취소"
                        className="shadow sub"
                        borderRadius="20px"
                        fontSize="14px"
                        width="70px"
                        height="27px"
                        onClick={onDelete}
                      />
                    ) : (
                      <></>
                    )}
                  </S.ItemLi>
                ))}
              </S.ItemUl>
            </S.HistList>
          ))}
        </S.HistWrap>
      ) : (
        <></>
      )}
      {isLab ? (
        <S.HistWrap>
          <S.Header className="lab">
            <span>사용 기간</span>
            <span>랩실</span>
            <span>사용 인원</span>
            <span>상태</span>
            <span></span>
          </S.Header>
          {랩실대여.map((랩실, i) => (
            <S.HistList key={i} className="lab labList">
              <span>{랩실.사용기간}</span>
              <S.Location>
                <p>KEY</p>
                <p>{랩실.장소}</p>
              </S.Location>
              <span>{랩실.사용인원}</span>
              <S.State>{랩실.대여중 ? "대여중" : "대여 신청"}</S.State>
              {!랩실.대여중 && (
                <Button
                  text="대여취소"
                  className="shadow sub"
                  borderRadius="20px"
                  fontSize="14px"
                  width="70px"
                  height="27px"
                />
              )}
            </S.HistList>
          ))}
        </S.HistWrap>
      ) : (
        <></>
      )}
      {!isEquip && !isLab ? (
        <S.HistWrap className="penalty">
          <S.Header className="penalList">
            <span>상태</span>
            <span>비고</span>
          </S.Header>

          <S.HistList className="penalList">
            <span>{페널티.이용가능 ? "정상 이용 가능" : "정지"}</span>
            <span>{페널티.사유.length ? 페널티.사유 : "-"}</span>
          </S.HistList>
        </S.HistWrap>
      ) : (
        <></>
      )}
    </S.Div>
  );
}
