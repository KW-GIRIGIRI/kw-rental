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
  grid-template-columns: 1fr 2fr 1.2fr 1.9fr;
  font-weight: 600;
  font-size: 15px;
  padding: 16px 44px;
  border-radius: ${(props) => props.theme.borderRadius.lv2}
    ${(props) => props.theme.borderRadius.lv2} 0 0;

  & > span {
    text-align: left;
  }
`;
