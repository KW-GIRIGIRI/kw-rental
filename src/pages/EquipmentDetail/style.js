import styled from "styled-components";

export const Wrapper = styled.section`
  width: 1075px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

export const SimpleDesc = styled.p`
  font-size: 15px;
  margin-top: 20px;
  color: ${(props) => props.theme.color.text.gray};
`;
