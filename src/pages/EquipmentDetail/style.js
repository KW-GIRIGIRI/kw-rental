import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 20px 45px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin-bottom: 55px;
  padding-bottom: 36px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  & > img {
    border: 1px solid ${(props) => props.theme.color.primary.sub};
  }
`;

export const SimpleDesc = styled.div`
  font-size: 13px;
  margin-left: -25px;
  margin-bottom: 20px;

  & > span:not(:last-child) {
    cursor: pointer;
    &::after {
      content: " > ";
    }
  }
`;

export const NoticeWrap = styled.div`
  padding: 30px;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const NoticeText = styled.p`
  list-style: inside;
  margin: 15px 0;
  font-size: 14px;
  color: ${(props) => props.theme.color.text.gray};
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div > button {
    &:first-of-type {
      color: ${(props) => props.theme.color.primary.main};
    }
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
  }
`;
