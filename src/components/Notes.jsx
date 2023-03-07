import { Fragment, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { Slide, toast } from 'react-toastify';
import Note from './Note';
import Form from './Form';
import Modal from './modal/Modal';
import Spinner from './Spinner';
import { IoAddOutline } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';

const Notes = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(null);

  const auth = getAuth();

  const fetchNotes = async () => {
    if (auth.currentUser?.uid) {
      try {
        const notesRef = collection(db, 'notes');

        const q = query(
          notesRef,
          where('userRef', '==', auth.currentUser.uid),
          orderBy('timestamp', 'desc')
        );

        const querySnap = await getDocs(q);

        let notes = [];

        querySnap.forEach((doc) => {
          return notes.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setNotes(notes);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch notes', {
          theme: 'colored',
          transition: Slide,
        });
      }
    }
  };

  const deleteNote = async (id) => {
    console.log('Delete note with id of ' + id);
    await deleteDoc(doc(db, 'notes', id));
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    toast.success('The note has been successfully deleted!', {
      transition: Slide,
      autoClose: 1500,
    });
    setModalOpen(false);
  };

  useEffect(() => {
    fetchNotes();
  }, [auth.currentUser?.uid]);

  return (
    <Fragment>
      <AnimatePresence initial={false}>
        {modalOpen && (
          <Modal
            id={deleteData.id}
            deleteNote={deleteNote}
            handleClose={() => setModalOpen(false)}
            title={deleteData.title}
          />
        )}
      </AnimatePresence>
      <div
        className={`flex items-center w-full ${
          showForm && 'justify-center'
        } h-40 `}
      >
        {!showForm ? (
          <button
            className='pl-2 pr-3 bg-slate-200 text-bluish-gray-200 rounded-md border border-bluish-gray-500 shadow-xl transition duration-200 hover:bg-bluish-gray-500 hover:text-white'
            onClick={() => setShowForm(true)}
          >
            <IoAddOutline className='inline' size='40px'></IoAddOutline>
            <span className='font-bold text-lg align-middle'>New Note</span>
          </button>
        ) : (
          <Form setShowForm={setShowForm} fetchNotes={fetchNotes} />
        )}
      </div>
      {loading ? (
        <Spinner />
      ) : notes && notes.length > 0 ? (
        <ul className='grid gap-3 justify-items-center sm:grid-cols-2 xl:grid-cols-3 mt-6 pb-24'>
          {notes.map((note) => (
            <Note
              note={note.data}
              id={note.id}
              key={note.id}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setDeleteData={setDeleteData}
            />
          ))}
        </ul>
      ) : (
        <p className='mt-2 mx-3 font-bold text-center text-lg xs:text-xl xs:mx-0 text-bluish-gray-100'>
          No notes to show at the moment.
        </p>
      )}
    </Fragment>
  );
};
export default Notes;
