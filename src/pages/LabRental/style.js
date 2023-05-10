import styled from "styled-components";

export const Section = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 35px 25px;
`;

export const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 20px 18px 50px;
`;

export const SimpleDesc = styled.div`
  font-size: 13px;
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
  margin: 29px 0 25px 0;
`;