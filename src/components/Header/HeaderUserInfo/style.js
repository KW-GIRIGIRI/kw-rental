import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const NotiIcon = styled.img`
  width: 23px;
`;

export const ClassNumP = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const CircleSpan = styled.span`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;
