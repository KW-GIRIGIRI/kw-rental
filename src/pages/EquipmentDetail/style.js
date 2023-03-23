import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${props => props.theme.borderRadius.lv2};
  padding: 20px 45px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin: 30px 0 55px;
  padding-bottom: 36px;
  border-bottom: 1px solid ${props => props.theme.color.primary.sub};
  & > img {
    border: 1px solid ${props => props.theme.color.primary.sub};
  }
`;

export const SimpleDesc = styled.div`
  font-size: 13px;
  margin-left: -25px;
  & > span:not(:last-child)::after {
    content: " > ";
  }
`;

export const NoticeUl = styled.ul`
  padding: 30px;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const NoticeLi = styled.li`
  list-style: inside;
  margin: 15px 0;
  font-size: 14px;
  color: ${props => props.theme.color.text.gray};
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
`;