import * as S from "./style"
import Button from "../../modules/Button"

export default function EquipSched() {
  return (
    <>
      <Button className="main shadow" text="수령 예정" padding="10px 21px" borderRadius="20px" fontSize="13px" />
      <Button className="disable shadow" text="반납 예정" margin="0 0 0 10px" padding="10px 21px" borderRadius="20px" fontSize="13px" />

      <S.SchedTitle>수령 예정</S.SchedTitle>

      {/* 수령 예정 컴포넌트 */}
      <S.SchedWrap>
        <S.Header>
          <span>대여자</span>
          <span>기자재</span>
          <span>개수</span>
          <span>자산번호</span>
        </S.Header>
        <S.SchedLi>
          <S.Rental>
            <S.Renter>
              <p>이름</p>
              <p>학번</p>
              <Button className="main shadow" text="수령확인" borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" />
            </S.Renter>
            <S.RentalUl>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>1</span>
                <select>
                  <option>자산번호를 선택하세요.
                  </option>
                  <option>20190500020001
                  </option>
                  <option>20190500020002
                  </option>
                  <option>20190500020003
                  </option>
                </select>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>1</span>
                <select>
                  <option>자산번호를 선택하세요.
                  </option>
                  <option>20190500020001
                  </option>
                  <option>20190500020002
                  </option>
                  <option>20190500020003
                  </option>
                </select>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>1</span>
                <select>
                  <option>자산번호를 선택하세요.
                  </option>
                  <option>20190500020001
                  </option>
                  <option>20190500020002
                  </option>
                  <option>20190500020003
                  </option>
                </select>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
            </S.RentalUl>
          </S.Rental>
        </S.SchedLi>
        <S.SchedLi>
          <S.Rental>
            <S.Renter>
              <p>이름</p>
              <p>학번</p>
              <Button className="main shadow" text="수령확인" borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" />
            </S.Renter>
            <S.RentalUl>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>1</span>
                <select>
                  <option>자산번호를 선택하세요.
                  </option>
                  <option>20190500020001
                  </option>
                  <option>20190500020002
                  </option>
                  <option>20190500020003
                  </option>
                </select>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>1</span>
                <S.NumWrap>
                  <p>소모품</p>
                </S.NumWrap>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
            </S.RentalUl>
          </S.Rental>
        </S.SchedLi>
      </S.SchedWrap>


      <S.SchedTitle>반납 예정</S.SchedTitle>
      {/* 반납 예정 컴포넌트 */}
      <S.SchedWrap>
        <S.Header>
          <span>대여자</span>
          <span>기자재</span>
          <span>개수</span>
          <span>자산번호</span>
        </S.Header>
        <S.SchedLi>
          <S.Rental>
            <S.Renter>
              <p>이름</p>
              <p>학번</p>
              <p>반납일 초과</p>
              <Button className="main shadow" text="반납확인" borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" />
            </S.Renter>
            <S.RentalUl>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>1</span>
                <S.NumWrap>
                  <p>소모품</p>
                </S.NumWrap>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
            </S.RentalUl>
          </S.Rental>
        </S.SchedLi>
        <S.SchedLi>
          <S.Rental>
            <S.Renter>
              <p>이름</p>
              <p>학번</p>
              <Button className="main shadow" text="반납확인" borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" />
            </S.Renter>
            <S.RentalUl>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>3</span>
                <S.NumWrap>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                </S.NumWrap>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
              <S.RentalLi>
                <img src="" />
                <div>
                  <p>VR 장비</p>
                  <p>Oculus Quest2</p>
                </div>
                <span>6</span>
                <S.NumWrap>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                  <p>20200200020001</p>
                </S.NumWrap>
                <Button className="sub shadow" text="대여취소" borderRadius="20px" padding="5px 7px" fontSize="14px" />
              </S.RentalLi>
            </S.RentalUl>
          </S.Rental>
        </S.SchedLi>
      </S.SchedWrap>
    </>
  )
}