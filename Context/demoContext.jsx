import { createContext, useState } from "react";

export const DemoContext = createContext(null);

export const DemoContextProvider = ({ children }) => {
  const [count, setCount] = useState(null);

  return (
    <DemoContext.Provider value={{ count, setCount }}>
      {children}
    </DemoContext.Provider>
  );
};
