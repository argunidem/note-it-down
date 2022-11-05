import React, { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import { IoAddOutline } from 'react-icons/io5';
import { AiTwotoneEdit } from 'react-icons/ai';

const Note = ({ note }) => {
  const { deleteNote } = useContext(NoteContext);

  return (
    <article className='box'>
      <AiTwotoneEdit className='edit-btn' size='30px' />
      <IoAddOutline
        onClick={() => deleteNote(note.id)}
        size='30px'
        className='close-btn'
      />
      <h3>{note.title}</h3>
      <p>{note.message}</p>
    </article>
  );
};

export default Note;
