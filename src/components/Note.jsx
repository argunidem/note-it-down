import React, { useState, useContext, forwardRef } from 'react';
import NoteContext from '../context/NoteContext';
import TextAreaContext from '../context/TextAreaContext';
import { IoAddOutline } from 'react-icons/io5';
import { AiTwotoneEdit } from 'react-icons/ai';

const Note = forwardRef(({ noteData }, ref) => {
  const [edit, setEdit] = useState({
    updatedNote: {
      title: '',
      note: '',
    },
    isEditing: false,
  });

  const { deleteNote, updateNote } = useContext(NoteContext);
  const { textAreaHeight } = useContext(TextAreaContext);

  const clickHandler = () => {
    console.log(noteData);

    setEdit({
      updatedNote: {
        title: noteData.title,
        note: noteData.note,
      },
      isEditing: true,
    });
  };

  const clearEdit = () => {
    setEdit({
      updatedNote: {
        title: '',
        note: '',
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
    e.target.parentElement.parentElement.scrollTo(0, 1000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateNote(noteData._id, { ...edit.updatedNote });
    clearEdit();
  };

  if (edit.isEditing) {
    return (
      <form>
        <AiTwotoneEdit
          className='edit-form-btn'
          size='30px'
          onClick={clearEdit}
        />
        <IoAddOutline
          onClick={() => deleteNote(noteData._id)}
          size='30px'
          className='close-form-btn'
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
          name='note'
          placeholder='Your note'
          value={edit.updatedNote.note}
          onChange={changeHandler}
        />
        <button onClick={submitHandler} className='save-btn'>
          Save
        </button>
      </form>
    );
  }

  return (
    <article ref={ref}>
      <AiTwotoneEdit className='edit-btn' size='30px' onClick={clickHandler} />
      <IoAddOutline
        onClick={() => deleteNote(noteData._id)}
        size='30px'
        className='close-btn'
      />
      <h3>{noteData.title}</h3>
      <p>{noteData.note}</p>
    </article>
  );
});

export default Note;
