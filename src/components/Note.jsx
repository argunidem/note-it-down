import { Fragment, useState } from 'react';
import Modal from './modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

const Note = ({ note, id, deleteNote, modalOpen, setModalOpen }) => {
  const [showPalette, setShowPalette] = useState(false);
  const [theme, setTheme] = useState('bg-bluish-gray-200');

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
        } ${theme} w-72 h-64 sm:w-60 sm:h-52 md:w-72 md:h-56 lg:w-80 lg:h-64 2xl:w-96 rounded-md text-slate-300`}
      >
        <h4 className='w-3/4 h-10 overflow-hidden font-bold text-center p-2 border-b border-slate-200'>
          {note.title}
        </h4>
        <p className='px-4 py-2'>{note.note}</p>
        <button onClick={() => setModalOpen(true)}>
          <AiOutlineClose className='absolute top-1.5 right-1.5 rounded-sm w-6 h-6 p-0.5 bg-red-800 text-white hover:bg-red-700 hover:cursor-pointer' />
        </button>
        <button className='absolute top-1.5 right-8 rounded-sm w-6 h-6 p-1 flex justify-center items-center bg-teal-600 hover:bg-teal-500 hover:cursor-pointer'>
          <div className={!modalOpen && 'relative inline-block group'}>
            <div className='overflow-hidden absolute -right-9 top-5 w-max h-0 rounded-md font-bold tracking-tighter bg-slate-200 text-slate-500 min-full z-20 transition-all duration-500 group-hover:h-16'>
              <p className='hover:bg-bluish-gray-100 hover:text-white px-2 py-1 rounded-t-md'>
                Edit Your Note
              </p>
              <p
                className='hover:bg-bluish-gray-100 hover:text-white px-2 py-1 rounded-b-md'
                onClick={() => setShowPalette(true)}
              >
                Change Color
              </p>
            </div>
            <BsThreeDotsVertical />
          </div>
        </button>
        <div
          className={`overflow-hidden absolute right-0 bottom-0 left-0 bg-bluish-gray-100 rounded-b-md transition-all duration-700 ${
            showPalette ? 'h-[70px]' : 'h-0'
          }`}
        >
          <div className='relative h-full'>
            <div className='absolute left-1/2 -translate-x-1/2'>
              <IoIosArrowDown
                className='w-8 bg-bluish-gray-200 rounded-sm text-xl hover:bg-slate-300 hover:text-bluish-gray-200 hover:cursor-pointer'
                onClick={() => setShowPalette(false)}
              />
            </div>
            <div className='flex items-center justify-evenly h-full pt-5'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-white hover:cursor-pointer'
                onClick={() => setTheme('bg-white text-black')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-yellow-400 hover:cursor-pointer'
                onClick={() => setTheme('bg-yellow-400 text-slate-700')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-teal-500 hover:cursor-pointer'
                onClick={() => setTheme('bg-teal-500')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-blue-400 hover:cursor-pointer'
                onClick={() => setTheme('bg-blue-400')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-indigo-400 hover:cursor-pointer'
                onClick={() => setTheme('bg-indigo-400')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-pink-400 hover:cursor-pointer'
                onClick={() => setTheme('bg-pink-400 text-white')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-red-900 hover:cursor-pointer'
                onClick={() => setTheme('bg-red-900')}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-5 h-5 rounded-full bg-bluish-gray-200 hover:cursor-pointer'
                onClick={() => setTheme('bg-bluish-gray-200')}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Note;
