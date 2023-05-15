import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow.svg";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Form = styled.div`
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
