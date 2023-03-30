import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: "",
  setIsAuth: () => {},
});

export const AuthStore = (props) => {
  const [isAuth, setIsAuth] = useState('admin')
  // user || admin

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
