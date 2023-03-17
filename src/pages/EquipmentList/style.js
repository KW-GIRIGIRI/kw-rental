import styled from "styled-components";

export const Wrapper = styled.section`
  min-width: fit-content;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 27px 39px 40px;
`;

export const FilterWrap = styled.div`
  display: flex;
  &:first-of-type{
    justify-content: space-between;
  }
  &.type {
    margin: 32px 0;
    gap: 12px;
  }
`

export const SearchCont = styled.label`
  position: relative;
  margin-right: 13px;
`

export const SearchInp = styled.input`
  width: 356px;
  padding: 11px 16px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.color.gray.g3};
`;

export const SearchImg = styled.img`
  position: absolute;
  right: 16px;
  top: 10px;
`

export const DateInp = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 136px;
  padding: 5px 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &::-webkit-calendar-picker-indicator {
    width: 100%;
  }
`;

export const DateImg = styled.img`
  margin-right: 9px;
  width: 1rem;
`;

export const DateCont = styled.label`
  position: relative;
  margin-right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 7px 0;
  box-sizing: border-box;
  width: 136px;
`;

export const TypeBtn = styled.button`
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
    margin-left: -1px;
  }
`;
