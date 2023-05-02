import styled from "styled-components";

export const Section = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 30px;
`;

export const Title = styled.h1`
  font-size: 20px;
`

export const RentalWrap = styled.div`
  padding: 0 26px;

  & > h2 {
    font-size: 18px;
    margin: 27px 0 15px 0;
  }
`