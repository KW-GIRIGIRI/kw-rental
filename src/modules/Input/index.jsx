import { forwardRef } from "react"
import useInput from "../../hook/useInput"
import { InputStyle } from './style'

const Input = forwardRef((props, ref) => {
  const { placeholder, type, maxLen, className, defaultValue, name } = props
  const maxLenFunc = value => value.length <= maxLen
  const inputEl = useInput(defaultValue || "", maxLenFunc)

  return (
    <InputStyle
      {...inputEl} className={className} type={type || 'text'} placeholder={placeholder} ref={ref} name={name} />
  )
})

export default Input