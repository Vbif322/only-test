import { createContext, useState } from "react";
import { DATA } from "../assets/data";

export const DataContext = createContext(null);

export default function Context({ children }) {
  const [num, setNum] = useState(6);
  return (
    <DataContext.Provider value={{ num, setNum, DATA }}>
      {children}
    </DataContext.Provider>
  );
}
