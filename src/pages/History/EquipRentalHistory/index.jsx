import * as S from "../style";
import UserState from "../../../components/UserState";
import UserHist from "../../../components/UserHist";
import Button from "../../../modules/Button";
import EquipStatistics from "../../../components/EquipStatistics";
import DualDatePicker from "../../../components/DatePicker/DualDatePicker";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/Context";
import { category } from "../../../data/category";
import Pagination from "../../../components/Pagination";
import ExcelDownload from "../../../components/ExcelDownload";
import useTitle from "../../../hook/useTitle";
import Image from "../../../modules/Image";
import iconExcel from "../../../assets/icon-excel.svg";

export default function EquipmentRentalHistory() {
  const [productList, setProductList] = useState([]);
  const { isAuth } = useContext(AuthContext);
  const [isCategory, setIsCategory] = useState(0);
  const [page, setPage] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [onDownload, setOnDownload] = useState(false);
  useTitle(isAuth ? "기자재 대여 통계" : "기자재 대여 이력");

  const handleCategory = (e) => {
    setIsCategory(parseInt(e.target.value));
    setPage(0);
  };

  return (
    <>
      {isAuth ? (
        <>
          <S.Wrap>
            <S.Title>기자재 통계</S.Title>
            <DualDatePicker
              firstInitial={-1}
              lastInitial={0}
              className="authHistory"
              initialMonth={true}
            />
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
            {!!productList.length && (
              <Image
                src={iconExcel}
                width="18px"
                height="18px"
                onClick={(e) => {
                  e.stopPropagation();
                  setOnDownload(true);
                }}
              />
            )}
            {onDownload && (
              <ExcelDownload
                setOnDownload={setOnDownload}
                productList={productList}
              />
            )}
            <EquipStatistics
              productList={productList}
              setProductList={setProductList}
              page={page}
              setPageArray={setPageArray}
              isCategory={isCategory}
            />
          </S.RentalWrap>
          {!!pageArray.length && (
            <Pagination page={page} setPage={setPage} pageArray={pageArray} />
          )}
        </>
      ) : (
        <>
          <S.Title> 내 대여 정보</S.Title>
          <S.RentalWrap>
            <h2>기자재 대여</h2>
            <UserState />
            <h2>기자재 대여 이력</h2>
            <UserHist />
          </S.RentalWrap>
        </>
      )}
    </>
  );
}
