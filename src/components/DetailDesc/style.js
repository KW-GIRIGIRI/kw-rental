import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow-gray.svg";

export const Div = styled.div`
  width: 100%;
`;

export const ProductSpan = styled.span`
  color: ${(props) => props.theme.color.primary.main};
  font-size: 14px;
`;

export const ProductTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  padding-bottom: 20px;
  margin: 6px 0 30px;
`;

export const ProductLi = styled.li`
  margin-bottom: 15px;
  line-height: 180%;
  font-size: 14px;
  display: flex;
  & > p {
    min-width: 120px;
    line-height: 2;
  }
  & > span {
    color: ${(props) => props.theme.color.text.gray};
    word-break: keep-all;
  }
`;

export const CategoryDropdown = styled.select`
  padding: 5px 15px 5px 10px;
  text-align: center;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  color: ${(props) => props.theme.color.gray.g3};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.borderRadius.circle};
  background: url(${iconDownArrow}) 95% 50% no-repeat;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  &.place {
    width: 115px;
    text-align: left;
    padding: 5px 10px;
  }
`;

export const ProductOl = styled.ol`
  border-top: 1px solid ${(props) => props.theme.color.primary.sub};
  padding-top: 17px;
`;


export const DisabledInp = styled.input`
  color: ${props => props.theme.color.text.gray};
  border: none;
  background-color: inherit;
`