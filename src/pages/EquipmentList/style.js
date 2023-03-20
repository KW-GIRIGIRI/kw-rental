import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 28px;
  border-top: 1px solid ${(props) => props.theme.color.primary.sub};
`;

export const FilterWrap = styled.div`
  display: flex;
  &:first-of-type {
    justify-content: space-between;
  }
  &.mode {
    margin: 24px 0 28px;
    gap: 12px;
  }
`;

export const SearchCont = styled.label`
  position: relative;
  margin-right: 13px;
`

export const SearchInp = styled.input`
  width: 294px;
  padding: 8px 34px 8px 14px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  box-sizing: border-box;
  &::placeholder{
    font-size: 13px;
    color: ${props => props.theme.color.text.gray};
  }
`;

export const SearchImg = styled.img`
  position: absolute;
  right: 16px;
  top: 8px;
  width: 1rem;
`

export const DateInp = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 128px;
  padding: 7px 0;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const DateCont = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  box-sizing: border-box;
  width: 128px;
  & > span {
    font-size: 13px;
  }
  & > img {
    width: 14px;
    margin: 0 9px 3px 0;
  }
`;

export const TypeBtn = styled.button`
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 8px 10px;
  & > img {
    max-width: 12px;
    max-height: 11px;
    vertical-align: middle;
  }
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
    margin-left: -1px;
  }
`;

export const PageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  & > button {
    color: ${(props) => props.theme.color.primary.main};
    border: 1px solid ${(props) => props.theme.color.primary.sub};
    width: 40px;
    height: 40px;
    margin-right: -1px;
    & > img {
      vertical-align: middle;
    }
    &:first-of-type {
      border-radius: 0 5px 5px 0;
      transform: rotate(180deg);
    }
    &:last-of-type {
      border-radius: 0 5px 5px 0;
    }
    &.on {
      background-color: ${(props) => props.theme.color.primary.main};
      color: ${(props) => props.theme.color.text.white};
    }
  }
`;
