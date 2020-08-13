import React, { useState, createContext } from "react";
import Data from "../Data";

export const CodeContext = createContext();

export const CodeState = ({ children }) => {
  const [data, setData] = useState(Data);
  const [currentQuestion, setCurrentQuestion ] = useState(1);
  const [input, setInput] = useState("");

  return <CodeContext.Provider value={{data, setData}}>{children}</CodeContext.Provider>;
};
 