import * as S from "./style"
import Image from "../../modules/Image/index.jsx"
import Button from "../../modules/Button"

export default function UserState({ isEquip, isLab }) {
  return (
    <>
      {
        isEquip ?
          <S.HistWrapRent className="rental-wrap">
            <S.Header className="flex">
              <S.DateEquip><span>수령일 ~ 반납일</span></S.DateEquip>
              <S.NameEquip><span>기자재</span></S.NameEquip>
              <S.NumEquip><span>개수</span></S.NumEquip>
              <S.StateEquip><span>상태</span></S.StateEquip>
            </S.Header>

            <S.HistList className="flex">
              <S.DateEquip>
                <p>23년 03월 11일(수)</p>
                <p>~</p>
                <p>23년 03월 12일(목)</p>
              </S.DateEquip>
              <S.ItemUl>
                <S.ItemList className="flex">
                  <S.NameEquip className="flex">
                    <Image src="#" width="50px" height="50px" borderRadius="5px" />
                    <div>
                      <p>카메라</p>
                      <p>MIRRORLESS SONY a6600</p>
                    </div>
                  </S.NameEquip>
                  <S.NumEquip>1</S.NumEquip>
                  <S.StateEquip>대여중</S.StateEquip>
                  <S.ButtonEquip>
                    <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                  </S.ButtonEquip>
                </S.ItemList>
                <S.ItemList className="flex">
                  <S.NameEquip className="flex">
                    <Image src="#" width="50px" height="50px" borderRadius="5px" />
                    <div>
                      <p>카메라</p>
                      <p>MIRRORLESS SONY a6600</p>
                    </div>
                  </S.NameEquip>
                  <S.NumEquip>1</S.NumEquip>
                  <S.StateEquip>대여중</S.StateEquip>
                  <S.ButtonEquip>
                    <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                  </S.ButtonEquip>
                </S.ItemList>
                <S.ItemList className="flex">
                  <S.NameEquip className="flex">
                    <Image src="#" width="50px" height="50px" borderRadius="5px" />
                    <div>
                      <p>카메라</p>
                      <p>MIRRORLESS SONY a6600</p>
                    </div>
                  </S.NameEquip>
                  <S.NumEquip>1</S.NumEquip>
                  <S.StateEquip>대여중</S.StateEquip>
                  <S.ButtonEquip>
                    <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                  </S.ButtonEquip>
                </S.ItemList>
              </S.ItemUl>
            </S.HistList>
            <S.HistList className="flex">
              <S.DateEquip>
                <p>23년 03월 11일(수)</p>
                <p>~</p>
                <p>23년 03월 12일(목)</p>
              </S.DateEquip>
              <S.ItemUl>
                <S.ItemList className="flex">
                  <S.NameEquip className="flex">
                    <Image src="#" width="50px" height="50px" borderRadius="5px" />
                    <div>
                      <p>카메라</p>
                      <p>MIRRORLESS SONY a6600</p>
                    </div>
                  </S.NameEquip>
                  <S.NumEquip>1</S.NumEquip>
                  <S.StateEquip>대여중</S.StateEquip>
                  <S.ButtonEquip>
                    <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                  </S.ButtonEquip>
                </S.ItemList>
                <S.ItemList className="flex">
                  <S.NameEquip className="flex">
                    <Image src="#" width="50px" height="50px" borderRadius="5px" />
                    <div>
                      <p>카메라</p>
                      <p>MIRRORLESS SONY a6600</p>
                    </div>
                  </S.NameEquip>
                  <S.NumEquip>1</S.NumEquip>
                  <S.StateEquip>대여중</S.StateEquip>
                  <S.ButtonEquip>
                    <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                  </S.ButtonEquip>
                </S.ItemList>
                <S.ItemList className="flex">
                  <S.NameEquip className="flex">
                    <Image src="#" width="50px" height="50px" borderRadius="5px" />
                    <div>
                      <p>카메라</p>
                      <p>MIRRORLESS SONY a6600</p>
                    </div>
                  </S.NameEquip>
                  <S.NumEquip>1</S.NumEquip>
                  <S.StateEquip>대여중</S.StateEquip>
                  <S.ButtonEquip>
                    <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                  </S.ButtonEquip>
                </S.ItemList>
              </S.ItemUl>
            </S.HistList>
          </S.HistWrapRent>
          : isLab ?
            <S.HistWrapRent className="rental-wrap">
              <S.Header className="flex">
                <S.DateLab><span>키 수령일 ~ 반납일</span></S.DateLab>
                <S.NameLab><span>랩실</span></S.NameLab>
                <S.NumLab><span>사용 인원</span></S.NumLab>
                <S.NumEquipLab><span>사용 장비 대수</span></S.NumEquipLab>
                <S.StateLab><span>상태</span></S.StateLab>
              </S.Header>

              <S.HistList className="flex">
                <S.DateLab>
                  <p>23년 03월 11일(수)</p>
                  <p>~</p>
                  <p>23년 03월 12일(목)</p>
                </S.DateLab>
                <S.NameLab><p>한울관 B119호</p></S.NameLab>
                <S.NumLab><p>4</p></S.NumLab>
                <S.NumEquipLab><p>4</p></S.NumEquipLab>
                <S.StateLab><p>대여 신청</p></S.StateLab>
                <S.ButtonLab>
                  <Button text="대여취소" className="shadow sub" borderRadius="20px" fontSize="14px" padding="5px 7px" />
                </S.ButtonLab>
              </S.HistList>
            </S.HistWrapRent>
            :
            <S.HistWrapPenalty className="penalty-wrap">
              <S.Header className="flex">
                <S.Penalty><span>상태</span></S.Penalty>
                <S.Penalty><span>비고</span></S.Penalty>
              </S.Header>

              <S.HistList className="flex">
                <S.Penalty><span>정상 이용 가능</span></S.Penalty>
                <S.Penalty><span>-</span></S.Penalty>
              </S.HistList>
            </S.HistWrapPenalty>
      }
    </>
  )
}

