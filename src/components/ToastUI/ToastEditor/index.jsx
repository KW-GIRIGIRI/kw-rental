import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import { BtnWrap } from "../style";
import Button from "../../../modules/Button";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { postImage } from "../../../api/api";

export default function ToastEditor({ content, setContent, setIsEdit }) {
  const editorRef = useRef();

  const handleRegisterButton = () => {
    setContent(editorRef.current?.getInstance().getHTML());
    handleEditState();
  };

  const handleEditState = () => {
    setIsEdit(false);
  };

  const onUploadImage = async (blob, callback) => {
    const formData = new FormData();
    formData.append("file", blob);
    const response = await postImage(formData);

    callback(response, blob.name);
    return false;
  };

  return (
    <>
      <Editor
        initialValue={content}
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="450px"
        initialEditType="wysiwyg"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
        ]}
        useCommandShortcut={false}
        plugins={[colorSyntax]}
        language="ko-KR"
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
      ></Editor>

      <BtnWrap>
        <Button
          text="저장하기"
          onClick={handleRegisterButton}
          padding="15px 30px"
          fontSize="15px"
          fontWeight="600"
          className="main"
          borderRadius="10px"
        />
        <Button
          text="취소하기"
          onClick={handleEditState}
          padding="15px 30px"
          fontSize="15px"
          fontWeight="600"
          className="sub"
          borderRadius="10px"
        />
      </BtnWrap>
    </>
  );
}
