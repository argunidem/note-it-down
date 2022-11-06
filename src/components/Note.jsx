import React, { useState, useContext, forwardRef } from 'react';
import NoteContext from '../context/NoteContext';
import TextAreaContext from '../context/TextAreaContext';
import { IoAddOutline } from 'react-icons/io5';
import { AiTwotoneEdit } from 'react-icons/ai';

const Note = forwardRef(({ note }, ref) => {
  const [edit, setEdit] = useState({
    updatedNote: {
      title: '',
      message: '',
    },
    isEditing: false,
  });

  const { deleteNote, updateNote } = useContext(NoteContext);
  const { textAreaHeight } = useContext(TextAreaContext);

  const clickHandler = () => {
    setEdit({
      updatedNote: {
        title: note.title,
        message: note.message,
      },
      isEditing: true,
    });
  };

  const clearEdit = () => {
    setEdit({
      updatedNote: {
        title: '',
        message: '',
      },
      isEditing: false,
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEdit({
      updatedNote: {
        ...edit.updatedNote,
        [name]: value,
      },
      isEditing: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateNote(note.id, { ...edit.updatedNote });
    clearEdit();
  };

  if (edit.isEditing) {
    return (
      <form className='box'>
        <AiTwotoneEdit className='edit-btn' size='30px' onClick={clearEdit} />
        <IoAddOutline
          onClick={() => deleteNote(note.id)}
          size='30px'
          className='close-btn'
        />
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={edit.updatedNote.title}
          onChange={changeHandler}
        />
        <textarea
          onKeyUp={textAreaHeight}
          name='message'
          placeholder='Your note'
          value={edit.updatedNote.message}
          onChange={changeHandler}
        />
        <button onClick={submitHandler} className='save-btn'>
          Save
        </button>
      </form>
    );
  }

  return (
    <article className='box' ref={ref}>
      <AiTwotoneEdit className='edit-btn' size='30px' onClick={clickHandler} />
      <IoAddOutline
        onClick={() => deleteNote(note.id)}
        size='30px'
        className='close-btn'
      />
      <h3>{note.title}</h3>
      <p>{note.message}</p>
    </article>
  );
});

export default Note;
