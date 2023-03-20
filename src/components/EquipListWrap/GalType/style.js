import styled, { keyframes } from "styled-components";

export const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`

export const GalUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 32px;
`;

export const GalLi = styled.li`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  & > p {
    padding: 0 16px;
  }
  &:hover {
    outline: 1px solid ${(props) => props.theme.color.primary.main};
    outline-offset: -1px;
  }
`;

export const Count = styled.span`
  position: absolute;
  padding: 4px 0;
  margin: 15px;
  width: 60px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.circle};
  color: ${(props) => props.theme.color.text.gray};
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
`;

export const Category = styled.p`
  color: ${props => props.theme.color.primary.main};
  font-size: 14px;
  margin: 11px 0 7px;
`
export const Title = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  width: 150px;
  text-overflow: ellipsis;
  font-weight: 500;
  /* &:hover {
    animation: ${scrollText} 8s 1s infinite linear;
  } */
`;