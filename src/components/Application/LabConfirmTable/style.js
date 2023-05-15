import styled from "styled-components";

export const Wrap = styled.div`
  font-size: 13px;
  width: 441px;
  border: 1px solid #8b95a1;

  & > div {
    display: grid;
    grid-template-columns: 1.45fr 1fr;
    align-items: center;

    & > p {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > p:first-child {
      border-right: 1px solid #8b95a1;
    }

    &:first-child {
      border-bottom: 1px solid #8b95a1;
    }
  }
`;

export const Header = styled.div`
  background: #e0e4e9;
  padding: 10px 0;
  & > p {
    height: calc(100% + 20px);
  }
`;

export const Info = styled.div`
  padding: 17px 0;
  & > p {
    height: calc(100% + 34px);
  }
`;
