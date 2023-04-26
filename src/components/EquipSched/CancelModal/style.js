import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-black.svg";
import iconCheckWhite from "../../../assets/icon-check-white.svg";
import iconCheckGray from "../../../assets/icon-check-gray.svg";

export const ProductUl = styled.ul`
  min-width: 380px;
  margin-bottom: 26px;
`;

export const ProductLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  padding: 7px 0;
  text-align: center;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  margin-top: -1px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: normal;

  &:first-of-type {
    background-color: ${(props) => props.theme.color.primary.sub};
  }

  & :nth-child(2),
  & :nth-child(3) {
    position: relative;
    &::before {
      content: "";
      background-color: ${(props) => props.theme.color.primary.sub};
      width: 1px;
      height: 30px;
      position: absolute;
      left: 0;
      bottom: -8px;
    }
  }

  & :nth-child(2)::before {
    left: 5px;
  }
`;

export const CheckInp = styled.input`
  appearance: none;
  width: 13px;
  margin: 0 auto;
  height: 13px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 2px solid ${(props) => props.theme.color.primary.main};
  background: url(${iconCheckGray}) no-repeat center / 80%;
  &.checked {
    background: url(${iconCheckWhite}) no-repeat center / 80%
      ${(props) => props.theme.color.primary.main};
  }
`;

export const StateDiv = styled.section`
  display: grid;
  font-size: 12px;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
  gap: 20px;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & > span {
    padding: 5px 0;
    width: max-content;
  }

`;

export const StateLi = styled.li`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;

  &:last-child {
    margin-bottom: 20px;
  }

  & > p {
    min-width: 95px;
    text-align: left;
  }
`;

export const Select = styled.select`
  font-size: 12px;
  padding: 3px 16px 3px 6px;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.text.black};
  appearance: none;
  background: url(${iconDownArrow}) no-repeat 95% 50%;
  border-radius: 3px;
`;

export const DetailInput = styled.input`
  border-radius: 3px;
  font-size: 12px;
  padding: 3px 8px;
  border: 1px solid ${(props) => props.theme.color.text.black};
  width: 100%;

  &::placeholder {
    font-size: 12px;
  }
`;

export const Email = styled.span`
  color: ${(props) => props.theme.color.primary.main};
  font-size: 12px;
`;

export const MailWrap = styled.div`
  position: relative;
  margin: 14px 0 30px;
  & > img {
    background-color: ${(props) => props.theme.color.primary.main};
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 7px;
    width: 12px;
    border-radius: ${props => props.theme.borderRadius.circle};
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2));
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  outline: none;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.lv2};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  font-family: inherit;
  padding: 12px 15px;
`;
