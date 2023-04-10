import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow.svg";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  font-size: 1rem;
  grid-template-columns: 1fr 2fr;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  margin-bottom: 55px;
`;

export const DescCont = styled.p`
  background-color: ${(props) => props.theme.color.primary.sub};
  padding: 20px 0;
  text-align: center;
  max-width: 316px;
  font-size: 14px;
`;

export const InpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Select = styled.select`
  width: 110px;
  max-width: 130px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #000;
  outline: none;
  padding: 3px 0;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  appearance: none;
  background: url(${iconDownArrow}) no-repeat right 8px top 50%;
  background-size: 10px;
`;

export const DateInp = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 115px;
  padding: 4px 0;
  cursor: pointer;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const DateImg = styled.img`
  width: 1rem;
  vertical-align: text-top;
  margin-right: 10px;
`;

export const DateCont = styled.label`
  position: relative;
  border: 1px solid #000000;
  font-size: 14px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  line-height: normal;
  padding: 5px 0;
  width: 120px;
  text-align: center;
`;