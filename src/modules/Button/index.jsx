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
  boxShadow,
  fontSize,
  className,
  float,
  onClick
}) => {
  return (
    <BtnDefault
      margin={margin} color={color} boxShadow={boxShadow} backgroundColor={backgroundColor} width={width} height={height} fontWeight={fontWeight} fontSize={fontSize} className={className} onClick={onClick} padding={padding} borderRadius={borderRadius} float={float}>
      {text} 
    </BtnDefault>
  )
}

export default Button