import styled from "styled-components";

export const Section = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 25px;
  position: relative;
`;

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 20px 18px 50px;
`;

export const SimpleDesc = styled.div`
  font-size: 13px;
  margin-bottom: 30px;

  & > span:not(:last-child)::after {
    content: " > ";
  }

  & > span.on {
    color: ${(props) => props.theme.color.primary.main};
    font-weight: 600;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Div = styled.div`
  margin-top: 46px;
`

export const InfoBtn = styled.div`
  padding: 6px 10px;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  display: flex;
  justify-content: center;
  align-items: center; 
  position: absolute;
  right: 28px;
  top: 35px;
  cursor: pointer;

  & > span {
    font-size: 13px;
    color: ${(props) => props.theme.color.primary.main};
    margin-right: 2px;
  }
`