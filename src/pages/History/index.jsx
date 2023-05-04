import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import TabNav from "../../modules/TabNav";
import { Section } from "./style";

export default function History() {
  const { isAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  // 설정한 라우팅 주소에 따라서 navigate와 include 수정 
  return (
    <>
      {
        isAuth ?
          <>
            <TabNav onClick={() => navigate('/history/equipment')} text="기자재 통계" className={location.pathname.includes('equipment') ? 'on' : 'false'} />
            <TabNav onClick={() => navigate('/history/penalty')} text="페널티 관리" className={location.pathname.includes('penalty') ? 'on' : 'false'} />
          </>
          :
          <>
            <TabNav onClick={() => navigate('/history/equipment')} text="기자재 대여" className={location.pathname.includes('equipment') ? 'on' : 'false'} />
            <TabNav onClick={() => navigate('/history/lab')} text="랩실 대여" className={location.pathname.includes('lab') ? 'on' : 'false'} />
            <TabNav onClick={() => navigate('/history/penalty')} text="페널티" className={location.pathname.includes('penalty') ? 'on' : 'false'} />
          </>
      }
      <Section>
        <Outlet />

      </Section>
    </>
  )
}
