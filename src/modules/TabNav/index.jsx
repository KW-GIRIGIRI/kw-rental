import * as S from "./style"

export default function TabNav({ text, className, onClick }) {
  return (
    <S.TabButton onClick={onClick} className={className}>
      {text}
    </S.TabButton>
  )
}
