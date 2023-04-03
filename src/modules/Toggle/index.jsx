import * as S from "./style"

export default function Toggle({state, on, off, toggle}) {
 return (
    <S.ToggleBtn onClick={toggle} state={state}>
      <p>{state ? on : off}</p>
    <S.Circle state={state} />
  </S.ToggleBtn>
  );
}