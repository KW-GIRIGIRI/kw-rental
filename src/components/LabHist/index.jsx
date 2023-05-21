import { useSelector } from "react-redux"
import * as S from "./style"

export default function LabHist() {
  const hanul = useSelector(state => state.labControl.lab)

  return (
    <S.Wrap>
      <S.Header>
        <span>랩실</span>
        <span>대여 인원</span>
        <span>사용 인원</span>
        <span>불량반납</span>
      </S.Header>
      <S.Content>
        <span>{hanul ? "한울관" : "화도관"}</span>
        <span>8</span>
        <span>24</span>
        <span>2</span>
      </S.Content>
    </S.Wrap>
  )
}
