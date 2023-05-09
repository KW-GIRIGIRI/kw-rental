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

export const DateCont = styled.label`
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 12px;
  box-sizing: border-box;
  width: 128px;

  & > span {
    font-size: 13px;
    pointer-events: none;
  }

  & > img {
    width: 14px;
    pointer-events: none;
    margin: 0 9px 3px 0;
  }
`;