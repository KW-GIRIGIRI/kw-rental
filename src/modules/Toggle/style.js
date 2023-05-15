import styled, { css } from "styled-components";

export const ToggleBtn = styled.button`
  width: 65px;
  height: 22px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.state
      ? props.theme.color.primary.third
      : props.theme.color.primary.main};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    line-height: 1;
    font-size: 13px;
    color: ${(props) => props.theme.color.text.white};
    ${(props) =>
      props.state
        ? css`
            transform: translate(-7px, 0);
          `
        : css`
            transform: translate(7px, 0);
          `}
  }

  &.rental {
    width: 80px;
  }
`;

export const Circle = styled.span`
  background-color: ${(props) => props.theme.color.text.white};
  width: 16px;
  height: 16px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  ${(props) =>
    props.state &&
    css`
      transform: translate(43px, 0);
    `}

  &.rental {
    ${(props) =>
      props.state &&
      css`
        transform: translate(57px, 0);
      `}
  }
`;
