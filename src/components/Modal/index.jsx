import { ModalSection, Div, CloseBtn } from "./style"
import iconClose from "../../assets/icon-close.svg"

export default function Modal({ onClose, children }) {
  return (
    <ModalSection onClick={onClose} >
      <Div onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <img src={iconClose} alt="" />
        </CloseBtn>
        {children}
      </Div>
    </ModalSection>
  )
}