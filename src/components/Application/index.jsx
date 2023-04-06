import * as S from "./style";
import ToS from "./ToS";
import ApplicationForm from "./ApplicationForm";

export default function Application() {
  return (
    <S.Div>
      <h2>[필수] 이용약관 동의</h2>
      <ToS />
      <h2>대여신청서 작성</h2>
      <ApplicationForm />
    </S.Div>
  )
}