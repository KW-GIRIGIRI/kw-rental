import * as S from "./style"
import iconExcel from "../../assets/icon-excel.svg"
import dayjs from "dayjs"
import { CSVLink } from "react-csv"
import Image from "../../modules/Image"

export default function ExcelDownload({ onDownload, setOnDownload, productList }) {
  const handleDownloadXlsx = () => {
    const xlsx = require("xlsx")
    const book = xlsx.utils.book_new()
    const data = xlsx.utils.json_to_sheet(productList)
    xlsx.utils.book_append_sheet(book, data, "기자재 통계")
    xlsx.writeFile(
      book,
      dayjs().format("기자재통계_YYMMDD_HHmmss") + ".xlsx"
    )
  }

  return (
    <>
      <Image
        src={iconExcel}
        width="18px"
        height="18px"
        onClick={() => {
          setOnDownload(!onDownload)
        }}
      ></Image>
      {onDownload && (
        <S.DownloadModal className="download">
          <p onClick={handleDownloadXlsx}>
            엑셀 파일로 다운로드(.xlsx)
          </p>
          <p onClick={() => { setOnDownload(false) }}>
            <CSVLink data={productList} filename={dayjs().format("기자재통계_YYMMDD_HHmmss")}>
              엑셀 파일로 다운로드(.csv)
            </CSVLink>
          </p>
        </S.DownloadModal>
      )}
    </>
  )
}