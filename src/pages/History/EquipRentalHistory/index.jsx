import UserState from "../../../components/UserState"
import UserHist from "../../../components/UserHist"
import * as S from "../style"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../../context/Context"
import Button from "../../../modules/Button"
import { category } from "../../../data/category"
import EquipStatistics from "../../../components/EquipStatistics"
import iconExcel from "../../../assets/icon-excel.svg"
import Image from "../../../modules/Image"
import { CSVLink } from "react-csv"
import DualDatePicker from "../../../components/DatePicker/DualDatePicker"

export default function EquipmentRentalHistory() {
  const 가짜대여통계 = [
    {
      카테고리: "카메라",
      기자재명: "MIRRORLESS a6600",
      자산번호: "20190500020001",
      기간내대여수: 24,
      불량반납: 2,
      반납일: "23년 2월 28일"
    },
    {
      카테고리: "녹음 장비",
      기자재명: "MIRRORLESS a6600",
      자산번호: "20190500020002",
      기간내대여수: 20,
      불량반납: 0,
      반납일: "23년 2월 28일"
    },
  ]

  const { isAuth } = useContext(AuthContext)
  const [productList, setProductList] = useState([])
  const [isCategory, setIsCategory] = useState(0)
  const [page, setPage] = useState(0)
  const [pageArray, setPageArray] = useState([])
  const [onDownload, setOnDownload] = useState(false)

  const handleCategory = (e) => {
    setIsCategory(parseInt(e.target.value))
    setPage(0)
  }

  const handleDownloadXlsx = () => {
    const xlsx = require( "xlsx" )
    const book = xlsx.utils.book_new()
    const data = xlsx.utils.json_to_sheet(productList)
    xlsx.utils.book_append_sheet( book, data, "기자재 통계" );
    xlsx.writeFile(book, Date.now().toString()+".xlsx")
    setOnDownload(false)
  }

  //api 나오면 바꿔야 함
  const getProduct = async () => {
    const response = 가짜대여통계

    window.scrollTo({
      top: 0,
    })

    // setPageArray(response.endPoints)

    if (isCategory)
      setProductList(response.filter(i => i.카테고리 === category[isCategory - 1].label))
    else
      setProductList(response)
  }

  useEffect(() => {
    getProduct()
  }, [page, isCategory])

  return (
    <>
      {
        isAuth ?
          <>
            <S.Wrap>
              <S.Title>기자재 통계</S.Title>
              <DualDatePicker firstInitial={-31} className='authHistory' />
            </S.Wrap>
            <S.RentalWrap>
              <S.FilterWrap className="mode">
                <Button className={isCategory ? 'disable shadow' : 'main shadow'} text="전체" padding="10px 21px" borderRadius="20px" onClick={handleCategory} value="0" />
                {
                  category.map((item, index) =>
                    <Button value={index + 1} key={index} className={isCategory === index + 1 ? `main shadow` : 'disable shadow'} text={item.label} padding="10px 21px" borderRadius="20px" onClick={handleCategory} />
                  )
                }
              </S.FilterWrap>
              <Image src={iconExcel} width="18px" height="18px" onClick={() => { setOnDownload(!onDownload) }}></Image>
              {onDownload &&
                <S.DownloadModal className="download">
                  <p onClick={handleDownloadXlsx}>
                    엑셀 파일로 다운로드(.xlsx)
                  </p>
                  <p onClick={() => { setOnDownload(false) }}>
                    <CSVLink data={productList} filename={Date.now()}>엑셀 파일로 다운로드(.csv)</CSVLink>
                  </p>
                </S.DownloadModal>}

              <EquipStatistics data={productList} />
            </S.RentalWrap>
            <div>페이지</div>
          </>
          :
          <>
            <S.Title> 내 대여 정보</S.Title>
            <S.RentalWrap>
              <h2>기자재 대여</h2>
              <UserState isEquip={true} />
              <h2>기자재 대여 이력</h2>
              <UserHist isEquip={true} />
            </S.RentalWrap>
          </>
      }
    </>
  )
}
