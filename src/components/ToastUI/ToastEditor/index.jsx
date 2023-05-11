import { useRef } from 'react'

// Toast 에디터
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import '@toast-ui/editor/dist/i18n/ko-kr'

export default function ToastEditor({ setContent }) {
  // Editor DOM 선택용
  const editorRef = useRef()

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    setContent(editorRef.current?.getInstance().getHTML())
  }

  const onUploadImage = async (blob, callback) => {
    console.log(blob)
    // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
    // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...

    // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
    callback('http://localhost:3000/img/너굴짱.png', '너굴짱')
    return false
  }

  return (
    <>
      {/* <h2>### Editor Toast</h2> */}
      <Editor
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg"
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link']
        ]}
        useCommandShortcut={false} // 키보드 입력 컨트롤 방지
        plugins={[colorSyntax]}
        language="ko-KR"
        hooks={{
          addImageBlobHook: onUploadImage
        }}
      ></Editor>

      <button onClick={handleRegisterButton}>등록</button>
    </>
  );
}