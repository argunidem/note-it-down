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
              <motion.div
                className='box'
                key={note.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
              >
                <MotionNote note={note} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Notes;
