import * as S from "./style";
import Button from "../../modules/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.HeadOne>404</S.HeadOne>
      <S.SubTit>죄송합니다. 페이지를 찾을 수 없습니다.</S.SubTit>
      <S.Cont>
        페이지의 주소를 잘못 입력하셨거나,
        <br />
        주소가 변경 또는 삭제되어 찾을 수 없습니다.
      </S.Cont>
      <Button
        text="메인으로"
        className="sub"
        padding="16px 40px"
        borderRadius="10px"
        onClick={() => navigate("/")}
      />
    </S.Section>
  );
}
