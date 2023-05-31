import * as S from "./style"
import iconPageArrow from "../../assets/icon-pageArrow.svg"

export default function Pagination({ page, setPage, pageArray }) {
  return (
    <S.PageBtnWrap>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        <img src={iconPageArrow} alt="이전 페이지" />
      </button>
      {pageArray?.map((_, index) => 
          <button
            key={index}
            onClick={() => setPage(index)}
            className={page === index ? "on" : null}
          >
            {index + 1}
          </button>
      )}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page + 1 === pageArray.length}
      >
        <img src={iconPageArrow} alt="다음 페이지" />
      </button>
    </S.PageBtnWrap>
  )
}