import { useCallback, useEffect, useState } from "react";
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

  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${currentScrollY}px`;
    return currentScrollY;
  };

  const allowScroll = (prevScrollY) => {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    window.scrollTo(0, prevScrollY);
  };

  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [isOpen]);

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
