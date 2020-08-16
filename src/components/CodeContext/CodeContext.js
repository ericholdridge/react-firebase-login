import React, { useState, createContext } from "react";
import Data from "../Data";

export const CodeContext = createContext();

export const CodeState = ({ children }) => {
  const [data, setData] = useState(Data);
  const [input, setInput] = useState("");

  // Clears the input value when user clicks the next question button
  const clearInputValue = () => {
    setInput("");
  };

  return (
    <CodeContext.Provider value={{ data, setData, input, setInput, clearInputValue }}>
      {children}
    </CodeContext.Provider>
  );
};
