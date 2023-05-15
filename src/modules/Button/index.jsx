import { BtnDefault } from "./style";

const Button = ({
  text,
  borderRadius,
  margin,
  color,
  backgroundColor,
  width,
  padding,
  height,
  fontWeight,
  boxShadow,
  fontSize,
  className,
  float,
  onClick,
  value,
  disabled,
}) => {
  return (
    <BtnDefault
      disabled={disabled}
      margin={margin}
      color={color}
      boxShadow={boxShadow}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={className}
      onClick={onClick}
      padding={padding}
      borderRadius={borderRadius}
      float={float}
      value={value}
    >
      {text}
    </BtnDefault>
  );
};

export default Button;
