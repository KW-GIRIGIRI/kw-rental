import * as S from "./style";
import ToS from "./ToS";
import ApplicationForm from "./ApplicationForm";
import { forwardRef } from "react";
import LabConfirmTable from "./LabConfirmTable";

const Application = forwardRef((props, dataRef) => {
  return (
    <S.Div>
      <h3>[필수] 이용약관 동의</h3>
      <ToS ref={dataRef} />
      {props.isLab && (
        <S.Lab>
          <h3>대여 확인</h3>
          <LabConfirmTable />
        </S.Lab>
      )}
      <h3>대여신청서 작성</h3>
      <ApplicationForm ref={dataRef} isLab={props.isLab} />
    </S.Div>
  );
});

export default Application;
