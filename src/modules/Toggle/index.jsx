import * as S from "./style";

export default function Toggle({
  className,
  state,
  on,
  off,
  toggle,
  onClickFunc,
}) {
  return (
    <S.ToggleBtn
      className={className}
      onClick={() => {
        toggle();
        onClickFunc && onClickFunc();
      }}
      state={state}
    >
      <p>{state ? on : off}</p>
      <S.Circle className={className} state={state} />
    </S.ToggleBtn>
  );
}
