import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import TabNav from "../../modules/TabNav";
import * as S from "./style"

export default function LabRental() {
  const { isAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = useLocation().pathname

  return (
    <>
      {
        isAuth ?
          <>
            <TabNav onClick={() => navigate('/lab')} text="." className={location.pathname.includes('status') ? 'on' : 'false'} />
            <TabNav onClick={() => navigate('/')} text="." className={location.pathname.includes('inventory') ? 'on' : 'false'} />
          </>
          :
          <>
            <TabNav onClick={() => navigate('/lab')} text="랩실 소개" className={location.pathname.includes('lab/') ? 'false' : 'on'} />
            <TabNav onClick={() => navigate('/lab/status')} text="랩실 현황" className={location.pathname.includes('lab/') ? 'on' : 'false'} />
          </>
      }
      <S.Section>
        {
        pathname.includes('/application') || pathname.includes('/success')?
        <S.SimpleDesc>
          <span className={pathname.includes('/application') ? 'on' : ''}>랩실 대여하기</span>
          <span className={pathname.includes('/success') ? 'on' : ''}>랩실 대여 완료</span>
        </S.SimpleDesc> : <></>
        }
        {
          pathname.includes('/application') ?
            <S.SubTitle>랩실 대여하기</S.SubTitle> : <></>
        }
        <Outlet />
      </S.Section>
    </>
  )
}
