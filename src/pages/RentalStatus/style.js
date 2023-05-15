import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 18px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 23px;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
