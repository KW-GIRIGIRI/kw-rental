import * as S from "./style"

export default function Toggle({className, state, on, off, toggle}) {
 return (
    <S.ToggleBtn className={className} onClick={toggle} state={state}>
      <p>{state ? on : off}</p>
    <S.Circle className={className} state={state} />
  </S.ToggleBtn>
  );
}