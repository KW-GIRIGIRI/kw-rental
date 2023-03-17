import styled from "styled-components";

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
`;

export const InpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Select = styled.select`
  width: 30%;
  max-width: 130px;
  text-align: center;
  border: 1px solid #000;
  padding: 5px 0;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
`;

export const DateInp = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 130px;
  padding: 5px 0;
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
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  line-height: normal;
  padding: 7px 0;
  width: 130px;
  text-align: center;
`;