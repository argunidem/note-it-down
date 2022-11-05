import { createContext, useState, useContext, useEffect } from 'react';
import ToggleContext from './ToggleContext';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const { setShowForm } = useContext(ToggleContext);

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    id: 0,
    title: '',
    message: '',
  });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await fetch('http://localhost:3003/notes?_sort=id&_order=asc');
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async (newNote) => {
    const res = await fetch('http://localhost:3003/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });
    const data = await res.json();

    setNotes([data, ...notes]);
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setNote({
      ...note,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setNotes([...notes, note]);
    addNote(note);
    setNote({
      title: '',
      message: '',
    });
    setShowForm((prev) => !prev);
  };

  return (
    <NoteContext.Provider value={{ note, notes, changeHandler, submitHandler }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
