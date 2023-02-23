import * as S from "./style";

export default function DetailDesc() {
  const date = new Date()
  const now = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
  
  return (
    <div>
      <S.ProductSpan>카메라</S.ProductSpan>
      <S.ProductTitle>SONY a6600</S.ProductTitle>
      <ol>
        <S.ProductLi>
          <p>품명</p>
          <span>a6600</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>모델</p>
          <span>MIRRORLESS</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>제조사</p>
          <span>SONY</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <span>줌렌즈(18-105mm), 단렌즈(35mm), 전용 가방, 배터리&충전기</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <span>사진 촬영, 동영상 촬영</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>보유 개수</p>
          <span>2EA</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>참고사항</p>
          <span>SD카드 별도</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 일수</p>
          <span>4~10일 전 예약 가능, 최대 3일 대여 가능</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>품명</p>
          <span>a6600</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <span>한울관 B119호</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여기간</p>
          <S.InpDate type="date" defaultValue={now} /> 
          <span>~</span>
          <S.InpDate type="date" defaultValue={now} name="" id="" />
        </S.ProductLi>
      </ol>
    </div>
  )
}
