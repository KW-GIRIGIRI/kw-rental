import styled from "styled-components";

export const Section = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 30px;
`;