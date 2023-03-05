import { Fragment, e } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AnimatePresence } from 'framer-motion';
import Modal from './modal/Modal';

const Note = ({ note, id, deleteNote, modalOpen, setModalOpen }) => {
  return (
    <Fragment>
      <AnimatePresence initial={false}>
        {modalOpen && (
          <Modal
            id={id}
            deleteNote={deleteNote}
            handleClose={() => setModalOpen(false)}
            title={note.title}
          />
        )}
      </AnimatePresence>
      <div
        className={`${
          !modalOpen && 'relative'
        } w-72 h-64 sm:w-60 sm:h-52 md:w-72 md:h-56 lg:w-80 lg:h-64 2xl:w-96 rounded-md bg-bluish-gray-200 text-slate-300`}
      >
        <h4 className='w-3/4 h-10 overflow-hidden font-bold text-center p-2 border-b border-slate-200'>
          {note.title}
        </h4>
        <p className='px-4 py-2'>{note.note}</p>
        <button onClick={() => setModalOpen(true)}>
          <AiOutlineClose className='absolute top-1.5 right-1 rounded-full w-6 h-6 p-0.5 bg-red-800 text-white hover:bg-red-700 hover:cursor-pointer' />
        </button>
        <BsThreeDotsVertical className='absolute top-1.5 right-8 rounded-full w-6 h-6 p-1 flex justify-center items-center bg-teal-600 hover:bg-teal-500 hover:cursor-pointer' />
      </div>
    </Fragment>
  );
};
export default Note;
