import React from 'react';
import { BiSave } from 'react-icons/bi';

const CreateNote = () => {
  const textAreaHeight = (e) => {
    const scrollbarHeight = e.target.scrollHeight;
    console.log(scrollbarHeight);
    e.target.style.height = `${scrollbarHeight}px`;
  };

  return (
    <form className='create-note'>
      <input type='text' placeholder='Title' />
      <textarea onKeyUp={textAreaHeight} placeholder='Your note' />
      <button className='save-btn'>
        Save
        <BiSave size='25px' />
      </button>
    </form>
  );
};

export default CreateNote;
