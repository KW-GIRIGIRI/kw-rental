import { useState } from 'react'
import ChangeAccount from './ChangeAccount'
import CheckPw from './CheckPw'
import * as S from './style'

export default function AccountSettingComp() {
  const [checkPw, setCheckPw] = useState(false)

  return (
    checkPw ? <ChangeAccount /> : <CheckPw setCheckPw={setCheckPw} /> 
  )
}
