import * as S from "./style";
import { Wrapper, DetailWrapper, SubTitle } from "../EquipmentDetail/style";
import Button from "../../modules/Button";
import IconFileImg from "../../assets/icon-fileImg.svg";
import DetailDescInput from "../../components/DetailDesc/DetailDescInput";
import ItemListWrap from "../../components/ItemListWrap";
import iconFileImgWhite from "../../assets/icon-fileImg-white.svg";
import Textarea from "../../modules/Textarea";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "../../modules/Image";
import {
  addEquipment,
  postImage,
  modifyEquipment,
  changeItems,
} from "../../api/api";
import useModal from "../../hook/useModal";
import { useDispatch, useSelector } from "react-redux";
import { resetEquip } from "../../store/reducer/modifyEquipSlice";
import { FormProvider, useForm } from "react-hook-form";
import useTitle from "../../hook/useTitle";
import usePreventRefresh from "../../hook/usePreventRefresh";

export default function AddEquipment() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const { Modal, open, close } = useModal();
  const addEqRef = useRef('');
  const [data, setData] = useState([]);
  const product = useSelector((state) => state.modifyEquip.equip);
  const item = useSelector((state) => state.modifyEquip.itemList);
  const dispatch = useDispatch()
  const methods = useForm()
  useTitle(location.pathname.includes('edit') ? '기자재 수정' : '기자재 추가')
  usePreventRefresh()

  const handleImgFile = async (e) => {
    const image = e.target.files[0];
    setImgPreview(URL.createObjectURL(image));

    const formData = new FormData();
    formData.append("file", image);

    const response = await postImage(formData);
    setImgFile(response);
  };
  
  const handleSetError = (name) => {
    if (!methods.watch(name) || (name === 'category' && methods.watch('category') === 'default'))
        methods.setError(name, { type: "focus" }, { shouldFocus: true })
    else methods.clearErrors(name)
  }

  const handleAddEquipment = async (e) => {
    e.preventDefault();

    handleSetError('modelName')
    handleSetError('maker')
    handleSetError('category')

    if (!imgFile.length) alert('이미지를 추가해주세요.')
    else {
      const item = [];
      data.map((i) => item.push({ propertyNumber: i.propertyNumber }));
  
      const sendData = {
        equipment: {
          imgUrl: imgFile,
          totalQuantity: item.length,
          category: methods.watch('category'),
          modelName: methods.watch('modelName'),
          components: methods.watch('components'),
          maker: methods.watch('maker'),
          purpose: methods.watch('purpose'),
          rentalPlace: '한울관 B120호',
          maxRentalDays: 1,
          description: addEqRef.current.value,
        },
        items: item,
      };
  
      const response = await addEquipment(JSON.stringify(sendData));

      if (response.includes('api')) navigate(`/equipment/${response.split("/")[3]}`);
      else if(response.includes('중복')) alert('기자재명과 자산번호는 다른 기자재와 중복이 불가능합니다.')
      else if (response.includes('addEquipmentWithItemsRequest')) alert('카테고리, 기자재 이미지, 기자재명, 제조사, 자산번호는 필수 입력값입니다.')
      else alert(response)
      dispatch(resetEquip())
    }
  };

  const handleModifyEquipment = async e => {
    e.preventDefault();

    handleSetError('modelName')
    handleSetError('maker')
    handleSetError('category')

    if (!product.imgUrl || !imgFile.length) alert('이미지를 추가해주세요.')
    else {
      const sendItem = [];
      data.map((i) =>
        sendItem.push({
          id: i.id,
          propertyNumber: i.propertyNumber,
        })
      );

      const itemData = {
        items: sendItem,
      };

      const sendData = {
        imgUrl: product.imgUrl || imgFile,
        totalQuantity: data.length,
        category: methods.watch('category'),
        modelName: methods.watch('modelName'),
        components: methods.watch('components'),
        maker: methods.watch('maker'),
        purpose: methods.watch('purpose'),
        rentalPlace: '한울관 B120호',
        description: addEqRef.current.value,
        maxRentalDays: 1,
      }

      if(item.items.length !== itemData.items.length) {
        const itemRes = await changeItems(params.id, JSON.stringify(itemData));
        const eqRes = await modifyEquipment(params.id, JSON.stringify(sendData));

        itemRes === 204 && eqRes && navigate(`/equipment/${eqRes.split("/")[3]}`);
      } else {
        const eqRes = await modifyEquipment(params.id, JSON.stringify(sendData));
        eqRes && navigate(`/equipment/${eqRes.split("/")[3]}`);
      }
    }
  };

  useLayoutEffect(() => {
    if (location.pathname.includes("edit")) {
      setImgFile(product?.imgUrl)
      setIsEdit(true)
    }
    else if (location.pathname.includes("add")) setIsEdit(false)
  }, []);

  return (
    <Wrapper>
      <DetailWrapper>
        {isEdit || imgPreview ? (
          <>
            <Image
              width="300px"
              height="300px"
              borderRadius={(props) => props.theme.borderRadius.lv2}
              src={imgPreview || product?.imgUrl}
              alt=""
            />
            <S.FileBtn>
              <img src={iconFileImgWhite} alt="" />
              <p>사진 변경</p>
              <input type="file" accept="image/*" onChange={handleImgFile} />
            </S.FileBtn>
          </>
        ) : (
          <S.FileLabel>
            <img src={IconFileImg} alt="" />
            <p>사진 추가</p>
            <input type="file" accept="image/*" onChange={handleImgFile} />
          </S.FileLabel>
        )}
        <FormProvider {...methods}>
          <DetailDescInput
            itemLength={data.length}
            />
        </FormProvider>
      </DetailWrapper>
      <SubTitle>안내사항</SubTitle>
      <Textarea
        maxLen="500"
        className="detailDesc"
        placeholder="안내사항을 작성해주세요."
        name="description"
        id=""
        rows="6"
        count="500"
        defaultValue={product?.description}
        ref={addEqRef}
      />
      {item && (
        isEdit ? (
          <>
            <SubTitle>품목 추가 및 삭제</SubTitle>
            {item && (
              <ItemListWrap
                data={data}
                setData={setData}
                item={item.items}
                isEdit={isEdit}
                isAdd={false}
              />
            )}
          </>
        ) : (
          <>
            <SubTitle>품목관리</SubTitle>
            <ItemListWrap
              data={data}
              setData={setData}
              isEdit={isEdit}
              isAdd={true}
            />
          </>
        )
      )}

      <S.BtnWrap>
        <Button
          onClick={isEdit ? handleModifyEquipment : handleAddEquipment}
          className="main"
          text={isEdit ? "저장하기" : "기자재 추가"}
          padding="15px 31px"
          borderRadius="10px"
          fontSize="15px"
          margin="0 13px 0 0"
        />
        <Button
          className="sub"
          text="취소하기"
          padding="15px 31px"
          borderRadius="10px"
          fontSize="15px"
          onClick={open}
        />
      </S.BtnWrap>
      <Modal>
        <p>작성중인 내용이 있습니다. 나가시겠습니까?</p>
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
            text="나가기"
            className="main"
            padding="11px 24px"
            borderRadius="5px"
            fontSize="14px"
            onClick={() => {
              navigate("/equipment");
              close();
            }}
          />
        </div>
      </Modal>
    </Wrapper>
  );
}
