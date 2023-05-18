import * as S from "./style";

export default function EquipStatistics({ data }) {
  const category =
  {
    CAMERA: "카메라",
    RECORDING: "녹음 장비",
    FILMING_ASSIST: "촬영보조 장비",
    VR: "VR 장비",
    ETC: "기타"
  }

  return (
    <S.ItemUl>
      <S.Header>
        <span>카테고리</span>
        <span>기자재명</span>
        <span>품목</span>
        <span>기간 내 대여 수</span>
        <span>불량반납 수</span>
      </S.Header>
      {data.map((item, idx) => (
        <S.ItemLi key={idx}>
          <span>{category[item.category]}</span>
          <span>{item.modelName}</span>
          <span>{item.propertyNumber}</span>
          <span>{item.abnormalRentalCount + item.normalRentalCount}</span>
          <span>{item.abnormalRentalCount}</span>
        </S.ItemLi>
      ))}
    </S.ItemUl>
  );
}
