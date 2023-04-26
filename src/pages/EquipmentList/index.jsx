import * as S from "./style"
import iconSearch from "../../assets/icon-search.svg"
import iconCalendar from "../../assets/icon-calendar.svg"
import iconGalOn from "../../assets/icon-gal-on.svg"
import iconGal from "../../assets/icon-gal.svg"
import iconListOn from "../../assets/icon-list-on.svg"
import iconList from "../../assets/icon-list.svg"
import iconPlus from "../../assets/icon-plus.svg"
import Button from "../../modules/Button"
import EquipListWrap from "../../components/EquipListWrap"
import iconPageArrow from "../../assets/icon-pageArrow.svg"
import DatePicker from "../../components/DatePicker"
import { useContext, useEffect, useState } from "react"
import { getProductList } from "../../api/api"
import { AuthContext } from "../../context/Context"
import { useNavigate } from "react-router-dom"
import useModal from "../../hook/useModal"
import { category } from "../../data/category"
import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdays: [
    "일", "월", "화", "수", "목", "금", "토"
  ]
})

export default function EquipmentList() {
  const [viewMode, setViewMode] = useState('gal')
  const [productList, setProductList] = useState([])
  const [page, setPage] = useState(0)
  const [pageArray, setPageArray] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const { isAuth } = useContext(AuthContext)
  const [isCategory, setIsCategory] = useState(0)
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs().add(1, 'days')
  })
  const { Modal, open, close } = useModal();
  const navigate = useNavigate()

  const handleGetDatePicker = e => {
    const position = e.target.getBoundingClientRect()
    const top = position.top + position.height, left = position.left
    setCalendar(prev => ({
      ...prev,
      visible: true,
      top: top,
      left: left,
    }))
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === "click") {
      if(searchKeyword.includes('\\')) alert('유효한 값을 입력하세요')
      else if (searchKeyword.length < 2) open()
      else {
        getProduct()
        setPage(0)
      }
    }
  }

  const handleCategory = (e) => {
    setIsCategory(parseInt(e.target.value))
    setPage(0)
  }

  const getProduct = async () => {
    const reqSize = viewMode === 'gal' ? 16 : 10
    const reqKeyword = searchKeyword ? `&keyword=${searchKeyword}` : ''
    const reqCategory = isCategory ? `&category=${category.filter((_, i) => i + 1 === isCategory)[0]?.value}` : ''
    
    const reqUrl = `size=${reqSize}&page=${page}${reqKeyword + reqCategory}`
    const response = await getProductList(reqUrl);

    window.scrollTo({
      top: 0, 
    })

    setPageArray(response.endPoints)
    setProductList(response.items)
  }
    
  useEffect(() => {
    getProduct()
    if (isAuth) setViewMode('list')
  }, [page, viewMode, isCategory])

  return (
    <S.Wrapper>
      <S.FilterWrap>
        <S.FilterWrap>
          <S.SearchCont>
            {/* search inp 분리 */}
            <S.SearchInp type="text" placeholder="카테고리, 기자재 명을 입력해주세요." onChange={(e) => setSearchKeyword(e.target.value)} onKeyDown={handleSearch} />
            <S.SearchImg onClick={handleSearch} src={iconSearch} alt="" />
          </S.SearchCont>
          <Modal>
            <p>최소 2자 이상의 검색어를 입력해주세요.</p>
            <Button text='확인'className='main' padding="10px 20px" borderRadius="5px" fontSize="14px" onClick={close} float='right' />
          </Modal>
          <S.DateCont onClick={handleGetDatePicker}>
            <img src={iconCalendar} alt="" />
            <span>{calendar.date.format('M월 D일(dd)')}</span>
          </S.DateCont>
          {calendar && <DatePicker calendar={calendar} setCalendar={setCalendar} />}
        </S.FilterWrap>
        {
          isAuth ?
            <S.addBtn onClick={() => navigate('/add')}>
              <img src={iconPlus} alt="" />
              <p>기자재 추가</p>
            </S.addBtn>
          : <S.FilterWrap>
              <S.TypeBtn onClick={() => setViewMode('gal')}>
                <img src={viewMode==='gal' ? iconGalOn : iconGal} alt="" />
              </S.TypeBtn>
              <S.TypeBtn onClick={() => setViewMode('list')}>
                <img src={viewMode==='list' ? iconListOn : iconList} alt="" />
              </S.TypeBtn>
            </S.FilterWrap>
        }
      </S.FilterWrap>

      <S.FilterWrap className="mode">
        <Button className={isCategory ? 'disable shadow' : 'main shadow'} text="전체" padding="10px 21px" borderRadius="20px" onClick={handleCategory} value="0" />
        {
          category.map((item, index) => 
            <Button value={index + 1} key={index} className={isCategory === index + 1 ? `main shadow` : 'disable shadow'} text={item.label} padding="10px 21px" borderRadius="20px" onClick={handleCategory}/>
          )
        }
        {
          isAuth ? <button className="add"><img src={iconPlus} alt="기자재 카테고리 추가" /></button> : <></>
        }
      </S.FilterWrap>

      <EquipListWrap type={viewMode} data={productList} />

      <S.PageBtnWrap>
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          <img src={iconPageArrow} alt="이전 페이지" />
        </button>
        {
          pageArray?.map((_, index) => {
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
