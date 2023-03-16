import styled from "styled-components";

export const ProductSpan = styled.span`
  color: ${(props) => props.theme.color.primary.main};
`;

export const ProductTitle = styled.p`
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g1};
  padding-bottom: 20px;
  margin: 5px 0 32px;
`;

export const ProductLi = styled.li`
  line-height: 19px;
  margin-bottom: 20px;
  display: flex;
  & > p {
    min-width: 120px;
  }
  & > span {
    display: inline;
    color: ${(props) => props.theme.color.text.gray};
    line-height: 25px;
    word-break: keep-all;
  }
  &:last-child {
    display: flex;
    align-items: center;
  }
`;
