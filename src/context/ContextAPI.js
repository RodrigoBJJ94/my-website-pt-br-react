import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("us");

  const values = {
    language, setLanguage
  };

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
};

export const useContextAPI = () => {
  const context = useContext(Context);

  return context;
};
