import * as S from "./style"
import iconMenu from "../../assets/icon-menu.svg"
import { useRef } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({visible, setVisible}) {
  const modalRef = useRef();
  const navigate = useNavigate()

  const handleClose = (e) => {
    if (!modalRef.current.contains(e.target)) setVisible(false)
  }
  
  useEffect(() => {
    window.addEventListener('click', handleClose)
    return () => {
      window.removeEventListener('click', handleClose)
    }
  }, [])
  
  return (
    <S.Wrap ref={modalRef}>
      <S.Li onClick={() => { navigate('/setaccount'); setVisible(false)}}>
        <img src={iconMenu} alt="" />
        <p>계정 설정</p>
      </S.Li>
      <S.Li>
        <img src={iconMenu} alt="" />
        <p>공지사항</p>
      </S.Li>
      <S.Li>
        <img src={iconMenu} alt="" />
        <p>도움말</p>
      </S.Li>
      <S.Li>
        <img src={iconMenu} alt="" />
        <p>로그아웃</p>
      </S.Li>
    </S.Wrap>
  )
}
