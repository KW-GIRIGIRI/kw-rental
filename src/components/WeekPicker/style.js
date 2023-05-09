import styled from "styled-components";

export const DateWrap = styled.div`
  display: flex;
  gap: 16px;
  border: 0.5px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.modify ? "3px 0" : "6px 0")};
`;

export const DateInp = styled.input`
  position: absolute;
  opacity: 0;
  width: ${(props) => (props.modify ? "120px" : "162px")};
  padding: 5px 0;
  cursor: pointer;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const NextBtn = styled.button`
  color: #0e2b5a;
  font-size: 18px;
  & > img {
    margin-top: 4px;
    width: ${(props) => (props.modify ? "8px" : "10px")};
  }
`;

export const DateImg = styled.img`
  width: ${(props) => (props.modify ? "12px" : "1rem")};
  vertical-align: text-top;
  pointer-events: none;
  margin-right: 8px;
`;

export const DateCont = styled.p`
  border: 1px solid #000000;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  line-height: normal;
  padding: ${(props) => (props.modify ? "3px 0" : "5px 0")};
  width: ${(props) => (props.modify ? "120px" : "162px")};
  font-weight: 500;
  font-size: ${(props) => (props.modify ? "12px" : "14px")};
  text-align: center;

  & > span {
    pointer-events: none;
  }
`;

export const DateUl = styled.ul`
  margin: ${(props) => (props.modify ? "11px 0 27px" : "11px 0 45px")};
  display: flex;
  gap: 12px;
`;

export const DateLi = styled.li`
  width: ${(props) => (props.modify ? "25%" : "20%")};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const DateTit = styled.p`
  text-align: center;
  padding: ${(props) => (props.modify ? "14px 0" : "16px 0")};
  font-size: ${(props) => (props.modify ? "12px" : "14px")};
  background-color: ${(props) => props.theme.color.primary.sub};
  border-radius: 10px 10px 0 0;
  border: 0.5px solid ${(props) => props.theme.color.primary.sub};
`;

export const DateSubTit = styled.p`
  text-align: center;
  height: ${(props) => (props.modify ? "48px" : "84px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  border: 0.5px solid ${(props) => props.theme.color.primary.sub};
  font-size: ${(props) => (props.modify ? "14px" : "1.2rem")};
  &.text {
    font-size: 14px;
  }
  &.disabled {
    color: ${(props) => props.theme.color.primary.sub};
  }
`;