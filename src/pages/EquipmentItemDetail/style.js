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

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px;
`

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
`;

export const SelectItem = styled.select`
  width: 160px;
  padding: 5px 0;
  text-align: center;
  outline: none;
  border: none;
  background: url(${iconDownArrow}) 95% 50% no-repeat;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const ItemNumDiv = styled.div`
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  background: ${props => props.theme.color.primary.sub};
  border: 1px solid ${props => props.theme.color.gray.g3};
  border-radius: ${props => props.theme.borderRadius.lv1};
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 15px;
    color: ${props => props.theme.color.gray.g5};
  }
`;

export const numEditBtn = styled.button`
  margin-left: 10px;
  width: 30px;
  height: 20px;
  background: ${props => props.theme.color.primary.main};
  color: ${props => props.theme.color.text.white};
  border-radius: ${props => props.theme.borderRadius.lv1};
  font-size: 12px;

  & > p {
    line-height: 20px;
  }
`

// export const Input = styled.input`
//   width: 150px;
//   font-size: 15px;
//   text-align: center;
//   border-radius: 5px;
//   -moz-appearance: textfield;
//   border: 1px solid ${(props) => props.theme.color.gray.g3};
//   padding: 6px 0;

//   &::-webkit-outer-spin-button,
//   ::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &::placeholder {
//     text-align: center;
//   }

//   &:disabled {
//     background-color: ${(props) => props.theme.color.primary.sub};
//     color: ${(props) => props.theme.color.gray.g5};
//   }
// `;