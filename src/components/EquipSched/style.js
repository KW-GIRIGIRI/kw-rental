import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow-gray.svg";

export const SchedTitle = styled.h1`
  margin-top: 30px;
  font-weight: 600;
  font-size: 18px;
`;

export const SchedWrap = styled.ul`
  margin-top: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.text.white};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
`;

export const Header = styled.ul`
  padding: 0 20px;
  height: 54px;
  background: ${(props) => props.theme.color.primary.sub};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;

  & span {
    font-weight: 600;
    font-size: 15px;
    position: absolute;
  }

  & span:first-child {
    left: 37px;
  }

  & span:nth-child(2) {
    left: 155px;
  }

  & span:nth-child(3) {
    left: 428px;
  }

  & span:last-child {
    left: 552px;
  }
`;
export const WarnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin: 120px 0 180px;

  & > p {
    text-align: center;
    line-height: 1.6;
    font-size: 16px;
  }
`;
