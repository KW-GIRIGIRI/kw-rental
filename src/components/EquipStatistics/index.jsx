import * as S from "./style"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAdminEquipHistory } from "../../api/api"
import { category } from "../../data/category"
import EmptyData from "../EmptyData"

export default function EquipStatistics({ productList, setProductList, page, setPageArray, isCategory }) {
  const dualDate = useSelector((state) => state.datePicker.dualDate)

  const handleGetEquipHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const reqCategory = isCategory
        ? `&category=${category.filter((_, i) => i + 1 === isCategory)[0]?.value}`
        : ""
      const reqUrl = `from=${dualDate.firstDate}&to=${dualDate.lastDate}&page=${page}${reqCategory}`
      const response = await getAdminEquipHistory(reqUrl)

      setPageArray(response.endpoints)
      setProductList(response.histories)

      window.scrollTo({
        top: 0,
      })
    }
  }

  useEffect(() => {
    handleGetEquipHistory()
  }, [page, isCategory, dualDate])

  return (
    !! productList.length ?
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
          <span>{category.map(i => i.value === item.category && i.label)}</span>
          <span>{item.modelName}</span>
          <span>{item.propertyNumber}</span>
          <span>{item.abnormalRentalCount + item.normalRentalCount}</span>
          <span>{item.abnormalRentalCount}</span>
        </S.ItemLi>
      ))}
      </S.ItemUl>
    : <EmptyData content={['선택한 날짜에 해당하는 데이터가 없습니다.']} /> 
  );
}
