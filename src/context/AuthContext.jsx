/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const Auth = createContext();

function AuthContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleLogIn = () => {
    setIsAuthenticated(true);
  };

  const handleOpenForm = () => {
    setIsOpenForm(true);
  };

  const handleCloseForm = () => {
    setIsOpenForm(false);
  };

  return (
    <Auth.Provider
      value={{
        isAuthenticated,
        handleLogIn,
        isOpenForm,
        handleOpenForm,
        handleCloseForm,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(Auth);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within a AuthContext provider"
    );
  }
  return context;
}

export default AuthContext;
