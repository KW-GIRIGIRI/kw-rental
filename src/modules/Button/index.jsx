import { BtnDefault } from "./style"

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
  fontSize,
  className,
  onClick
}) => {
  return (
    <BtnDefault
      margin={margin} color={color} backgroundColor={backgroundColor} width={width} height={height} fontWeight={fontWeight} fontSize={fontSize} className={className} onClick={onClick} padding={padding} borderRadius={borderRadius}>
      {text}
    </BtnDefault>
  )
}

export default Button