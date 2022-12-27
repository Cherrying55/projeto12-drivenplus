import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function definirplano(authData){
    let newobj = {...auth};
    newobj.membership = authData;
    setAuth(newobj);
    localStorage.setItem("auth", JSON.stringify(newobj));

  }

  return (
    <AuthContext.Provider value={{ auth, login, definirplano }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;