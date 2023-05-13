import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadOne = styled.h1`
  font-size: 96px;
  font-weight: 900;
  color: ${props => props.theme.color.primary.main};
  margin-bottom: 11px;
`;

export const SubTit = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 26px;
`;

export const Cont = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 26px;
  line-height: 1.8;
`;