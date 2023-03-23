import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
`

export const ProductSpan = styled.span`
  color: ${(props) => props.theme.color.primary.main};
  font-size: 14px;
`;

export const ProductTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  padding-bottom: 20px;
  margin: 6px 0 30px;
 
`;

export const ProductLi = styled.li`
  margin-bottom: 15px;
  line-height: 180%;
  font-size: 14px;
  display: flex;
  & > p {
    min-width: 120px;
  }
  & > span {
    color: ${(props) => props.theme.color.text.gray};
    word-break: keep-all;
  }
`;
