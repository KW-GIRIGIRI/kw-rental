import { forwardRef } from "react";
import useInput from "../../hook/useInput";
import { InputStyle } from "./style";

const Input = forwardRef((props, ref) => {
  const { placeholder, disabled, type, maxLen, className, defaultValue, name, id } =
    props;
  const maxLenFunc = (value) => value.length <= maxLen;
  const inputEl = useInput(defaultValue || "", maxLenFunc);

  return (
    <InputStyle
      id={id}
      {...inputEl}
      className={className}
      type={type || "text"}
      placeholder={placeholder}
      ref={ref}
      name={name}
      disabled={disabled}
    />
  );
});

export default Input;
