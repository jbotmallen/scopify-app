import { useContext, createContext, useState } from "react";

const AlertContext = createContext({});

export const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState("");

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
