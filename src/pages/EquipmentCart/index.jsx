import * as S from "./style";
import { Outlet, useLocation } from "react-router-dom";

export default function EquipmentCart() {
  const location = useLocation().pathname;

  return (
    <S.Wrapper>
      <S.SimpleDesc>
        <span
          className={
            location.includes("/application") || location.includes("/success")
              ? ""
              : "on"
          }
        >
          담은 기자재
        </span>
        <span className={location.includes("/application") ? "on" : ""}>
          대여하기
        </span>
        <span className={location.includes("/success") ? "on" : ""}>
          대여 완료
        </span>
      </S.SimpleDesc>
      {location.includes("/application") ? (
        <S.SubTitle>대여하기</S.SubTitle>
      ) : location.includes("/success") ? (
        <></>
      ) : (
        <S.SubTitle>담은 기자재</S.SubTitle>
      )}
      <Outlet />
    </S.Wrapper>
  );
}
