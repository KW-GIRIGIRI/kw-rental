import * as S from "./style"
import { Wrapper, DetailWrapper, SubTitle } from "../EquipmentDetail/style"
import Button from "../../modules/Button"
import IconFileImg from "../../assets/icon-fileImg.svg"
import DetailDescInput from "../../components/DetailDesc/DetailDescInput"
import ItemManagerWrap from "../../components/ItemManagerWrap"
import iconFileImgWhite from "../../assets/icon-fileImg-white.svg"
import Textarea from "../../modules/Textarea"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import Image from "../../modules/Image"
import { addEquipment, getProductDetail, postImage } from "../../api/api"
import useModal from "../../hook/useModal"

export default function AddEquipment() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const [product, setProduct] = useState(null)
  const [imgFile, setImgFile] = useState('')
  const [imgPreview, setImgPreview] = useState('')
  const { Modal, open, close} = useModal()
  const addEqRef = useRef([])

  const handleGetProduct = async (id) => {
    const response = await getProductDetail(id);

    setProduct(response)
    setIsEdit(true)
  }

  const handleImgFile = async e => {
    const image = e.target.files[0]
    setImgPreview(URL.createObjectURL(image));

    const formData = new FormData()
    formData.append('file', image);

    const response = await postImage(formData)
    setImgFile(response)
  }

  const handleWriteCancel = () => {
    // 값이 있을 경우 modal open
    open()
  }

  const handleAddEquipment = async (e) => {
    const data = {
      equipment : { 
      rentalPlace : addEqRef.current?.rentalPlace.value,
      modelName : addEqRef.current?.modelName.value, 
      category : addEqRef.current?.category.value, 
      maker : addEqRef.current?.maker.value, 
      imgUrl :  imgFile, 
      components : addEqRef.current?.components.value,  
      purpose : addEqRef.current?.purpose.value, 
      description : addEqRef.current?.description.value, 
      maxRentalDays : addEqRef.current?.maxRentalDays.value, 
      // totalQuantity : addEqRef.current?.totalQuantity.value, // 품목 연결하고 수정
      totalQuantity : 1, 
    }, "items": [{
      propertyNumber : 16
      }]
    }
    
    const response = await addEquipment(JSON.stringify(data));
    // navigate(`/equipment/${response.split("/")[3]}`)
  }

  useEffect(() => {
    if (location.pathname.includes('edit')) handleGetProduct(location.state?.id)
  }, [])

  return (
    <Wrapper>
      <DetailWrapper>
        {
          isEdit || imgPreview ?
            <>
              <Image width="300px" height="300px" borderRadius={props => props.theme.borderRadius.lv2} src={product?.imgUrl ?? imgPreview} alt="" />
              <S.FileBtn>
                <img src={iconFileImgWhite} alt="" />
                <p>사진 변경</p>
                <input type="file" accept="image/*" ref={el => addEqRef.current.imgUrl = el} onChange={handleImgFile}/>
              </S.FileBtn>
            </>
            : <S.FileLabel>
              <img src={IconFileImg} alt="" />
              <p>사진 추가</p>
              <input type="file" accept="image/*" ref={el => addEqRef.current.imgUrl = el} onChange={handleImgFile} />
          </S.FileLabel>
        }
        <DetailDescInput product={product} ref={addEqRef} />
      </DetailWrapper>
      <SubTitle>안내사항</SubTitle>
      <Textarea maxLen="500" className="detailDesc" placeholder="안내사항을 작성해주세요." name="" id="" rows="6" count="500" defaultValue={product?.description} ref={el => addEqRef.current.description = el} />
      {
        isEdit ?
          <>
            <SubTitle>품목 수정 및 추가</SubTitle>
            <ItemManagerWrap />
          </>
          :
          <>
            <SubTitle>품목관리</SubTitle>
            <ItemManagerWrap />
          </>
      }
      <S.BtnWrap>
        <Button onClick={handleAddEquipment} className="main" text="저장하기" padding="15px 31px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0"/>
        <Button className="sub" text="취소하기" padding="15px 31px" borderRadius="10px" fontSize="15px" onClick={handleWriteCancel}/>
      </S.BtnWrap>
      <Modal>
        <p>작성중인 내용이 있습니다. 나가시겠습니까?</p>
        <div>
          <Button text='취소' className='sub' padding="11px 30px" borderRadius="5px" fontSize="14px" onClick={close} />
          <Button text='나가기'className='main' padding="11px 24px" borderRadius="5px" fontSize="14px" onClick={() => navigate('/equipment')} />
        </div>
      </Modal>
    </Wrapper>
  )
}
