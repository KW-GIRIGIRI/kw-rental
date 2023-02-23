import * as S from "./style"

export default function TabNav({ text, className }) {
  return (
    <S.TabButton className={className}>
      {text}
    </S.TabButton>
  )
}
