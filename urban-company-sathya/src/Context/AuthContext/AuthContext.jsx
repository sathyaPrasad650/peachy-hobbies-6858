import React, { createContext } from "react";
import { authAction, loadingAction } from "./action";
import { reducer } from "./reducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    error: false,
    auth: false,
  });

  const [loginData, setLoginData] = React.useState({
    phoneNo: "",
    otp: "0000",
  });

  const loginUser = () => {
    dispatch(loadingAction);
    dispatch(authAction);
    dispatch(loadingAction);
  };

  const value = { state, loginData, setLoginData, loginUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
