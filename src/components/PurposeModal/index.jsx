import { useEffect, useRef } from "react"
import * as S from "./style"

export default function PurposeModal({ purpose, setPurpose }) {
  const wrapRef = useRef()
  
    const handleScrollClose = (e) => {
    setPurpose((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const handleOutsideClick = (e) => {
    if (wrapRef.current === e.target) {
      setPurpose((prev) => ({
        ...prev,
        visible: false,
      }));
    }
  };

  useEffect(() => {
  if (purpose.visible) {
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScrollClose);
      window.addEventListener("resize", handleScrollClose);
    }, 200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScrollClose);
      window.removeEventListener("resize", handleScrollClose);
    };
  }
}, [purpose.visible]);

  return (
    <S.Section ref={wrapRef} onClick={handleOutsideClick}>
      <S.Div top={purpose.top} left={purpose.left}>
        <p>{purpose.text}</p>
      </S.Div>
    </S.Section>
  )
}
