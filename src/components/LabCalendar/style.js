import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 5px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.theme.color.primary.lightSub};
  border: 1px solid #e8e8e8;
`;

export const NavBtn = styled.button`
  width: 20px;
  cursor: pointer;

  & > img {
    vertical-align: top;
    width: 8px;
  }
`;

export const MonthWrap = styled.div`
  font-size: 11px;
  padding: 2px 0;
  text-align: center;
  width: 100px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.color.text.black};
  font-weight: 500;

  & > img {
    vertical-align: bottom;
    margin-right: 10px;
    width: 12px;
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ContCell = styled.li`
  display: flex;
  flex: 0 0 calc(100% / 7);
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: flex-start;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  height: 60px;
  padding: 5px 6px;
  font-size: 11px;

  & > ins {
    color: ${(props) => props.theme.color.primary.main};
  }

  & > span,
  & > p {
    pointer-events: none;
  }

  &:nth-child(7n + 1) {
    border-left: 1px solid #e8e8e8;
  }

  &.month {
    height: 20px;
    padding: 5px;
  }

  &.faded {
    color: ${(props) => props.theme.color.gray.g4};
  }

  &.today {
    background-color: ${(props) => props.theme.color.primary.lightSub};
  }
`;
