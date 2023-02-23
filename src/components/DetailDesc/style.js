import styled from "styled-components";

export const ProductSpan = styled.span`
  color: ${(props) => props.theme.color.primary.main};
`;

export const ProductTitle = styled.p`
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g1};
  padding-bottom: 15px;
  margin: 10px 0 25px;
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
  }
  &:last-child {
    display: flex;
    align-items: center;
  }
`;

export const InpDate = styled.input`
  padding: 3px 8px;
  font-family: sans-serif;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  border-radius: 5px;
  &:first-of-type {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-left: 10px;
  }
`;
