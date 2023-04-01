import { forwardRef } from "react";
import useInput from "../../hook/useInput"
import { Div, TextareaStyle, Span } from "./style"

const Textarea = forwardRef((props, ref) => {
  const {placeholder, cols, rows, maxLen, className, count, defaultValue} = props
  const maxLenFunc = value => value.length <= maxLen
  const textareaEl = useInput(defaultValue || "", maxLenFunc)

  return (
    <Div>
      <TextareaStyle
        {...textareaEl}
        className={className}
        id="" cols={cols} rows={rows}
        placeholder={placeholder} ref={ref}></TextareaStyle>
      {count ? <Span>{`(${textareaEl.value.length}/${count})`}</Span> : <></>}
    </Div>
  )
})

export default Textarea;