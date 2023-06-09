import * as S from "./style"
import iconExcel from "../../assets/icon-excel.svg"
import dayjs from "dayjs"
import { CSVLink } from "react-csv"
import Image from "../../modules/Image"
import { useSelector } from "react-redux"

export default function ExcelDownload({ onDownload, setOnDownload, productList }) {
  const dualDate = useSelector((state) => state.datePicker.dualDate)

  const handleDownloadXlsx = () => {
    const totalData = handleFilterList()
    const xlsx = require("xlsx")
    const book = xlsx.utils.book_new()
    const data = xlsx.utils.json_to_sheet(totalData)
    xlsx.utils.book_append_sheet(book, data, "기자재 통계")
    xlsx.writeFile(
      book,
      `기자재통계_${dayjs(dualDate.firstDate).format('YYMMDD')}-${dayjs(dualDate.lastDate).format('YYMMDD')}.xlsx` 
    )
  }

  const handleFilterList = () => {
    const transformedArr = productList.map(item => {
      const { category, modelName, propertyNumber, normalRentalCount, abnormalRentalCount } = item;
      const totalRentalCount = normalRentalCount + abnormalRentalCount;

      return {
        카테고리: category,
        기자재명: modelName,
        품목: propertyNumber,
        '총 대여 수': totalRentalCount,
        정상반납수: normalRentalCount,
        불량반납수: abnormalRentalCount,
      };
    });
    return transformedArr;
  }

  return (
    !!productList.length &&
    <>
      <Image
        src={iconExcel}
        width="18px"
        height="18px"
        onClick={() => setOnDownload(!onDownload)}
      />
      {onDownload && (
        <S.DownloadModal className="download">
          <p onClick={handleDownloadXlsx}>
            엑셀 파일로 다운로드(.xlsx)
          </p>
          <p onClick={() => { setOnDownload(false) }}>
            <CSVLink data={handleFilterList()} filename={`기자재통계_${dayjs(dualDate.firstDate).format('YYMMDD')}-${dayjs(dualDate.lastDate).format('YYMMDD')}`}>
              엑셀 파일로 다운로드(.csv)
            </CSVLink>
          </p>
        </S.DownloadModal>
      )}
    </>
  )
}