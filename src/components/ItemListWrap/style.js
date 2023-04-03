import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
`

export const ItemUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 23px 27px;
`;

export const ItemLi = styled.li`
`;


export const P = styled.p`
  color: ${(props) => props.theme.color.primary.third};
  font-size: 15px;
`

export const PlusImg = styled.img`
  margin-right: 7px;
`

export const AddBtn = styled.button`
  width: 244px;
  height: 43px;
  background: ${(props) => props.theme.color.text.white};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 17px;
`;