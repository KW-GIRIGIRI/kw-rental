import styled from "styled-components";

export const EditorWrap = styled.div`
  .ql-toolbar {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid #E0E4E9;
    background-color: #E0E4E9;
  }

  .ql-container {
    height: 358px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #E0E4E9;
    font: inherit !important;

    & strong {
      font-weight: 600;
    }

    & .ql-blank::before {
      font-style: normal;
    }

    & span {
      display: none !important;
    }
  }
  
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border: none;
  }

  .ql-color-picker .ql-picker-options .ql-picker-item {
    border-radius: 5px;
  }
`

export const ViewerWrap = styled.div`
  position: relative;
  min-height: 400px;
  border: 1px solid #E0E4E9;
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