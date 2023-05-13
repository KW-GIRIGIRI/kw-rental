import { useContext, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import Button from "../../modules/Button";
import TabNav from "../../modules/TabNav";
import * as S from "./style"

export default function LabRental() {
  const { isAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const [isFirst, setIsFirst] = useState(true)

  const SubTitle = () => {
    switch (pathname) { 
      case '/lab/status':
        return isAuth ? '대여 관리' : '랩실 현황'
      default:
        return isAuth ? '랩실 관리' : '랩실 소개'
    }
  }

  const Section = () => {
    switch (pathname) {
      case '/lab/application': case '/lab/success':
        return (
          <>
            <S.SimpleDesc>
              <span className={pathname.includes('/lab/application') ? 'on' : ''}>랩실 대여하기</span>
              <span className={pathname.includes('/lab/success') ? 'on' : ''}>랩실 대여 완료</span>
            </S.SimpleDesc>
            { pathname.includes('/application') && <S.SubTitle>랩실 대여하기</S.SubTitle> }
          </>
        )
      default:
        return (
          <>
            <Button className={isFirst ? 'main shadow' : 'disable shadow'} text="한울관" padding="10px 29px" borderRadius="20px" margin='0 10px 0 0'/>
            <Button className={isFirst ? 'disable shadow' : 'main shadow'} text="화도관" padding="10px 29px" borderRadius="20px" />
          </>
        )
    }
  }

  return (
    <>
      {
        isAuth ?
          <>
            <TabNav onClick={() => navigate('/lab')} text="랩실 관리" className={pathname.includes('lab/') ? 'false' : 'on'} />
            <TabNav onClick={() => navigate('/lab/status')} text="대여 관리" className={pathname.includes('lab/') ? 'on' : 'false'} />
          </>
          :
          <>
            <TabNav onClick={() => navigate('/lab')} text="랩실 소개" className={pathname.includes('lab/') ? 'false' : 'on'} />
            <TabNav onClick={() => navigate('/lab/status')} text="랩실 현황" className={pathname.includes('lab/') ? 'on' : 'false'} />
          </>
      }
      <S.Section>
        {
          (!pathname.includes('/application') && !pathname.includes('/success'))
          && <S.SubTitle><SubTitle /></S.SubTitle>
        }
        <Section />
        <Outlet />
      </S.Section>
    </>
  )
}
