import React from 'react';

const Note = ({ note }) => {
  return (
    <article className='box'>
      <h3>{note.title}</h3>
      <p>{note.message}</p>
    </article>
  );
};

export default Note;
