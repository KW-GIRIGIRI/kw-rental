import * as S from "./style"
import iconSearch from "../../assets/icon-search.svg"
import iconCalendar from "../../assets/icon-calendar.svg"
import iconGalOn from "../../assets/icon-gal-on.svg"
import iconGal from "../../assets/icon-gal.svg"
import iconListOn from "../../assets/icon-list-on.svg"
import iconList from "../../assets/icon-list.svg"
import Button from "../../modules/Button"
import EquipListWrap from "../../components/EquipListWrap"
import iconPageArrow from "../../assets/icon-pageArrow.svg"
import { useEffect, useState } from "react"
import { getProductList } from "../../api/api"
import SearchError from "../../components/Modal/SearchError"

export default function EquipmentList() {
  const [viewMode, setViewMode] = useState('gal')
  const [productList, setProductList] = useState([])
  const [page, setPage] = useState(0)
  const [pageArray, setPageArray] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [modal, setModal] = useState(false)

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === "click") {
      if(searchKeyword.includes('\\')) alert('유효한 값을 입력하세요')
      else if (searchKeyword.length < 2) setModal(true)
      else {
        getProduct()
        setPage(0)
      }
    }
  }

  const handleNextDay = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days)
    return today.toISOString().split('T')[0];
  }

  const getProduct = async () => {
    const response = await getProductList({
      size: viewMode==='gal' ? 16 : 10,
      keyword: searchKeyword,
      category: '',
      page: page
    });
    
    window.scrollTo({
      top: 0,
    })

    setPageArray(response.endPoints)
    setProductList(response.items)
  }
    
  useEffect(() => {
    getProduct()
  }, [page, viewMode])

  return (
    <S.Wrapper>
      <S.FilterWrap>
        <S.FilterWrap>
          <S.SearchCont>
            {/* search inp 분리 */}
            <S.SearchInp type="text" placeholder="카테고리, 기자재 명을 입력해주세요." onChange={(e) => setSearchKeyword(e.target.value)} onKeyDown={handleSearch} />
            <S.SearchImg onClick={handleSearch} src={iconSearch} alt="" />
          </S.SearchCont>
          <SearchError modal={modal} setModal={setModal} />
          <S.DateCont>
            <img src={iconCalendar} alt="" />
            <span>3월 12일(화)</span>
            <S.DateInp type="date"
              min={handleNextDay(1)}
              max={handleNextDay(31)}
            />
          </S.DateCont>
        </S.FilterWrap>

        <S.FilterWrap>
          <S.TypeBtn onClick={() => setViewMode('gal')}>
            <img src={viewMode==='gal' ? iconGalOn : iconGal} alt="" />
          </S.TypeBtn>
          <S.TypeBtn onClick={() => setViewMode('list')}>
            <img src={viewMode==='list' ? iconListOn : iconList} alt="" />
          </S.TypeBtn>
        </S.FilterWrap>
      </S.FilterWrap>

      <S.FilterWrap className="mode">
        <Button className="main shadow" text="전체" padding="10px 21px" borderRadius="20px" />
        <Button className="disable shadow" text="카메라" padding="10px 21px" borderRadius="20px"/>
        <Button className="disable shadow" text="녹음 장비" padding="10px 21px" borderRadius="20px"/>
        <Button className="disable shadow" text="촬영보조 장비" padding="10px 21px" borderRadius="20px"/>
        <Button className="disable shadow" text="VR 장비" padding="10px 21px" borderRadius="20px" />
        <Button className="disable shadow" text="기타" padding="10px 21px" borderRadius="20px"/>
      </S.FilterWrap>

      <EquipListWrap type={viewMode} data={productList} />

      <S.PageBtnWrap>
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          <img src={iconPageArrow} alt="이전 페이지" />
        </button>
        {
          pageArray.map((_, index) => {
            return (
              <button key={index} onClick={() => setPage(index)} className={page===index  ? 'on' : null}>
                {index + 1}
              </button>
            )
          })
        }
        <button onClick={() => setPage(page + 1)} disabled={page + 1 === pageArray.length}>
          <img src={iconPageArrow} alt="다음 페이지" />
        </button>
      </S.PageBtnWrap>
    </S.Wrapper>
  )
}
