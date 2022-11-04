import React from 'react';
import Note from './Note';

const Notes = () => {
  return (
    <main className='notes'>
      <div className='boxes'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </main>
  );
};

export default Notes;
