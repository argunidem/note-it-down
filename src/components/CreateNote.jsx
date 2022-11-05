import React, { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import ToggleContext from '../context/ToggleContext';
import TextAreaContext from '../context/TextAreaContext';
import { IoAddOutline } from 'react-icons/io5';

const CreateNote = () => {
  const { note, changeHandler, submitHandler } = useContext(NoteContext);
  const { showForm, setShowForm } = useContext(ToggleContext);
  const { textAreaHeight } = useContext(TextAreaContext);

  if (showForm) {
    return (
      <form className='create-note'>
        <IoAddOutline
          size='40px'
          onClick={() => setShowForm((prev) => !prev)}
          className='close-btn'
        />
        <input
          type='text'
          placeholder='Title'
          name='title'
          onChange={changeHandler}
          value={note.title}
        />
        <textarea
          onKeyUp={textAreaHeight}
          name='message'
          placeholder='Your note'
          onChange={changeHandler}
          value={note.message}
        />
        <button onClick={submitHandler} className='save-btn'>
          Save
        </button>
      </form>
    );
  }
};

export default CreateNote;
