import styled from "styled-components";

export const DownloadModal = styled.div`
  width: 217px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 26px;
  margin-top: 25px;
  background: ${(props) => props.theme.color.text.white};

  & > p {
    padding: 12px 27px;
    font-size: 13px;
    line-height: 16px;
    cursor: default;

    &:hover {
      background: ${(props) => props.theme.color.primary.lightSub};
    }
  }

  & a:hover {
    cursor: default;
  }
`;