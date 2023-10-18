import * as S from "./style";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { useLayoutEffect, useRef } from "react";

export default function ExcelDownload({ setOnDownload, productList }) {
  const dualDate = useSelector((state) => state.datePicker.dualDate);
  const modalRef = useRef();

  const handleClose = (e) => {
    if (!modalRef.current?.contains(e.target)) setOnDownload(false);
  };

  const handleDownloadXlsx = () => {
    setOnDownload(false);
    const totalData = handleFilterList();
    const xlsx = require("xlsx");
    const book = xlsx.utils.book_new();
    const data = xlsx.utils.json_to_sheet(totalData);
    xlsx.utils.book_append_sheet(book, data, "기자재 통계");
    xlsx.writeFile(
      book,
      `기자재통계_${dayjs(dualDate.firstDate).format("YYMMDD")}-${dayjs(
        dualDate.lastDate
      ).format("YYMMDD")}.xlsx`
    );
  };

  const handleFilterList = () => {
    const transformedArr = productList.map((item) => {
      const {
        category,
        modelName,
        propertyNumber,
        normalRentalCount,
        abnormalRentalCount,
      } = item;
      const totalRentalCount = normalRentalCount + abnormalRentalCount;

      return {
        카테고리: category,
        기자재명: modelName,
        품목: propertyNumber,
        "총 대여 수": totalRentalCount,
        "정상반납 수": normalRentalCount,
        "불량반납 수": abnormalRentalCount,
      };
    });
    return transformedArr;
  };

  useLayoutEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <S.DownloadModal ref={modalRef}>
      <p onClick={handleDownloadXlsx}>엑셀 파일로 다운로드(.xlsx)</p>
      <p
        onClick={() => {
          setOnDownload(false);
        }}
      >
        <CSVLink
          data={handleFilterList()}
          filename={`기자재통계_${dayjs(dualDate.firstDate).format(
            "YYMMDD"
          )}-${dayjs(dualDate.lastDate).format("YYMMDD")}`}
        >
          엑셀 파일로 다운로드(.csv)
        </CSVLink>
      </p>
    </S.DownloadModal>
  );
}
