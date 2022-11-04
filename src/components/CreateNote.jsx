import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';

const CreateNote = ({ showForm, setShowForm }) => {
  const textAreaHeight = (e) => {
    const scrollbarHeight = e.target.scrollHeight;
    console.log(scrollbarHeight);
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
        <input type='text' placeholder='Title' />
        <textarea onKeyUp={textAreaHeight} placeholder='Your note' />
        <button onClick={(e) => e.preventDefault()} className='save-btn'>
          Save
        </button>
      </form>
    );
  }
};

export default CreateNote;
