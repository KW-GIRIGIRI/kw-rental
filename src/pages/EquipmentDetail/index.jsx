import DetailDesc from "../../components/DetailDesc"
import DetailImage from "../../components/DetailImage"
import Header from "../../components/Header"
import Button from "../../modules/Button"
import TapNav from "../../modules/TabNav"
import * as S from "./style"


export default function EquipmentDetail() {
  return (
    <S.Wrapper>
      <Header text="기자재 대여" classNum="2023312344" />
      <TapNav text="기자재 조회" className="on" />
      <S.SimpleDesc>기자재 조회  카메라 MIRRORLESS SONY a6600</S.SimpleDesc>
      <S.DetailWrapper>
        <DetailImage />
        <div>
          <DetailDesc />
          <Button
            text="기자재 담기" className="main"
            width="387px" padding="15px 0" borderRadius="10px" margin="30px 17px 0 0"
          />
          <Button
            text="목록 보기" className="sub"
            width="116px" padding="15px 0" borderRadius="10px" 
          />
        </div>
      </S.DetailWrapper>
        
      
    </S.Wrapper>
  )
}
