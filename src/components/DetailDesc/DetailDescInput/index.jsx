import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Input from "../../../modules/Input";
import Textarea from "../../../modules/Textarea";
import * as S from "../style";

export default function DetailDescInput({product}) {
  const selectRef = useRef()
  const location = useLocation()

  const category = [
  // 응답값, value 비교하여 default 설정
    { value: "CAMERA", label: "카메라" },
    { value: "RECORDING", label: "녹음 장비" },
    { value: "FILMING_ASSIST", label: "촬영보조 장비" },
    { value: "VR", label: "VR 장비" },
    { value: "ETC", label: "기타" },
  ];
  
  const handleSelectWidth = (e) => {
    e.target.style.padding = `5px ${selectRef.current.value.length * 4}px 5px ${selectRef.current.value.length * 3}px`
  }

  return (
    <S.Div>
      <S.CategoryDropdown
        onChange={handleSelectWidth} ref={selectRef} name="" id="" defaultValue="default">
        {
          location.pathname.includes('add') && <option value='default' disabled hidden>카테고리</option>
        }
        {
          category.map((item, index) => 
            <option key={index} value={product?.category === item.value ? 'default' : item.value}>{item.label}</option>  
          )
        }
      </S.CategoryDropdown>
      <Input maxLen="50" className="title" placeholder="기자재명을 입력하세요." defaultValue={product?.modelName }  />
      <S.ProductOl>
        <S.ProductLi>
          <p>제조사</p>
          <Input maxLen="20" placeholder="ex. SONY" defaultValue={product?.maker} />
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <Textarea maxLen="200" name="" id="" rows="3" placeholder="ex. 줌렌즈(18-105mm), 단렌즈(35mm), 전용 가방, 배터리&충전기" defaultValue={product?.components}  />
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <Input maxLen="100"  placeholder="ex. 사진 촬영, 동영상 촬영" defaultValue={product?.purpose}  />
        </S.ProductLi>
        <S.ProductLi>
          <p>총 개수</p>
          <span>{product?.totalQuantity || 0} 대</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <S.CategoryDropdown className="place" name="" id="">
            <option value="">한울관 B119호</option>
          </S.CategoryDropdown>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 가능일</p>
          <Input maxLen="5" placeholder="ex. 1" defaultValue={product?.maxRentalDays} />
        </S.ProductLi>
      </S.ProductOl>
    </S.Div>
  )
}
