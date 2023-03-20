import styled from "styled-components";

export const Wrapper = styled.section` 
`;

export const DetailWrapper = styled.div`
  display: flex;
  gap: 60px;
  margin: 30px 0 40px;
  padding-bottom: 13px;
  border-bottom: 1px solid #D9D9D9;
`;

export const SimpleDesc = styled.p`
  font-size: 15px;
  margin-left: -40px;
`;

export const NoticeUl = styled.ul`
  padding: 40px 31px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 36px;
`;

export const NoticeLi = styled.li`
  list-style: inside;
  margin: 15px 0;
  color: ${props => props.theme.color.text.gray};
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 25px;
`;