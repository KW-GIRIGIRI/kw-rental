import AccountSettingComp from "../../components/AccountSettingComp";
import useTitle from "../../hook/useTitle";
import * as S from "./style";

export default function SetAccount() {
  useTitle('계정 설정')
  
  return (
    <section>
      <S.Title>계정 설정</S.Title>
      <AccountSettingComp />
    </section>
  );
}
