import { ImgDefault } from "./style";

const Image = ({
  borderRadius,
  margin,
  width,
  height,
  src,
  onClick,
  alt = "",
}) => {
  return (
    <ImgDefault
      onClick={onClick}
      margin={margin}
      borderRadius={borderRadius}
      width={width}
      height={height}
      src={src}
      alt={alt}
    ></ImgDefault>
  );
};

export default Image;
