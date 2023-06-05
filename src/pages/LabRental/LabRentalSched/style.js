import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  margin-top: ${(props) => (props.isAuth ? "23px" : "46px")};
`;

export const OnOff = styled.div`
  margin: 30px 0 40px;
`;

export const SecTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 26px;
`;

export const PenaltyTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 60px 0 17px;
`;
