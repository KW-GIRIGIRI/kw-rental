import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEquipment, getProductDetail, getItemList } from "../../api/api";
import AddCartEquip from "../../components/AddCartEquip";
import DetailDesc from "../../components/DetailDesc";
import WeekPicker from "../../components/WeekPicker";
import ItemListWrap from "../../components/ItemListWrap";
import { AuthContext } from "../../context/Context";
import Button from "../../modules/Button";
import Image from "../../modules/Image";
import { BtnWrap } from "../AddEquipment/style";
import * as S from "./style";
import useModal from "../../hook/useModal";
import { category } from "../../data/category";
import ItemCalendar from "../../components/ItemCalendar";
import { useDispatch, useSelector } from "react-redux";
import {
  resetEquip,
  setEquip,
  setItemList,
} from "../../store/reducer/modifyEquipSlice";
import useTitle from "../../hook/useTitle";

export default function EquipmentDetail() {
  const params = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const { Modal, open, close } = useModal();
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.modifyEquip.equip);
  const titleUpdater = useTitle("Loading...")

  useEffect(() => {
    if (product.modelName) {
      let timer = setTimeout(() => titleUpdater(`${product.modelName}`), 200)

      return (() => {
        clearTimeout(timer);
      })
    }
  }, [product])

  const getProduct = async () => {
    const response = await getProductDetail(params.id);
    dispatch(setEquip(response));
  };

  const getItem = async () => {
    const response = await getItemList(params.id);
    dispatch(setItemList(response));

    setItem(response);
  };

  const handleDeleteProduct = async () => {
    const response = await deleteEquipment(params.id);
    if (response === 204) {
      close()
      navigate("/equipment")
    } else {
      close()
      alert('잠시 후 다시 시도해주세요.')
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    dispatch(resetEquip());
    getProduct();
    getItem();
  }, []);

  useEffect(() => {
    setItem(data);
  }, [data]);

  return (
    <S.Wrapper>
      {product && (
        <>
          <S.NavDiv>
            <S.SimpleDesc>
              <span onClick={() => navigate('/equipment')}>기자재 조회</span>
              <span>
                {category.map(
                  (value) => value.value === product.category && value.label
                )}
              </span>
              <span>{product.modelName}</span>
            </S.SimpleDesc>
            {isAuth ? (
              <div>
                <button onClick={() => navigate(`/equipment/${params.id}/edit`)}>
                  수정
                </button>
                <button onClick={() => open()}>삭제</button>
              </div>
            ) : (
              <></>
            )}
            <Modal>
              <p>정말 삭제하시겠습니까?</p>
              <div>
                <Button
                  text="취소"
                  className="sub"
                  padding="11px 30px"
                  borderRadius="5px"
                  fontSize="14px"
                  onClick={close}
                />
                <Button
                  text="삭제"
                  className="main"
                  padding="11px 30px"
                  borderRadius="5px"
                  fontSize="14px"
                  onClick={handleDeleteProduct}
                />
              </div>
            </Modal>
          </S.NavDiv>
          <S.DetailWrapper>
            <Image
              width="300px"
              height="300px"
              borderRadius={(props) => props.theme.borderRadius.lv2}
              src={product.imgUrl}
              alt=""
            />
            <DetailDesc />
          </S.DetailWrapper>
          <S.SubTitle>안내사항</S.SubTitle>
          <S.NoticeWrap>
            <S.NoticeText>{product.description}</S.NoticeText>
          </S.NoticeWrap>
          {isAuth ? (
            <>
              <S.SubTitle>품목 대여 현황</S.SubTitle>
              <ItemCalendar equipId={params.id} />
              <S.SubTitle>품목 관리</S.SubTitle>
              {item ? (
                <ItemListWrap
                  data={data}
                  setData={setData}
                  item={item.items}
                  isEdit={false}
                />
              ) : (
                <div>loading...</div>
              )}
              <BtnWrap>
                <Button
                  onClick={() => navigate(-1)}
                  className="sub"
                  text="뒤로 가기"
                  margin="120px 0 30px"
                  padding="15px 23px"
                  borderRadius="10px"
                  fontSize="15px"
                />
              </BtnWrap>
            </>
          ) : (
            <>
              <S.SubTitle>대여 현황</S.SubTitle>
              <WeekPicker />
              <S.SubTitle>기자재 담기</S.SubTitle>
              <AddCartEquip />
            </>
          )}
        </>
      )}
    </S.Wrapper>
  );
}
