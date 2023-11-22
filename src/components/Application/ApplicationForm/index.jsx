import * as S from "./style";
import iconExclamation from "../../../assets/icon-exclamation-circle.svg";
import Input from "../../../modules/Input";
import { TextareaStyle } from "../../../modules/Textarea/style";
import useInput from "../../../hook/useInput";
import { useEffect, useLayoutEffect, useState } from "react";
import { forwardRef } from "react";
import { getLabRemainQuantities, getUserInfo } from "../../../api/api";
import { useSelector } from "react-redux";

const ApplicationForm = forwardRef((props, dataRef) => {
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const purposeInp = useInput("");
  const [renterCount, setRenterCount] = useState(10);
  const hanul = useSelector((state) => state.labControl.lab);
  const selectDate = useSelector((state) => state.labControl.date);

  const handleGetLabRemain = async () => {
    const lab = hanul ? "hanul" : "hwado";
    const res = await getLabRemainQuantities(lab, selectDate, selectDate);

    if (hanul && res.remainQuantities[0].remainQuantity < 10)
      setRenterCount(res.remainQuantities[0].remainQuantity);
  };

  const handleGetUserInfo = async () => {
    const res = await getUserInfo();
    setUser((prev) => {
      return {
        ...prev,
        name: res.name,
        phoneNumber: res.phoneNumber,
        email: res.email,
      };
    });
  };

  useLayoutEffect(() => {
    purposeInp.value.trim().length > 10 ? setVisible(false) : setVisible(true);
  }, [purposeInp]);

  useEffect(() => {
    handleGetUserInfo();
    props.isLab && handleGetLabRemain();
  }, []);

  return (
    <>
      <S.FormWrap>
        <S.Info>
          <S.LiWrap>
            <S.FormLi>이름</S.FormLi>
            <S.P ref={(el) => (dataRef.current.name = el)}>{user.name}</S.P>
          </S.LiWrap>
          <S.LiWrap>
            <S.FormLi>연락처</S.FormLi>
            <Input
              defaultValue={user.phoneNumber}
              ref={(el) => (dataRef.current.pNumber = el)}
              className="rentalUser"
              maxLen="11"
            />
          </S.LiWrap>
          <S.LiWrap>
            <S.FormLi>이메일</S.FormLi>
            <Input
              defaultValue={user.email.split("@")[0]}
              className="rentalUser"
              maxLen="30"
              ref={(el) => (dataRef.current.id = el)}
            />
            <span>@</span>
            <Input
              defaultValue={user.email.split("@")[1]}
              className="rentalUser"
              maxLen="30"
              ref={(el) => (dataRef.current.address = el)}
            />
          </S.LiWrap>
        </S.Info>
        <S.Purpose>
          <S.FormLi>대여 목적</S.FormLi>
          <S.TextareaWrap>
            <TextareaStyle
              {...purposeInp}
              ref={(el) => (dataRef.current.purpose = el)}
              placeholder="대여목적, 대여시간, 반납시간을 반드시 적어주세요. *운영시간 확인 필수&#13;&#10;예시) 대여목적: 전공수업 팀프로젝트를 위해 필요 / 대여시간(12:00) / 반납시간(16:30)"
              rows="4"
              maxLength="50"
            ></TextareaStyle>
            {visible ? (
              <S.Exclam>
                <img src={iconExclamation} alt="" />
                <span>구체적으로 작성해주세요.</span>
              </S.Exclam>
            ) : (
              <></>
            )}
          </S.TextareaWrap>
        </S.Purpose>
        {props.isLab && (
          <S.Lab>
            <S.FormLi>대여 인원</S.FormLi>
            <select ref={(el) => (dataRef.current.renterCount = el)}>
              {Array(renterCount)
                .fill()
                .map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
            </select>
          </S.Lab>
        )}
      </S.FormWrap>
    </>
  );
});

export default ApplicationForm;
