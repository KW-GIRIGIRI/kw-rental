import styled, { css } from "styled-components";
import iconCheckWhite from "../../assets/icon-check-white.svg";
import iconCheckGray from "../../assets/icon-check-gray.svg";

export const Wrap = styled.section`
  background-color: #ffffff;
  margin: 0 auto;
  width: 460px;
  padding: 27px 29px 36px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv2};

  & > h2 {
    color: ${(props) => props.theme.color.primary.main};
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  & > input {
    border: 1px solid ${(props) => props.theme.color.gray.g4};
    padding: 15px 20px;
    font-size: 15px;
    border-radius: 0 0 10px 10px;

    &:first-of-type {
      border-radius: 10px 10px 0 0;
      margin-bottom: -1px;
    }

    &::placeholder {
      color: ${(props) => props.theme.color.primary.third};
      font-size: 15px;
    }
  }
`;

export const PwImg = styled.img`
  position: absolute;
  width: 18px;
  right: 16px;
  bottom: ${(props) => props.bottom};
`;

export const CheckInp = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 2px solid ${(props) => props.theme.color.primary.main};
  background: url(${iconCheckGray}) no-repeat center / 80%;
  &:checked {
    background: url(${iconCheckWhite}) no-repeat center / 80%
      ${(props) => props.theme.color.primary.main};
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px 0 20px;
  font-size: 15px;
  line-height: 1;
  color: ${(props) => props.theme.color.primary.third};
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 13px;
  justify-content: center;
  font-size: 14px;
  color: ${(props) => props.theme.color.primary.main};
  
  & > span { 
    position: relative;
    padding: 5px 10px;

    &:first-of-type::after{
      content: "";
      width: 1.8px;
      height: 13px;
      position: absolute;
      right: -5px;
      top: 0;
      transform: translateY(40%);
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
`;

export const Policy = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.color.primary.third};
  margin-top: 30px;
`;