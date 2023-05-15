import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useRef, useContext, useState } from "react";
import { Div, Wrap } from "../style";
import { AuthContext } from "../../../context/Context";
import IconPencil from "../../../assets/icon-pencil.svg";

export default function ToastViewer({ content, setIsEdit }) {
  const viewerRef = useRef();
  const { isAuth } = useContext(AuthContext);

  const handleEdit = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    viewerRef.current = new Editor.factory({
      el: document.querySelector("#viewer"),
      viewer: true,
      initialValue: content,
    });
  }, [content]);

  return (
    <Wrap>
      {isAuth ? (
        <Div onClick={handleEdit}>
          <img src={IconPencil} alt="수정 아이콘" />
          <p>랩실 소개 수정</p>
        </Div>
      ) : (
        <></>
      )}
      <div id="viewer" />
    </Wrap>
  );
}
