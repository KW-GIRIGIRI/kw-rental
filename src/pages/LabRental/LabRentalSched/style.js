import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  margin-top: ${props => props.isAuth ? '23px' : '46px'};
`

export const OnOff = styled.div`
  margin: 30px 0 40px;
`
