import styled from "styled-components";

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 40px 0 14px;
`;

export const SubExp = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

export const DayBtn = styled.button`
  margin-right: 14px;
  padding: 10px 13px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  color: ${(props) => props.theme.color.gray.g3};
  border-radius: ${(props) => props.theme.borderRadius.circle};

  &.on {
    background-color: ${(props) => props.theme.color.primary.main};
    color: ${(props) => props.theme.color.text.white};
    border: 1px solid ${(props) => props.theme.color.primary.main};
  }
`;
