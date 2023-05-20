import styled from "styled-components";

export const Section = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 25px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonWrap = styled.h1`
  margin-top: 24px;
  margin-bottom: 62px;
`;

export const RentalWrap = styled.div`
  padding: 0 14px;
  position: relative;

  & > h2 {
    font-size: 18px;
    margin: 27px 0 15px 0;

    &:nth-child(3) {
      margin-top: 54px;
    }
  }

  & > img {
    position: absolute;
    right: 26px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const FilterWrap = styled.div`
  display: flex;
  &.mode {
    align-items: center;
    margin: 24px 0 28px;
    gap: 12px;
  }
`;

export const DownloadModal = styled.div`
  width: 217px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 26px;
  margin-top: 25px;
  background: ${(props) => props.theme.color.text.white};

  & > p {
    padding: 12px 27px;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;

    &:hover {
      background: ${(props) => props.theme.color.primary.lightsub};
    }
  }

  & a:hover {
    cursor: default;
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
    cursor: pointer;
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
      transform: revert;
    }
  }
`;