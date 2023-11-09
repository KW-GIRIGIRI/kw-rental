import { useRef } from "react";
import { useLocation } from "react-router-dom";
import * as S from "../style";
import { category } from "../../../data/category";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

const DetailDescInput = ({ itemLength }) => {
  const selectRef = useRef();
  const location = useLocation();
  const product = useSelector((state) => state.modifyEquip.equip);
  const {
    register,
    formState: { errors },
  } = useFormContext({ mode: "onBlur" });

  const handleSelectWidth = (e) => {
    e.target.style.padding = `5px ${
      selectRef.current.value.length + 10
    }px 5px ${selectRef.current.value.length + 5}px`;
  };

  return (
    <S.Div>
      <S.CategoryDropdown
        onChange={handleSelectWidth}
        className={errors.category ? "err" : ""}
        ref={selectRef}
        {...register("category")}
        name="category"
        id=""
        defaultValue={product?.category || "default"}
      >
        {location.pathname.includes("add") && (
          <option value="default" disabled hidden>
            카테고리
          </option>
        )}
        {category.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </S.CategoryDropdown>
      <S.Input
        className={errors.modelName ? "title err" : "title"}
        placeholder="기자재명을 입력하세요."
        {...register("modelName", { required: true })}
        defaultValue={product?.modelName}
      />
      <S.ProductOl>
        <S.ProductLi>
          <p>제조사</p>
          <S.Input
            className={errors.maker ? "err" : ""}
            placeholder="ex. SONY"
            {...register("maker", { required: true })}
            defaultValue={product?.maker}
          />
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <S.Textarea
            {...register("components")}
            id=""
            rows="3"
            placeholder="ex. 줌렌즈(18-105mm), 단렌즈(35mm), 전용 가방, 배터리&충전기"
            defaultValue={product?.components}
          />
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <S.Input
            {...register("purpose")}
            placeholder="ex. 사진 촬영, 동영상 촬영"
            defaultValue={product?.purpose}
            maxLength="100"
          />
        </S.ProductLi>
        <S.ProductLi>
          <p>총 개수</p>
          <p>{itemLength}</p>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <S.CategoryDropdown
            className="place"
            defaultValue="한울관"
            name="rentalPlace"
            id=""
          >
            <option value="한울관">한울관 B120호</option>
          </S.CategoryDropdown>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 가능일</p>
          <S.Input type="number"
            {...register("maxRentalDays")}
            placeholder="ex. 1"
            defaultValue={product?.maxRentalDays || 1}
          />
        </S.ProductLi>
      </S.ProductOl>
    </S.Div>
  );
};

export default DetailDescInput;
