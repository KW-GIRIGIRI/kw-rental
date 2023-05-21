import * as S from "./style"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAdminEquipHistory } from "../../api/api"
import { category } from "../../data/category"

export default function EquipStatistics({ productList, setProductList, page, setPageArray, isCategory }) {
  const dualDate = useSelector((state) => state.datePicker.dualDate)

  const handleGetEquipHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const reqCategory = isCategory
        ? `&category=${category.filter((_, i) => i + 1 === isCategory)[0]?.value}`
        : ""
      const reqUrl = `from=${dualDate.firstDate}&to=${dualDate.lastDate}&page=${page}${reqCategory}`
      const response = await getAdminEquipHistory(reqUrl)
      const data = response.histories

      setPageArray(response.endpoints)

      window.scrollTo({
        top: 0,
      })

      if (isCategory) {
        setProductList(
          data.filter((i) => i.category === category[isCategory - 1].value)
        )
      } else {
        setProductList(data)
      }
    }
  }

  useEffect(() => {
    handleGetEquipHistory()
  }, [page, isCategory, dualDate])

  const equipCategory =
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
      {productList?.map((item, idx) => (
        <S.ItemLi key={idx}>
          <span>{equipCategory[item.category]}</span>
          <span>{item.modelName}</span>
          <span>{item.propertyNumber}</span>
          <span>{item.abnormalRentalCount + item.normalRentalCount}</span>
          <span>{item.abnormalRentalCount}</span>
        </S.ItemLi>
      ))}
    </S.ItemUl>
  );
}
