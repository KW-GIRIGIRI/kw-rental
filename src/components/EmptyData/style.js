import styled from "styled-components";

export const Wrap = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 125px 0;

  & > img {
    margin-bottom: 13px;
  }

  & > p:not(:last-child) {
    margin-bottom: 7px;
  }

  &.user-rental {
    padding: 80px 0;
  }
`;
