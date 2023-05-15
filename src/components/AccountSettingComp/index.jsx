import { useState } from "react";
import ChangeAccount from "./ChangeAccount";
import CheckPw from "./CheckPw";

export default function AccountSettingComp() {
  const [checkPw, setCheckPw] = useState(false);

  return checkPw ? (
    <ChangeAccount setCheckPw={setCheckPw} />
  ) : (
    <CheckPw setCheckPw={setCheckPw} />
  );
}
