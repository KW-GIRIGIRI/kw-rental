import { forwardRef, useRef } from "react";
import { useLocation } from "react-router-dom";
import Input from "../../../modules/Input";
import Textarea from "../../../modules/Textarea";
import * as S from "../style";

const category = [
// 응답값, value 비교하여 default 설정
  { value: "CAMERA", label: "카메라" },
  { value: "RECORDING", label: "녹음 장비" },
  { value: "FILMING_ASSIST", label: "촬영보조 장비" },
  { value: "VR", label: "VR 장비" },
  { value: "ETC", label: "기타" },
];

const DetailDescInput = forwardRef(({product}, addEqRef) => {
  const selectRef = useRef()
  const location = useLocation()

  const handleSelectWidth = (e) => {
    e.target.style.padding = `5px ${selectRef.current.value.length * 3}px 5px ${selectRef.current.value.length * 2}px`
  }

  return (
    <S.Div>
      <S.CategoryDropdown
        onChange={handleSelectWidth} ref={(el)=> {selectRef.current = el; addEqRef.current.category = el}} name="" id="" defaultValue="default">
        {
          location.pathname.includes('add') && <option value='default' disabled hidden>카테고리</option>
        }
        {
          category.map((item, index) => 
            <option key={index} value={product?.category === item.value ? 'default' : item.value}>{item.label}</option>  
          )
        }
      </S.CategoryDropdown>
      <Input maxLen="50" className="title" placeholder="기자재명을 입력하세요." defaultValue={product?.modelName } ref={el => addEqRef.current.modelName = el}  />
      <S.ProductOl>
        <S.ProductLi>
          <p>제조사</p>
          <Input maxLen="20" placeholder="ex. SONY" defaultValue={product?.maker} ref={el => addEqRef.current.maker = el} />
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <Textarea maxLen="200" name="" id="" rows="3" placeholder="ex. 줌렌즈(18-105mm), 단렌즈(35mm), 전용 가방, 배터리&충전기" defaultValue={product?.components} ref={el => addEqRef.current.components = el} />
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <Input maxLen="100"  placeholder="ex. 사진 촬영, 동영상 촬영" defaultValue={product?.purpose} ref={el => addEqRef.current.purpose = el}  />
        </S.ProductLi>
        <S.ProductLi>
          <p>총 개수</p>
          <span ref={el => addEqRef.current.totalQuantity = el}>{product?.totalQuantity || 0}</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <S.CategoryDropdown className="place" defaultValue="한울관" name="" id="" ref={el => addEqRef.current.rentalPlace = el}>
            <option value="한울관">한울관 B119호</option>
          </S.CategoryDropdown>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 가능일</p>
          <Input maxLen="5" placeholder="ex. 1" defaultValue={product?.maxRentalDays} ref={el => addEqRef.current.maxRentalDays = el}/>
        </S.ProductLi>
      </S.ProductOl>
    </S.Div>
  )
})

export default DetailDescInput