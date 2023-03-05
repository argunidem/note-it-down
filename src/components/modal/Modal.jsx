import { motion } from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';

const dropIn = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Modal = ({ id, deleteNote, handleClose, title }) => {
  return (
    <Backdrop>
      <motion.section
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        onClick={(e) => e.stopPropagation}
        className='flex flex-col items-center space-y-4 w-3/4 sm:w-1/2 lg:w-1/3 2xl:w-1/4 py-4 px-4 xs:px-6 tracking-wide font-semibold md:font-bold rounded-md bg-bluish-gray-200 text-slate-300'
      >
        <p>Are you sure you want to delete the note titled '{title}'?</p>

        <div className='self-end flex space-x-3'>
          <button
            onClick={() => deleteNote(id)}
            className='bg-emerald-600 hover:bg-emerald-500 rounded-md px-5 py-2'
          >
            Yes
          </button>
          <button
            onClick={handleClose}
            className='bg-rose-800 hover:bg-rose-700 rounded-md px-5 py-2'
          >
            No
          </button>
        </div>
      </motion.section>
    </Backdrop>
  );
};

export default Modal;
