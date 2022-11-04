import { createContext, useState, useContext } from 'react';
import ToggleContext from './ToggleContext';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const { showForm, setShowForm } = useContext(ToggleContext);

  const [notes, setNotes] = useState([
    {
      title: 'Note Title 1',
      message: 'This is Note 1',
    },
    {
      title: 'Note Title 2',
      message: 'This is Note 2',
    },
    {
      title: 'Note Title 3',
      message: 'This is Note 3',
    },
  ]);

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

  const submitHandler = (e) => {
    e.preventDefault();
    setNotes([...notes, note]);
    setNote({
      title: '',
      message: '',
    });
    setShowForm((prev) => !prev);
    console.log(notes);
  };

  return (
    <NoteContext.Provider value={{ note, notes, changeHandler, submitHandler }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
