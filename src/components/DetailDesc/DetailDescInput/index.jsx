import { forwardRef, useRef } from "react";
import { useLocation } from "react-router-dom";
import Input from "../../../modules/Input";
import Textarea from "../../../modules/Textarea";
import * as S from "../style";
import { category } from "../../../data/category";

const DetailDescInput = forwardRef(({isEdit, product, itemLength}, addEqRef) => {
  const selectRef = useRef()
  const location = useLocation()

  const handleSelectWidth = (e) => {
    e.target.style.padding = `5px ${selectRef.current.value.length + 10}px 5px ${selectRef.current.value.length + 5}px`
  }

  return (
    <S.Div>
      <S.CategoryDropdown
        onChange={handleSelectWidth} ref={(el)=> {selectRef.current = el; addEqRef.current[0] = el}} name="category" id="" defaultValue="default">
        {
          location.pathname.includes('add') && <option value='default' disabled hidden>카테고리</option>
        }
        {
          category.map((item, index) => 
            <option key={index} value={product?.category === item.value && item.value}>{item.label}</option>  
          )
        }
      </S.CategoryDropdown>
      <Input maxLen="50" className="title" placeholder="기자재명을 입력하세요." name="modelName" defaultValue={product?.modelName} ref={el => addEqRef.current[1] = el}  />
      <S.ProductOl>
        <S.ProductLi>
          <p>제조사</p>
          <Input maxLen="20" placeholder="ex. SONY" defaultValue={product?.maker} name="maker" ref={el => addEqRef.current[2] = el} />
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <Textarea maxLen="200" name="components" id="" rows="3" placeholder="ex. 줌렌즈(18-105mm), 단렌즈(35mm), 전용 가방, 배터리&충전기" defaultValue={product?.components} ref={el => addEqRef.current[3] = el} />
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <Input maxLen="100"  placeholder="ex. 사진 촬영, 동영상 촬영" defaultValue={product?.purpose} name="purpose" ref={el => addEqRef.current[4] = el}  />
        </S.ProductLi>
        <S.ProductLi>
          <p>총 개수</p>
          <p>{itemLength}</p>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <S.CategoryDropdown className="place" defaultValue="한울관" name="rentalPlace" id="" ref={el => addEqRef.current[5] = el}>
            <option value="한울관">한울관 B119호</option>
          </S.CategoryDropdown>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 가능일</p>
          <Input name="maxRentalDays" maxLen="5" placeholder="ex. 1" defaultValue={product?.maxRentalDays} ref={el => addEqRef.current[6] = el}/>
        </S.ProductLi>
      </S.ProductOl>
    </S.Div>
  )
})

export default DetailDescInput