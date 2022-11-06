import React, { useContext } from 'react';
import Note from './Note';
import NoteContext from '../context/NoteContext';
import { motion, AnimatePresence } from 'framer-motion';

const Notes = () => {
  const { notes } = useContext(NoteContext);

  React.useEffect(() => {}, [notes]);

  const MotionNote = motion(Note);

  return (
    <main className='notes'>
      <div className='boxes'>
        <AnimatePresence>
          {notes.map((note, index) => {
            return (
              <MotionNote
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.4, scale: 1 }}
                exit={{
                  x: -100,
                  opacity: 0,
                  scale: 0,
                  transition: { duration: 0 },
                }}
                note={note}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Notes;
