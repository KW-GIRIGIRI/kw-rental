import Button from "../../modules/Button";
import * as S from "./style"

export default function AddCartEquip() {
  const handleNextDay = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days)
    return today.toISOString().split('T')[0];
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.DescCont>대여 기자재 개수</S.DescCont>
        <S.InpWrapper>
          <S.Select name="equipCount" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </S.Select> 대
        </S.InpWrapper>
        <S.DescCont>기자재 수령일 ~ 반납일</S.DescCont>
        <S.InpWrapper>
          <S.InpDate type="date"
            defaultValue={handleNextDay(1)}
            min={handleNextDay(1)}
            max={handleNextDay(31)}
          />
          <span>~</span>
          <S.InpDate type="date"
            disabled // 최대 대여 가능 일수가 1 이상일 때 false
            defaultValue={handleNextDay(1)}
            min={handleNextDay(1)}
            max={handleNextDay(1)}
          />
        </S.InpWrapper>

      </S.Form>
      <Button className="main" text="기자재 담기" padding="15px 23px" borderRadius="10px" fontSize="1rem" margin="0 13px 0 0"/>
      <Button className="sub" text="뒤로 가기" padding="15px 23px" borderRadius="10px" fontSize="1rem"/>
    </S.Wrapper>
  )
}
