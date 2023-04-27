import styled from "styled-components";

export const Wrap = styled.section`
  background-color: #ffffff;
  margin: 0 auto 80px;
  max-width: 880px;
  width: 70%;
  padding: 45px 0 300px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv2};

  & > h2 {
    color: ${(props) => props.theme.color.primary.main};
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 14px;
    color: ${(props) => props.theme.color.primary.main};
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  width: 330px;
  margin: 0 auto;
  text-align: left;

  & > label {
    font-size: 13px;
    display: block;
    margin-top: 19px;
    color: ${(props) => props.theme.color.gray.g5};
  }
`;

export const InpWrap = styled.div`
  position: relative;
  display: flex;
  gap: 35px;

  &::after {
    content: "@";
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: ${(props) => props.theme.color.text.gray};
    font-size: 13px;
  }
`;
