import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${props => props.theme.borderRadius.lv2};
  padding: 35px 18px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
`

export const DateInp = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 128px;
  padding: 7px 0;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const DateCont = styled.label`
  margin-left: 12px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  box-sizing: border-box;
  width: 128px;
  & > span {
    font-size: 13px;
  }
  & > img {
    width: 14px;
    margin: 0 9px 3px 0;
  }
`;