import React, { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import { IoAddOutline } from 'react-icons/io5';

const CreateNote = ({ showForm, setShowForm }) => {
  const { note, changeHandler } = useContext(NoteContext);

  console.log(note);

  const textAreaHeight = (e) => {
    const scrollbarHeight = e.target.scrollHeight;
    // console.log(scrollbarHeight);
    e.target.style.height = `${scrollbarHeight}px`;
  };

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
        <button onClick={(e) => e.preventDefault()} className='save-btn'>
          Save
        </button>
      </form>
    );
  }
};

export default CreateNote;
