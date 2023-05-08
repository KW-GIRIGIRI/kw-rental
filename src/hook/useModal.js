import { useCallback, useState } from "react";
import Modal from "../components/Modal";

const useModal = ({ useBlur = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
    document.body.style.overflow = "unset";  
  }, []);

  return {
    Modal: isOpen
      ? ({ children, className }) => (
        <Modal className={className} onClose={useBlur ? close : null}>
          {children}
        </Modal>
      )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
