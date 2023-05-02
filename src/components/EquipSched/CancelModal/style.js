import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-black.svg";

export const Span = styled.span`
  margin-bottom: 10px;
  display: block;
  font-size: 13px;
`;

export const ProductUl = styled.ul`
  min-width: 380px;
  margin-bottom: 26px;
`;

export const ProductLi = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  text-align: center;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  margin-top: -1px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: normal;

  &:first-of-type {
    background-color: ${(props) => props.theme.color.primary.sub};
  }

  & > p {
    padding: 7px 0;
  }

  & :first-child {
    position: relative;
    &::after {
      content: "";
      background-color: ${(props) => props.theme.color.primary.sub};
      width: 1px;
      height: 28px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;

export const Select = styled.select`
  font-size: 12px;
  width: 50px;
  height: 20px;
  text-align: center;
  margin: auto;
  padding: 0 16px 0 6px;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.text.black};
  appearance: none;
  background: url(${iconDownArrow}) no-repeat 95% 50%;
  border-radius: 3px;
`;
