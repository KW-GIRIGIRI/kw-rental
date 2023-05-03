import * as S from "./style"

export default function PenaltyState({ data }) {
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
      {data.map(penalty => (
        <S.ItemLi>
          <span>{penalty.대여자}</span>
          <form action="#">
            <label for="penalty"></label>
            <select name="penalty" id="lang">
              <option value={penalty.상태}>{penalty.상태}</option>
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
          <span><p onClick={() => {}}>삭제</p></span>
        </S.ItemLi>
      ))
      }
    </S.ItemUl>
  )
}
