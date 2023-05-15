import styled from "styled-components";

export const Wrap = styled.section`
  background-color: #ffffff;
  margin: 0 auto 100px;
  max-width: 880px;
  min-width: 460px;
  width: 70%;
  padding: 45px 0;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv2};

  & > h2 {
    color: ${(props) => props.theme.color.primary.main};
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 33px;
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

export const ErrText = styled.p`
  color: ${(props) => props.theme.color.primary.red};
  font-size: 11px;
  margin-left: 5px;
`;

export const InpWrap = styled.div`
  position: relative;

  & > button {
    position: absolute;
    width: max-content;
    right: 5px;
    bottom: 0;
    transform: translateY(-46%);
  }

  &.email {
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
  }
`;

export const PwImg = styled.img`
  position: absolute;
  width: 18px;
  right: 16px;
  bottom: ${(props) => props.bottom};
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  padding: 11px 15px;
  font-size: 15px;
  margin: 10px 0;
  &::placeholder {
    font-size: 15px;
    color: ${(props) => props.theme.color.primary.third};
  }
  &:disabled {
    background-color: ${(props) => props.theme.color.primary.sub};
    color: ${(props) => props.theme.color.text.gray};
  }

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
