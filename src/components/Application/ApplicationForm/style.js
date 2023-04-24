import styled from "styled-components";

export const FormWrap = styled.ul`
  height: 82px;
  margin-bottom: 15px;

  P, Input, Textarea {
      box-sizing: border-box;
      border-radius: ${props => props.theme.borderRadius.lv1};
      border: 1px solid ${props => props.theme.color.gray.g3};
      color: ${props => props.theme.color.gray.g3};
  }

  span {
    margin: 0 6px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const Purpose = styled.div`
  width: 100%;
  display: flex;
  & > li {
    margin-right: 20px;
    flex-basis: 100px;
  }
`

export const LiWrap = styled.div`
  display: flex;
  align-items: center;
`

export const FormLi = styled.li`
  list-style: disc;
  list-style-position: inside;
  font-size: 14px;
  color: ${(props) => props.theme.color.text.black};
  line-height: 17px;
  margin-right: 33px;
`;

export const P = styled.p`
  width: 115px;
  height: 27px;
  font-size: 14px;
  color: ${props => props.theme.color.gray.g3};
  background: ${props => props.theme.color.primary.sub};
  display: flex;
  justify-content:center;
  align-items:center;
`

export const Exclam = styled.div`
  margin-top:10px;

  & > span {
    margin-left: 7px;
    font-size: 11px;
    color: ${props => props.theme.color.primary.main};
  }

  display: flex;
  align-items: center;
`

export const TextareaWrap = styled.div`
  width: 100%;
`