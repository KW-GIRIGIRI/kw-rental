import { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import Button from "../../modules/Button";
import TabNav from "../../modules/TabNav";
import * as S from "./style";
import iconArrowRightSmall from "../../assets/icon-arrow-right-small.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLab } from "../../store/reducer/LabControllerSlice";

export default function LabRental() {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const dispatch = useDispatch()
  const lab = useSelector(state => state.labControl.lab)

  const SubTitle = () => {
    switch (pathname) {
      case "/lab/status":
        return isAuth ? "대여 관리" : "랩실 현황";
      default:
        return isAuth ? "랩실 관리" : "랩실 소개";
    }
  };

  const Section = () => {
    switch (pathname) {
      case "/lab/application":
      case "/lab/success":
        return (
          <>
            <S.SimpleDesc>
              <span
                className={pathname.includes("/lab/application") ? "on" : ""}
              >
                랩실 대여하기
              </span>
              <span className={pathname.includes("/lab/success") ? "on" : ""}>
                랩실 대여 완료
              </span>
            </S.SimpleDesc>
            {pathname.includes("/application") && (
              <S.SubTitle>랩실 대여하기</S.SubTitle>
            )}
          </>
        );
      default:
        return (
          isAuth && pathname.includes("/status") ? <></>
            :
            <>
              <Button
                className={lab ? "main shadow" : "disable shadow"}
                text="한울관"
                padding="10px 29px"
                borderRadius="20px"
                margin="0 10px 0 0"
                onClick={() => dispatch(setLab(true))} 
              />
              <Button
                className={lab ? "disable shadow" : "main shadow"}
                text="화도관"
                padding="10px 29px"
                borderRadius="20px"
                onClick={() => dispatch(setLab(false))}
              />
            </>
        );
    }
  };

  useEffect(() => {
    dispatch(setLab(true))
    return() => dispatch(setLab(true))
  }, [])

  return (
    <>
      {isAuth ? (
        <>
          <TabNav
            onClick={() => navigate("/lab")}
            text="랩실 관리"
            className={pathname.split("/").at(-1) === "lab" || pathname.split("/").at(-1) === "edit" ? "on" : "false"}
          />
          <TabNav
            onClick={() => navigate("/lab/status")}
            text="대여 관리"
            className={pathname.includes("status") ? "on" : "false"}
          />
        </>
      ) : (
        <>
          <TabNav
            onClick={() => navigate("/lab")}
            text="랩실 소개"
            className={pathname.includes("lab/") ? "false" : "on"}
          />
          <TabNav
            onClick={() => navigate("/lab/status")}
            text="랩실 현황"
            className={pathname.includes("lab/") ? "on" : "false"}
          />
        </>
      )}
      <S.Section>
        {!pathname.includes("/application") &&
          !pathname.includes("/success") && (
            <>
              <S.SubTitle>
                <SubTitle />
              </S.SubTitle>

              {isAuth && !pathname.includes("lab/") ? (
                <S.InfoBtn>
                  <span
                    onClick={() => {
                      navigate("/lab/edit");
                    }}
                  >
                    랩실 소개 관리
                  </span>
                  <img src={iconArrowRightSmall} alt="오른쪽 화살표 아이콘" />
                </S.InfoBtn>
              ) : (
                <></>
              )}
            </>
          )}
        <Section />
        <Outlet />
      </S.Section>
    </>
  );
}
