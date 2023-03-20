import styled from "styled-components";

export const GalUl = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(214px, 1fr));
  gap: 44px;
`;

export const GalLi = styled.li`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  & > p {
    padding: 0 17px;
  }
`;

export const Count = styled.span`
  position: absolute;
  width: max-content;
  padding: 4px 11px;
  margin: 10px 15px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.circle};
  color: ${(props) => props.theme.color.text.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;

export const Category = styled.p`
  color: ${props => props.theme.color.primary.main};
  margin: 16px 0 9px;
`
export const Title = styled.p`
  margin-bottom: 12px;
`