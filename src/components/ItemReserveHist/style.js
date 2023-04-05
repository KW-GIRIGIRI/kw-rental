import styled from "styled-components";

export const Div = styled.div`
  position: relative;

  & div {
    box-sizing:border-box;
    width: 110px;
    height: 26px;
    padding: 4px 8px;
    margin-bottom: 14px;
    float: left;
    border: 1px solid ${props => props.theme.color.text.black};
    border-radius: ${props => props.theme.borderRadius.lv1};
    font-size: 14px;
    display: flex;
    align-items:center;
    text-align: center;
  }

  & span {
    float: left;
    margin: 0 10px;
  }
`

export const button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  clear:both;
`

export const img = styled.img`
  
`

export const DateInp = styled.input`
  position: absolute;
  opacity: 0;
  width: 128px;
  padding: 7px 0;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const DateCont = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.text.black};
  color: ${(props) => props.theme.color.text.black};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  width: 130px;
  height: 26px;
  & > span {
    font-size: 14px;
  }
  & > img {
    width: 16.5px;
    margin-left: 8px;
  }
  float: left;
  margin-bottom: 14px;
`;