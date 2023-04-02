import styled from "styled-components";

export const ImgDefault = styled.img`
  object-fit: cover;
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
