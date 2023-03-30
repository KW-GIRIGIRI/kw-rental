import { useRef } from "react";
import Input from "../../../modules/Input";
import Textarea from "../../../modules/Textarea";
import * as S from "../style";

export default function DetailDescInput() {
  const selectRef = useRef()

  const product = {
    category: 'camera',
    modelName: 'DSLR SONY 6600',
    maker: "SONY",
    components: '줌렌즈, 단렌즈 20mm, 충전기 포함',
    purpose: '동영상 촬영',
    rentalQuantity: {
      totalQuantity: 10
    },
    rentalPlace: '한울관 B119호'
  }
  
 const category = [
    { value: "카메라", label: "카메라" },
    { value: "녹음 장비", label: "녹음 장비" },
    { value: "촬영보조 장비", label: "촬영보조 장비" },
    { value: "VR 장비", label: "VR 장비" },
    { value: "기타", label: "기타" },
 ];
  
  const handleSelectWidth = (e) => {
    e.target.style.padding = `5px ${selectRef.current.value.length * 4}px 5px ${selectRef.current.value.length * 3}px`
  }
  
  return (
    <S.Div>
      <S.CategoryDropdown
        onChange={handleSelectWidth} ref={selectRef} name="" id="" defaultValue="default">
        <option value="default" disabled hidden>카테고리</option>
        {
          category.map((item, index) => 
            <option key={index} value={item.value}>{item.value}</option>  
          )
        }
      </S.CategoryDropdown>
      <Input maxLen="50" className="title" placeholder="기자재명을 입력하세요." />
      <S.ProductOl>
        <S.ProductLi>
          <p>제조사</p>
          <Input maxLen="20"  placeholder="ex. SONY" />
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <Textarea  maxLen="200"  name="" id="" rows="3" placeholder="ex. 줌렌즈(18-105mm), 단렌즈(35mm), 전용 가방, 배터리&충전기" />
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <Input maxLen="100"  placeholder="ex. 사진 촬영, 동영상 촬영" />
        </S.ProductLi>
        <S.ProductLi>
          <p>총 개수</p>
          <span>{product.rentalQuantity.totalQuantity}대</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <S.CategoryDropdown className="place" name="" id="">
            <option value="">한울관 B119호</option>
          </S.CategoryDropdown>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 가능일</p>
          <Input maxLen="5" placeholder="ex. 1" />
        </S.ProductLi>
      </S.ProductOl>
    </S.Div>
  )
}
