import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: "",
  setIsAuth: () => {},
});

export const AuthStore = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  // user(false) || admin(true)

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
