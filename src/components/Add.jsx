import React, { useContext } from 'react';
import CreateNote from './CreateNote';
import ToggleContext from '../context/ToggleContext';
import { IoAddOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const Add = () => {
  const { showForm, setShowForm } = useContext(ToggleContext);

  const MotionCreateNote = motion(CreateNote);

  return (
    <div className='add'>
      <AnimatePresence>
        {!showForm && (
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.4, scale: 1 }}
            exit={{
              x: -100,
              opacity: 0,
              scale: 0,
              transition: { duration: 0 },
            }}
            onClick={() => setShowForm((prev) => !prev)}
          >
            <IoAddOutline size='80px'></IoAddOutline>
            Create A New Note
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showForm && (
          <MotionCreateNote
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.4 }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0 } }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Add;
