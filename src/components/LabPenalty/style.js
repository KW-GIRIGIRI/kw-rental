import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow-black.svg";

export const ListUl = styled.ul`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
`;

export const ListLi = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 1.5fr;
  align-items: center;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & > p {
    padding: 10px 0;
    border-right: 1px solid ${(props) => props.theme.color.primary.sub};

    &.faulty {
      color: ${(props) => props.theme.color.primary.red};
    }
  }

  &:first-of-type {
    background-color: ${(props) => props.theme.color.primary.sub};

    & > p:last-of-type {
      border-right: none;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Select = styled.select`
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  width: 50px;
  justify-self: center;
  font-size: 11px;
  padding: 4px 8px;
  outline: none;
  appearance: none;
  background: url(${iconDownArrow}) no-repeat right 4px top 50%;
  background-size: 10px;
`;
