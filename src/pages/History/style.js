import styled from "styled-components";

export const Section = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 25px;
`;

export const Title = styled.h1`
  font-size: 20px;
`

export const RentalWrap = styled.div`
  padding: 0 14px;
  position: relative;

  & > h2 {
    font-size: 18px;
    margin: 27px 0 15px 0;
  }

  & > img {
    position: absolute;
    right: 26px;

    &:hover {
      cursor: pointer;
    }
  }
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-left: 10px;
  }
`

export const Cal = styled.div`
  width: 152px;
  height: 30px;
  border: 1px solid #0E2B5A;
  color: #0E2B5A;
  font-size: 13px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

export const FilterWrap = styled.div`
  display: flex;
  &.mode {
    align-items: center;
    margin: 24px 0 28px;
    gap: 12px;
  }
`;