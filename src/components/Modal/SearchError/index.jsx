// import { useEffect, useRef } from "react"
// import iconClose from "../../../assets/icon-close.svg"
// import * as S from "../style"

// export default function SearchError({ modal, setModal }) {
//   const outSection = useRef()

//   const handleCloseModal = e => {
//     if(modal && (!outSection.current || !outSection.current.contains(e.target))) setModal(false)
//   }

//   useEffect(() => {
//     window.addEventListener('click', handleCloseModal)
//     return () => {
//       window.removeEventListener('click', handleCloseModal)
//     }
//   })
  
//   return (
//     <S.ModalSection visible={modal}>
//       <S.Div ref={outSection}>
//         <button onClick={() => setModal(false)}>
//           <img src={iconClose} alt="" />
//         </button>
//         <p>최소 2자 이상의 검색어를 입력해주세요.</p>
//         <S.SearchBtn onClick={() => setModal(false)} text='확인' className='main' padding="10px 20px" borderRadius="5px" fontSize="14px" float="right" />
//       </S.Div>
//     </S.ModalSection>
//   )
// }
