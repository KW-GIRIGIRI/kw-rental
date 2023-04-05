import styled from "styled-components";

export const ToSWrap = styled.ul`
  height: 82px;
  padding: 13px 26px;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  margin-bottom: 15px;
  overflow: scroll;
  overflow-x: hidden;
`;

export const ToSText = styled.li`
  list-style: disc;
  margin-left: 15px;
  font-size: 14px;
  color: ${props => props.theme.color.text.black};
  line-height: 17px;
`;

export const AgreeWrap = styled.div`
  align-content: right;
  float: right;
  display: flex;
  align-items:center;
  & > span {
    font-size: 14px;
  }
`

export const Check = styled.input`
  /* display: none; */

  &:checked + label{
    padding-left: 23px; 
    background-repeat: no-repeat;
    background-image: url(${props => props.on});
  }
`

export const Label = styled.label`
  padding-left: 23px; 
  background-repeat: no-repeat;
  background-image: url(${props => props.off});
`

export const Exclam = styled.div`
  margin-top:10px;
  float:right;

  & > span {
    margin-left: 7px;
    font-size: 11px;
    color: ${props => props.theme.color.primary.main};
  }

  display: flex;
  align-items: center;
`

export const Empty = styled.div`
  height: 26px;
`