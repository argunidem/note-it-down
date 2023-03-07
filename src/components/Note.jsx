import { Fragment, useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import Palette from './palette/Palette';
import Card from './shared/Card';
import Form from './Form';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Slide, toast } from 'react-toastify';

const Note = ({ note, id, modalOpen, setModalOpen, setDeleteData }) => {
  const [data, setData] = useState(note);
  const [showPalette, setShowPalette] = useState(false);
  const [theme, setTheme] = useState('bg-bluish-gray-200');
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) {
      const fetchNote = async () => {
        try {
          const docRef = doc(db, 'notes', id);
          const docSnap = await getDoc(docRef);
          console.log(docSnap.data());
          setData(docSnap.data());

          setIsEditing(false);
          setIsUpdated(false);
        } catch (error) {
          toast.error('Something went wrong', {
            theme: 'colored',
            transition: Slide,
          });
        }
      };

      fetchNote();
    }
  }, [isUpdated]);

  return (
    <Fragment>
      {!isEditing ? (
        <Card modalOpen={modalOpen} theme={theme} isForm={false}>
          <h4 className='w-3/4 h-10 overflow-hidden font-bold text-center p-2 border-b border-slate-200'>
            {data.title}
          </h4>
          <p className='px-3 py-2 break-words overflow-y-auto h-5/6'>
            {data.note}
          </p>
          <button
            onClick={() => {
              setModalOpen(true);
              setDeleteData({ title: note.title, id });
            }}
          >
            <AiOutlineClose className='absolute top-1.5 right-1.5 rounded-sm w-6 h-6 p-0.5 bg-red-800 text-white hover:bg-red-700 hover:cursor-pointer' />
          </button>
          <button
            className='absolute top-1.5 right-9 rounded-sm w-6 h-6 p-1 flex justify-center items-center bg-teal-600 hover:bg-teal-500 hover:cursor-pointer'
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{
                    opacity: 1,
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    y: -50,
                    transition: { duration: 0.3 },
                  }}
                  className={`${!modalOpen && 'relative inline-block'}`}
                >
                  <div className='overflow-hidden absolute -right-9 top-5 w-max rounded-md font-bold tracking-tighter bg-slate-200 text-slate-500 min-full z-20 transition-all duration-500'>
                    <p
                      className='hover:bg-bluish-gray-100 hover:text-white px-2 py-1 rounded-t-md'
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Note
                    </p>
                    <p
                      className='hover:bg-bluish-gray-100 hover:text-white px-2 py-1 rounded-b-md'
                      onClick={() => setShowPalette(true)}
                    >
                      Change Color
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <BsThreeDotsVertical />
          </button>
          <Palette
            showPalette={showPalette}
            setShowPalette={setShowPalette}
            setTheme={setTheme}
          />
        </Card>
      ) : (
        <Form
          isEditing={isEditing}
          setIsUpdated={setIsUpdated}
          editData={data}
          id={id}
        />
      )}
    </Fragment>
  );
};
export default Note;
