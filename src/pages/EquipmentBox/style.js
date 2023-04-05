import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 20px 18px 50px;
`;

export const SimpleDesc = styled.div`
  font-size: 13px;
  margin-bottom: 29px;
  & > span:not(:last-child)::after {
    content: " > ";
  }
  & :first-child {
    color: ${(props) => props.theme.color.primary.main};
    font-weight: 600;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const MainBtnWrap = styled.div`
  text-align: center;
  margin-top: 50px;
`