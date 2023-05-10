import * as S from "./style";
import ToS from "./ToS";
import ApplicationForm from "./ApplicationForm";
import { forwardRef } from "react";
import LabConfirmTable from './LabConfirmTable';

const Application = forwardRef((props, dataRef) => {
  return (
    <S.Div>
      <h2>[필수] 이용약관 동의</h2>
      <ToS ref={dataRef} />
      { props.isLab &&
        <S.Lab>
          <h2>대여 확인</h2>
          <LabConfirmTable />
        </S.Lab>
      }
      <h2>대여신청서 작성</h2>
      <ApplicationForm ref={dataRef} isLab={props.isLab} />
    </S.Div>
  )
})

export default Application;