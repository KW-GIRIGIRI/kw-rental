import * as S from "./style"
import Image from "../../modules/Image/index.jsx"
import Button from "../../modules/Button"

export default function UserHist({ isEquip, isLab }) {
  return (
    <>
      <S.Div>
        {
          isEquip || isLab ?
            <div className="flex">
              <S.Cal className="flex">캘린더</S.Cal> <span>~</span> <S.Cal className="flex">캘린더</S.Cal>
            </div> : <></>
        }
        {
          isEquip ?
            <S.HistWrap>
              <S.Header className="flex">
                <S.PickupEquip><span>수령일</span></S.PickupEquip>
                <S.ReturnEquip><span>반납일</span></S.ReturnEquip>
                <S.NameEquip><span>기자재</span></S.NameEquip>
                <S.NumEquip><span>개수</span></S.NumEquip>
                <S.StateEquip className="last-list"><span>상태</span></S.StateEquip>
              </S.Header>
              <S.HistList className="flex">
                <S.PickupEquip><p>23년 03월 11일</p></S.PickupEquip>
                <S.ReturnEquip><p>23년 03월 12일</p></S.ReturnEquip>
                <S.ItemUl>
                  <S.ItemLi className="flex">
                    <S.NameEquip><p>Oclulus Quest2</p></S.NameEquip>
                    <S.NumEquip><p>1</p></S.NumEquip>
                    <S.StateEquip><p>1</p></S.StateEquip>
                  </S.ItemLi>
                  <S.ItemLi className="flex">
                    <S.NameEquip><p>Oclulus Quest2</p></S.NameEquip>
                    <S.NumEquip><p>1</p></S.NumEquip>
                    <S.StateEquip><p>1</p></S.StateEquip>
                  </S.ItemLi>
                  <S.ItemLi className="flex">
                    <S.NameEquip><p>Oclulus Quest2</p></S.NameEquip>
                    <S.NumEquip><p>1</p></S.NumEquip>
                    <S.StateEquip><p>1</p></S.StateEquip>
                  </S.ItemLi>
                </S.ItemUl>
              </S.HistList>
              <S.HistList className="flex">
                <S.PickupEquip><p>23년 03월 11일</p></S.PickupEquip>
                <S.ReturnEquip><p>23년 03월 12일</p></S.ReturnEquip>
                <S.ItemUl>
                  <S.ItemLi className="flex">
                    <S.NameEquip><p>Oclulus Quest2</p></S.NameEquip>
                    <S.NumEquip><p>1</p></S.NumEquip>
                    <S.StateEquip><p>1</p></S.StateEquip>
                  </S.ItemLi>
                </S.ItemUl>
              </S.HistList>
            </S.HistWrap>
            : isLab ?
              <S.HistWrap>
                <S.Header className="flex">
                  <S.DateLab><span>키 수령일</span></S.DateLab>
                  <S.DateLab><span>키 반납일</span></S.DateLab>
                  <S.NameLab><span>랩실</span></S.NameLab>
                  <S.NumLab><span>사용 인원</span></S.NumLab>
                  <S.NumLab><span>사용 장비 대수</span></S.NumLab>
                  <S.StateLab className="last-list"><span>상태</span></S.StateLab>
                </S.Header>
                <S.HistList className="flex lab">
                  <S.DateLab><p>23년 03월 11일</p></S.DateLab>
                  <S.DateLab><p>23년 03월 12일</p></S.DateLab>
                  <S.NameLab><p>한울관 B119호</p></S.NameLab>
                  <S.NumLab><p>4</p></S.NumLab>
                  <S.NumLab><p>4</p></S.NumLab>
                  <S.StateLab><p>정상 사용</p></S.StateLab>
                </S.HistList>
                <S.HistList className="flex lab">
                  <S.DateLab><p>23년 03월 11일</p></S.DateLab>
                  <S.DateLab><p>23년 03월 12일</p></S.DateLab>
                  <S.NameLab><p>한울관 B119호</p></S.NameLab>
                  <S.NumLab><p>4</p></S.NumLab>
                  <S.NumLab><p>4</p></S.NumLab>
                  <S.StateLab><p>정상 사용</p></S.StateLab>
                </S.HistList>
                <S.HistList className="flex lab">
                  <S.DateLab><p>23년 03월 11일</p></S.DateLab>
                  <S.DateLab><p>23년 03월 12일</p></S.DateLab>
                  <S.NameLab><p>한울관 B119호</p></S.NameLab>
                  <S.NumLab><p>4</p></S.NumLab>
                  <S.NumLab><p>4</p></S.NumLab>
                  <S.StateLab><p>정상 사용</p></S.StateLab>
                </S.HistList>
              </S.HistWrap>
              :
              <S.HistWrap>
                <S.Header className="flex">
                  <S.DatePenalty><span>수령일</span></S.DatePenalty>
                  <S.DatePenalty><span>반납일</span></S.DatePenalty>
                  <S.StatePenalty><span>상태</span></S.StatePenalty>
                  <S.NamePenalty><span>기자재/랩실</span></S.NamePenalty>
                  <S.CausePenalt className="last-list"><span>사유</span></S.CausePenalt>
                </S.Header>

                <S.HistList className="flex penalty">
                  <S.DatePenalty><p>23년 03월 11일</p></S.DatePenalty>
                  <S.DatePenalty><p>23년 03월 12일</p></S.DatePenalty>
                  <S.StatePenalty><p>6개월 이용 금지</p></S.StatePenalty>
                  <S.NamePenalty><p>MIRRORLESS SONY a6600</p></S.NamePenalty>
                  <S.CausePenalt><p>연체</p></S.CausePenalt>
                </S.HistList>
                <S.HistList className="flex penalty">
                  <S.DatePenalty><p>23년 03월 11일</p></S.DatePenalty>
                  <S.DatePenalty><p>23년 03월 12일</p></S.DatePenalty>
                  <S.StatePenalty><p>6개월 이용 금지</p></S.StatePenalty>
                  <S.NamePenalty><p>MIRRORLESS SONY a6600</p></S.NamePenalty>
                  <S.CausePenalt><p>연체</p></S.CausePenalt>
                </S.HistList>
                <S.HistList className="flex penalty">
                  <S.DatePenalty><p>23년 03월 11일</p></S.DatePenalty>
                  <S.DatePenalty><p>23년 03월 12일</p></S.DatePenalty>
                  <S.StatePenalty><p>6개월 이용 금지</p></S.StatePenalty>
                  <S.NamePenalty><p>MIRRORLESS SONY a6600</p></S.NamePenalty>
                  <S.CausePenalt><p>연체</p></S.CausePenalt>
                </S.HistList>
              </S.HistWrap>
        }
      </S.Div>
    </>

  )
}
