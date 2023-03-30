import useInput from "../../hook/useInput"
import { InputStyle } from './style'

export default function Input({ placeholder, type, maxLen, className, defaultValue }) {
  const maxLenFunc = value => value.length <= maxLen
  const inputEl = useInput(defaultValue || "", maxLenFunc)

  return (
    <InputStyle
      {...inputEl} className={className} type={type || 'text'} placeholder={placeholder} />
  )
}
