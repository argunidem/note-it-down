import React, { useContext, forwardRef } from 'react';
import NoteContext from '../context/NoteContext';
import ToggleContext from '../context/ToggleContext';
import TextAreaContext from '../context/TextAreaContext';
import { IoAddOutline } from 'react-icons/io5';

const CreateNote = forwardRef((props, ref) => {
  const { note, changeHandler, submitHandler } = useContext(NoteContext);
  const { setShowForm } = useContext(ToggleContext);
  const { textAreaHeight } = useContext(TextAreaContext);

  return (
    <form className='create-note' ref={ref}>
      <IoAddOutline
        size='33px'
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
});

export default CreateNote;
