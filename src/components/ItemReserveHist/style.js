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
`

export const img = styled.img`
  
`