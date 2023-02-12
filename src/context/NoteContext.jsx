import { createContext, useState, useContext, useEffect } from 'react';
import ToggleContext from './ToggleContext';
import sanityClient from '../client';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const { setShowForm } = useContext(ToggleContext);

  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    id: 0,
    title: '',
    message: '',
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "note"]{
    title,
    note,
    _id
  }`
      )
      .then((data) => {
        setNotes(data);
        console.log(notes);
      })
      .catch(console.error);
  }, []);

  const addNote = async (newNote) => {
    const doc = {
      _type: 'note',
      title: newNote.title,
      note: newNote.message,
    };

    sanityClient
      .create(doc)
      .then(() => {
        sanityClient
          .fetch(`*[_type == "note"]{title, note, id}`)
          .then((data) => {
            setNotes([...data]);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  const deleteNote = async (id) => {
    try {
      await sanityClient.delete(id);
      console.log('Note deleted');
    } catch (error) {
      console.error(error);
    }
    setNotes(notes.filter((item) => item._id !== id));
  };

  const updateNote = async (id, updatedNote) => {
    sanityClient
      .patch(id)
      .set({ title: updatedNote.title, note: updatedNote.note })
      .commit()
      .then(() => console.log('note updated'))
      .catch(console.error);

    setNotes(
      notes.map((item) =>
        item._id === id ? { _id: id, ...updatedNote } : item
      )
    );
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
    addNote(note);
    setNote({
      title: '',
      message: '',
    });
    setShowForm((prev) => !prev);
  };

  return (
    <NoteContext.Provider
      value={{
        note,
        notes,
        loading,
        changeHandler,
        submitHandler,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
