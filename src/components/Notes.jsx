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
import Create from './Create';
import Modal from './modal/Modal';
import Spinner from './Spinner';

import { AnimatePresence } from 'framer-motion';

const Notes = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className='flex items-center justify-center w-full h-40 mt-12 mb-4'>
        <AnimatePresence>
          <Create fetchNotes={fetchNotes} />
        </AnimatePresence>
      </div>
      {loading ? (
        <Spinner />
      ) : notes && notes.length > 0 ? (
        <ul className='grid gap-3 sm:gap-y-6 justify-items-center sm:grid-cols-2 xl:grid-cols-3 mt-6 pb-24'>
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
