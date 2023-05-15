import { Wrap } from "./style";
import iconCheck from "../../assets/icon-check-fill.svg";
import Button from "../../modules/Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignup = location?.state.isSignup;

  return (
    <Wrap>
      <img src={iconCheck} alt="" />
      {isSignup ? (
        <>
          <h2>회원가입 완료</h2>
          <p>로그인 후 모든 서비스를 이용할 수 있습니다.</p>
        </>
      ) : (
        <h2>임시 비밀번호가 발송 완료되었습니다.</h2>
      )}
      <Button
        text="로그인하러 가기"
        onClick={() => navigate("/auth")}
        className="main"
        borderRadius="10px"
        padding="16px 16px"
        margin="22px 0 0"
      />
    </Wrap>
  );
}
