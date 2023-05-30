import * as S from "./style";
import iconSearch from "../../assets/icon-search.svg";
import iconViewMode from "../../assets/icon-viewmode.svg"
import iconPlus from "../../assets/icon-plus.svg";
import Button from "../../modules/Button";
import EquipListWrap from "../../components/EquipListWrap";
import { useContext, useEffect, useState } from "react";
import { getProductList } from "../../api/api";
import { AuthContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import useModal from "../../hook/useModal";
import { category } from "../../data/category";
import SingularDatePicker from "../../components/DatePicker/SingularDatePicker";
import { useDispatch } from "react-redux";
import { resetEquip } from "../../store/reducer/modifyEquipSlice";
import Pagination from "../../components/Pagination";
import useTitle from "../../hook/useTitle";
import SVGIcon from "../../modules/SVGIcon";

export default function EquipmentList() {
  const [viewMode, setViewMode] = useState("gal");
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { isAuth } = useContext(AuthContext);
  const [isCategory, setIsCategory] = useState(0);
  const { Modal, open, close } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useTitle('기자재 조회')

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchKeyword.includes("\\")) alert("유효한 값을 입력하세요");
      else if (searchKeyword.length < 2) {
        setSearchKeyword("");
        open();
      } else {
        getProduct();
        setPage(0);
      }
    }
  };

  const handleCategory = (e) => {
    setIsCategory(parseInt(e.target.value));
    setPage(0);
  };

  const getProduct = async () => {
    const reqSize = isAuth ? "10" : viewMode === "gal" ? 16 : 10;
    const reqKeyword = searchKeyword ? `&keyword=${searchKeyword}` : "";
    const reqCategory = isCategory
      ? `&category=${category.filter((_, i) => i + 1 === isCategory)[0]?.value}`
      : "";

    const reqUrl = `size=${reqSize}&page=${page}${reqKeyword + reqCategory}`;
    const response = await getProductList(reqUrl);

    window.scrollTo({
      top: 0,
    });

    setPageArray(response.endPoints);
    setProductList(response.items);
  };

  useEffect(() => {
    getProduct();
    if (isAuth) setViewMode("list");
  }, [page, viewMode, isCategory, isAuth]);

  useEffect(() => {
    setPage(0);
  }, [viewMode])

  useEffect(() => {
    dispatch(resetEquip());
  }, [])

  return (
    <S.Wrapper>
      <S.FilterWrap>
        <S.FilterWrap>
          <S.SearchCont>
            <S.SearchInp
              type="text"
              value={searchKeyword}
              placeholder="카테고리, 기자재 명을 입력해주세요."
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={handleSearch}
            />
            <S.SearchImg onClick={handleSearch} src={iconSearch} alt="" />
          </S.SearchCont>
          <Modal>
            <p>최소 2자 이상의 검색어를 입력해주세요.</p>
            <Button
              text="확인"
              className="main"
              padding="10px 20px"
              borderRadius="5px"
              fontSize="14px"
              onClick={close}
              float="right"
            />
          </Modal>
          {!isAuth && <SingularDatePicker initial={1} />}
        </S.FilterWrap>
        {isAuth ? (
          <S.addBtn onClick={() => navigate("/equipment/add")}>
            <img src={iconPlus} alt="" />
            <p>기자재 추가</p>
          </S.addBtn>
        ) : (
          <S.FilterWrap>
            <S.TypeBtn aria-label="select gallery type" onClick={() => setViewMode("gal")}>
              <SVGIcon iconUrl={iconViewMode} id={viewMode === "gal" ? "icon-gal-on" : "icon-gal"} />
            </S.TypeBtn>
            <S.TypeBtn aria-label="select list type" onClick={() => setViewMode("list")}>
              <SVGIcon iconUrl={iconViewMode} id={viewMode === "list" ? "icon-list-on" : "icon-list"} />
            </S.TypeBtn>
          </S.FilterWrap>
        )}
      </S.FilterWrap>

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

      {productList && <EquipListWrap type={viewMode} data={productList} />}

      {pageArray && (
        <Pagination
          page={page}
          setPage={setPage}
          pageArray={pageArray}
        />
      )}
    </S.Wrapper>
  );
}
