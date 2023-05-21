import styled from "styled-components"

export const Wrap = styled.ul`
  width: 100%;
  border: 1px solid ${props => props.theme.color.primary.sub};
  text-align: center;

  & > div {
    display: grid;
    grid-template-columns: 3fr repeat(3, 1fr);
  }

  & > div > span {
    padding: 10px 0;
    border-right: 1px solid ${props => props.theme.color.primary.sub};
  }

  & > div > span:last-child {
    border-right: none;
  }
`
export const Header = styled.div`
  background: ${props => props.theme.color.primary.sub};
  font-weight: 500;
  font-size: 13px;
`

export const Content = styled.div`
  font-weight: 400;
  font-size: 12px;
`