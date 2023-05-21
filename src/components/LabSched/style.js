import styled from "styled-components";

export const SchedWrap = styled.ul`
  margin-top: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.text.white};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.borderRadius.lv2};

  & li {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Header = styled.li`
  background: ${(props) => props.theme.color.primary.sub};
  grid-template-columns: 1.3fr 1fr 1fr 1.6fr 1fr 1.6fr 2fr;
  font-weight: 600;
  font-size: 15px;
  padding: 15px 0;
  border-top-left-radius: ${(props) => props.theme.borderRadius.lv2};
  border-top-right-radius: ${(props) => props.theme.borderRadius.lv2};
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
