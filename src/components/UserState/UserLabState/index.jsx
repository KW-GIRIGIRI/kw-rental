import * as S from "../style"
import Button from "../../../modules/Button"
import useModal from "../../../hook/useModal"

export default function UserLabState() {
  const cancelModal = useModal()
  const contactsModal = useModal()

  const 랩실대여 = [
    {
      대여일: "23년 03월 11일(수)",
      반납일: "23년 03월 12일(목)",
      장소: "한울관",
      사용인원: 4,
      대여중: false,
    },
    {
      대여일: "23년 03월 11일(수)",
      반납일: "23년 03월 12일(목)",
      장소: "화도관",
      사용인원: 6,
      대여중: true,
    },
  ]

  const 대표자연락망 = [
    {
      이름: "이영현",
      전화번호: "01012341234"
    },
    {
      이름: "박다은",
      전화번호: "01098769876"
    },
  ]

  const onCancel = () => {
    // 취소 구현
    cancelModal.close()
  }

  return (
    <>
      <S.HistWrap>
        <S.Header className="lab">
          <span>사용 기간</span>
          <span>랩실</span>
          <span>사용 인원</span>
          <span>상태</span>
          <span></span>
        </S.Header>
        {랩실대여.map((랩실, i) => (
          <S.HistList key={i} className="lab labList">
            <div>
              <p>{랩실.대여일}</p>
              <p>~</p>
              <p>{랩실.반납일}</p>
            </div>
            <span>{랩실.장소}</span>
            <span>{랩실.사용인원}</span>
            <S.State>{랩실.대여중 ? "대여중" : "대여 신청"}</S.State>
            <S.BtnWrap>
              { 랩실.장소==="한울관" && <Button
                text="대표자 연락망"
                className="main shadow"
                borderRadius="20px"
                fontSize="14px"
                padding="5px 7px"
                onClick={contactsModal.open}
              /> }
              {!랩실.대여중 && (
                <Button
                  text="대여취소"
                  className="sub shadow"
                  borderRadius="20px"
                  fontSize="14px"
                  padding="5px 7px"
                  onClick={cancelModal.open}
                />
              )}
            </S.BtnWrap>
          </S.HistList>
        ))}
      </S.HistWrap>
      <cancelModal.Modal>
        <p>랩실 대여를 취소하시겠습니까?</p>
        <div>
          <Button
            onClick={cancelModal.close}
            text="아니오"
            className="sub"
            padding="11px 34px"
            borderRadius="5px"
          />
          <Button
            onClick={onCancel}
            text="네"
            className="main"
            padding="12px 34px"
            borderRadius="5px"
          />
        </div>
      </cancelModal.Modal>
      <contactsModal.Modal className="contacts">
        <p>대표자 연락망</p>
        <div>
          {
            대표자연락망.map((keyholder, idx) => (
              <p key={idx}>{keyholder.이름} {keyholder.전화번호}</p>
            ))
          }
        </div>
        <div>
          <Button
            onClick={contactsModal.close}
            text="확인"
            className="main"
            padding="10px 20px"
            borderRadius="5px"
          />
        </div>
      </contactsModal.Modal>
    </>
  )
}