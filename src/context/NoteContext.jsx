import { createContext, useState } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: '',
    message: '',
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setNote({
      ...note,
      [name]: value,
    });
  };

  return (
    <NoteContext.Provider value={{ note, changeHandler }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
