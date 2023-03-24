import { Fragment, useState } from 'react';
import Form from './Form';
import { motion } from 'framer-motion';
import { IoAddOutline } from 'react-icons/io5';

const Create = ({ fetchNotes }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Fragment>
      {showForm ? (
        <motion.div
          key='form'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.4 }}
          exit={{ x: 100, opacity: 0, transition: { duration: 0 } }}
        >
          <Form setShowForm={setShowForm} fetchNotes={fetchNotes} />
        </motion.div>
      ) : (
        <motion.div
          key='button'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.4 }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0 } }}
        >
          <button
            className='pl-2 pr-3 bg-white text-bluish-gray-200 rounded-md border border-bluish-gray-500 shadow-xl transition duration-200 hover:bg-bluish-gray-500 hover:text-white'
            onClick={() => setShowForm(true)}
          >
            <IoAddOutline className='inline' size='40px'></IoAddOutline>
            <span className='font-bold text-lg align-middle'>New Note</span>
          </button>
        </motion.div>
      )}
    </Fragment>
  );
};
export default Create;
