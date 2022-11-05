import { createContext } from 'react';

const TextAreaContext = createContext();

export const TextAreaProvider = ({ children }) => {
  const textAreaHeight = (e) => {
    const scrollbarHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollbarHeight}px`;
  };

  return (
    <TextAreaContext.Provider value={{ textAreaHeight }}>
      {children}
    </TextAreaContext.Provider>
  );
};

export default TextAreaContext;
