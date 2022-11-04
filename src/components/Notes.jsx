import React, { useContext } from 'react';
import Note from './Note';
import NoteContext from '../context/NoteContext';

const Notes = () => {
  const { notes } = useContext(NoteContext);

  return (
    <main className='notes'>
      <div className='boxes'>
        {notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
      </div>
    </main>
  );
};

export default Notes;
