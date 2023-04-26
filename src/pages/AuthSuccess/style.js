import styled from "styled-components";

export const Wrap = styled.section`
  background-color: #ffffff;
  margin: 0 auto 100px;
  max-width: 880px;
  width: 70%;
  padding: 130px 0 300px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv2};

  & > h2 {
    margin-top: 13px;
    font-size: 20px;
  }

  & > p {
    font-size: 13px;
    margin-top: 8px;
  }
`;
