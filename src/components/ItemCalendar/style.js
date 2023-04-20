import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px auto 50px;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.theme.color.primary.lightSub};
  border: 1px solid #e8e8e8;
`;

export const NavBtn = styled.button`
  width: 30px;
  cursor: pointer;

  & > img {
    vertical-align: bottom;
  }
`;

export const MonthWrap = styled.div`
  font-size: 13px;
  padding: 4px 0;
  text-align: center;
  width: 150px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.color.text.black};
  font-weight: 500;

  & > img {
    vertical-align: bottom;
    margin-right: 10px;
    width: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContCell = styled.div`
  flex: 0 0 calc(100% / 7);
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  height: 120px;
  padding: 10px 7px;
  font-size: 12px;

  &:nth-child(7n + 1) {
    border-left: 1px solid #e8e8e8;
  }

  &.month {
    height: 30px;
    padding: 10px 7px;
  }

  &.faded {
    color: ${(props) => props.theme.color.gray.g4};
  }
`;
