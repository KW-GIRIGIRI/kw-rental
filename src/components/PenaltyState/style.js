import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow-black.svg";

export const ItemUl = styled.ul`
  box-sizing: border-box;
  margin-top: 40px;

  & > li {
    display: grid;
    align-items: center;

    grid-template-columns: 1.1fr 1.8fr 3.4fr 2.6fr 1fr 1fr;
    padding: 11px 0;

    & > span:nth-child(3),
    & > span:nth-child(4) {
      text-align: left;
      justify-content: left;
      padding-left: 20px;
    }
  }
`;

export const Header = styled.li`
  background: ${(props) => props.theme.color.primary.sub};
  font-size: 13px;
  text-align: center;
`;

export const ItemLi = styled.li`
  font-size: 12px;

  & > span,
  & > form {
    height: calc(100% + 22px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid ${(props) => props.theme.color.primary.sub};
    border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

    &:first-child {
      border-left: 1px solid ${(props) => props.theme.color.primary.sub};
    }

    & > p:last-child {
      color: ${(props) => props.theme.color.primary.main};
      &:hover {
        cursor: pointer;
      }
    }
  }

  & > form > select {
    width: 105px;
    font-size: 12px;
    padding: 3px 6px;
    border-radius: ${(props) => props.theme.borderRadius.lv1};
    appearance: none;
    background: url(${iconDownArrow}) no-repeat right 3px top 50%;
    background-size: 8px;
    outline: none;
  }
`;
