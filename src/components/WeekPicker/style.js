import styled from "styled-components";

export const DateWrap = styled.div`
  display: flex;
  gap: 16px;
  border: 0.5px solid #e0e4e9;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const DateInp = styled.input`
  position: absolute;
  opacity: 0;
  width: 170px;
  padding: 5px 0;
  cursor: pointer;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const NextBtn = styled.button`
  color: #0e2b5a;
  font-size: 18px;
`;

export const DateImg = styled.img`
  width: 1rem;
  vertical-align: text-top;
  margin-right: 10px;
`

export const DateCont = styled.p`
  border: 1px solid #000000;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  line-height: normal;
  padding: 7px 0;
  width: 196px;
  text-align: center;
`;

export const DateUl = styled.ul`
  margin: 11px 0 45px;
  display: flex;
  gap: 16px;
`

export const DateLi = styled.li`
  width: 20%;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const DateTit = styled.p`
  text-align: center;
  padding: 20px 0;
  background-color: ${(props) => props.theme.color.primary.sub};
  border-radius: 10px 10px 0 0;
  border: .5px solid ${(props) => props.theme.color.primary.sub};
`;

export const DateSubTit = styled.p`
  text-align: center;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  border: 0.5px solid ${(props) => props.theme.color.primary.sub};
  font-size: 1.5rem;
  &.text {
    font-size: 1rem;
  }
  &.disabled {
    color: ${(props) => props.theme.color.primary.sub};
  }
`;