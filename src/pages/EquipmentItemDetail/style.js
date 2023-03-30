import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow-black.svg";

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 20px 45px;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div > button {
    &:first-of-type {
      color: ${(props) => props.theme.color.primary.main};
    }
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

export const SimpleDesc = styled.div`
  font-size: 13px;
  margin-left: -25px;
  & > span:not(:last-child)::after {
    content: " > ";
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 40px 0 25px;
  margin-bottom: 25px;
  display: inline-block;
`;

export const SelectItem = styled.select`
  display: inline-block;
  width: 98px;
  padding: 5px 0;
  text-align: center;
  outline: none;
  border: none;
  background: url(${iconDownArrow}) 95% 50% no-repeat;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;