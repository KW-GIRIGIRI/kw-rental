import * as S from "../style"
import UserState from "../../../components/UserState"
import UserHist from "../../../components/UserHist"
import Button from "../../../modules/Button"
import EquipStatistics from "../../../components/EquipStatistics"
import iconExcel from "../../../assets/icon-excel.svg"
import Image from "../../../modules/Image"
import DualDatePicker from "../../../components/DatePicker/DualDatePicker"
import dayjs from "dayjs"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../../context/Context"
import { category } from "../../../data/category"
import { CSVLink } from "react-csv"
import { getAdminEquipHistory } from "../../../api/api"
import { useSelector } from "react-redux"

export default function EquipmentRentalHistory() {
  const { isAuth } = useContext(AuthContext);
  const [productList, setProductList] = useState([]);
  const [isCategory, setIsCategory] = useState(0);
  const [page, setPage] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [onDownload, setOnDownload] = useState(false);
  const dualDate = useSelector((state) => state.datePicker.dualDate);

  const handleCategory = (e) => {
    setIsCategory(parseInt(e.target.value));
    setPage(0);
  };

  const handleDownloadXlsx = () => {
    const xlsx = require("xlsx");
    const book = xlsx.utils.book_new();
    const data = xlsx.utils.json_to_sheet(productList);
    xlsx.utils.book_append_sheet(book, data, "기자재 통계");
    xlsx.writeFile(book, dayjs().format("기자재통계_YYMMDD_HHmmss") + ".xlsx");
    setOnDownload(false);
  };

  const handleGetEquipHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const response = await getAdminEquipHistory(
        dualDate.firstDate,
        dualDate.lastDate
      );
  
      window.scrollTo({
        top: 0,
      });

      setPageArray(response.page)
      const data = response.histories
  
      if (isCategory) {
        setProductList(
          data.filter((i) => i.category === category[isCategory - 1].value)
        );
      } else {
        setProductList(data);
      }
    }
  };

  useEffect(() => {
    handleGetEquipHistory();
  }, [page, isCategory, dualDate]);

  return (
    <>
      {isAuth ? (
        <>
          <S.Wrap>
            <S.Title>기자재 통계</S.Title>
            <DualDatePicker firstInitial={-31} lastInitial={0} className="authHistory" />
          </S.Wrap>
          <S.RentalWrap>
            <S.FilterWrap className="mode">
              <Button
                className={isCategory ? "disable shadow" : "main shadow"}
                text="전체"
                padding="10px 21px"
                borderRadius="20px"
                onClick={handleCategory}
                value="0"
              />
              {category.map((item, index) => (
                <Button
                  value={index + 1}
                  key={index}
                  className={
                    isCategory === index + 1 ? `main shadow` : "disable shadow"
                  }
                  text={item.label}
                  padding="10px 21px"
                  borderRadius="20px"
                  onClick={handleCategory}
                />
              ))}
            </S.FilterWrap>
            <Image
              src={iconExcel}
              width="18px"
              height="18px"
              onClick={() => {
                setOnDownload(!onDownload);
              }}
            ></Image>
            {onDownload && (
              <S.DownloadModal className="download">
                <p onClick={handleDownloadXlsx}>엑셀 파일로 다운로드(.xlsx)</p>
                <p
                  onClick={() => {
                    setOnDownload(false);
                  }}
                >
                  <CSVLink data={productList} filename={dayjs().format("기자재통계_YYMMDD_HHmmss")}>
                    엑셀 파일로 다운로드(.csv)
                  </CSVLink>
                </p>
              </S.DownloadModal>
            )}

            <EquipStatistics data={productList} />
          </S.RentalWrap>
          <div>페이지</div>
        </>
      ) : (
        <>
          <S.Title> 내 대여 정보</S.Title>
          <S.RentalWrap>
            <h2>기자재 대여</h2>
            <UserState isEquip={true} />
            <h2>기자재 대여 이력</h2>
            <UserHist isEquip={true} />
          </S.RentalWrap>
        </>
      )}
    </>
  );
}
