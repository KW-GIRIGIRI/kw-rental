import styled from "styled-components";

export const EditorWrap = styled.div`
  .ql-toolbar {
    border-top-left-radius: ${props => props.theme.borderRadius.lv2};
    border-top-right-radius: ${props => props.theme.borderRadius.lv2};
    border: 1px solid ${props => props.theme.color.primary.sub};
    background-color: ${props => props.theme.color.primary.sub};
  }

  .ql-container {
    height: 358px;
    border-bottom-left-radius: ${props => props.theme.borderRadius.lv2};
    border-bottom-right-radius: ${props => props.theme.borderRadius.lv2};
    border: 1px solid ${props => props.theme.color.primary.sub};
    font: inherit !important;

    & strong {
      font-weight: 600;
    }

    & .ql-blank::before {
      font-style: normal;
      font-size: 13px;
    }

    & p {
      font-size: 13px;
    }

    & li {
      padding: 0 !important;
      
      &::before {
        display: none;
      }
    }

    & ul {
      padding: 0 !important;
      font-size: 13px;
    }

    & span {
      display: none !important;
    }
  }
  
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border: none;
  }

  .ql-color-picker .ql-picker-options .ql-picker-item {
    border-radius: ${props => props.theme.borderRadius.lv1};
  }
`

export const ViewerWrap = styled.div`
  position: relative;
  min-height: 400px;
  border: 1px solid ${props => props.theme.color.primary.sub};
  border-radius: 10px;
  font-size: 13px;
  padding: 20px 15px;
  font: initial !important;

  & img {
    cursor: default !important;
  }
  
  & h1 {
    font-size: 2em;
  }

  & h2 {
    font-size: 1.5em;
  }

  & h3 {
    font-size: 1.17em;
  }

  & p {
    font-size: 13px;
  }

  & a {
    text-decoration: underline;
    color: #06c;
  }

  & ul {
    font-size: 13px;
  }

  & strong {
    font-weight: 600;
  }

  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-align-justify {
    text-align: justify;
  }
`

export const BtnWrap = styled.div`
  margin-top: 20px;

  & > button:first-child {
    margin-right: 13px;
  }

  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  position: absolute;
  top: -38px;
  right: 0;
  cursor: pointer;

  & > p {
    margin-left: 7px;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.color.primary.main};
  }
`;